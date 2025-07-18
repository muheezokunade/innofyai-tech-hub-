import dotenv from "dotenv";
dotenv.config();

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { 
  helmetConfig, 
  corsOptions, 
  rateLimiter, 
  sanitizeInput, 
  securityHeaders,
  errorHandler,
  notFoundHandler
} from "./middleware/security";
import cors from "cors";

const app = express();

// Security middleware (order matters!)
app.use(helmetConfig);
app.use(cors(corsOptions));
app.use(securityHeaders);
app.use(rateLimiter);
app.use(sanitizeInput);

// Body parsing middleware with limits
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Setup Vite in development or serve static in production
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // 404 handler - must be after all routes
  app.use(notFoundHandler);

  // Error handling middleware - must be last
  app.use(errorHandler);

  // Server configuration
  const port = parseInt(process.env.PORT || "5000", 10);
  const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";
  
  server.listen({
    port,
    host,
  }, () => {
    log(`🚀 Server running in ${process.env.NODE_ENV || "development"} mode`);
    log(`📡 Serving on ${host}:${port}`);
    log(`🌐 Environment: ${process.env.NODE_ENV || "development"}`);
    
    if (process.env.NODE_ENV === "production") {
      log(`🔒 Security features enabled: Helmet, CORS, Rate Limiting`);
    }
  });

  // Graceful shutdown
  process.on("SIGTERM", () => {
    log("SIGTERM received, shutting down gracefully");
    server.close(() => {
      log("Process terminated");
      process.exit(0);
    });
  });

  process.on("SIGINT", () => {
    log("SIGINT received, shutting down gracefully");
    server.close(() => {
      log("Process terminated");
      process.exit(0);
    });
  });

  // Unhandled promise rejection handler
  process.on("unhandledRejection", (reason, promise) => {
    log(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
    server.close(() => {
      process.exit(1);
    });
  });

  // Uncaught exception handler
  process.on("uncaughtException", (error) => {
    log(`Uncaught Exception: ${error.message}`);
    if (error.stack) {
      log(error.stack);
    }
    server.close(() => {
      process.exit(1);
    });
  });
})();

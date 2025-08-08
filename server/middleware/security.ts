import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

// Rate limiting configuration
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === "production" ? 100 : 1000, // Higher limit in development
  message: {
    error: "Too many requests from this IP, please try again later.",
    statusCode: 429
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => process.env.NODE_ENV === "development" && req.path.startsWith("/api/health"),
});

// CORS configuration
export const corsOptions = {
  origin: process.env.NODE_ENV === "production" 
    ? ["https://innofyai.com", "https://www.innofyai.com"]
    : ["http://localhost:3000", "http://localhost:5000", "http://127.0.0.1:3000", "http://127.0.0.1:5000"],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

// Helmet configuration (environment-aware CSP)
const isDev = process.env.NODE_ENV !== "production";
const scriptSrc: string[] = [
  "'self'",
  "https://www.googletagmanager.com",
  "'unsafe-inline'", // required for JSON-LD structured data injected by Helmet
];
if (isDev) {
  scriptSrc.push("'unsafe-eval'"); // Vite HMR in dev
}

const connectSrc: string[] = [
  "'self'",
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
];
if (isDev) {
  connectSrc.push(
    "http://localhost:5000",
    "http://localhost:5173",
    "ws://localhost:5000",
    "ws://localhost:5173",
  );
}

export const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      baseUri: ["'self'"],
      frameAncestors: ["'none'"],
      styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      imgSrc: ["'self'", "data:", "blob:", "https:"],
      scriptSrc,
      connectSrc,
      workerSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" },
});

// Conservative input validation middleware (non-destructive)
export const sanitizeInput = (req: Request, res: Response, next: NextFunction) => {
  const violations: Array<{ location: 'query' | 'body' | 'params'; key: string }> = [];

  const containsProhibitedPayload = (value: string): boolean => {
    const lower = value.toLowerCase();
    // Only check for obviously dangerous patterns; do not strip or mutate
    return lower.includes('<script') || lower.includes('</script') || lower.includes('javascript:');
  };

  const checkContainer = (container: Record<string, unknown> | undefined, location: 'query' | 'body' | 'params') => {
    if (!container) return;
    for (const key of Object.keys(container)) {
      const val = (container as Record<string, unknown>)[key];
      if (typeof val === 'string' && containsProhibitedPayload(val)) {
        violations.push({ location, key });
      }
    }
  };

  checkContainer(req.query as Record<string, unknown>, 'query');
  checkContainer(req.body as Record<string, unknown>, 'body');
  checkContainer(req.params as Record<string, unknown>, 'params');

  if (violations.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Invalid characters detected in input',
      statusCode: 400,
      details: process.env.NODE_ENV === 'production' ? undefined : violations,
    });
  }

  next();
};

// Validation middleware for contact form
export const validateContactForm = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name can only contain letters and spaces"),
  
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),
  
  body("message")
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage("Message must be between 10 and 1000 characters"),
  
  body("subject")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Subject must be between 2 and 100 characters"),
];

// Validation error handler
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: errors.array(),
      statusCode: 400
    });
  }
  next();
};

// Security headers middleware
export const securityHeaders = (req: Request, res: Response, next: NextFunction) => {
  // Prevent MIME type sniffing
  res.setHeader("X-Content-Type-Options", "nosniff");
  
  // Referrer policy
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  
  // Permissions policy
  res.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment()"
  );
  
  next();
};

// Error handling middleware
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);
  
  // Don't leak error details in production
  const isProduction = process.env.NODE_ENV === "production";
  
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      error: "Invalid JSON payload",
      statusCode: 400
    });
  }
  
  if (err.type === "entity.too.large") {
    return res.status(413).json({
      success: false,
      error: "Payload too large",
      statusCode: 413
    });
  }
  
  // Default error response
  res.status(err.status || 500).json({
    success: false,
    error: isProduction ? "Internal server error" : err.message,
    ...(isProduction ? {} : { stack: err.stack }),
    statusCode: err.status || 500
  });
};

// 404 handler
export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.path} not found`,
    statusCode: 404,
    ...(process.env.NODE_ENV !== "production" && { stack: new Error().stack })
  });
}; 
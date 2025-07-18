import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { handleContactForm } from "./routes/contact";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for Render
  app.get("/api/health", (req, res) => {
    res.status(200).json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  // API status endpoint
  app.get("/api/status", (req, res) => {
    res.json({
      message: "InnofyAI Backend API",
      version: "1.0.0",
      status: "running",
      timestamp: new Date().toISOString()
    });
  });

  // Example API endpoint
  app.get("/api/info", (req, res) => {
    res.json({
      name: "InnofyAI Backend",
      description: "Technology Innovation Hub Backend API",
      features: [
        "Express.js with TypeScript",
        "Security middleware",
        "Rate limiting",
        "CORS support",
        "Health monitoring"
      ],
      endpoints: [
        "GET /api/health - Health check",
        "GET /api/status - API status",
        "GET /api/info - API information"
      ]
    });
  });

  // Contact form endpoint
  app.post("/api/contact", handleContactForm);

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}

# InnofyAI - Full-Stack Web Application

## Overview

InnofyAI is a modern full-stack web application for a tech consulting company that provides automation, AI, cybersecurity, and creative branding solutions. The application showcases services, portfolio, team information, and includes contact functionality. It's built as a Single Page Application (SPA) with a Node.js backend and React frontend, designed to run on Replit with PostgreSQL database support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components with shadcn/ui design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Theme Support**: Light/dark mode with system preference detection

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **API Design**: RESTful API structure with `/api` prefix
- **Development**: Hot reload with tsx for TypeScript execution

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Connection**: Neon Database serverless driver
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Type-safe database schema with Zod validation

## Key Components

### Frontend Components
- **Layout System**: Responsive layout with navigation and floating CTA
- **Page Components**: Home, Services, Portfolio, About, Blog, Contact, and 404
- **Interactive Elements**: Service tabs, testimonial carousel, case study grid
- **Forms**: Contact form with validation and service selection
- **Theme Provider**: Context-based theme management
- **UI Library**: Complete set of reusable UI components

### Backend Components
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **Route Registration**: Centralized route management system
- **Middleware**: Request logging, JSON parsing, error handling
- **Vite Integration**: Development server with HMR support

### Shared Components
- **Schema Definition**: Shared database schema and validation
- **Type Safety**: End-to-end TypeScript type safety

## Data Flow

1. **Client Requests**: Browser requests handled by Vite dev server in development
2. **API Routing**: API requests routed through Express.js with `/api` prefix
3. **Storage Layer**: Business logic interacts with storage interface
4. **Database Operations**: Drizzle ORM handles PostgreSQL operations
5. **Response Handling**: JSON responses with proper error handling
6. **Client Updates**: TanStack Query manages client-side state updates

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Backend**: Express.js, Node.js runtime
- **Database**: PostgreSQL, Drizzle ORM, Neon serverless driver
- **Build Tools**: Vite, esbuild, TypeScript compiler

### UI and Styling
- **Radix UI**: Complete set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Icon library for consistent iconography
- **Custom Fonts**: Space Grotesk and Inter from Google Fonts

### Development Tools
- **Replit Integration**: Cartographer and runtime error overlay
- **Hot Reload**: Development server with automatic refresh
- **Type Checking**: TypeScript for compile-time error detection

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Port Configuration**: Internal port 5000, external port 80
- **Auto-start**: Configured to run `npm run dev` on startup

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server to `dist/index.js`
- **Static Serving**: Express serves built frontend in production
- **Environment**: NODE_ENV-based configuration switching

### Database Setup
- **Environment Variable**: DATABASE_URL required for connection
- **Schema Management**: `npm run db:push` for schema deployment
- **Migration System**: Drizzle Kit handles database migrations

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
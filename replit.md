# Portfolio Web Application

## Overview

This is a modern full-stack portfolio website built with React, TypeScript, and Express. The application showcases a developer's skills, projects, and contact information with a clean, professional design. It features a contact form that allows visitors to send messages, which are stored in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React SPA with TypeScript, styled using Tailwind CSS and shadcn/ui components
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build System**: Vite for frontend bundling and development
- **Deployment**: Production-ready build pipeline with esbuild for server bundling

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI
- **Styling**: Tailwind CSS with custom design tokens for portfolio branding
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for request validation
- **Storage**: Configurable storage layer (currently in-memory with PostgreSQL ready)

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, message, createdAt)
- **Database**: PostgreSQL with Drizzle migrations support

## Data Flow

1. **Contact Form Submission**: 
   - User fills out contact form on frontend
   - Form validation using Zod schema
   - Data sent to `/api/contact` endpoint
   - Server validates and stores in database
   - Success/error response with toast notifications

2. **Portfolio Display**:
   - Static content rendered on client-side
   - Smooth scrolling navigation between sections
   - Responsive design for mobile and desktop

3. **Development Workflow**:
   - Vite dev server for frontend with HMR
   - Express server with request logging
   - Database migrations with Drizzle Kit

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Hook Form
- **Database**: Neon Database (serverless PostgreSQL), Drizzle ORM
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Development Tools**: Vite, TypeScript, ESBuild
- **Validation**: Zod for schema validation
- **HTTP Client**: TanStack Query for API calls

### UI Components
- Comprehensive shadcn/ui component library
- Radix UI for accessible primitives
- Lucide React for icons
- Custom portfolio-themed styling

## Deployment Strategy

### Development
- Vite dev server serves the React application
- Express server runs API endpoints
- Hot module replacement for fast development
- TypeScript compilation checking

### Production Build
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Environment**: Uses DATABASE_URL environment variable for PostgreSQL connection

### Environment Configuration
- Development: In-memory storage for quick iteration
- Production: PostgreSQL database with connection pooling
- Static asset serving through Express in production
- Error handling with proper HTTP status codes

The application is designed to be deployed on platforms like Replit, with built-in support for the Replit environment including development banners and cartographer integration for debugging.
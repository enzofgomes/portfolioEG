# Portfolio Web Application

## Overview

This is a modern client-side portfolio website built with React, TypeScript, and Vite. The application showcases a developer's skills, projects, and contact information with a clean, professional design inspired by aaspinwall.com. It features multiple pages with smooth navigation, responsive design with floating cloud animations, and a simplified static architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a simplified client-side structure:

- **Frontend**: React SPA with TypeScript, styled using Tailwind CSS and shadcn/ui components
- **Backend**: None - Pure client-side static website
- **Database**: None - Static content only
- **Build System**: Vite for frontend bundling and development
- **Deployment**: Static site deployment ready for platforms like Vercel, Netlify, or GitHub Pages

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing with multi-page support
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI
- **Styling**: Tailwind CSS with custom design tokens inspired by aaspinwall.com
- **Forms**: React Hook Form with Zod validation
- **Navigation**: Smooth scrolling within pages and proper routing between pages

## Data Flow

1. **Portfolio Display**:
   - Static content rendered on client-side
   - Smooth scrolling navigation between sections
   - Responsive design for mobile and desktop
   - Multi-page routing with Wouter

2. **Contact Section**:
   - Simple contact information display
   - Direct email links for communication
   - No backend dependencies - ready for integration with services like Formspree or EmailJS

3. **Development Workflow**:
   - Vite dev server for frontend with HMR
   - TypeScript compilation and checking
   - Hot module replacement for fast development

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Development Tools**: Vite, TypeScript
- **Validation**: Zod for schema validation
- **Routing**: Wouter for lightweight client-side routing

### UI Components
- Comprehensive shadcn/ui component library
- Radix UI for accessible primitives
- Lucide React for icons
- Custom portfolio-themed styling

## Deployment Strategy

### Development
- Vite dev server serves the React application on port 5000
- Hot module replacement for fast development
- TypeScript compilation checking
- No backend dependencies

### Production Build
1. **Frontend**: Vite builds optimized React bundle to `dist/`
2. **Static Deployment**: Ready for deployment to static hosting platforms
3. **No Database**: All content is static and embedded in the application

### Environment Configuration
- Development: Vite dev server with HMR
- Production: Static file serving from any web server
- No environment variables needed for basic functionality
- Contact form ready for integration with third-party services

The application is designed to be deployed as a static site on platforms like Vercel, Netlify, GitHub Pages, or Replit Static Sites, with built-in support for the Replit environment including development banners and cartographer integration for debugging.
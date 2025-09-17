# Corporate Performance Review Parody Website

## Overview

This is a satirical web application that parodies corporate performance review systems while celebrating startup achievements. The project creates a humorous "Unofficial Performance Review™" experience that mimics traditional corporate HR platforms (like Workday or BambooHR) but with a playful, celebratory twist focused on product development milestones and startup culture.

The application presents a single-page performance review interface featuring metrics, ratings, expandable sections, and confetti animations - all designed to blend professional corporate styling with tongue-in-cheek startup celebration aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom design system focused on corporate parody aesthetics
- **State Management**: TanStack Query for server state management
- **Component Structure**: Modular components organized by feature (HeaderSection, MetricsGrid, StarRating, etc.)

### Design System
- **Color Palette**: Warm yellow background (48 95% 85%) with corporate blues and success greens
- **Typography**: Inter for professional feel, Outfit for playful accents
- **Layout**: Card-based design with subtle shadows and rounded corners
- **Interactive Elements**: Hover elevations, expandable sections, and confetti animations
- **Visual Theme**: Balances professional corporate styling with celebratory startup aesthetics

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Authentication**: Session-based setup with placeholder user management
- **API Design**: RESTful endpoints with /api prefix
- **Development**: Hot module replacement with Vite integration

### Data Storage
- **Database**: PostgreSQL configured via Drizzle with Neon serverless integration
- **Schema**: User management schema with username/password fields using Drizzle Zod validation
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development
- **Migrations**: Drizzle-kit for database schema management

### Component Architecture
- **Performance Review Components**: Specialized components for metrics display, ratings, and expandable content sections
- **UI Components**: Comprehensive shadcn/ui library with cards, badges, buttons, and form elements
- **Layout Components**: Responsive grid systems and container components
- **Interactive Elements**: Confetti background, expandable sections with smooth animations
- **Example Components**: Isolated component examples for development and testing

## External Dependencies

### Database & Infrastructure
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools

### UI & Styling Framework
- **@radix-ui/***: Comprehensive collection of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework with custom design tokens
- **class-variance-authority**: Type-safe component variant management
- **clsx**: Conditional CSS class utility
- **lucide-react**: Icon library for consistent iconography

### React Ecosystem
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management with validation
- **@hookform/resolvers**: Form validation resolvers
- **wouter**: Lightweight React router
- **embla-carousel-react**: Carousel component library

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit integration for development

### Utilities & Validation
- **zod**: TypeScript-first schema validation
- **date-fns**: Date manipulation utilities
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component
- **vaul**: Drawer component library
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start local development server (http://localhost:8787)
- `npm run dev:remote` - Start dev server with remote environment
- `npm run test` - Run API tests using ../../scripts/test-api.js
- `npm run lint` - Run ESLint on src/ directory
- `npm run format` - Format code with Prettier

### Deployment Commands
- `npm run deploy:dev` - Deploy to development environment (api-dev.mastermarat.com)
- `npm run deploy` - Deploy to production environment (api.mastermarat.com)
- `npm run logs:dev` - View development logs
- `npm run logs` - View production logs

## Architecture Overview

This is a **Cloudflare Worker** that serves as the API backend for MasterMarat.com, an EdTech platform for osteopathic self-help courses. The worker handles protected video streaming, user authentication, and webhook integrations.

### Key Components

**Main Entry Point**: `src/worker-new.js` - Clean router handling all HTTP requests

**Configuration**:
- `src/config/constants.js` - Test tokens, permissions, and API configuration
- `src/config/courses.js` - Course data structure and lesson metadata

**Request Handlers** (`src/handlers/`):
- `api.js` - API documentation endpoint
- `video.js` - Protected video streaming with range requests
- `player-learning.js` - Learning mode player interface
- `player-archive.js` - Archive mode player interface
- `thumbnails.js` - Thumbnail serving
- `webhooks.js` - SendPulse webhook integration
- `test.js` - Token testing interface

**Services** (`src/services/`):
- `auth.js` - Token validation and user access control
- `content.js` - R2 storage operations
- `sendpulse.js` - SendPulse API integration

**Utilities** (`src/utils/`):
- `token.js` - Token parsing and access validation
- `errors.js` - Standardized error responses
- `cors.js` - CORS headers configuration

### Authentication System

The system uses token-based authentication with different access levels:

**Test Tokens** (defined in `src/config/constants.js`):
- `superuser_mastermarat_2025` - Full access to all features
- `vip_test_token_2025` - VIP subscription access
- `standard_test_token_2025` - Standard subscription access
- `basic_test_token_2025` - Basic subscription access
- `demo123` - Demo access for public content

**Public Access**: Course `course00` and specific lessons are accessible without tokens.

### Video Protection

Videos are stored in Cloudflare R2 bucket `mastermarat-videos` with the following structure:
- `content/{courseId}/{videoFile}` - Protected video files
- `thumbnails/{courseId}/{thumbnailFile}` - Public thumbnail files

The system supports HTTP range requests for video streaming and validates user permissions before serving content.

### Environment Configuration

- **Development**: `api-dev.mastermarat.com` (wrangler env: dev)
- **Production**: `api.mastermarat.com` (wrangler env: production)

Environment variables are configured in `wrangler.toml` with R2 bucket binding.

## Testing

Use `npm run test` to run the test suite located at `../../scripts/test-api.js`. The `/test` endpoint provides an interactive interface for testing all token types and API endpoints.

## Important Notes

- All video content requires token-based access except for demo courses
- The system integrates with SendPulse for user management and webhooks
- CORS is configured to allow cross-origin requests from any domain
- Error responses follow a standardized JSON format
- The codebase is modular and well-structured for maintainability

## File Structure Context

The worker is part of a larger monorepo structure. When working with related files:
- Test scripts are in `../../scripts/`
- Project documentation is in `../../README.md`
- This is specifically the API worker, other workers may exist in parallel directories
# MasterMarat API Worker

## Project Context
Cloudflare Workers-based API for MasterMarat educational platform. Provides protected video delivery, authentication, and course management for osteopathy health education.

## Architecture
- **Platform**: Cloudflare Workers
- **Storage**: R2 for video content
- **Authentication**: Token-based system with SendPulse integration
- **Content**: Multi-language support (Russian/English)

## Key Components

### Authentication System
- **Location**: `src/services/auth.js`, `src/utils/token.js`
- **Features**: Token-based access control with course-level permissions
- **Token Types**: Test tokens (superuser, VIP, standard, basic, demo) and regular user tokens
- **Public Access**: Demo course (course00) available without authentication

### API Handlers
- **Video Streaming**: `src/handlers/video.js` - Protected video delivery with range requests
- **Player**: `src/handlers/player-learning.js`, `src/handlers/player-archive.js`
- **Webhooks**: `src/handlers/webhooks.js` - SendPulse integration
- **API**: `src/handlers/api.js` - Main API routes

### Configuration
- **Constants**: `src/config/constants.js` - Test tokens, permissions, API config
- **Courses**: `src/config/courses.js` - Course structure and metadata

## Development Commands
```bash
# Development server
npm run dev

# Development with remote environment
npm run dev:remote

# Testing
npm run test

# Linting and formatting
npm run lint
npm run format

# Deployment
npm run deploy:dev
npm run deploy

# Logs
npm run logs:dev
npm run logs
```

## Test Tokens
- **SuperUser**: `superuser_mastermarat_2025` - Full access
- **VIP**: `vip_test_token_2025` - All courses + archive
- **Standard**: `standard_test_token_2025` - Limited courses
- **Demo**: `demo123` - Demo course access

## Common Tasks
- Authentication logic in `src/services/auth.js:4` (`checkTokenAccess`)
- Token validation in `src/utils/token.js:70` (`hasAccess`)
- Video protection in `src/handlers/video.js`
- Course permissions in `src/config/constants.js:21`

## Important Notes
- Always run `npm run lint` before committing
- Test changes with `npm run test`
- Use test tokens for development
- SendPulse integration is TODO (currently mocked)
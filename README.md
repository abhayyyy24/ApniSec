📄 Documentation – Implemented Features
🛠 Tech Stack

Frontend: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS

Backend: Next.js Route Handlers (API routes)

Architecture: Fully Object-Oriented (Class-based) backend

Database: PostgreSQL (via Prisma ORM)

Authentication: Custom JWT-based authentication

Email Service: Resend

Deployment: Vercel

🔐 Authentication System

User registration with hashed passwords

User login with JWT access token

Logout functionality

Protected routes using authentication middleware

Get current logged-in user (/api/auth/me)

Input validation and centralized error handling

📦 Backend Architecture (OOP)

Entire backend implemented using class-based OOP structure

Clear separation of concerns:

Handlers – API request handling

Services – Business logic

Repositories – Database access

Validators – Input validation

Middlewares – Auth & rate limiting

Error classes – Centralized error handling

Dependency injection used between layers

⚡ Rate Limiting

Custom rate limiter class

Limit: 100 requests per 15 minutes per user/IP

Applied to all protected APIs

Returns proper 429 Too Many Requests response with rate-limit headers

🧑‍💼 User Profile Management

Get user profile (protected)

Update user profile (protected)

Validation and authorization checks applied

🐞 Issue Management System

Create security issues (protected)

View all user issues

View single issue by ID

Update issue details and status

Delete issues

Filter issues by type using query parameters

Supported issue types:

Cloud Security

Red Team Assessment

VAPT

📧 Email Integration (Resend)

Welcome email sent on user registration

Email notification sent when a new issue is created

HTML email templates used

Secure API key management via environment variables

🖥 Frontend Features

ApniSec-themed landing page

Login and Register pages

Protected dashboard after login

Issue management UI (create, view, update, delete)

Profile management page

Responsive design (mobile, tablet, desktop)

Loading states and form validation

🔍 SEO Optimization

SEO optimized landing page (/)

Metadata, semantic HTML, and accessibility best practices

Lighthouse SEO score: 80%+

🚀 Deployment

Application deployed on Vercel

Environment variables managed securely

Production-ready build

Time Constraint (2-Day Deadline)

Challenge:
Delivering a full-stack, production-ready application with authentication, rate limiting, email integration, and SEO within a short timeline.

Solution:
I prioritized core requirements, structured the backend early, and followed a modular development approach to ensure all mandatory features were completed on time without compromising code quality.

Email Integration with Resend

Challenge:
Triggering transactional emails (welcome emails, issue notifications) reliably without blocking API responses.

Solution:
I abstracted email logic into a dedicated email service class using Resend, ensuring clean separation from business logic and secure API key handling via environment variables.
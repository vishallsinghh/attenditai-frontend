import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// This single file creates ~15 API endpoints automatically:
// POST /api/auth/sign-up        → register new user
// POST /api/auth/sign-in        → login
// POST /api/auth/sign-out       → logout
// GET  /api/auth/session        → get current session
// POST /api/auth/forgot-password → send reset email
// POST /api/auth/reset-password  → set new password
// ...and more for org management, admin, etc.

// The [...all] in the folder name is a Next.js catch-all route
// It catches ANY request to /api/auth/* and lets Better Auth handle it

export const { GET, POST } = toNextJsHandler(auth);
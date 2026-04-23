import { createAuthClient } from "better-auth/react";
import { organizationClient, adminClient } from "better-auth/client/plugins";

// Creates a client that talks to your /api/auth/* endpoints
export const authClient = createAuthClient({

  // Where your Next.js app runs
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  // Same plugins as server, but client-side versions
  plugins: [
    organizationClient(),  // lets frontend manage orgs
    adminClient(),         // lets frontend access admin features
  ],
});

export const {
  signIn,       // signIn.email({ email, password })
  signUp,       // signUp.email({ email, password, name })
  signOut,      // signOut()
  useSession,   // React hook — returns current user + session
  organization, // organization.create({ name, slug })
  admin,        // admin.listUsers(), admin.banUser(), etc.
} = authClient;
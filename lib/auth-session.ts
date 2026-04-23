import { auth } from "./auth";
import { headers } from "next/headers";

// This function runs on the SERVER (in layouts, server components, middleware)
// It reads the session cookie from the request and returns the user
export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}
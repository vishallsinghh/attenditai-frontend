import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth-session";

export default async function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  // Not logged in → sign in
  if (!session) {
    redirect("/sign-in");
  }

  // Logged in but not super admin → dashboard
  // Better Auth's admin plugin sets role to "admin" for super admins
  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth-session";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  // If already logged in, don't show sign-in/sign-up pages
  if (session) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
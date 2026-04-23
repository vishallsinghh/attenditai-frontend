import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth-session";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  // If not logged in, send them to sign-in page
  if (!session) {
    redirect("/sign-in");
  }

  return <>{children}</>;
}
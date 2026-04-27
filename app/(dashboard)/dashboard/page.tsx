"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button
            variant="outline"
            onClick={async () => {
              await signOut();
              router.push("/sign-in");
            }}
          >
            Sign out
          </Button>
        </div>

        <div className="rounded-lg border p-6 space-y-2">
          <p><span className="font-medium">Name:</span> {session.user.name}</p>
          <p><span className="font-medium">Email:</span> {session.user.email}</p>
          <p><span className="font-medium">User ID:</span> {session.user.id}</p>
        </div>
      </div>
    </div>
  );
}
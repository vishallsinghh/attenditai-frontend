import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Check your email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground">
            We&apos;ve sent you a verification link. Click it to activate your account.
          </p>
          <p className="text-sm text-muted-foreground">
            Didn&apos;t receive it? Check your spam folder.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
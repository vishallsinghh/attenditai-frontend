import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { organization, admin } from "better-auth/plugins";
import { prisma } from "./prisma";
import { resend } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
  enabled: true,
  requireEmailVerification: true,
  sendResetPassword: async ({ user, url }) => {
    try {
      const result = await resend.emails.send({
        from: "AttendItAI <onboarding@resend.dev>",
        to: user.email,
        subject: "Reset your password — AttendItAI",
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
            <h2 style="color: #0F172A;">Password Reset</h2>
            <p style="color: #475569;">Hi ${user.name},</p>
            <p style="color: #475569;">Click below to reset your password:</p>
            <a href="${url}" style="display: inline-block; background: #0F172A; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 16px 0;">Reset Password</a>
            <p style="color: #94A3B8; font-size: 14px;">This link expires in 1 hour.</p>
          </div>
        `,
      });
      console.log("Reset email result:", result);
    } catch (err) {
      console.error("Reset email failed:", err);
    }
  },
},

emailVerification: {
  sendOnSignUp: true,
  autoSignInAfterVerification: true,
  sendVerificationEmail: async ({ user, url }) => {
    try {
      const result = await resend.emails.send({
        from: "AttendItAI <onboarding@resend.dev>",
        to: user.email,
        subject: "Verify your email — AttendItAI",
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
            <h2 style="color: #0F172A;">Welcome to AttendItAI!</h2>
            <p style="color: #475569;">Hi ${user.name},</p>
            <p style="color: #475569;">Click the button below to verify your email address:</p>
            <a href="${url}" style="display: inline-block; background: #10B981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 16px 0;">Verify Email</a>
            <p style="color: #94A3B8; font-size: 14px;">If you didn't create an account, ignore this email.</p>
          </div>
        `,
      });
      console.log("Verification email result:", result);
    } catch (err) {
      console.error("Verification email failed:", err);
    }
  },
},

socialProviders: {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  },
},

account: {
  accountLinking: {
    enabled: true,
    trustedProviders: ["google"],
  },
},

  plugins: [
    organization(),
    admin(),
  ],
});
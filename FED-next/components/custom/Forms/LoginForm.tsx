"use client";

import { useState } from "react";
import { json, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { redirect } from "next/dist/server/api-utils";

// ------------------ Schemas -------------------
const emailSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

// ------------------ Component -------------------
export function LoginForm({ className }: { className?: string }) {
  const [step, setStep] = useState<"email" | "otp">("email");
  const [userEmail, setUserEmail] = useState("");

  // email form
  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  // otp form
  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  function handleEmailSubmit(values: z.infer<typeof emailSchema>) {
    setUserEmail(values.email);
    setStep("otp");
  }
  const router = useRouter();

  function handleOtpSubmit(values: z.infer<typeof otpSchema>) {
    // Just dummy verification
    alert(`Logged in with ${userEmail} and OTP ${values.otp}`);
    localStorage.setItem(
      "formdata",
      JSON.stringify({ values, emailId: userEmail })
    );
    router.push("/dashboard");
  }

  return (
    <div className="container mx-auto px-4">
      {step === "email" && (
        <Form {...emailForm}>
          <form
            onSubmit={emailForm.handleSubmit(handleEmailSubmit)}
            className={cn("flex flex-col gap-6", className)}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Login to your account</h1>
              <p className="text-muted-foreground text-sm text-balance">
                Enter your email below to login to your account
              </p>
            </div>

            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" variant="outline">
              Continue
            </Button>
          </form>
        </Form>
      )}

      {step === "otp" && (
        <Form {...otpForm}>
          <form
            onSubmit={otpForm.handleSubmit(handleOtpSubmit)}
            className={cn("flex flex-col gap-6", className)}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Enter OTP</h1>
              <p className="text-muted-foreground text-sm text-balance">
                A 6-digit OTP was sent to <strong>{userEmail}</strong>
              </p>
            </div>

            <FormField
              control={otpForm.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="flex gap-2 justify-content-between w-full">
                        {/* 👆 gap-2 adds spacing between boxes */}
                        {Array.from({ length: 6 }).map((_, i) => (
                          <InputOTPSlot key={i} index={i} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>

                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" variant={"outline"}>
              Verify OTP
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}

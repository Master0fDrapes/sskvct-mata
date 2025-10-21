"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
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
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { apiRequest } from "@/lib/features/Slices/AuthSlice";

// ---------------- Schemas ----------------
const phoneScema = z.object({
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be at most 15 digits" })
    .regex(/^[0-9]+$/, { message: "Please enter a valid number" }),
});

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

// ---------------- Component ----------------
export function LoginForm({ className }: { className?: string }) {
  const [step, setStep] = useState<"email" | "otp">("email");
  const [userEmail, setUserEmail] = useState("");

  const dispatch = useAppDispatch();
  const { loading, data, error } = useAppSelector((state) => state.api);

  const router = useRouter();

  // Email form
  const emailForm = useForm<z.infer<typeof phoneScema>>({
    resolver: zodResolver(phoneScema),
    defaultValues: { phone: "" },
  });

  // OTP form
  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  // ---------------- Handlers ----------------
  async function handleEmailSubmit(values: z.infer<typeof phoneScema>) {
    setUserEmail(values.phone);

    try {
      const res = await dispatch(
        apiRequest({
          endpoint: "/login",
          method: "POST",
          body: { email: values.phone },
        })
      ).unwrap();

      console.log("Login API success:", res);
      setStep("otp");
    } catch (err) {
      console.error("Login API error:", err);
    }
  }

  function handleOtpSubmit(values: z.infer<typeof otpSchema>) {
    alert(`Logged in with ${userEmail} and OTP ${values.otp}`);

    // Optionally store in localStorage or cookies
    localStorage.setItem(
      "formdata",
      JSON.stringify({ email: userEmail, otp: values.otp })
    );

    router.push("/dashboard");
  }

  // ---------------- JSX ----------------
  return (
    <div className="container mx-auto px-4">
      {step === "email" && (
        <Form {...emailForm}>
          <form
            onSubmit={emailForm.handleSubmit(handleEmailSubmit)}
            className={cn("flex flex-col gap-6", className)}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Login</h1>
              <p className="text-muted-foreground text-sm">
                Enter your email to continue
              </p>
            </div>

            <FormField
              control={emailForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="7353448076" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              variant="outline"
              disabled={loading}
            >
              {loading ? "Loading..." : "Continue"}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
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
              <p className="text-muted-foreground text-sm">
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
                      <InputOTPGroup className="flex gap-2 w-full">
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

            <Button type="submit" className="w-full" variant="outline">
              Verify OTP
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}

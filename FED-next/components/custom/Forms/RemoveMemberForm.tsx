"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ✅ Zod Schema
const formSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  profileImage: z.any().optional(), // optional
});

type FormSchema = z.infer<typeof formSchema>;

export default function RemoveMemberForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      profileImage: undefined,
    },
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function onSubmit(values: FormSchema) {
    setLoading(true);

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("mobile", values.mobile);

      // Replace with your API endpoint
      fetch("/api/remove-member", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("✅ Form Submitted:", data);
          alert("Registration successful!");
          form.reset();
          setPreview(null);
        })
        .catch((err) => {
          console.error(err);
          alert("Something went wrong.");
        })
        .finally(() => setLoading(false));
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center mt-12 p-6">
      <Card className="w-full max-w-xl shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Remove Member
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Mobile Number */}
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter 10-digit number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-[#0D3486] text-white"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Remove Member"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

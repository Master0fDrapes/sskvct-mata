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

export default function RegistrationForm() {
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
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("mobile", values.mobile);
      if (values.profileImage instanceof File) {
        formData.append("profileImage", values.profileImage);
      }

      // Replace with your API endpoint
      fetch("/api/register", {
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
            Registration Form
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              {/* Profile Image (Optional) */}
              <FormField
                control={form.control}
                name="profileImage"
                render={({ field: { onChange } }) => (
                  <FormItem>
                    <FormLabel>Profile Image (optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onChange(file); // update react-hook-form
                            setPreview(URL.createObjectURL(file)); // update preview
                          }
                        }}
                      />
                    </FormControl>

                    {/* Preview */}
                    {preview && (
                      <img
                        src={preview}
                        alt="Preview"
                        className="mt-3 w-24 h-24 object-cover rounded-md border"
                      />
                    )}
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-[#0D3486] text-white"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Add Member"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

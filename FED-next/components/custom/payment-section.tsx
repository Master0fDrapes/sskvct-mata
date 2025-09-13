"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CreditCard, Apple } from "lucide-react";

export default function PaymentAction() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    setIsPaying(true);
    setTimeout(() => {
      alert(`✅ Paid $${amount} via ${formatMethod(paymentMethod)}!`);
      setIsPaying(false);
    }, 1500);
  };

  const formatMethod = (method: string) => {
    switch (method) {
      case "credit_card":
        return "Credit Card";
      case "paypal":
        return "PayPal";
      case "apple_pay":
        return "Apple Pay";
      default:
        return "Unknown";
    }
  };

  return (
    <Card className="max-w-md w-full mx-auto mt-8 border-[1.5px] border-gray-200 dark:border-gray-800 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">💳 Payment</CardTitle>
        <CardDescription>
          Complete your secure transaction below.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Amount input with dollar prefix */}
        <div>
          <Label htmlFor="amount" className="mb-1 block">
            Amount to Pay
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              $
            </span>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        {/* Select payment method */}
        <div>
          <Label htmlFor="paymentMethod" className="mb-1 block">
            Payment Method
          </Label>
          <Select
            value={paymentMethod}
            onValueChange={(val) => setPaymentMethod(val)}
          >
            <SelectTrigger id="paymentMethod">
              <SelectValue placeholder="Select a method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="credit_card"
                className="flex items-center gap-2"
              >
                <CreditCard className="w-4 h-4" /> Credit Card
              </SelectItem>
              <SelectItem value="paypal" className="flex items-center gap-2">
                PayPal
              </SelectItem>
              <SelectItem value="apple_pay" className="flex items-center gap-2">
                <Apple className="w-4 h-4" /> Apple Pay
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Summary box */}
        {amount && (
          <div className="bg-muted/50 border rounded-lg p-4 text-sm text-muted-foreground">
            You are about to pay <strong>${amount}</strong> via{" "}
            <strong>{formatMethod(paymentMethod)}</strong>.
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          onClick={handlePayment}
          disabled={isPaying || !amount}
          variant={"outline"}
        >
          {isPaying ? "Processing..." : "Pay Now"}
        </Button>
      </CardFooter>
    </Card>
  );
}

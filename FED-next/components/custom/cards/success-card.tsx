"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface SuccessCardProps {
  title?: string;
  message: string;
  onClose?: () => void;
}

export function SuccessCard({
  title = "Success!",
  message,
  onClose,
}: SuccessCardProps) {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <Card className="max-w-sm w-full text-center shadow-md rounded-2xl border border-green-500/20">
        <CardHeader>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle className="text-green-500 w-10 h-10" />
            <CardTitle className="text-lg font-semibold text-green-700">
              {title}
            </CardTitle>
            <Badge
              variant="outline"
              className="border-green-500 text-green-600 bg-green-50"
            >
              Success
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground text-sm mb-4">{message}</p>
          <Button onClick={onClose} variant="default" className="w-full">
            OK
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

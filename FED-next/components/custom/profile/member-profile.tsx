"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface MemberProfileProps {
  name: string;
  role: string;
  email: string;
  bio?: string;
  avatarUrl?: string;
  status?: "active" | "inactive" | "pending";
}

export function MemberProfile({
  name,
  role,
  email,
  bio = "No bio available.",
  avatarUrl,
  status = "active",
}: MemberProfileProps) {
  const statusColor =
    status === "active"
      ? "bg-green-500"
      : status === "inactive"
      ? "bg-gray-400"
      : "bg-yellow-500";

  return (
    <Card className="max-w-md mx-auto rounded-2xl shadow-lg mt-12">
      <CardHeader className="flex flex-col items-center space-y-3 pb-0">
        <Avatar className="w-24 h-24 border-4 border-muted-foreground/10">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {role}
        </CardDescription>
        <Badge className={`${statusColor} text-white capitalize`}>
          {status}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3 text-center">
        <p className="text-sm text-muted-foreground">{email}</p>
        <p className="text-sm text-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // only if you're using cn utility
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo / Title */}
          <Link href="/" className="text-xl font-bold text-[#0D3486]">
            <img src="/assets/svgs/Vector.svg" alt="" />
          </Link>

          {/* Navigation Links (optional) */}
          <nav className="hidden space-x-6 md:flex">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium",
                pathname === "/"
                  ? "text-[#0D3486]"
                  : "text-gray-600 hover:text-[#0D3486]"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium",
                pathname === "/about"
                  ? "text-[#0D3486]"
                  : "text-gray-600 hover:text-[#0D3486]"
              )}
            >
              About
            </Link>
          </nav>

          {/* Login Button */}
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>
    </>
  );
}

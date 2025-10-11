"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideThumbsUp, LucideThumbsDown } from "lucide-react";

interface VotingProps {
  initialUpvotes?: number;
  initialDownvotes?: number;
}

export function Voting({
  initialUpvotes = 0,
  initialDownvotes = 0,
}: VotingProps) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);
  const [voted, setVoted] = useState<"up" | "down" | null>(null);

  const totalVotes = upvotes + downvotes;
  const upPercentage = totalVotes > 0 ? (upvotes / totalVotes) * 100 : 0;
  const downPercentage = totalVotes > 0 ? (downvotes / totalVotes) * 100 : 0;

  const handleUpvote = () => {
    if (voted === "up") {
      setUpvotes(upvotes - 1);
      setVoted(null);
    } else {
      setUpvotes(upvotes + 1);
      if (voted === "down") setDownvotes(downvotes - 1);
      setVoted("up");
    }
  };

  const handleDownvote = () => {
    if (voted === "down") {
      setDownvotes(downvotes - 1);
      setVoted(null);
    } else {
      setDownvotes(downvotes + 1);
      if (voted === "up") setUpvotes(upvotes - 1);
      setVoted("down");
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Button
          variant={voted === "up" ? "default" : "outline"}
          size="sm"
          onClick={handleUpvote}
          className="flex items-center gap-1"
        >
          {" "}
          I Agree
          <LucideThumbsUp size={16} /> I {upvotes}
        </Button>
        <Button
          variant={voted === "down" ? "default" : "outline"}
          size="sm"
          onClick={handleDownvote}
          className="flex items-center gap-1"
        >
          I Disagree
          <LucideThumbsDown size={16} /> {downvotes}
        </Button>
      </div>

      {/* Progress Bars */}
      <div className="space-y-3">
        <span>👍 {upvotes}</span>
        <div className="w-full h-2 bg-gray-200 rounded">
          <div
            className="h-2 bg-green-500 rounded"
            style={{ width: `${upPercentage}%` }}
          ></div>
        </div>
        <span>👎 {downvotes}</span>
        <div className="w-full h-2 bg-gray-200 rounded">
          <div
            className="h-2 bg-red-500 rounded"
            style={{ width: `${downPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

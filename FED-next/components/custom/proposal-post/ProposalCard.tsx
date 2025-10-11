"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideThumbsUp, LucideMessageCircle } from "lucide-react";
import { Voting } from "./Voting";
import { Comments } from "./Comments";
import { Button } from "@/components/ui/button";
import { ProfileInfo } from "./ProfileInfo";

interface Proposal {
  id: number;
  title: string;
  description: string;
  images?: string[];
  upvotes?: number;
  downvotes?: number;
  raise?: number;
  fall?: number;
  comments?: { id: number; text: string }[];
}

interface ProposalCardProps {
  proposal: Proposal;
}

export function ProposalCard({ proposal }: ProposalCardProps) {
  const [showVoting, setShowVoting] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className="mb-6 shadow-lg">
      <CardHeader>
        <ProfileInfo
          name={"Anonymous"}
          avatar={"proposal.authorAvatar"}
          designation={"Member"}
          postedAt={"10-12-2025, 11 am"}
        />
        <CardTitle>{proposal.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{proposal.description}</p>

        {proposal.images && proposal.images.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {proposal.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`proposal-img-${i}`}
                className="w-full h-full object-cover rounded border my-4"
              />
            ))}
          </div>
        )}

        {/* Action Icons */}
        <div className="flex gap-4 mt-4 border-t pt-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowVoting(!showVoting)}
            className="flex items-center gap-1"
          >
            <LucideThumbsUp size={16} /> Voting
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1"
          >
            <LucideMessageCircle size={16} /> Comments
          </Button>
        </div>

        {/* Sections */}
        <div className="mt-3 space-y-4">
          {showVoting && (
            <Voting
              initialUpvotes={proposal.upvotes}
              initialDownvotes={proposal.downvotes}
            />
          )}

          {showComments && <Comments initialComments={proposal.comments} />}
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { ProposalCard } from "@/components/custom/proposal-post/ProposalCard";
import { useEffect, useState } from "react";

interface Proposal {
  id: number;
  title: string;
  description: string;
  images?: string[];
  upvotes?: number;
  downvotes?: number;
  comments?: { id: number; text: string }[];
}

export default function AllProposalsPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using 2 sample proposals for demonstration
    const sampleProposals: Proposal[] = [
      {
        id: 1,
        title: "New Community Park",
        description:
          "Proposal to create a new community park in the downtown area with playgrounds and seating.",
        images: [
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        ],
        upvotes: 12,
        downvotes: 3,
        comments: [
          { id: 1, text: "Great idea! We need more parks." },
          { id: 2, text: "Will this affect parking nearby?" },
        ],
      },
      {
        id: 2,
        title: "Install Solar Panels on School",
        description:
          "Proposal to install solar panels on the school rooftop to reduce electricity bills and promote renewable energy.",
        images: [
          "https://images.unsplash.com/photo-1581091870623-1765d3b8db08?auto=format&fit=crop&w=400&q=80",
        ],
        upvotes: 20,
        downvotes: 1,
        comments: [{ id: 1, text: "Awesome! This is eco-friendly." }],
      },
    ];

    setProposals(sampleProposals);
    setLoading(false);
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      {proposals.length === 0 ? (
        <p className="text-center text-gray-500">No proposals yet.</p>
      ) : (
        proposals.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))
      )}
    </div>
  );
}

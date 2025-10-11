"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Comment {
  id: number;
  text: string;
  name?: string; // Name of commenter
  avatar?: string; // Avatar image URL
}

interface CommentsProps {
  initialComments?: Comment[];
}

export function Comments({ initialComments = [] }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    // Add new comment with dummy name/avatar
    setComments([
      ...comments,
      {
        id: Date.now(),
        text: newComment,
        name: "John Doe",
        avatar: "https://i.pravatar.cc/40", // Placeholder avatar
      },
    ]);
    setNewComment("");
  };

  return (
    <div className="space-y-3">
      {/* Input box */}
      <div className="flex gap-2">
        <Input
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleAddComment}>Add</Button>
      </div>

      {/* Comments list */}
      {comments.map((c) => (
        <div key={c.id} className="flex items-start gap-2 p-2 ">
          {/* Avatar */}
          <img
            src={c.avatar || "https://i.pravatar.cc/40"}
            alt={c.name || "User"}
            className="w-8 h-8 rounded-full object-cover"
          />

          {/* Name + Comment */}
          <div>
            <p className="text-sm font-semibold">{c.name || "Anonymous"}</p>
            <p className="text-sm">{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

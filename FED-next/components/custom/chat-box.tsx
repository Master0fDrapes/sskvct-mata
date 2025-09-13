"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Message = {
  sender: "me" | "other";
  text?: string;
  image?: string; // base64 or URL
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "me", text: input }]);
    setInput("");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setMessages((prev) => [
        ...prev,
        { sender: "me", image: reader.result as string },
      ]);
    };
    reader.readAsDataURL(file);

    // Clear the input for next upload
    e.target.value = "";
  };

  return (
    <Card className=" mx-8 mt-8 flex flex-col h-[600px] border">
      <CardHeader>
        <CardTitle>Group Messenger </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto space-y-3 px-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`rounded-lg max-w-fit text-sm break-words ${
              msg.sender === "me"
                ? "ml-auto bg-[#0D3486] text-white"
                : "mr-auto bg-gray-200 text-gray-800"
            } p-2`}
          >
            {msg.text && <div>{msg.text}</div>}
            {msg.image && (
              <img
                src={msg.image}
                alt="Uploaded"
                className="mt-2 rounded-lg max-w-full h-auto"
                height={150}
                width={200}
              />
            )}
          </div>
        ))}
      </CardContent>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2  p-4 pb-0"
      >
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
        >
          📎
        </Button>
        <Button
          type="submit"
          className="bg-[#0D3486] hover:bg-[#0a2a6b] text-white"
        >
          Send
        </Button>
      </form>
    </Card>
  );
}

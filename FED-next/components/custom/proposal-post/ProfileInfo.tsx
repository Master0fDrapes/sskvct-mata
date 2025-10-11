"use client";

import React from "react";

interface ProfileInfoProps {
  name: string;
  avatar?: string;
  designation?: string;
  postedAt: string; // ISO string or formatted date
  extraInfo?: string;
}

export function ProfileInfo({
  name,
  avatar,
  designation,
  postedAt,
  extraInfo,
}: ProfileInfoProps) {
  return (
    <div className="flex items-center gap-3 mb-3">
      {/* Avatar */}
      <img
        src={avatar || "https://i.pravatar.cc/48"}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border"
      />

      {/* Name + Designation + Posted Date */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-gray-900">{name}</p>
          {designation && (
            <span className="text-sm text-gray-500">{designation}</span>
          )}
        </div>
        {postedAt && <p className="text-xs text-gray-600">{postedAt}</p>}
        {extraInfo && <p className="text-xs text-gray-700">{extraInfo}</p>}
      </div>
    </div>
  );
}

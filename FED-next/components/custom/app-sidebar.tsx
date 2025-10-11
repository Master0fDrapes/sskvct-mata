"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  Atom,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";

// This is sample data.
const data = {
  user: {
    name: "VINAY",
    email: "vinay@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "SSKVCT",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "SSKVCT Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Create Proposals",
      url: "/create-proposal",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Create Proposal",
          url: "/create-proposal",
        },
        {
          title: "View All Proposals",
          url: "/proposals",
        },
        {
          title: "View Your Proposals",
          url: "/proposals",
        },
      ],
    },
    {
      title: "Add Member",
      url: "",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "New Member",
          url: "/create-member",
        },
        {
          title: "Remove Member",
          url: "/remove-member",
        },
      ],
    },
    {
      title: "Donnate for a cause",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Create cause",
          url: "#",
        },
        {
          title: "View all couse",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Purchasing Land",
      url: "#",
      icon: Atom,
    },
    {
      name: "Campaigning for gurukula academy",
      url: "#",
      icon: Atom,
    },
    {
      name: "Raising Fund for Swimming pool",
      url: "#",
      icon: Atom,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mt-5 mb-3 px-5 ">
        {/* <TeamSwitcher teams={data.teams} /> */}
        <img
          src="/assets/svgs/Vector.svg"
          alt="Vector"
          height={50}
          width={150}
        />
      </SidebarHeader>
      <SidebarContent className="bg-[#0D3486] text-white">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter className="bg-[#0D3486] text-white">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

import { AppSidebar } from "@/components/custom/app-sidebar";
import { DataTable } from "@/components/custom/data-table";
import { SectionCards } from "@/components/custom/section-cards";
import { SiteHeader } from "@/components/custom/site-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import data from "./data.json";
import { ChartAreaInteractive } from "@/components/custom/chart-interactive";
import ChatBox from "@/components/custom/chat-box";

export default function DashBoard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <>
          <SectionCards />
          <ChatBox />
          <DataTable data={data} />
          <ChartAreaInteractive />
        </>
      </SidebarInset>
    </SidebarProvider>
  );
}

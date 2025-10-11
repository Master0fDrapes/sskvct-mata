import { DataTable } from "@/components/custom/data-table";
import { SectionCards } from "@/components/custom/section-cards";

import data from "./data.json";
import { ChartAreaInteractive } from "@/components/custom/chart-interactive";
// import ChatBox from "@/components/custom/chat-box";

export default function DashBoard() {
  return (
    <>
      <SectionCards />
      <ChartAreaInteractive />
      <DataTable data={data} />
      {/* <ChatBox /> */}
    </>
  );
}

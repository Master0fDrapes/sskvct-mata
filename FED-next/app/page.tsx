import { ChartAreaInteractive } from "@/components/custom/chart-interactive";
import { DataTable } from "@/components/custom/data-table";
import { SectionCards } from "@/components/custom/section-cards";
import { HeaderNav } from "@/components/custom/semantic-components/Header-nav";
import data from "./dashboard/data.json";
import PaymentAction from "@/components/custom/payment-section";

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <div className="grid grid-cols-12 ">
        <div className="mb-8 container mx-auto xl:col-span-8">
          <h1 className="ms-8 mt-8 text-[32px] text-[#0d3486] font-extrabold">
            Welcome to admin main landing page
          </h1>

          <ChartAreaInteractive />
          <SectionCards />
          <DataTable data={data} />
        </div>
        <div className="sticky top-[100px] self-start xl:col-span-4 me-8">
          <h1 className="ms-8 mt-8 text-[32px] text-[#0d3486] font-extrabold">
            Donate Now for the future
          </h1>
          <PaymentAction />
        </div>
      </div>
    </div>
  );
}

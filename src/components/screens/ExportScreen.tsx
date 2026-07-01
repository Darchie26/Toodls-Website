import { ChevronLeft, Zap, FileText, Share2, Lamp, Sofa } from "lucide-react";
import RoomArt from "./RoomArt";

const items = [
  { icon: Sofa, tone: "warm" as const, title: "Modern Brown Fabric Sofa", meta: "Household · Excellent", price: "$449" },
  { icon: Lamp, tone: "cool" as const, title: "Vintage Brass Table Lamp", meta: "Decor · Good", price: "$45" },
  { icon: Lamp, tone: "cool" as const, title: "Vintage Brass Table Lamp", meta: "Decor · Good", price: "$45" },
];

export default function ExportScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white text-black">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-4 pb-2 pt-9">
        <ChevronLeft className="h-3.5 w-3.5 justify-self-start" strokeWidth={2.5} />
        <span className="whitespace-nowrap text-[12px] font-bold">Export Listings</span>
        <span />
      </div>

      <div className="px-4 pt-1">
        <p className="text-[8.5px] leading-snug text-black/50">
          Set how quickly you want to sell and export at full price.
        </p>

        <div className="mt-2 grid grid-cols-4 gap-1">
          {["7 days", "14 days", "21 days", "30 days"].map((d) => (
            <div
              key={d}
              className={`rounded-lg py-1.5 text-center text-[8px] font-semibold ${
                d === "14 days" ? "bg-black text-white" : "bg-[#f5f5f7] text-black/70"
              }`}
            >
              {d}
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between rounded-xl bg-[#f5f5f7] px-3 py-2">
          <span className="text-[13px] font-light">–</span>
          <span className="text-[15px] font-extrabold">
            14 <span className="text-[9px] font-medium text-black/50">days</span>
          </span>
          <span className="text-[13px] font-light">+</span>
        </div>

        <div className="mt-2 flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          <span className="text-[8px] font-semibold text-orange-700">Getting close</span>
        </div>

        <div className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-accent to-accent-dark py-2.5 text-white">
          <Zap className="h-3 w-3" strokeWidth={2.5} fill="currentColor" />
          <span className="text-[9.5px] font-bold">Apply Urgency Pricing</span>
        </div>

        <div className="mt-2.5 rounded-xl border border-black/[0.06] p-2">
          <p className="mb-1.5 text-[9.5px] font-bold">Items to export</p>
          <div className="space-y-1.5">
            {items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-2 border-b border-black/5 pb-1.5 last:border-0 last:pb-0">
                <RoomArt icon={it.icon} tone={it.tone} className="h-7 w-7 shrink-0 rounded-md" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[8.5px] font-bold leading-tight">{it.title}</p>
                  <p className="text-[7px] text-black/40">{it.meta}</p>
                </div>
                <span className="shrink-0 text-[9px] font-bold">{it.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto px-4 pb-4 pt-2">
        <div className="flex overflow-hidden rounded-xl bg-black text-white">
          <div className="flex flex-1 items-center justify-center gap-1 py-2">
            <FileText className="h-3 w-3" strokeWidth={2.5} />
            <span className="text-[8.5px] font-semibold">Export CSV</span>
          </div>
          <div className="w-px bg-white/20" />
          <div className="flex flex-1 items-center justify-center gap-1 py-2">
            <Share2 className="h-3 w-3" strokeWidth={2.5} />
            <span className="text-[8.5px] font-semibold">Share</span>
          </div>
        </div>
        <p className="mt-1.5 text-center text-[6.5px] leading-tight text-black/40">
          Exports items as a CSV and opens the share sheet.
        </p>
      </div>
    </div>
  );
}

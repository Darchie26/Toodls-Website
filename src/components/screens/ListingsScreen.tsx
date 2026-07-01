import { Home, LayoutGrid, Plus, User, ChevronRight, Sofa, Bed, Truck, Warehouse } from "lucide-react";
import RoomArt from "./RoomArt";

const listings = [
  { icon: Sofa, tone: "warm" as const, title: "Garage Sale", meta: "3 items · $539" },
  { icon: Bed, tone: "cool" as const, title: "Bedroom Declutter", meta: "6 items · $320" },
  { icon: Truck, tone: "dark" as const, title: "Moving Sale · 08/13", meta: "8 items · $980" },
  { icon: Warehouse, tone: "dark" as const, title: "Storage Unit", meta: "12 items · $1,840" },
];

export default function ListingsScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white text-black">
      <div className="flex items-center justify-between px-4 pb-2 pt-9">
        <div>
          <p className="text-[15px] font-extrabold">My Listings</p>
          <p className="text-[8px] text-black/50">5 active · 0 sold · $3,160 value</p>
        </div>
        <span className="rounded-full bg-black px-2.5 py-1.5 text-[8px] font-semibold text-white">
          Export CSV
        </span>
      </div>

      <div className="flex-1 space-y-2 px-4 pt-1">
        {listings.map((l) => (
          <div
            key={l.title}
            className="flex items-center gap-2.5 rounded-xl border border-black/[0.06] bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <RoomArt icon={l.icon} tone={l.tone} className="h-10 w-10 shrink-0 rounded-lg" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10.5px] font-bold">{l.title}</p>
              <p className="text-[8px] text-black/45">{l.meta}</p>
            </div>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-black/30" />
          </div>
        ))}
      </div>

      <div className="relative mx-4 mb-6 flex items-center justify-between rounded-full bg-[#f5f5f7] px-6 py-2.5">
        <Home className="h-4 w-4 text-black/40" strokeWidth={2} />
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black">
          <LayoutGrid className="h-3.5 w-3.5 text-white" strokeWidth={2} />
        </div>
        <User className="h-4 w-4 text-black/40" strokeWidth={2} />
        <div className="absolute -right-1 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black shadow-lg">
          <Plus className="h-4 w-4 text-white" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}

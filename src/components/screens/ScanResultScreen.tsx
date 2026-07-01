import { ChevronLeft, Heart, House, Tag } from "lucide-react";
import RoomArt from "./RoomArt";

export default function ScanResultScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white text-black">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-4 pb-2 pt-9 text-[11px] font-medium">
        <div className="flex items-center gap-1 justify-self-start">
          <ChevronLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
          <span className="text-black/70">camera</span>
        </div>
        <span className="whitespace-nowrap text-[13px] font-bold">Scan Result</span>
        <span />
      </div>

      <RoomArt tone="warm" className="mx-4 mt-1 h-32 rounded-2xl" />

      <div className="px-4 pt-3">
        <p className="text-[9px] font-semibold tracking-wide text-black/40">
          TITLE
        </p>
        <div className="mt-1 rounded-xl border border-black/10 px-3 py-2">
          <p className="text-[12px] font-bold">Modern Brown Fabric Sofa</p>
        </div>

        <div className="mt-2 flex items-center gap-1.5">
          <span className="rounded-full bg-black px-2.5 py-1 text-[9px] font-semibold text-white">
            Household Item
          </span>
          <span className="rounded-full border border-black/15 px-2.5 py-1 text-[9px] font-semibold">
            Excellent
          </span>
          <span className="text-[9px] font-medium text-black/40">
            80% confident
          </span>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-[#f5f5f7] p-2.5">
            <p className="text-[8px] font-semibold tracking-wide text-black/40">
              SUGGESTED PRICE
            </p>
            <p className="text-[16px] font-extrabold">$449</p>
            <p className="mt-0.5 text-[7.5px] leading-tight text-black/50">
              Great price to attract buyers.
            </p>
          </div>
          <div className="rounded-xl bg-black p-2.5 text-white">
            <p className="text-[8px] font-semibold tracking-wide text-white/50">
              QUICK SALE
            </p>
            <p className="text-[16px] font-extrabold">$375</p>
            <p className="mt-0.5 text-[7.5px] leading-tight text-white/60">
              A lower price that sells faster.
            </p>
          </div>
        </div>

        <div className="mt-2.5 rounded-xl bg-[#f5f5f7] p-2.5">
          <p className="text-[10px] font-bold">What do you want to do?</p>
          <div className="mt-1.5 grid grid-cols-3 gap-1.5">
            <div className="flex flex-col items-center gap-0.5 rounded-lg bg-black py-2 text-white">
              <Tag className="h-3 w-3" strokeWidth={2.5} />
              <span className="text-[8px] font-semibold">Sell</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 rounded-lg border border-black/10 bg-white py-2">
              <Heart className="h-3 w-3" strokeWidth={2.5} />
              <span className="text-[8px] font-semibold">Donate</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 rounded-lg border border-black/10 bg-white py-2">
              <House className="h-3 w-3" strokeWidth={2.5} />
              <span className="text-[8px] font-semibold">Keep</span>
            </div>
          </div>
          <div className="mt-1.5 grid grid-cols-[1fr_2fr] gap-1.5">
            <div className="flex items-center justify-center rounded-lg border border-black/10 bg-white py-1.5 text-[8px] font-semibold">
              Skip
            </div>
            <div className="flex items-center justify-center rounded-lg bg-black py-1.5 text-[8px] font-semibold text-white">
              Save to a folder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

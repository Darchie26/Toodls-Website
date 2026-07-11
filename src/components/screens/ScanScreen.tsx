import {
  ArrowLeft,
  ChevronDown,
  Folder,
  Image as ImageIcon,
  Layers,
  X,
  ZapOff,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import RoomArt, { type RoomArtTone } from "./RoomArt";

interface ScanScreenProps {
  itemIcon?: LucideIcon;
  tone?: RoomArtTone;
  shotLabel?: string;
  shotSubtitle?: string;
  capturedShots?: number;
  totalSlots?: number;
}

export default function ScanScreen({
  itemIcon,
  tone = "warm",
  shotLabel = "Main Shot",
  shotSubtitle = "Show the full item",
  capturedShots = 0,
  totalSlots = 5,
}: ScanScreenProps) {
  const slots = Array.from({ length: totalSlots });

  return (
    <div className="relative flex h-full w-full flex-col bg-black text-white">
      <RoomArt icon={itemIcon} tone={tone} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />

      <div className="relative z-10 flex items-center justify-between px-4 pt-9">
        <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
        <div className="flex items-center gap-1 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
          <Folder className="h-3 w-3" strokeWidth={2.5} />
          <span className="text-[10px] font-semibold">No folder</span>
          <ChevronDown className="h-3 w-3" strokeWidth={2.5} />
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
          <ZapOff className="h-3 w-3" strokeWidth={2.5} />
        </div>
      </div>

      <div className="relative z-10 mx-4 mt-4 flex flex-1 flex-col justify-between rounded-2xl">
        <div className="flex justify-between">
          <div className="h-4 w-4 rounded-tl-md border-l-2 border-t-2 border-white/90" />
          <div className="h-4 w-4 rounded-tr-md border-r-2 border-t-2 border-white/90" />
        </div>
        <span
          className="mx-auto text-lg italic text-white/90"
          style={{ fontFamily: "cursive" }}
        >
          Toodls
        </span>
        <div className="flex justify-between">
          <div className="h-4 w-4 rounded-bl-md border-b-2 border-l-2 border-white/90" />
          <div className="h-4 w-4 rounded-br-md border-b-2 border-r-2 border-white/90" />
        </div>
      </div>

      <div className="relative z-10 px-4 pb-2 pt-3 text-center">
        <p className="text-[13px] font-bold">{shotLabel}</p>
        <p className="text-[9px] text-white/60">{shotSubtitle}</p>
      </div>

      <div className="relative z-10 flex justify-center gap-1.5 pb-3">
        {slots.map((_, i) => {
          if (i < capturedShots) {
            return (
              <div
                key={i}
                className="relative h-6 w-6 overflow-hidden rounded-md"
              >
                <RoomArt icon={itemIcon} tone={tone} className="h-full w-full" />
                <div className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-black">
                  <X className="h-2 w-2" strokeWidth={3} />
                </div>
              </div>
            );
          }
          if (i === capturedShots) {
            return (
              <div
                key={i}
                className="h-6 w-6 rounded-md border-2 border-white bg-white/10"
              />
            );
          }
          return (
            <div
              key={i}
              className="h-6 w-6 rounded-md border border-dashed border-white/40"
            />
          );
        })}
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 pb-8">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
          <ImageIcon className="h-3.5 w-3.5" strokeWidth={2} />
        </div>
        <div className="h-12 w-12 rounded-full border-[3px] border-white bg-white/90" />
        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
          <Layers className="h-3.5 w-3.5" strokeWidth={2} />
          {capturedShots > 0 && (
            <div className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[8px] font-bold">
              {capturedShots}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

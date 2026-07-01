import { ArrowLeft, ChevronDown, Folder, Image as ImageIcon } from "lucide-react";
import RoomArt from "./RoomArt";

export default function ScanScreen() {
  return (
    <div className="relative flex h-full w-full flex-col bg-black text-white">
      <RoomArt tone="warm" className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />

      <div className="relative z-10 flex items-center justify-between px-4 pt-9">
        <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
        <div className="flex items-center gap-1 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
          <Folder className="h-3 w-3" strokeWidth={2.5} />
          <span className="text-[10px] font-semibold">No folder</span>
          <ChevronDown className="h-3 w-3" strokeWidth={2.5} />
        </div>
        <div className="w-4" />
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
        <p className="text-[13px] font-bold">Main Shot</p>
        <p className="text-[9px] text-white/60">Show the full item</p>
      </div>

      <div className="relative z-10 flex justify-center gap-1.5 pb-3">
        <div className="h-6 w-6 rounded-md bg-white/90" />
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-6 w-6 rounded-md border border-dashed border-white/40"
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 pb-8">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
          <ImageIcon className="h-3.5 w-3.5" strokeWidth={2} />
        </div>
        <div className="h-12 w-12 rounded-full border-[3px] border-white bg-white/90" />
        <div className="h-8 w-8 rounded-lg bg-white/15" />
      </div>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";
import { Sofa } from "lucide-react";

interface RoomArtProps {
  icon?: LucideIcon;
  className?: string;
  tone?: "warm" | "cool" | "dark";
}

const tones = {
  warm: "from-[#e8ddce] via-[#d8c4a8] to-[#b89a72]",
  cool: "from-[#dcdce8] via-[#c3c4dd] to-[#8f90b8]",
  dark: "from-[#3a3a3a] via-[#232323] to-[#0f0f0f]",
};

export default function RoomArt({
  icon: Icon = Sofa,
  className = "",
  tone = "warm",
}: RoomArtProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <div className="absolute -left-4 -top-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-black/10 blur-2xl" />
      <div className="flex h-full w-full items-center justify-center">
        <Icon
          strokeWidth={1.25}
          className={`h-1/2 w-1/2 ${
            tone === "dark" ? "text-white/70" : "text-black/40"
          }`}
        />
      </div>
    </div>
  );
}

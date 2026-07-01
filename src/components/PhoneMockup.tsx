import type { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19.5] w-[260px] sm:w-[290px] rounded-[3rem] bg-black p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06)_inset] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-white">
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />
        {children}
      </div>
      <div className="absolute inset-0 rounded-[3rem] ring-1 ring-black/5" />
    </div>
  );
}

interface AppStoreBadgeProps {
  href: string;
  className?: string;
}

/**
 * Apple "Download on the App Store" badge, rendered as inline SVG so it stays
 * crisp at any size and needs no external asset. Links to the real listing.
 */
export default function AppStoreBadge({ href, className = "" }: AppStoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className={`inline-block transition-transform hover:scale-[1.03] active:scale-95 ${className}`}
    >
      <svg
        viewBox="0 0 120 40"
        role="img"
        aria-hidden="true"
        className="h-[52px] w-auto"
      >
        <rect
          x="0.5"
          y="0.5"
          width="119"
          height="39"
          rx="8.5"
          fill="#000000"
          stroke="#A6A6A6"
          strokeWidth="1"
        />
        {/* Apple logo */}
        <path
          fill="#FFFFFF"
          transform="translate(11 10) scale(0.95)"
          d="M16.02 12.2c-.03-2.9 2.37-4.3 2.48-4.37-1.35-1.98-3.46-2.25-4.2-2.28-1.79-.18-3.49 1.05-4.4 1.05-.9 0-2.3-1.03-3.79-1-1.95.03-3.75 1.13-4.75 2.88-2.03 3.52-.52 8.73 1.45 11.59.96 1.4 2.11 2.97 3.61 2.91 1.45-.06 2-.94 3.75-.94 1.75 0 2.24.94 3.77.91 1.56-.03 2.55-1.42 3.5-2.83 1.1-1.62 1.56-3.19 1.58-3.27-.03-.02-3.03-1.16-3.06-4.61zM13.13 3.77C13.92 2.8 14.46 1.46 14.31.1c-1.15.05-2.55.77-3.37 1.73-.73.85-1.37 2.23-1.2 3.54 1.29.1 2.6-.65 3.39-1.6z"
        />
        {/* Text */}
        <text
          x="34"
          y="16"
          fill="#FFFFFF"
          fontFamily="-apple-system, Helvetica, Arial, sans-serif"
          fontSize="6.5"
        >
          Download on the
        </text>
        <text
          x="33.5"
          y="30"
          fill="#FFFFFF"
          fontFamily="-apple-system, Helvetica, Arial, sans-serif"
          fontSize="15"
          fontWeight="600"
        >
          App Store
        </text>
      </svg>
    </a>
  );
}

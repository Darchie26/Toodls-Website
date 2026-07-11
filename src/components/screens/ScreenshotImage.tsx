import Image from "next/image";

interface ScreenshotImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function ScreenshotImage({
  src,
  alt,
  priority,
}: ScreenshotImageProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="290px"
        className="object-cover"
      />
    </div>
  );
}

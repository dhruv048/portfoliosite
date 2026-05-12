import Image from "next/image";

const COVER_WIDTH = 1200;
const COVER_HEIGHT = 630;

type BlogCoverImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/**
 * Blog hero and card images: fixed dimensions to limit layout shift (CLS).
 * SVGs from `/public` are served with `unoptimized` because the default
 * optimizer does not rasterize local SVGs.
 */
export function BlogCoverImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
}: BlogCoverImageProps) {
  const unoptimized = src.endsWith(".svg");

  return (
    <Image
      src={src}
      alt={alt}
      width={COVER_WIDTH}
      height={COVER_HEIGHT}
      sizes={sizes}
      className={className}
      priority={priority}
      unoptimized={unoptimized}
      decoding={priority ? "sync" : "async"}
    />
  );
}

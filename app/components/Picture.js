import images from "../images.json";

// Plain <img> with pre-generated WebP variants (Next image optimization is disabled).
export default function Picture({ name, alt, sizes, priority = false, className }) {
  const img = images[name];
  const largest = img.srcs[img.srcs.length - 1];
  return (
    <img
      className={className}
      src={largest.src}
      srcSet={img.srcs.map((s) => `${s.src} ${s.width}w`).join(", ")}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}

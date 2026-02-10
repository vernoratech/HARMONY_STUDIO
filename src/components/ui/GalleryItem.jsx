// export default GalleryItem;
import React, { useEffect, useState } from "react";
import { Play,Instagram } from "lucide-react";
import GalleryModal from "./GalleryModal";
import { captureVideoThumbnail } from "../../utils/captureVideoThumbnail";

const GalleryItem = ({ item, items, index }) => {
  const [thumb, setThumb] = useState(item.thumbnail || null);
  const [loading, setLoading] = useState(
    item.type === "video" && !item.thumbnail
  );
  const [open, setOpen] = useState(false);

  /* ================= VIDEO THUMB GENERATION ================= */
  useEffect(() => {
    if (item.type === "video" && !item.thumbnail) {
      setLoading(true);
      captureVideoThumbnail(item.src, item.thumbnailTime)
        .then((t) => {
          setThumb(t);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [item]);

  /* ================= CLICK HANDLER ================= */
  const handleClick = () => {
    if (item.type === "instagram") {
      window.open(item.url, "_blank", "noopener,noreferrer");
      return;
    }
    setOpen(true);
  };

  return (
    <>
      {/* CARD */}
      <div className="rounded-2xl overflow-hidden bg-[#1A1A1A] border border-white/5 hover:border-[#F5A623]/40 transition-all hover-lift">

        
        {/* ================= MEDIA SECTION ================= */}
<div
  onClick={handleClick}
  className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
>
  {/* IMAGE / VIDEO / INSTAGRAM */}
  {loading && <Skeleton />}

  {item.type === "image" && (
    <img
      src={item.src}
      alt={item.caption || ""}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  )}

  {item.type === "video" && !loading && (
    <>
      <img
        src={thumb}
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <PlayOverlay />
    </>
  )}

  {item.type === "instagram" && (
    <>
      <img
        src={item.thumbnail}
        alt={item.caption || ""}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <InstagramOverlay />
    </>
  )}

  {/* GRADIENT BRIDGE (THIS IS THE KEY) */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent pointer-events-none" />
</div>


        {/* ================= TEXT SECTION ================= */}
        <div className="p-5 bg-[#1A1A1A]">
          <span className="text-[#F5A623] text-xs uppercase tracking-widest font-semibold">
            {item.category}
          </span>
          <p className="text-white text-lg font-semibold mt-1 leading-snug line-clamp-2">
            {item.caption}
          </p>
        </div>
      </div>

      {/* MODAL */}
      {open && item.type !== "instagram" && (
        <GalleryModal
          items={items}
          index={index}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

/* ================= OVERLAYS ================= */

const PlayOverlay = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="p-4 bg-black/60 rounded-full backdrop-blur-sm">
      <Play className="text-white" />
    </div>
  </div>
);

/* ================= INSTAGRAM PLAY BUTTON ================= */
const InstagramOverlay = () => (
  <div className="absolute inset-0 flex items-center justify-center group">
    <div className="relative w-16 h-16">

      {/* YELLOW RING BASE */}
      <div className="absolute inset-0 rounded-full bg-[#F5A623] shadow-[0_0_25px_rgba(245,166,35,0.6)]" />

      {/* CIRCULAR TEXT */}
      {/* <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 pointer-events-none group-hover:animate-spin-slow"
      > */}
      <svg
  viewBox="0 0 100 100"
  className="
    absolute inset-0
    animate-spin-slow
    spin-paused
    pointer-events-none
  "
>
  <defs>
    <path
      id="instaCircle"
      d="M50,50 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0"
    />
  </defs>

  <text
    fill="#0A0A0A"
    fontSize="11"
    fontWeight="1000"
    letterSpacing="3.4"
  >
    <textPath href="#instaCircle" startOffset="50%" textAnchor="middle">
      WATCH ON INSTAGRAM
    </textPath>
  </text>
</svg>


      {/* CENTER ICON */}
      <div className="absolute inset-[15px] rounded-full bg-[#0A0A0A] flex items-center justify-center">
        <Instagram className="text-[#F5A623]" size={22} />
      </div>

    </div>
  </div>
);



/* ================= SKELETON ================= */

const Skeleton = () => (
  <div className="absolute inset-0 skeleton" />
);

export default GalleryItem;


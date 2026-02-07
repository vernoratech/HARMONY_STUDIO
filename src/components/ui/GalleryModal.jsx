import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX } from "lucide-react";

const GalleryModal = ({ items, index, onClose }) => {
  const [current, setCurrent] = useState(index);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef(null);

  const item = items[current];

  /* ================= MOBILE AUDIO TOGGLE BUTTON SYNC ================= */
  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const syncMuteState = () => {
    setMuted(video.muted || video.volume === 0);
  };

  video.addEventListener("volumechange", syncMuteState);

  return () => {
    video.removeEventListener("volumechange", syncMuteState);
  };
}, [current]);


  /* ================= LOCK SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  /* ================= KEYBOARD NAV ================= */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  /* ================= PRELOAD IMAGES ================= */
  useEffect(() => {
    items.forEach((i) => {
      if (i.type === "image") {
        const img = new Image();
        img.src = i.src;
      }
    });
  }, [items]);

  /* ================= NAVIGATION ================= */
  const next = () => setCurrent((c) => (c + 1) % items.length);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  /* ================= SWIPE ================= */
  const handleDragEnd = (_, info) => {
    if (info.offset.y > 120) onClose();
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 text-white"
          >
            <X size={34} />
          </button>

          {/* MEDIA */}
          {item.type === "image" && (
            <img
              src={item.src}
              alt=""
              className="max-h-[90vh] max-w-full object-contain rounded-xl"
            />
          )}

          {item.type === "video" && (
            <>
              <video
                ref={videoRef}
                src={item.src}
                autoPlay
                muted={muted}
                controls
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                className="max-h-[90vh] max-w-full object-contain rounded-xl"
              />

              {/* MUTE TOGGLE */}
              <button
                onClick={() => setMuted((m) => !m)}
                className="absolute bottom-6 right-6 bg-black/60 p-3 rounded-full"
              >
                {muted ? <VolumeX /> : <Volume2 />}
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default GalleryModal;

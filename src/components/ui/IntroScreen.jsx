import { useState, useEffect } from "react";

function IntroScreen({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start exit animation after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Remove component after animation completes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-black transition-transform duration-1000 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo Container */}
      <div
        className={`flex flex-col items-center transition-all duration-700 ${
          isExiting ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Harmony Studio"
          className="w-32 h-32 md:w-48 md:h-48 object-contain animate-pulse"
        />

        {/* Brand Name */}
        <h1 className="mt-6 text-2xl md:text-4xl font-bold text-white tracking-wider">
          <span className="text-[#F5A623]">Harmony</span> Studio
        </h1>

        {/* Tagline */}
        <p className="mt-2 text-sm md:text-base text-gray-400 tracking-widest uppercase">
          Dance • Zumba • Yoga • Aerobics
        </p>

        {/* Loading Indicator */}
        <div className="mt-8 flex space-x-2">
          <span
            className="w-2 h-2 bg-[#F5A623] rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></span>
          <span
            className="w-2 h-2 bg-[#F5A623] rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="w-2 h-2 bg-[#F5A623] rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default IntroScreen;

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../data";

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  const nextTestimonial = () => {
    setIsAutoPlay(false);
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlay(false);
    setCurrentTestimonial(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <div
      className="max-w-5xl mx-auto relative mt-16! bg-white/2 border border-white/5 rounded-[3rem] p-8! md:p-16! backdrop-blur-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative Quote Mark */}
      <Quote className="absolute top-12 left-12 w-64 h-64 text-[#F5A623]/5 rotate-12 pointer-events-none" />

      {/* Slider Content */}
      <div className="relative overflow-hidden h-[450px] md:h-[400px] flex items-center">
        {TESTIMONIALS.map((testimonial, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-out flex flex-col items-center justify-center text-center px-4! md:px-12! ${
              idx === currentTestimonial
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12 pointer-events-none"
            }`}
          >
            <div className="relative mb-8!">
              <div className="absolute inset-0 bg-[#F5A623] blur-2xl opacity-20 animate-pulse" />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#F5A623]/30 relative z-10 shadow-2xl"
              />
            </div>

            <div className="flex gap-1.5 mb-6!">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-[#F5A623] fill-current"
                />
              ))}
            </div>

            <p className="text-xl md:text-3xl text-white font-medium italic mb-8! leading-relaxed max-w-3xl">
              "{testimonial.content}"
            </p>

            <div>
              <h5 className="text-[#F5A623] text-lg md:text-xl font-bold">
                {testimonial.name}
              </h5>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold mt-1!">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls - Side Positioned for Desktop */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 md:-left-6 md:-right-6 flex justify-between items-center pointer-events-none">
        <button
          onClick={prevTestimonial}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#F5A623] hover:text-black hover:border-[#F5A623] transition-all pointer-events-auto"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextTestimonial}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#F5A623] hover:text-black hover:border-[#F5A623] transition-all pointer-events-auto"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8!">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAutoPlay(false);
              setCurrentTestimonial(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentTestimonial
                ? "bg-[#F5A623] w-8"
                : "bg-white/10 w-2.5 hover:bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;

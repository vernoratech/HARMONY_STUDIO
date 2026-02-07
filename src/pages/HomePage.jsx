import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, Calendar, Award, Star } from "lucide-react";
import { SERVICES, STATS } from "../data";
import ServiceCard from "../components/ui/ServiceCard";
import SectionHeading from "../components/ui/SectionHeading";
import TestimonialSlider from "../components/ui/TestimonialSlider";

const HomePage = () => {
  return (
    <div className="animate-fade-in overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2000"
            alt="Dance Studio"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Content */}
        <div className="container-custom relative z-10 pt-32! pb-20!">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] px-5! py-2! rounded-full text-sm font-semibold mb-8! animate-fade-in">
              <Star size={16} className="mr-2! fill-current" />
              Premium Wellness Studio in Mumbai
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8! animate-slide-left">
              Find Your <span className="gradient-text">Rhythm</span>
              <br />
              Discover Your <span className="gradient-text">Strength</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-xl text-gray-300 mb-10! leading-relaxed max-w-xl animate-slide-left"
              style={{ animationDelay: "0.2s" }}
            >
              Experience the harmony of Dance, Yoga, and Zumba at Mumbai's most
              inspiring wellness studio. Transform your body, elevate your mind.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-left"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/services" className="btn btn-primary group">
                Explore Classes
                <ArrowRight
                  size={18}
                  className="ml-2! transition-transform group-hover:translate-x-1"
                />
              </Link>
              <button className="btn btn-secondary flex items-center justify-center group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3! group-hover:bg-[#F5A623] group-hover:text-black transition-all">
                  <Play size={16} fill="currentColor" />
                </div>
                Watch Studio Tour
              </button>
            </div>

            {/* Stats Row */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16! pt-16! border-t border-white/10 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {STATS.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-[#F5A623] mb-1!">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-float">
          <span className="text-xs uppercase tracking-widest mb-2!">
            Scroll
          </span>
          <div className="w-px h-10 bg-linear-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom">
          <SectionHeading
            label="Our Disciplines"
            title="Master Your Movement"
            subtitle="Three pathways to wellness, each designed to transform your body and elevate your spirit."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* CTA */}
          {/* <div className="text-center mt-16!">
            <Link
              to="/schedule"
              className="btn btn-outline inline-flex items-center"
            >
              View Full Schedule
              <ArrowRight size={18} className="ml-2!" />
            </Link>
          </div> */}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding bg-[#0F0F0F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
                  alt="Yoga Class"
                  className="rounded-3xl w-full h-48 object-cover hover-scale border border-white/5"
                />
                <img
                  src="https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770458626/355429496_553441500330880_6564643484386808839_n_wiemtd.jpg"
                  alt="Zumba Class"
                  className="rounded-3xl w-full h-72 md:h-80 object-cover hover-scale border border-white/5"
                />
              </div>
              <div className="space-y-4 pt-8!">
                <img
                  src="https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770456995/IMG_0370_rgbvpa.jpg"
                  alt="Dance Class"
                  className="rounded-3xl w-full h-72 md:h-80 object-cover hover-scale border border-white/5"
                />
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600"
                  alt="Meditation"
                  className="rounded-3xl w-full h-48 object-cover hover-scale border border-white/5"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <SectionHeading
                label="Why Harmony Studio"
                title="Where Passion Meets Purpose"
                subtitle="More than just a studio - we're a community dedicated to your transformation."
                centered={false}
                light={true}
              />

              <div className="space-y-8 mt-10!">
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mr-5! shrink-0 group-hover:bg-[#F5A623] group-hover:text-black transition-all">
                    <Users
                      size={24}
                      className="text-[#F5A623] group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2!">
                      Expert Instructor
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Learn from certified professional with years of
                      experience and a passion for teaching.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mr-5! shrink-0 group-hover:bg-[#F5A623] group-hover:text-black transition-all">
                    <Calendar
                      size={24}
                      className="text-[#F5A623] group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2!">
                      Flexible Scheduling
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Over 30+ weekly classes from early morning to late evening
                      - find your perfect time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mr-5! shrink-0 group-hover:bg-[#F5A623] group-hover:text-black transition-all">
                    <Award
                      size={24}
                      className="text-[#F5A623] group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2!">
                      Award-Winning Programs
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Recognized for excellence in wellness education and
                      community impact.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="btn btn-primary mt-12! inline-flex items-center"
              >
                Learn More About Us
                <ArrowRight size={18} className="ml-2!" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="container-custom">
          <SectionHeading
            label="Testimonials"
            title="What Our Members Say"
            subtitle="Real stories from real people who transformed their lives with us."
            light={true}
          />

          <TestimonialSlider />
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-24! relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F5A623]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20" />

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6!">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-black/70 text-lg mb-10! max-w-2xl mx-auto">
            Join thousands of members who have discovered the transformative
            power of movement. Your first class is on us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="bg-black text-white px-8! py-4! rounded-full font-bold hover:bg-gray-900 transition-all inline-flex items-center justify-center"
            >
              View Gallery
              <ArrowRight size={18} className="ml-2!" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-black border-2 border-black px-8! py-4! rounded-full font-bold hover:bg-black hover:text-white transition-all"
            >
              Book Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

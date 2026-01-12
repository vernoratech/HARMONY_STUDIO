import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Heart,
  Target,
  ArrowRight,
  Eye,
  Sparkles,
  Trophy,
  Calendar,
  Award,
  Star,
} from "lucide-react";
import { INSTRUCTORS } from "../data";
import InstructorCard from "../components/ui/InstructorCard";
import SectionHeading from "../components/ui/SectionHeading";
import TestimonialSlider from "../components/ui/TestimonialSlider";

const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      {/* ===== HERO SECTION (About Us Intro) ===== */}
      <section className="relative pt-32! pb-24! bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2000"
            alt="Studio"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black via-black/90 to-black" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] mb-4! block animate-slide-up">
            About Harmony Studio
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-8! italic animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Where Energy Meets <span className="gradient-text">Expression</span>
          </h1>
          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Founded in 2018, Harmony Studio was born from a simple belief: that
            movement is medicine, and everyone deserves access to transformative
            wellness experiences. We are more than a fitness space; we are a
            community dedicated to the art of being well.
          </p>
        </div>
      </section>

      {/* ===== MISSION, VISION, VALUES ===== */}
      <section className="py-24! bg-[#0A0A0A] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5A623]/5 blur-3xl rounded-full translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white/5 border border-white/10 p-10! rounded-3xl hover:border-[#F5A623]/30 transition-all hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mb-6! text-[#F5A623]">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4! text-white">
                Our Mission
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To inspire and empower individuals through the transformative
                power of dance, yoga, and rhythmic exercise, providing a safe
                sanctuary for growth, expression, and holistic wellness.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/5 border border-white/10 p-10! rounded-3xl hover:border-[#F5A623]/30 transition-all hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mb-6! text-[#F5A623]">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4! text-white">
                Our Vision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To be the global heartbeat of creative fitness, where every
                movement becomes a celebration of life and where individuals
                discover their absolute best selves.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white/5 border border-white/10 p-10! rounded-3xl hover:border-[#F5A623]/30 transition-all hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mb-6! text-[#F5A623]">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4! text-white">
                Our Values
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: Heart, label: "Inclusivity In Action" },
                  { icon: Users, label: "Community Over Competition" },
                  { icon: Star, label: "Authentic Expression" },
                  { icon: Trophy, label: "Excellence in Instruction" },
                ].map((value, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <value.icon size={16} className="text-[#F5A623]" />
                    <span className="font-medium text-sm">{value.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24! bg-gray-300">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <SectionHeading
                label="The Harmony Advantage"
                title="Why Choose Harmony?"
                subtitle="Experience the difference of a studio designed around your growth."
                centered={false}
                light={false}
              />

              <div className="space-y-8 mt-10!">
                {[
                  {
                    icon: Users,
                    title: "World-Class Mentorship",
                    desc: "Our instructors are more than teachers—they are professional performers and certified pioneers in their craft.",
                  },
                  {
                    icon: Calendar,
                    title: "Unrivaled Flexibility",
                    desc: "With over 150+ classes weekly, we fit your schedule, not the other way around. Early birds and night owls are equally welcome.",
                  },
                  {
                    icon: Award,
                    title: "Premium Facilities",
                    desc: "State-of-the-art acoustic design, climate-controlled studios, and professional sprunt floors for joint safety.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mr-5! shrink-0 group-hover:bg-[#F5A623] group-hover:scale-110 transition-all duration-300">
                      <item.icon
                        size={24}
                        className="text-[#F5A623] group-hover:text-black transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2!">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuals */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
                  alt="Yoga"
                  className="rounded-3xl w-full h-64 object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600"
                  alt="Mindfulness"
                  className="rounded-3xl w-full h-48 object-cover shadow-xl"
                />
              </div>
              <div className="space-y-4 pt-12!">
                <img
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600"
                  alt="Dance"
                  className="rounded-3xl w-full h-48 object-cover shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=600"
                  alt="Zumba"
                  className="rounded-3xl w-full h-64 object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SLIDER ===== */}
      <section className="py-24! bg-[#0A0A0A] relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeading
            label="Member Success"
            title="Voices of Harmony"
            subtitle="Hear from the individuals who have transformed their lives within our walls."
            light={true}
          />

          <TestimonialSlider />
        </div>
      </section>

      {/* ===== INSTRUCTORS SECTION ===== */}
      <section className="py-24! bg-[#1A1A1A]">
        <div className="container-custom">
          <SectionHeading
            label="Expert Mentors"
            title="Meet Your Guides"
            subtitle="World-class expertise committed to your evolution."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {INSTRUCTORS.map((instructor, index) => (
              <InstructorCard
                key={instructor.name}
                instructor={instructor}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-16!">
            <Link
              to="/contact"
              className="btn btn-outline inline-flex items-center"
            >
              Join Our Community
              <ArrowRight size={18} className="ml-2!" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL STATS (Branded Bar) ===== */}
      <section className="py-20! bg-[#F5A623]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "5000+", label: "Active Members" },
              { value: "15", label: "Certified Leaders" },
              { value: "150+", label: "Weekly Sessions" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-extrabold text-black mb-2! group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-black/80 text-xs font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

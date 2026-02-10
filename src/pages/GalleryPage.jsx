import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { GALLERY, ACTIONSHOT } from "../data";
import GalleryItem from "../components/ui/GalleryItem";
import SectionHeading from "../components/ui/SectionHeading";

const CATEGORIES = ["All", "Yoga", "Dance", "Zumba", "Aerobics", "Celebration"];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGallery = useMemo(() => {
    if (activeFilter === "All") return GALLERY;
    return GALLERY.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="animate-fade-in overflow-x-hidden">
      {/* PAGE HEADER */}
      <section className="relative !pt-40 !pb-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5A623]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.3em] !mb-6 block animate-slide-up">
            Visual Journey
          </span>
          <h1
            className="text-6xl md:text-8xl font-bold text-white !mb-8 italic animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            The Art of <span className="gradient-text">Movement</span>
          </h1>
          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Experience the raw energy, focused stillness, and vibrant community
            of Harmony Studio through our curated collection of moments.
          </p>
        </div>
      </section>

      {/* FILTERED EXPLORATION GRID */}
      <section className="!py-24 bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 !mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${activeFilter === cat
                  ? "bg-[#F5A623] border-[#F5A623] text-black shadow-[0_0_20px_rgba(245,166,35,0.3)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-[#F5A623]/50 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* {filteredGallery.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <GalleryItem item={item} />
              </div>
            ))} */}
            {filteredGallery.map((item, index) => (
              <GalleryItem
                key={index}
                item={item}
                items={filteredGallery}
                index={index}
              />
            ))}

          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-20! text-gray-500 italic">
              No Contents found in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ACTION SHOTS MASONRY */}
      <section className="py-24! bg-[#0A0A0A]">
        <div className="container-custom">
          <SectionHeading
            label="Action Shots"
            title="Pulse of the Studio"
            subtitle="Dynamic moments frozen in time, capturing the intensity and passion of our sessions."
            light={true}
          />

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-16!">
            {/* {GALLERY.filter(item => item.type === "image")
                 .slice(0, 9)
                 .map((item, idx) => ( */}

            {ACTIONSHOT.slice(0, 9).map((item, idx) => (
              <div
                key={idx}
                className="mb-6! break-inside-avoid animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6!">
                    <p className="text-white font-bold text-lg">
                      {item.caption}
                    </p>
                    <span className="text-[#F5A623] text-xs uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY SPOTLIGHT */}
      <section className="py-24! bg-black">
        <div className="container-custom">
          <SectionHeading
            label="Featured Categories"
            title="Focus on Excellence"
            subtitle="Dive deep into our core disciplines through these signature moments."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16!">
            {/* Yoga Spotlight */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] h-[500px] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                alt="Yoga Spotlight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent group-hover:via-black/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-12!">
                <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.3em] mb-3! block">
                  Yoga
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4! italic">
                  The Path of Stillness
                </h3>
                <p className="text-gray-300 max-w-xl text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Witness the harmony of breath and movement in our serene
                  studio environment.
                </p>
              </div>
            </div>

            {/* Zumba Spotlight */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] h-[500px] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
                alt="Zumba Spotlight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent group-hover:via-black/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-10!">
                <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.3em] mb-2! block">
                  Zumba
                </span>
                <h3 className="text-3xl font-bold text-white italic">
                  Pure Energy
                </h3>
              </div>
            </div>

            {/* Dance Spotlight */}
            <div className="md:col-span-12 group relative overflow-hidden rounded-[2.5rem] h-[400px] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200"
                alt="Dance Spotlight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent group-hover:via-black/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-12 right-12 p-0! pb-12! flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.3em] mb-3! block">
                    Dance
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-white italic">
                    Expressive Souls
                  </h3>
                </div>
                <p className="text-gray-300 max-w-md text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Capture the grace and power of contemporary movement in our
                  professional practice halls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SANCTUARY - OVERLAPPING LAYOUT */}
      <section className="py-24! bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/5 rounded-full blur-[100px]" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <SectionHeading
                label="The Space"
                title="Our Sanctuary"
                subtitle="A meticulously designed environment to foster growth, peace, and explosive energy."
                centered={false}
                light={true}
              />
              <p className="text-gray-400 text-lg leading-relaxed mb-10! max-w-xl">
                From our sun-drenched yoga shala to our high-octane dance halls,
                every corner of Harmony Studio is built with your experience in
                mind.
              </p>
              <div className="flex gap-8! mt-12!">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F5A623] mb-2!">
                    500+
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">
                    Sq. Ft. Space
                  </div>
                </div>
                <div className="border-r border-white/10" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F5A623] mb-2!">
                    01
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">
                    Premium Studios
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px]">
              {/* Overlapping Images */}
              <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-[3rem] overflow-hidden border border-white/10 z-10 shadow-2xl hover:z-30 transition-all duration-500 group">
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800"
                  alt="Studio Ambiance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-2/3 rounded-[3rem] overflow-hidden border border-white/10 z-20 shadow-2xl hover:z-30 transition-all duration-500 group">
                <img
                  src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?auto=format&fit=crop&q=80&w=800"
                  alt="Lounge Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#F5A623] rounded-full flex items-center justify-center z-40 shadow-2xl animate-float">
                <span className="text-black font-black text-xs uppercase tracking-tighter text-center">
                  Premium
                  <br />
                  Facility
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOMENTS OF HARMONY - IMMERSIVE PARALLAX */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2000"
            alt="Immersive Background"
            className="w-full h-full object-cover opacity-60 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-6xl md:text-9xl font-black text-white/10 uppercase tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap">
            Living Harmony
          </h2>
          <div className="relative">
            <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.5em] mb-6! block">
              The Soul of Harmony
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white italic max-w-4xl mx-auto leading-tight">
              "Dance is the hidden language of the soul."
            </h2>
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="py-32! bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F5A623]/5" />
        <div className="container-custom relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8!">
            Ready to Join the <span className="text-[#F5A623]">Frames</span>?
          </h2>
          <p className="text-gray-400 !mb-12 text-xl leading-relaxed">
            Beyond the lens lies a community of movers, dreamers, and achievers.
            Your first session is where your own transformation story begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              state={{
                message:
                  "I want to book a trial. I'm interested in exploring the studio or classes.",
              }}
              className="btn btn-primary px-10"
            >
              Book Your First Class
            </Link>
            <a href="/services" className="btn btn-outline px-10">
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

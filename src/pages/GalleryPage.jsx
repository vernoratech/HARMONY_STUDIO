import { GALLERY } from '../data';
import GalleryItem from '../components/ui/GalleryItem';

const GalleryPage = () => {
    return (
        <div className="animate-fade-in">
            {/* PAGE HEADER */}
            <section className="relative !pt-32 !pb-20 bg-gradient-to-b from-black to-[#0A0A0A]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F5A623] rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10 text-center max-w-3xl">
                    <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] !mb-4 block">
                        Studio Gallery
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white !mb-6">
                        Where Movement Comes Alive
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Step inside our space. Feel the energy, see the light, imagine yourself here.
                        This is where transformation happens—one breath, one step, one beat at a time.
                    </p>
                </div>
            </section>

            {/* IMAGE GRID */}
            <section className="!py-20 bg-[#0A0A0A]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {GALLERY.map((item, index) => (
                            <GalleryItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* VISIT CTA */}
            <section className="!py-20 bg-[#1A1A1A]">
                <div className="container-custom text-center max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white !mb-4">
                        Experience It Yourself
                    </h2>
                    <p className="text-gray-400 !mb-10 text-lg">
                        Photos only tell part of the story. Visit us, feel the atmosphere,
                        and discover why our members call this their second home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="btn btn-primary text-lg"
                        >
                            Schedule a Visit
                        </a>
                        <a
                            href="/schedule"
                            className="btn btn-outline text-lg"
                        >
                            View Class Schedule
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;

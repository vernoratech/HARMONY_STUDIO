import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { SERVICES } from '../data';
import SectionHeading from '../components/ui/SectionHeading';

const ServicesPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative !pt-32 !pb-20 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F5A623]/10 to-transparent" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl -translate-y-1/2" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] !mb-4 block">
                            Our Services
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white !mb-6">
                            Three Paths to{' '}
                            <span className="gradient-text">Wellness</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Whether you seek the grace of dance, the peace of yoga, or the energy of Zumba —
                            we have a practice that resonates with your spirit.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="!py-24 bg-[#0A0A0A]">
                <div className="container-custom">
                    <div className="space-y-32">
                        {SERVICES.map((service, idx) => (
                            <div
                                key={service.id}
                                id={service.id} // 👈 ADD THIS
                                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                                    } items-center gap-12 lg:gap-20 scroll-mt-32`}
                            >

                                {/* Image */}
                                <div className="lg:w-1/2 overflow-hidden">
                                    <div className="relative group">
                                        {/* Background Decoration */}
                                        <div
                                            className="absolute -inset-4 rounded-3xl -z-10 transition-all duration-500 group-hover:scale-105"
                                            style={{ backgroundColor: `${service.color}15` }}
                                        />
                                        <div
                                            className="absolute -inset-4 rounded-3xl -z-10 rotate-3 transition-all duration-500 group-hover:rotate-6"
                                            style={{ backgroundColor: `${service.color}10` }}
                                        />

                                        {/* Main Image */}
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                        />

                                        {/* Floating Badge */}
                                        <div
                                            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-black border-2 rounded-xl md:rounded-2xl !p-4 md:!p-6 shadow-xl"
                                            style={{ borderColor: service.color }}
                                        >
                                            <span className="text-2xl md:text-4xl font-bold" style={{ color: service.color }}>
                                                0{idx + 1}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:w-1/2">
                                    <span
                                        className="text-sm font-bold tracking-widest uppercase !mb-4 block"
                                        style={{ color: service.color }}
                                    >
                                        {service.tagline}
                                    </span>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-white !mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-gray-400 !mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-4 !mb-10">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center text-gray-300 bg-white/5 rounded-xl !px-4 !py-3 hover:bg-white/10 transition-colors"
                                            >
                                                <div
                                                    className="w-6 h-6 rounded-full flex items-center justify-center !mr-3"
                                                    style={{ backgroundColor: `${service.color}30`, color: service.color }}
                                                >
                                                    <ChevronRight size={14} />
                                                </div>
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTAs */}
                                    <div className="flex flex-wrap gap-4">
                                        <Link
                                            to={`/services/${service.slug}`}
                                            className="inline-flex items-center !px-8 !py-3 rounded-full font-bold transition-all"
                                            style={{ backgroundColor: service.color, color: '#000' }}
                                        >
                                            Learn More
                                            <ArrowRight size={18} className="!ml-2" />
                                        </Link>
                                        <Link
                                            to="/contact"
                                            state={{ service: service.id }} 
                                            className="inline-flex items-center !px-8 !py-3 rounded-full font-bold border-2 text-white hover:bg-white hover:text-black transition-all"
                                            style={{ borderColor: service.color }}
                                        >
                                            Join Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="!py-20 bg-[#1A1A1A]">
                <div className="container-custom text-center">
                    <SectionHeading
                        label="Ready to Start?"
                        title="Book Your First Class Today"
                        subtitle="Experience the difference. Your first class is complimentary."
                        light={true}
                    />
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn btn-primary">
                            Book Free Trial
                            <ArrowRight size={18} className="!ml-2" />
                        </Link>
                        {/* <Link to="/pricing" className="btn btn-outline">
                            View Pricing
                        </Link> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;

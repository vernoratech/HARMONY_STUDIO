import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, AlertCircle, Calendar, Clock } from 'lucide-react';
import { SERVICES } from '../data';
import BenefitCard from '../components/ui/BenefitCard';
import PersonaCard from '../components/ui/PersonaCard';

const ServiceDetailPage = () => {
    const { type } = useParams();
    const service = SERVICES.find(s => s.slug === type);

    // 404 if service not found
    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="animate-fade-in">
            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="container-custom relative z-10 !pt-32 !pb-20">
                    <div className="max-w-3xl">
                        <span
                            className="text-sm font-bold uppercase tracking-[0.2em] !mb-4 block"
                            style={{ color: service.color }}
                        >
                            {service.tagline}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white !mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-300 !mb-10 leading-relaxed">
                            {service.description}
                        </p>
                        <Link
                            to="/contact"
                            className="btn btn-primary inline-flex items-center text-lg"
                            state={{ service: service.id }} 
                            style={{ backgroundColor: service.color, color: '#000' }}
                        >
                            Join This Class
                            <ArrowRight size={20} className="!ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* DEEP EXPLANATION SECTION */}
            <section className="!py-20 bg-[#0A0A0A]">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white !mb-12 text-center">
                        What to Expect
                    </h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-[#F5A623] !mb-3">The Session</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {service.deepExplanation.intro}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#F5A623] !mb-3">The Experience</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {service.deepExplanation.experience}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#F5A623] !mb-3">Experience Level</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {service.deepExplanation.level}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO IT'S FOR SECTION */}
            <section className="!py-20 bg-[#1A1A1A]">
                <div className="container-custom max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white !mb-12 text-center">
                        Who It's For
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 !mb-12">
                        {service.whoItsFor.map((persona, index) => (
                            <PersonaCard key={index} persona={persona} />
                        ))}
                    </div>

                    {/* Who It's NOT For */}
                    <div className="bg-red-900/10 border border-red-500/30 rounded-2xl !p-6 max-w-3xl mx-auto">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="text-red-400 shrink-0 !mt-1" size={24} />
                            <div>
                                <h4 className="text-lg font-bold text-white !mb-2">
                                    Honest Truth: Who It's NOT For
                                </h4>
                                <p className="text-gray-300 leading-relaxed">
                                    {service.whoItsNotFor}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="!py-20 bg-[#0A0A0A]">
                <div className="container-custom max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white !mb-4 text-center">
                        What You'll Gain
                    </h2>
                    <p className="text-gray-400 text-center !mb-12 max-w-2xl mx-auto">
                        Real benefits you'll experience, not marketing promises.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.benefits.map((benefit, index) => (
                            <BenefitCard key={index} benefit={benefit} />
                        ))}
                    </div>
                </div>
            </section>

            {/* SCHEDULE PREVIEW */}
            {/* <section className="!py-20 bg-[#1A1A1A]">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white !mb-4 text-center">
                        Weekly Schedule
                    </h2>
                    <p className="text-gray-400 text-center !mb-12">
                        {service.title} classes happening this week
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 !mb-10">
                        {service.schedulePreview.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl !p-5 hover:border-[#F5A623]/30 transition-all"
                            >
                                <div className="flex items-center justify-between !mb-3">
                                    <span className="text-[#F5A623] font-bold">{item.day}</span>
                                    <span
                                        className="text-xs !px-3 !py-1 rounded-full font-semibold"
                                        style={{
                                            backgroundColor: `${service.color}20`,
                                            color: service.color
                                        }}
                                    >
                                        {item.level}
                                    </span>
                                </div>
                                <h4 className="text-white font-semibold !mb-2">{item.class}</h4>
                                <div className="flex items-center text-gray-400 text-sm">
                                    <Clock size={14} className="!mr-2" />
                                    {item.time}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/schedule"
                            className="btn btn-outline inline-flex items-center"
                            style={{ borderColor: service.color, color: service.color }}
                        >
                            <Calendar size={18} className="!mr-2" />
                            View Full Schedule
                        </Link>
                    </div>
                </div>
            </section> */}

            {/* FINAL JOIN CTA */}
            <section
                className="!py-24 relative overflow-hidden"
                style={{ backgroundColor: service.color }}
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-black rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10 text-center max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-black !mb-6">
                        Ready to Begin?
                    </h2>
                    <p className="text-black/80 text-lg !mb-10 leading-relaxed">
                        Join thousands who've discovered the transformative power of {service.title.toLowerCase()}.
                        Your first class is complimentary — no pressure, just progress.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center !mb-8">
                        <Link
                            to="/contact"
                            state={{ service: service.id }} 
                            style={{ borderColor: service.color }}
                            className="btn btn-primary text-lg !bg-black !text-white hover:!bg-gray-900 !border-2 !border-black"
                        >
                            Book Your First Session
                            <ArrowRight size={20} className="!ml-2" />
                        </Link>
                        {/* <Link
                            to="/pricing"
                            className="btn btn-outline text-lg !bg-transparent !border-2 !border-black !text-black hover:!bg-black hover:!text-white"
                        >
                            View Pricing
                        </Link> */}
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-black/70">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-black/50" />
                            All levels welcome
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-black/50" />
                            No pressure, just progress
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-black/50" />
                            First class free
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;

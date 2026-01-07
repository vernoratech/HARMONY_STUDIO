import { Link } from 'react-router-dom';
import { Users, Star, Heart, Target, ArrowRight } from 'lucide-react';
import { INSTRUCTORS } from '../data';
import InstructorCard from '../components/ui/InstructorCard';
import SectionHeading from '../components/ui/SectionHeading';

const AboutPage = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative !pt-32 !pb-24 bg-black overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2000"
                        alt="Studio"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] !mb-4 block">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white !mb-8 italic">
                        Where Energy Meets <span className="gradient-text">Expression</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Founded in 2018, Harmony Studio was born from a simple belief: that movement is medicine,
                        and everyone deserves access to transformative wellness experiences.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="!py-24 bg-[#0A0A0A]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Images */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
                                    alt="Yoga session"
                                    className="rounded-2xl w-full h-72 object-cover !mt-8"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600"
                                    alt="Meditation"
                                    className="rounded-2xl w-full h-72 object-cover"
                                />
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800"
                                alt="Dance"
                                className="rounded-2xl w-3/4 h-64 object-cover -!mt-12 mx-auto relative z-10 shadow-2xl border-4 border-[#0A0A0A]"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <SectionHeading
                                label="Our Philosophy"
                                title="Movement as Medicine"
                                subtitle=""
                                centered={false}
                                light={true}
                            />

                            <div className="space-y-6 text-gray-400 leading-relaxed">
                                <p>
                                    We believe that wellness isn't a destination — it's a rhythm, a practice, a way of being.
                                    Whether you're stepping onto a yoga mat for the first time or perfecting a complex choreography,
                                    our mission is to support your evolution.
                                </p>
                                <p>
                                    At Harmony Studio, we've created more than just a fitness space. We've built a sanctuary
                                    where every body is celebrated, every goal is valid, and every step forward is a victory.
                                </p>
                            </div>

                            {/* Values */}
                            <div className="grid grid-cols-2 gap-6 !mt-10">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center !mr-4 shrink-0">
                                        <Users size={22} className="text-[#F5A623]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white !mb-1">Community First</h4>
                                        <p className="text-sm text-gray-500">We're a tribe, not just a gym</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center !mr-4 shrink-0">
                                        <Star size={22} className="text-[#F5A623]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white !mb-1">Excellence</h4>
                                        <p className="text-sm text-gray-500">World-class instruction</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center !mr-4 shrink-0">
                                        <Heart size={22} className="text-[#F5A623]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white !mb-1">Inclusivity</h4>
                                        <p className="text-sm text-gray-500">Every body is welcome</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center !mr-4 shrink-0">
                                        <Target size={22} className="text-[#F5A623]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white !mb-1">Growth Mindset</h4>
                                        <p className="text-sm text-gray-500">Progress over perfection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="!py-24 bg-[#1A1A1A]">
                <div className="container-custom">
                    <SectionHeading
                        label="Our Journey"
                        title="A Decade of Growth"
                        subtitle="From a small studio to Mumbai's premier wellness destination"
                        light={true}
                    />

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5A623] via-[#F5A623]/50 to-transparent" />

                            {/* Timeline Items */}
                            {[
                                { year: '2018', title: 'The Beginning', desc: 'Started with just 2 yoga instructors and a dream to transform lives.' },
                                { year: '2019', title: 'Dance Program Launch', desc: 'Introduced our signature dance programs, attracting over 500 new members.' },
                                { year: '2020', title: 'Virtual Evolution', desc: 'Pivoted to online classes, reaching students across India and beyond.' },
                                { year: '2022', title: 'Studio Expansion', desc: 'Opened our flagship 5,000 sq ft facility with state-of-the-art equipment.' },
                                { year: '2024', title: 'Community of 5000+', desc: 'Celebrating our growing family of wellness enthusiasts.' },
                            ].map((item, index) => (
                                <div key={index} className="relative !pl-20 !pb-12 last:!pb-0">
                                    {/* Dot */}
                                    <div className="absolute left-4 w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center text-black font-bold text-xs">
                                        {index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="bg-white/5 rounded-2xl !p-6 hover:bg-white/10 transition-colors">
                                        <span className="text-[#F5A623] font-bold text-sm">{item.year}</span>
                                        <h4 className="text-xl font-bold text-white !mt-2 !mb-2">{item.title}</h4>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructors Section */}
            <section className="!py-24 bg-[#0A0A0A]">
                <div className="container-custom">
                    <SectionHeading
                        label="Meet The Team"
                        title="Our Expert Instructors"
                        subtitle="Passionate professionals dedicated to your wellness journey"
                        light={true}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {INSTRUCTORS.map((instructor, index) => (
                            <InstructorCard key={instructor.name} instructor={instructor} index={index} />
                        ))}
                    </div>

                    <div className="text-center !mt-16">
                        <Link to="/contact" className="btn btn-primary inline-flex items-center">
                            Join Our Team
                            <ArrowRight size={18} className="!ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="!py-20 bg-[#F5A623]">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '10+', label: 'Years Experience' },
                            { value: '5000+', label: 'Happy Members' },
                            { value: '15', label: 'Expert Trainers' },
                            { value: '150+', label: 'Weekly Classes' },
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl md:text-5xl font-bold text-black !mb-2">{stat.value}</div>
                                <div className="text-black/70 text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

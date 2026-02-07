import { useParams, Link, Navigate } from 'react-router-dom';
import { INSTRUCTORS, SCHEDULE } from '../data';
import {
    Instagram,
    Twitter,
    Facebook,
    ArrowLeft,
    CheckCircle,
    Award,
    Clock,
    Calendar,
    ArrowRight
} from 'lucide-react';

const InstructorDetailPage = () => {
    const { name } = useParams();
    const instructor = INSTRUCTORS.find(inst => inst.slug === name);

    if (!instructor) {
        return <Navigate to="/about" replace />;
    }

    // Get classes for this instructor from the schedule
    const instructorClasses = [];
    Object.entries(SCHEDULE).forEach(([day, classes]) => {
        console.log(day, classes);

        classes.forEach(cls => {
            if (cls.instructor === instructor.name) {
                instructorClasses.push({ day, ...cls });
            }
        });
    });

    return (
        <div className="animate-fade-in">
            {/* BACK BUTTON */}
            <div className="container-custom relative z-20 !pt-32">
                <Link
                    to="/about"
                    className="inline-flex items-center text-gray-400 hover:text-[#F5A623] transition-colors group"
                >
                    <ArrowLeft size={20} className="!mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Team
                </Link>
            </div>

            {/* HERO SECTION */}
            <section className="!py-12 md:!py-20 overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Image Column */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-[#F5A623]/10 rounded-3xl blur-2xl animate-pulse" />
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src={instructor.image}
                                    alt={instructor.name}
                                    className="w-full h-[500px] md:h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex gap-4">
                                        {instructor.social.instagram && (
                                            <a href={instructor.social.instagram} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#F5A623] hover:text-black transition-all">
                                                <Instagram size={18} />
                                            </a>
                                        )}
                                        {instructor.social.twitter && (
                                            <a href={instructor.social.twitter} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#F5A623] hover:text-black transition-all">
                                                <Twitter size={18} />
                                            </a>
                                        )}
                                        {instructor.social.facebook && (
                                            <a href={instructor.social.facebook} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#F5A623] hover:text-black transition-all">
                                                <Facebook size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:w-1/2">
                            <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] !mb-4 block">
                                {instructor.role}
                            </span>
                            <h1 className="text-5xl md:text-6xl font-bold text-white !mb-6 leading-tight">
                                {instructor.name}
                            </h1>
                            <div className="flex flex-wrap gap-6 !mb-10 text-gray-400">
                                <div className="flex items-center">
                                    <Award size={20} className="text-[#F5A623] !mr-2" />
                                    <span>{instructor.experience} Experience</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle size={20} className="text-[#F5A623] !mr-2" />
                                    <span>Certified Expert</span>
                                </div>
                            </div>
                            <p className="text-xl text-gray-300 !mb-8 leading-relaxed">
                                {instructor.fullBio}
                            </p>

                            <div className="!p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-lg font-bold text-white !mb-3">Education & Degrees</h3>
                                <p className="text-gray-400 uppercase text-sm tracking-wider font-medium">
                                    {instructor.education}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECIALTIES SECTION */}
            <section className="!py-20 bg-[#0A0A0A]">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-white !mb-12 text-center">My Specialties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {instructor.specialties.map((specialty, idx) => (
                            <div key={idx} className="!p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F5A623]/30 transition-all text-center">
                                <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center mx-auto !mb-4">
                                    <CheckCircle size={24} className="text-[#F5A623]" />
                                </div>
                                <span className="text-lg font-semibold text-white">{specialty}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLASSES SCHEDULE SECTION */}
            {/* <section className="!py-24">
                <div className="container-custom">
                    <div className="text-center !mb-16">
                        <h2 className="text-4xl font-bold text-white !mb-4">Weekly Class Schedule</h2>
                        <p className="text-gray-400">Find a class and join me this week</p>
                    </div>

                    <div className="overflow-x-auto">
                        {instructorClasses.length > 0 ? (
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="!py-6 !px-4 text-gray-400 font-medium tracking-wider uppercase text-xs">Day</th>
                                        <th className="!py-6 !px-4 text-gray-400 font-medium tracking-wider uppercase text-xs">Class Name</th>
                                        <th className="!py-6 !px-4 text-gray-400 font-medium tracking-wider uppercase text-xs">Time</th>
                                        <th className="!py-6 !px-4 text-gray-400 font-medium tracking-wider uppercase text-xs">Level</th>
                                        <th className="!py-6 !px-4 text-right"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">

                                    {instructorClasses.map((cls, idx) => (
                                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="!py-8 !px-4">
                                                <div className="flex items-center">
                                                    <Calendar size={18} className="text-[#F5A623] !mr-3" />
                                                    <span className="text-white font-semibold">{cls.day}</span>
                                                </div>
                                            </td>
                                            <td className="!py-8 !px-4">
                                                <span className="text-white text-lg font-bold">{cls.type}</span>
                                            </td>
                                            <td className="!py-8 !px-4">
                                                <div className="flex items-center text-gray-300">
                                                    <Clock size={18} className="!mr-2 text-[#F5A623]" />
                                                    {cls.time}
                                                </div>
                                            </td>
                                            <td className="!py-8 !px-4">
                                                <span className="!px-3 !py-1 rounded-full bg-white/10 text-xs text-white uppercase tracking-wider font-bold">
                                                    {cls.level}
                                                </span>
                                            </td>
                                            <td className="!py-8 !px-4 text-right">
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center text-[#F5A623] font-bold hover:translate-x-1 transition-transform"
                                                >
                                                    Register Now
                                                    <ArrowRight size={18} className="!ml-2" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        ) : (
                            <div className='border border-amber-500 p-6 rounded-md !mb-6'>
                                <p className="text-center text-gray-400">
                                    No classes scheduled currently.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section> */}

            {/* FINAL CTA */}
            <section className="!py-20 bg-gradient-to-b from-transparent to-[#F5A623]/10">
                <div className="container-custom text-center max-w-3xl">
                    <h2 className="text-4xl font-bold text-white !mb-6">Ready to Train with {instructor.name.split(' ')[0]}?</h2>
                    <p className="text-xl text-gray-400 !mb-10">
                        Join my next class and experience the transformation. All fitness levels are welcome!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn btn-primary group">
                            Book a Consultation
                            <ArrowRight size={20} className="!ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link to="/services" className="btn btn-secondary">
                            View Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InstructorDetailPage;

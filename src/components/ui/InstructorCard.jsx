import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react';

const InstructorCard = ({ instructor, index }) => {
    return (
        <div
            className="group relative animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <Link to={`/instructors/${instructor.slug}`} className="block overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] !mb-6">
                    <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#F5A623] flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-500">
                            <ExternalLink size={24} />
                        </div>
                    </div>

                    {/* Gold Border Effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#F5A623]/50 transition-colors duration-500" />
                </div>
            </Link>

            {/* Social Links (Outside main link to be independently clickable if needed, but here simple is better) */}
            <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                {instructor.social.instagram && (
                    <a
                        href={instructor.social.instagram}
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F5A623] hover:text-black transition-all"
                    >
                        <Instagram size={14} />
                    </a>
                )}
                {instructor.social.twitter && (
                    <a
                        href={instructor.social.twitter}
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F5A623] hover:text-black transition-all"
                    >
                        <Twitter size={14} />
                    </a>
                )}
                {instructor.social.facebook && (
                    <a
                        href={instructor.social.facebook}
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F5A623] hover:text-black transition-all"
                    >
                        <Facebook size={14} />
                    </a>
                )}
            </div>

            {/* Info */}
            <div className="text-center">
                <Link to={`/instructors/${instructor.slug}`}>
                    <h4 className="text-xl font-bold text-white group-hover:text-[#F5A623] transition-colors !mb-1">
                        {instructor.name}
                    </h4>
                </Link>
                <p className="text-[#F5A623] font-medium text-sm !mb-2">{instructor.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{instructor.bio}</p>
            </div>
        </div>
    );
};

export default InstructorCard;

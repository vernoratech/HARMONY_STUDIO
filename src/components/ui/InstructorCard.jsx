import { Instagram, Linkedin } from 'lucide-react';

const InstructorCard = ({ instructor, index }) => {
    return (
        <div
            className="group relative animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-3xl aspect-[3/4] !mb-6">
                <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Social Links */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F5A623] hover:text-black transition-all"
                    >
                        <Instagram size={18} />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F5A623] hover:text-black transition-all"
                    >
                        <Linkedin size={18} />
                    </a>
                </div>

                {/* Gold Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#F5A623]/50 transition-colors duration-500" />
            </div>

            {/* Info */}
            <div className="text-center">
                <h4 className="text-xl font-bold text-white group-hover:text-[#F5A623] transition-colors !mb-1">
                    {instructor.name}
                </h4>
                <p className="text-[#F5A623] font-medium text-sm !mb-2">{instructor.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{instructor.bio}</p>
            </div>
        </div>
    );
};

export default InstructorCard;

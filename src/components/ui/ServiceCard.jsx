import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
    return (
        <div
            className="group relative bg-[#1A1A1A] rounded-3xl overflow-hidden border border-white/5 hover:border-[#F5A623]/30 transition-all duration-500 hover-lift"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                {/* Type Badge */}
                {/* <div
                    className="absolute top-4 right-4 !px-4 !py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${service.color}20`, color: service.color }}
                >
                    {service.id}
                </div> */}
            </div>

            {/* Content */}
            <div className="!p-8">
                <span className="text-[#F5A623] text-sm font-medium tracking-widest uppercase !mb-2 block">
                    {service.tagline}
                </span>
                <h3 className="text-2xl font-bold text-white !mb-3 group-hover:text-[#F5A623] transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed !mb-6 line-clamp-2">
                    {service.description}
                </p>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-2 !mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                        <span
                            key={feature}
                            className="!px-3 !py-1 bg-white/5 rounded-full text-xs text-gray-300"
                        >
                            {feature}
                        </span>
                    ))}
                    {service.features.length > 3 && (
                        <span className="!px-3 !py-1 bg-white/5 rounded-full text-xs text-gray-500">
                            +{service.features.length - 3} more
                        </span>
                    )}
                </div>

                {/* CTA */}
                <Link
                    // to="/services"
                    to={`/services#${service.id}`}
                    className="inline-flex items-center text-[#F5A623] font-semibold text-sm group/link"
                >
                    <span className="underline-animation">Explore {service.title}</span>
                    <ArrowRight
                        size={16}
                        className="!ml-2 transition-transform group-hover/link:translate-x-1"
                    />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;

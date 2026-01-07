import { Check, Star } from 'lucide-react';

const PricingCard = ({ plan, index }) => {
    const isHighlighted = plan.highlighted;

    return (
        <div
            className={`relative rounded-3xl !p-8 lg:!p-10 transition-all duration-500 animate-fade-in ${isHighlighted
                    ? 'bg-gradient-to-b from-[#F5A623]/20 to-[#1A1A1A] border-2 border-[#F5A623] scale-105 shadow-2xl shadow-[#F5A623]/20'
                    : 'bg-[#1A1A1A] border border-white/10 hover:border-white/20'
                }`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Popular Badge */}
            {isHighlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#F5A623] text-black !px-6 !py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <Star size={12} fill="currentColor" />
                        Most Popular
                    </div>
                </div>
            )}

            {/* Plan Header */}
            <div className="text-center !mb-8">
                <span className={`text-sm font-bold uppercase tracking-widest ${isHighlighted ? 'text-[#F5A623]' : 'text-gray-500'}`}>
                    {plan.name}
                </span>
                <div className="flex items-baseline justify-center !mt-4 !mb-3">
                    <span className="text-gray-500 text-2xl !mr-1">₹</span>
                    <span className={`text-5xl lg:text-6xl font-bold ${isHighlighted ? 'text-white' : 'text-white'}`}>
                        {plan.price}
                    </span>
                    <span className="text-gray-500 !ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
            </div>

            {/* Divider */}
            <div className={`h-px !mb-8 ${isHighlighted ? 'bg-[#F5A623]/30' : 'bg-white/10'}`} />

            {/* Features */}
            <ul className="space-y-4 !mb-10">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 !mr-3 !mt-0.5 ${isHighlighted ? 'bg-[#F5A623] text-black' : 'bg-white/10 text-[#F5A623]'
                            }`}>
                            <Check size={12} strokeWidth={3} />
                        </div>
                        <span className={`text-sm ${isHighlighted ? 'text-white font-medium' : 'text-gray-400'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <button
                className={`w-full !py-4 rounded-xl font-bold transition-all duration-300 ${isHighlighted
                        ? 'bg-[#F5A623] text-black hover:bg-[#FFBE4D] shadow-lg shadow-[#F5A623]/30'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'
                    }`}
            >
                {isHighlighted ? 'Get Started' : 'Select Plan'}
            </button>
        </div>
    );
};

export default PricingCard;

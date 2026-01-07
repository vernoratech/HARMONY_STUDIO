import { CheckCircle } from 'lucide-react';

const BenefitCard = ({ benefit }) => {
    const categoryColors = {
        Physical: '#E91E63',
        Mental: '#4CAF50',
        Lifestyle: '#FF5722'
    };

    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl !p-6 hover:bg-white/10 hover:border-[#F5A623]/30 transition-all group">
            {/* Category Badge */}
            <div className="flex items-center justify-between !mb-4">
                <span
                    className="text-xs font-bold uppercase tracking-widest !px-3 !py-1 rounded-full"
                    style={{
                        backgroundColor: `${categoryColors[benefit.category]}20`,
                        color: categoryColors[benefit.category]
                    }}
                >
                    {benefit.category}
                </span>
                <CheckCircle
                    size={20}
                    className="text-[#F5A623] opacity-60 group-hover:opacity-100 transition-opacity"
                />
            </div>

            {/* Title */}
            <h4 className="text-lg font-bold text-white !mb-2">
                {benefit.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed">
                {benefit.description}
            </p>
        </div>
    );
};

export default BenefitCard;

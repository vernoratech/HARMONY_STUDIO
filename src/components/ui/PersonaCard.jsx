import { User } from 'lucide-react';

const PersonaCard = ({ persona }) => {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl !p-5 hover:bg-white/10 hover:border-[#F5A623]/30 transition-all">
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center !mb-4">
                <User size={24} className="text-[#F5A623]" />
            </div>

            {/* Persona Title */}
            <h4 className="text-base font-bold text-white !mb-2">
                {persona.persona}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed">
                {persona.description}
            </p>
        </div>
    );
};

export default PersonaCard;

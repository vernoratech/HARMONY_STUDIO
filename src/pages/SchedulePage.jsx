import { useState } from 'react';
import { Clock, User, Timer, ArrowRight } from 'lucide-react';
import { SCHEDULE } from '../data';
import SectionHeading from '../components/ui/SectionHeading';

const SchedulePage = () => {
    const days = Object.keys(SCHEDULE);
    const [activeDay, setActiveDay] = useState(days[0]);

    const getTypeColor = (type) => {
        switch (type) {
            case 'Yoga':
                return { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' };
            case 'Zumba':
                return { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' };
            case 'Dance':
                return { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' };
            default:
                return { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/30' };
        }
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative !pt-32 !pb-20 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F5A623]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl translate-y-1/2" />

                <div className="container-custom relative z-10 text-center">
                    <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] !mb-4 block">
                        Class Schedule
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white !mb-6">
                        Find Your <span className="gradient-text">Perfect Time</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Over 150 classes weekly. From sunrise sessions to evening flows — there's always a perfect class waiting for you.
                    </p>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="!py-24 bg-[#0A0A0A]">
                <div className="container-custom">
                    {/* Day Selector */}
                    <div className="flex flex-wrap justify-center gap-2 !mb-12">
                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className={`!px-6 !py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeDay === day
                                        ? 'bg-[#F5A623] text-black shadow-lg shadow-[#F5A623]/30'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    {/* Schedule Card */}
                    <div className="max-w-4xl mx-auto bg-[#1A1A1A] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="!px-8 !py-6 bg-gradient-to-r from-[#F5A623]/10 to-transparent border-b border-white/10">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{activeDay}'s Classes</h3>
                                    <p className="text-gray-500 text-sm !mt-1">
                                        {SCHEDULE[activeDay].length} classes available
                                    </p>
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <Clock size={16} className="!mr-2 text-[#F5A623]" />
                                    All times in IST
                                </div>
                            </div>
                        </div>

                        {/* Classes List */}
                        <div className="divide-y divide-white/5">
                            {SCHEDULE[activeDay].map((slot, i) => {
                                const colors = getTypeColor(slot.type);
                                return (
                                    <div
                                        key={i}
                                        className="!px-8 !py-6 hover:bg-white/5 transition-colors group"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            {/* Left Side */}
                                            <div className="flex items-start gap-6">
                                                {/* Time */}
                                                <div className="text-center min-w-[80px]">
                                                    <span className="text-xl font-bold text-[#F5A623]">{slot.time.split(' ')[0]}</span>
                                                    <span className="block text-xs text-gray-500 uppercase">{slot.time.split(' ')[1]}</span>
                                                </div>

                                                {/* Details */}
                                                <div>
                                                    <div className="flex items-center gap-3 !mb-2">
                                                        <h4 className="text-lg font-bold text-white group-hover:text-[#F5A623] transition-colors">
                                                            {slot.activity}
                                                        </h4>
                                                        <span className={`!px-3 !py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                                                            {slot.type}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                                        <span className="flex items-center">
                                                            <User size={14} className="!mr-1" />
                                                            {slot.instructor}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <Timer size={14} className="!mr-1" />
                                                            {slot.duration}
                                                        </span>
                                                        <span className={`!px-2 !py-0.5 rounded border ${colors.border} ${colors.text} text-xs`}>
                                                            {slot.level}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Register Button */}
                                            <button className="!px-6 !py-2.5 bg-white/5 text-white border border-white/10 rounded-full font-semibold text-sm hover:bg-[#F5A623] hover:text-black hover:border-[#F5A623] transition-all flex items-center justify-center group/btn">
                                                Register
                                                <ArrowRight size={16} className="!ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="max-w-4xl mx-auto !mt-8 flex flex-wrap justify-center gap-6">
                        {['Yoga', 'Zumba', 'Dance'].map((type) => {
                            const colors = getTypeColor(type);
                            return (
                                <div key={type} className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full !mr-2 ${colors.bg} ${colors.text}`} style={{
                                        backgroundColor: type === 'Yoga' ? '#22c55e' : type === 'Zumba' ? '#f97316' : '#ec4899'
                                    }} />
                                    <span className="text-sm text-gray-500">{type}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="!py-16 bg-[#1A1A1A]">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="!p-8">
                            <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mx-auto !mb-4">
                                <Clock size={28} className="text-[#F5A623]" />
                            </div>
                            <h4 className="text-lg font-bold text-white !mb-2">Early Bird Classes</h4>
                            <p className="text-gray-500 text-sm">Start your day right with our 6:30 AM sessions</p>
                        </div>
                        <div className="!p-8">
                            <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mx-auto !mb-4">
                                <User size={28} className="text-[#F5A623]" />
                            </div>
                            <h4 className="text-lg font-bold text-white !mb-2">All Levels Welcome</h4>
                            <p className="text-gray-500 text-sm">From beginners to advanced practitioners</p>
                        </div>
                        <div className="!p-8">
                            <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mx-auto !mb-4">
                                <Timer size={28} className="text-[#F5A623]" />
                            </div>
                            <h4 className="text-lg font-bold text-white !mb-2">Flexible Duration</h4>
                            <p className="text-gray-500 text-sm">Classes from 45 to 90 minutes</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SchedulePage;

import { Link } from 'react-router-dom';
import { Home, Search, Calendar, ArrowRight } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center !px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-3xl text-center relative z-10">
                {/* 404 Number */}
                <div className="!mb-8">
                    <h1 className="text-[180px] md:text-[240px] font-bold leading-none gradient-text opacity-20">
                        404
                    </h1>
                </div>

                {/* Message */}
                <h2 className="text-4xl md:text-5xl font-bold text-white !mb-6">
                    Lost in the Studio?
                </h2>
                <p className="text-xl text-gray-400 !mb-12 leading-relaxed">
                    This page seems to have wandered off to a yoga retreat.
                    Don't worry—we'll guide you back to your flow.
                </p>

                {/* Navigation Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 !mb-12">
                    <Link
                        to="/"
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl !p-6 hover:bg-white/10 hover:border-[#F5A623]/30 transition-all group"
                    >
                        <Home size={32} className="text-[#F5A623] mx-auto !mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-white font-semibold !mb-1">Home</h3>
                        <p className="text-gray-500 text-sm">Return to homepage</p>
                    </Link>

                    <Link
                        to="/services"
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl !p-6 hover:bg-white/10 hover:border-[#F5A623]/30 transition-all group"
                    >
                        <Search size={32} className="text-[#F5A623] mx-auto !mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-white font-semibold !mb-1">Services</h3>
                        <p className="text-gray-500 text-sm">Browse our classes</p>
                    </Link>

                    <Link
                        to="/schedule"
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl !p-6 hover:bg-white/10 hover:border-[#F5A623]/30 transition-all group"
                    >
                        <Calendar size={32} className="text-[#F5A623] mx-auto !mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-white font-semibold !mb-1">Schedule</h3>
                        <p className="text-gray-500 text-sm">View class times</p>
                    </Link>
                </div>

                {/* Primary CTA */}
                <Link
                    to="/"
                    className="btn btn-primary inline-flex items-center text-lg"
                >
                    Take Me Home
                    <ArrowRight size={20} className="!ml-2" />
                </Link>

                {/* Help Text */}
                <p className="text-gray-600 text-sm !mt-8">
                    Need help? <Link to="/contact" className="text-[#F5A623] hover:underline">Contact us</Link> and we'll get you back on track.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;

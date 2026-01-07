import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const consentData = localStorage.getItem('harmony_cookie_consent');
        if (consentData) {
            const { timestamp } = JSON.parse(consentData);
            const now = new Date().getTime();
            const twentyFourHours = 24 * 60 * 60 * 1000;

            if (now - timestamp > twentyFourHours) {
                setTimeout(() => setIsVisible(true), 2000);
            }
        } else {
            setTimeout(() => setIsVisible(true), 2000);
        }
    }, []);

    const handleAction = (type) => {
        setIsExiting(true);

        // Wait for animation to finish before unmounting
        setTimeout(() => {
            const consentData = {
                choice: type,
                timestamp: new Date().getTime()
            };
            localStorage.setItem('harmony_cookie_consent', JSON.stringify(consentData));
            setIsVisible(false);
        }, 500);
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 transition-all duration-500 ease-in-out ${isExiting ? 'translate-y-full opacity-0' : 'translate-y-0 animate-slide-up'}`}>
            <div className="container-custom">
                <div className="relative overflow-hidden rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 p-5 md:p-8 shadow-2xl">
                    {/* Decorative Gradient Overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A623]/10 blur-[80px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F5A623]/5 blur-[60px] -z-10" />

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 justify-between">
                        <div className="flex gap-3 md:gap-4 items-start">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center shrink-0">
                                <Shield className="text-[#F5A623] w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-base md:text-lg !mb-1">Cookie Preferences</h3>
                                <p className="text-gray-400 text-xs md:text-sm max-w-xl leading-relaxed">
                                    We use cookies to enhance your experience and analyze site traffic.
                                    By clicking "Accept", you agree to our use of cookies. This choice will expire in 24 hours.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 w-full md:w-auto">
                            <button
                                onClick={() => handleAction('rejected')}
                                className="flex-1 md:flex-none px-4 md:px-6 py-2 rounded-full border border-white/20 text-gray-400 font-bold text-xs md:text-sm hover:bg-white/5 hover:text-white transition-all whitespace-nowrap"
                            >
                                Reject
                            </button>
                            <button
                                onClick={() => handleAction('accepted')}
                                className="flex-1 md:flex-none px-6 md:px-8 py-2 rounded-full bg-[#F5A623] text-black font-bold text-xs md:text-sm hover:bg-[#D48E1A] transition-all shadow-lg shadow-[#F5A623]/20 whitespace-nowrap"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>

                    {/* Simple Close Button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;

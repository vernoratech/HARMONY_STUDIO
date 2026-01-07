import React, { useState, useEffect, useRef } from 'react';
import { Shield, CloudLightning, X, Zap } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const canvasRef = useRef(null);

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

        // Handle resize for canvas
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- Lightning Canvas Logic ---
    const triggerLightning = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Flash background
        ctx.fillStyle = 'rgba(245, 166, 35, 0.4)';
        ctx.fillRect(0, 0, width, height);

        // Draw bolts
        const drawBolt = (x, y, length, angle, branchWidth) => {
            if (branchWidth < 0.5 || length < 5) return;

            ctx.beginPath();
            ctx.moveTo(x, y);

            const endX = x + length * Math.cos(angle);
            const endY = y + length * Math.sin(angle);

            let currX = x;
            let currY = y;
            const segments = 10;

            for (let i = 0; i < segments; i++) {
                const t = (i + 1) / segments;
                const targetX = x + (endX - x) * t;
                const targetY = y + (endY - y) * t;
                const jitter = (Math.random() - 0.5) * 30;
                currX = targetX + (i < segments - 1 ? jitter : 0);
                currY = targetY;
                ctx.lineTo(currX, currY);
            }

            ctx.strokeStyle = '#F5A623';
            ctx.lineWidth = branchWidth;
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#F5A623';
            ctx.stroke();

            if (Math.random() > 0.6) {
                drawBolt(currX, currY, length * 0.6, angle + 0.5, branchWidth * 0.6);
            }
            if (Math.random() > 0.6) {
                drawBolt(currX, currY, length * 0.6, angle - 0.5, branchWidth * 0.6);
            }
        };

        drawBolt(width / 2 + (Math.random() - 0.5) * 200, 0, height * 0.8, Math.PI / 2 + (Math.random() - 0.5) * 0.2, 5);

        let opacity = 1.0;
        const fade = setInterval(() => {
            opacity -= 0.1;
            if (opacity <= 0) {
                clearInterval(fade);
                ctx.clearRect(0, 0, width, height);
            } else {
                ctx.globalCompositeOperation = 'destination-out';
                ctx.fillStyle = `rgba(0, 0, 0, 0.2)`;
                ctx.fillRect(0, 0, width, height);
                ctx.globalCompositeOperation = 'source-over';
            }
        }, 50);
    };

    const handleAction = (type) => {
        setIsExiting(true);
        triggerLightning();

        // Wait for animation to finish before unmounting
        setTimeout(() => {
            const consentData = {
                choice: type,
                timestamp: new Date().getTime()
            };
            localStorage.setItem('harmony_cookie_consent', JSON.stringify(consentData));
            setIsVisible(false);
        }, 800);
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 transition-all duration-300 ${isExiting ? 'scale-110 pointer-events-none' : 'animate-slide-up'}`}>
            {/* Lightning Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
            />

            <div className={`container-custom relative z-10 transition-all duration-75 ${isExiting ? 'animate-[thunder_0.1s_ease-in-out_infinite]' : ''}`}>
                <div className={`relative overflow-hidden rounded-2xl bg-[#0A0A0A]/95 backdrop-blur-2xl border border-[#F5A623]/20 p-5 md:p-8 shadow-2xl transition-all duration-75 ${isExiting ? 'bg-[#F5A623] shadow-[0_0_150px_rgba(245,166,35,0.9)] border-[#F5A623] scale-105' : ''}`}>
                    {/* Golden Lightning Flash Overlay */}
                    {isExiting && (
                        <>
                            <div className="absolute inset-0 bg-white animate-[lightning_0.05s_ease-in-out_infinite] z-[60] mix-blend-overlay opacity-90" />
                            <div className="absolute inset-0 bg-[#F5A623] animate-[lightning_0.07s_ease-in-out_infinite] z-50 mix-blend-color-dodge opacity-60" />
                            <div className="absolute inset-0 bg-amber-600 animate-[glitch_0.12s_linear_infinite] z-40 opacity-40 shadow-[inset_0_0_50px_rgba(251,191,36,0.5)]" />
                        </>
                    )}

                    {/* Decorative Gradient Overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A623]/10 blur-[80px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F5A623]/5 blur-[60px] -z-10" />

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 justify-between">
                        <div className="flex gap-3 md:gap-4 items-start">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${isExiting ? 'bg-white text-black' : 'bg-[#F5A623]/10 text-[#F5A623]'}`}>
                                <CloudLightning className={isExiting ? 'animate-pulse' : ''} size={24} strokeWidth={isExiting ? 3 : 2} />
                            </div>
                            <div>
                                <h3 className={`font-bold text-base md:text-lg !mb-1 transition-colors ${isExiting ? 'text-black' : 'text-white'}`}>Storm Breaker Cookies</h3>
                                <p className={`text-xs md:text-sm max-w-xl leading-relaxed transition-colors ${isExiting ? 'text-black/80' : 'text-gray-400'}`}>
                                    We use cookies to enhance your experience.
                                    By clicking "Accept", you unleash the storm. Choice expires in 24 hours.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 w-full md:w-auto">
                            <button
                                onClick={() => handleAction('rejected')}
                                disabled={isExiting}
                                className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-full border font-bold text-xs md:text-sm transition-all whitespace-nowrap ${isExiting ? 'bg-black/10 border-black/20 text-black' : 'border-white/20 text-gray-400 hover:bg-white/5 hover:text-white'}`}
                            >
                                Reject
                            </button>
                            <button
                                onClick={() => handleAction('accepted')}
                                disabled={isExiting}
                                className={`flex-1 md:flex-none px-6 md:px-8 py-2 rounded-full font-bold text-xs md:text-sm transition-all shadow-lg whitespace-nowrap flex items-center justify-center gap-2 ${isExiting ? 'bg-black text-white scale-95' : 'bg-[#F5A623] text-black hover:bg-[#ffb442] shadow-[#F5A623]/20'}`}
                            >
                                {isExiting ? 'IMPACT...' : <>ACCEPT ALL <Zap size={14} fill="currentColor" /></>}
                            </button>
                        </div>
                    </div>

                    {/* Simple Close Button */}
                    <button
                        onClick={() => handleAction('closed')}
                        disabled={isExiting}
                        className={`absolute top-4 right-4 transition-colors ${isExiting ? 'text-black/50' : 'text-gray-500 hover:text-[#F5A623]'}`}
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Cinematic Global Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes thunder {
                    0% { transform: translate(1px, 1px) rotate(0deg); }
                    10% { transform: translate(-1px, -2px) rotate(-1deg); }
                    20% { transform: translate(-3px, 0px) rotate(1deg); }
                    30% { transform: translate(3px, 2px) rotate(0deg); }
                    40% { transform: translate(1px, -1px) rotate(1deg); }
                    50% { transform: translate(-1px, 2px) rotate(-1deg); }
                    60% { transform: translate(-3px, 1px) rotate(0deg); }
                    70% { transform: translate(3px, 1px) rotate(-1deg); }
                    80% { transform: translate(-1px, -1px) rotate(1deg); }
                    90% { transform: translate(1px, 2px) rotate(0deg); }
                    100% { transform: translate(1px, -2px) rotate(-1deg); }
                }
                @keyframes lightning {
                    0%, 100% { opacity: 0; }
                    10%, 90% { opacity: 0.8; }
                    20%, 80% { opacity: 0.1; }
                    30%, 50%, 70% { opacity: 1; }
                    40%, 60% { opacity: 0.3; }
                }
                @keyframes glitch {
                    0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
                    20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
                    40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
                    60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
                    80% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 1px); }
                    100% { clip-path: inset(30% 0 20% 0); transform: translate(1px, -1px); }
                }
                @keyframes slide-up {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}} />
        </div>
    );
};

export default CookieConsent;

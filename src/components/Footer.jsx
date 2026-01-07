import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { FOOTER_LINKS, CONTACT_INFO } from '../data';
import logo from '../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-[#0A0A0A] to-black text-gray-400 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl" />
            {/* <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl" /> */}

            {/* Main Footer Content */}
            <div className="container-custom !pt-20 !pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center !mb-6">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F5A623]/30 !mr-3">
                                <img src={logo} alt="Harmony Studio" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">
                                    HARMONY <span className="text-[#F5A623]">STUDIO</span>
                                </span>
                                <span className="text-[10px] text-gray-500 tracking-[0.15em] uppercase">
                                    Dance | Zumba | Yoga
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed !mb-6 text-gray-500">
                            Empowering your wellness journey through movement, mindfulness, and community.
                            Experience the harmony of body and soul.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={CONTACT_INFO.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F5A623] hover:text-black transition-all duration-300"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href={CONTACT_INFO.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F5A623] hover:text-black transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href={CONTACT_INFO.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F5A623] hover:text-black transition-all duration-300"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold !mb-6 text-sm uppercase tracking-widest">
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm hover:text-[#F5A623] transition-colors flex items-center group"
                                    >
                                        <ArrowRight size={14} className="!mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#F5A623]" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold !mb-6 text-sm uppercase tracking-widest">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={18} className="!mr-3 !mt-1 text-[#F5A623] shrink-0" />
                                <span className="text-sm">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="!mr-3 text-[#F5A623] shrink-0" />
                                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm hover:text-[#F5A623] transition-colors">
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="!mr-3 text-[#F5A623] shrink-0" />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm hover:text-[#F5A623] transition-colors">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold !mb-6 text-sm uppercase tracking-widest">
                            Newsletter
                        </h4>
                        <p className="text-sm !mb-4 text-gray-500">
                            Get wellness tips and studio updates delivered to your inbox.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl !px-4 !py-3 text-sm text-white placeholder-gray-500 focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]/50 transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#F5A623] text-black font-semibold !py-3 rounded-xl hover:bg-[#FFBE4D] transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container-custom !py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Harmony Studio. All rights reserved.
                        </p>
                        <span className="hidden md:block text-gray-700">|</span>
                        <p className="text-xs text-gray-500 font-medium tracking-wide">
                            Website made by <a
                                href="https://www.linkedin.com/company/vernoratech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#F5A623] transition-all duration-300 font-bold hover:scale-105 inline-block !ml-1"
                            >
                                VernoraTech
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-[#F5A623] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#F5A623] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#F5A623] transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

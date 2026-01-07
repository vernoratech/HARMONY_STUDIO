import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-black/20 !py-3'
                : 'bg-transparent !py-5'
                }`}
        >
            <div className="container-custom">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F5A623]/50 group-hover:border-[#F5A623] transition-colors !mr-3">
                            <img src={logo} alt="Harmony Studio" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white tracking-wide">
                                HARMONY <span className="text-[#F5A623]">STUDIO</span>
                            </span>
                            <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
                                Dance | Zumba | Yoga
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative text-sm font-medium transition-colors duration-300 ${isActive(link.path)
                                    ? 'text-[#F5A623]'
                                    : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F5A623] rounded-full" />
                                )}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="btn btn-primary !ml-4 text-sm !px-6 !py-2.5"
                        >
                            Join Now
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white !p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-x-0 top-[72px] bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ${isOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="container-custom !py-6 space-y-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block !py-3 !px-4 rounded-xl text-lg font-medium transition-all ${isActive(link.path)
                                ? 'bg-[#F5A623]/20 text-[#F5A623]'
                                : 'text-white hover:bg-white/5'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="block w-full btn btn-primary text-center !mt-6"
                    >
                        Book a Class
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

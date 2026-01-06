import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-4 left-0 right-0 mx-auto w-[90%] max-w-5xl z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'
                }`}
        >
            <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-orange-900/10">
                <div className="flex items-center gap-2">
                    {/* Using the headshot as a logo icon */}
                    <img src="/assets/avatar_headshot.png" alt="Zaatar Dev" className="w-10 h-10 rounded-full border-2 border-orange-500" />
                    <span className="font-bold text-xl tracking-tight text-white">
                        Zaatar<span className="text-[#FF6600]">Dev</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    {/* <a href="#about" className="hover:text-white transition-colors">About</a> */}
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                <a href="#contact" className="bg-[#FF6600] hover:bg-[#ff8534] text-white px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20">
                    Let's Talk
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;


import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">

                {/* Main Intro Card - Spans 2 cols, 2 rows */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:col-span-2 md:row-span-2 bg-[#171717] rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden group"
                >
                    <div className="z-10">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Scripting <span className="text-[#FF6600]">
                                <br />Roblox Games</span>.
                        </h1>
                        <p className="text-gray-400 text-xl max-w-md mb-8">
                            I'm Zaatar Dev. I code stuff.
                        </p>
                        <div className="flex gap-4">
                            <a href="#projects" className="bg-[#FF6600] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-[#ff8534] transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25">
                                My Projects <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="bg-[#262626] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-colors">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Decorative Background Blur */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
                </motion.div>

                {/* Character Card - Spans 1 col, 2 rows */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-1 md:row-span-2 bg-[#FF6600] rounded-[32px] relative overflow-hidden flex items-end justify-center group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <img
                        src="/assets/character_full.png"
                        alt="Character"
                        className="absolute w-[180%] max-w-none bottom-[-10%] md:w-[220%] md:bottom-[-20%] object-contain transition-transform duration-500 group-hover:scale-105 z-0"
                    />
                    <div className="relative z-20 p-6 w-full">
                        <div className="glass-panel rounded-2xl p-4 text-center">
                            <p className="text-white font-bold text-lg">Zaatar Dev</p>
                            <p className="text-orange-200 text-sm">Scripter</p>
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-1 bg-[#171717] rounded-[32px] p-6 flex flex-col justify-between hover:bg-[#202020] transition-colors overflow-hidden"
                >
                    <div className="w-full">
                        <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                        {/* Marquee Container */}
                        <div className="flex overflow-hidden w-full mask-gradient-sides">
                            {/* Animated Track - Duplicated list for seamless loop */}
                            <motion.div
                                className="flex gap-3 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 10
                                }}
                            >
                                {[...["LuaU", "Rojo", "Github", "React LuaU", "Fast Cast"], ...["LuaU", "Rojo", "Github", "React LuaU", "Fast Cast"]].map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/5 hover:border-[#FF6600]/50 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Currently Learning</p>
                        <span className="text-[#FF6600] font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse" /> Knit
                        </span>
                    </div>
                </motion.div>

                {/* Availability Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: [1, 0.7, 1],
                        y: 0
                    }}
                    transition={{
                        y: { duration: 0.5, delay: 0.3 },
                        opacity: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }
                    }}
                    className="md:col-span-2 bg-[#171717] rounded-[32px] p-6 flex items-center justify-between px-10 hover:bg-[#202020] transition-colors group"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Status: <span className="text-green-400">Available</span></h3>
                        <p className="text-gray-400">Ready to take on new commissions.</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)] animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

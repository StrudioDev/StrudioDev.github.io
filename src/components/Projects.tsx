import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Mining System",
        category: "System",
        image: "MiningSys.png", // Placeholder, user can replace later
        description: "A high-fidelity mining system with the same Mining style as The Forge.",
        link: "#"
    },
    {
        title: "FPS System",
        category: "System",
        image: "FPS.png",
        description: "A high-fidelity FPS system with OOP based architecture, and a lot of features.",
        link: "#"
    },
    {
        title: "Build System",
        category: "System",
        image: "BuildSys.png",
        description: "A high-fidelity build system with a polished and animated placement system, and an animated GUI.",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-12 flex items-center gap-4"
            >
                <span className="w-12 h-1 bg-[#FF6600] rounded-full"></span>
                Featured <span className="text-[#FF6600]">Systems / Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-[#171717] rounded-[32px] overflow-hidden hover:shadow-[0_0_40px_rgba(255,102,0,0.15)] transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-[#FF6600] opacity-0 group-hover:opacity-10 transition-opacity z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-[#FF6600] text-xs font-bold uppercase tracking-wider">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-[#FF6600] transition-colors">{project.title}</h3>
                                </div>
                                <a href={project.link} className="p-2 bg-[#262626] rounded-full text-white hover:bg-[#FF6600] transition-colors">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

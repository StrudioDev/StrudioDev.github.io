import { useState } from 'react';
import { Github, Mail, Copy, Check, Gamepad2 } from 'lucide-react';

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyDiscord = () => {
        navigator.clipboard.writeText("ZaatarDev");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer id="contact" className="py-20 px-6 border-t border-white/5 bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Ready to turn your idea into <span className="text-[#FF6600]">reality?</span>
                </h2>
                <p className="text-gray-400 mb-10 text-lg">
                    I'm most active on Discord! Feel free to reach out there or via email.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
                    {/* Discord Button */}
                    <button
                        onClick={handleCopyDiscord}
                        className="group relative bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-[#5865F2]/20 flex items-center gap-3"
                    >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                        <span>{copied ? "Copied 'ZaatarDev'!" : "Copy Discord User"}</span>
                        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full animate-bounce font-bold">
                            PREFERRED
                        </span>
                    </button>

                    {/* Email Button */}
                    <a
                        href="mailto:K.hawash3h@gmail.com"
                        className="bg-[#262626] hover:bg-[#333] text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3"
                    >
                        <Mail size={20} />
                        Email Me
                    </a>
                </div>

                <div className="flex justify-center gap-6 mb-12">
                    {[
                        { Icon: Github, href: "https://github.com/ZaatarDev", label: "Github" },
                        { Icon: Gamepad2, href: "https://www.roblox.com/user.aspx?username=ZaatarDev", label: "Roblox" },
                        { Icon: Mail, href: "mailto:K.hawash3h@gmail.com", label: "Email" }
                    ].map(({ Icon, href, label }, idx) => (
                        <a
                            key={idx}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-[#171717] rounded-full text-gray-400 hover:text-[#FF6600] hover:bg-[#262626] transition-all transform hover:-translate-y-1"
                            title={label}
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2024 Zaatar Dev. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "home" },
    { href: "#projects", label: "projetos" },
    { href: "#skills", label: "habilidades" },
    { href: "#soft-skills", label: "soft skills" },
    { href: "#education", label: "formação" },
    { href: "#contact", label: "contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg/80 backdrop-blur-xl border-b border-border/50 px-6 md:px-10 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="font-mono text-[13px] text-accent tracking-wider font-bold">
          bruno.dev
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 list-none items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="text-fg2 hover:text-fg text-[13px] font-mono transition-colors tracking-tight"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-fg hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-bg2 border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="block text-fg2 hover:text-accent text-[14px] font-mono transition-colors py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

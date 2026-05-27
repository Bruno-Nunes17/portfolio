import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-5 md:px-10 max-w-[1000px] mx-auto">
      <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-12 flex items-center gap-3">
        // contato
        <span className="flex-1 h-[0.5px] bg-border2"></span>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start transform-gpu will-change-transform"
      >
        <div>
          <h2 className="font-serif text-[2.8rem] font-normal leading-[1.1] tracking-tight mb-4">
            Vamos construir algo juntos<span className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-1 shadow-[0_0_8px_rgba(34,181,115,0.4)]"></span>
          </h2>
          <p className="text-fg2 text-[14px] leading-relaxed">
            Bruno Oliveira Nunes — Cruz das Almas, BA. Disponível para projetos Full Stack e soluções digitais sob demanda.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <a href="mailto:brunooliveiranunes60@gmail.com" className="group flex items-center gap-4 p-4 bg-bg2 border border-border rounded-lg transition-[border-color,background-color] duration-200 hover:border-accent hover:bg-accent-dim">
            <div className="w-7 text-center text-accent">
              <Mail className="w-5 h-5 mx-auto" />
            </div>
            <div className="flex-1">
              <div className="font-mono text-[11px] text-fg3 uppercase tracking-widest">Email</div>
              <div className="text-[14px] text-fg">brunooliveiranunes60@gmail.com</div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg3 transition-colors duration-200 group-hover:text-accent" />
          </a>

          <a href="https://wa.me/5575982976340" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-bg2 border border-border rounded-lg transition-[border-color,background-color] duration-200 hover:border-accent hover:bg-accent-dim">
            <div className="w-7 text-center text-accent">
              <FaWhatsapp className="w-5 h-5 mx-auto" />
            </div>
            <div className="flex-1">
              <div className="font-mono text-[11px] text-fg3 uppercase tracking-widest">WhatsApp</div>
              <div className="text-[14px] text-fg">(75) 9 8297-6340</div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg3 transition-colors duration-200 group-hover:text-accent" />
          </a>
          
          <a href="https://github.com/Bruno-Nunes17" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-bg2 border border-border rounded-lg transition-[border-color,background-color] duration-200 hover:border-accent hover:bg-accent-dim">
            <div className="w-7 text-center text-accent">
              <FaGithub className="w-5 h-5 mx-auto" />
            </div>
            <div className="flex-1">
              <div className="font-mono text-[11px] text-fg3 uppercase tracking-widest">GitHub</div>
              <div className="text-[14px] text-fg">github.com/Bruno-Nunes17</div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg3 transition-colors duration-200 group-hover:text-accent" />
          </a>
          
          <a href="https://linkedin.com/in/bruno-nunes-591b02179" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-bg2 border border-border rounded-lg transition-[border-color,background-color] duration-200 hover:border-accent hover:bg-accent-dim">
            <div className="w-7 text-center text-accent">
              <FaLinkedinIn className="w-5 h-5 mx-auto" />
            </div>
            <div className="flex-1">
              <div className="font-mono text-[11px] text-fg3 uppercase tracking-widest">LinkedIn</div>
              <div className="text-[14px] text-fg">linkedin.com/in/bruno-nunes-591b02179</div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg3 transition-colors duration-200 group-hover:text-accent" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

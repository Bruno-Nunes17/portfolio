import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import foto from '../assets/foto.png';

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen flex flex-col justify-center px-5 md:px-10 py-24 md:py-0 relative overflow-hidden">
      <div className="hero-grid absolute inset-0"></div>
      <div className="hero-glow absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1"
        >
          <div className="font-mono text-[12px] text-accent tracking-[0.12em] uppercase mb-6 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-accent"></span>
            Fullstack Developer
          </div>
          
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] font-normal tracking-[-0.02em] max-w-[820px] mb-8">
            Bruno Oliveira Nunes<br /><em className="italic text-accent not-italic">Desenvolvedor</em><br />Full Stack.
          </h1>
          
          <p className="text-fg2 text-[15px] max-w-[480px] mb-8 leading-relaxed">
            Especialista em construir produtos do backend ao pixel, com foco em arquiteturas modernas, escalabilidade e performance.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="bg-accent text-bg px-7 py-3 rounded-[4px] font-mono text-[13px] font-medium transition-opacity hover:opacity-85">
                Ver projetos
              </a>
              <a href="/curriculo.pdf" download className="bg-transparent text-fg2 border border-border2 px-7 py-3 rounded-[4px] font-mono text-[13px] flex items-center gap-2 transition-all hover:text-fg hover:border-fg2">
                <Download className="w-4 h-4" /> Baixar CV
              </a>
            </div>

            <div className="flex items-center gap-4 border-t border-border pt-6 mt-2 max-w-[480px]">
              <a href="https://github.com/Bruno-Nunes17" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-fg3 hover:text-fg transition-colors group">
                <div className="w-10 h-10 rounded-full border border-border bg-bg2 flex items-center justify-center group-hover:border-accent group-hover:bg-accent-dim transition-all">
                  <FaGithub className="w-4 h-4 group-hover:text-accent" />
                </div>
              </a>
              <a href="https://linkedin.com/in/bruno-nunes-591b02179" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-fg3 hover:text-fg transition-colors group">
                <div className="w-10 h-10 rounded-full border border-border bg-bg2 flex items-center justify-center group-hover:border-accent group-hover:bg-accent-dim transition-all">
                  <FaLinkedinIn className="w-4 h-4 group-hover:text-accent" />
                </div>
              </a>
              <a href="https://www.instagram.com/brunonunes17_/" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-fg3 hover:text-fg transition-colors group">
                <div className="w-10 h-10 rounded-full border border-border bg-bg2 flex items-center justify-center group-hover:border-accent group-hover:bg-accent-dim transition-all">
                  <FaInstagram className="w-4 h-4 group-hover:text-accent" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group w-fit"
          >
            <div className="absolute -inset-2 md:-inset-6 border border-accent/20 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute -inset-1 md:-inset-3 border border-accent/10 rounded-xl -z-10 group-hover:scale-110 transition-transform duration-700 delay-75"></div>
            
            <div className="w-64 h-[380px] sm:w-72 sm:h-[420px] md:w-80 md:h-[480px] lg:w-[400px] lg:h-[560px] overflow-hidden rounded-2xl border border-border bg-bg2 relative shadow-2xl shadow-accent/5">
              <img 
                src={foto} 
                alt="Bruno Oliveira Nunes" 
                className="w-full h-full object-cover contrast-[1.05] group-hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                  const text = document.createElement('span');
                  text.className = 'font-mono text-accent/20 text-5xl';
                  text.innerText = '</>';
                  e.currentTarget.parentElement?.appendChild(text);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

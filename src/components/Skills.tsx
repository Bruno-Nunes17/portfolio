import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Atom, Triangle, Zap, Database, Waves, Box, Globe, ShieldCheck, ZapOff, Layers, SearchCode } from 'lucide-react';

const categories = [
  { id: 'frontend', label: 'Front-end' },
  { id: 'backend', label: 'Back-end' },
  { id: 'infra', label: 'Dados & Infra' },
  { id: 'quality', label: 'Qualidade de Código' },
];

const skillsData: Record<string, { name: string; type: string; Icon: LucideIcon }[]> = {
  frontend: [
    { name: 'JavaScript', type: 'linguagem', Icon: Code2 },
    { name: 'TypeScript', type: 'linguagem', Icon: Code2 },
    { name: 'React', type: 'framework', Icon: Atom },
    { name: 'Next.js', type: 'framework', Icon: Triangle },
    { name: 'React Native', type: 'mobile', Icon: Atom },
    { name: 'Tailwind CSS', type: 'estilização', Icon: Waves },
    { name: 'Bootstrap', type: 'estilização', Icon: Layers },
    { name: 'HTML5', type: 'markup', Icon: Code2 },
    { name: 'CSS3', type: 'style', Icon: Waves },
  ],
  backend: [
    { name: 'Node.js', type: 'runtime', Icon: Box },
    { name: 'Fastify', type: 'framework', Icon: Zap },
    { name: 'Express.js', type: 'framework', Icon: ZapOff },
    { name: 'JWT', type: 'autenticação', Icon: ShieldCheck },
    { name: 'WebSockets', type: 'comunicação', Icon: Globe },
    { name: 'Python', type: 'linguagem', Icon: Code2 },
  ],
  infra: [
    { name: 'PostgreSQL', type: 'banco de dados', Icon: Database },
    { name: 'MySQL', type: 'banco de dados', Icon: Database },
    { name: 'MongoDB', type: 'banco de dados', Icon: Database },
    { name: 'Redis', type: 'cache', Icon: Zap },
    { name: 'MariaDB', type: 'banco de dados', Icon: Database },
    { name: 'SQL', type: 'linguagem', Icon: Database },
    { name: 'Git', type: 'versionamento', Icon: SearchCode },
    { name: 'Docker', type: 'container', Icon: Box },
  ],
  quality: [
    { name: 'Clean Code', type: 'prática', Icon: ShieldCheck },
    { name: 'Princípios SOLID', type: 'arquitetura', Icon: Layers },
    { name: 'Arquitetura RESTful', type: 'padrão', Icon: Globe },
    { name: 'ORM', type: 'ferramenta', Icon: Database },
    { name: 'Zod', type: 'validação', Icon: ShieldCheck },
    { name: 'Agentes de IA', type: 'IA / Tooling', Icon: SearchCode },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="py-24 px-5 md:px-10 max-w-[1000px] mx-auto">
      <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-12 flex items-center gap-3">
        // minhas habilidades
        <span className="flex-1 h-[0.5px] bg-border2"></span>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 font-mono text-[12px] transition-all rounded-[4px] border ${
              activeTab === cat.id
                ? 'bg-accent text-bg border-accent'
                : 'bg-transparent text-fg2 border-border hover:border-fg3 hover:text-fg'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[1px] border border-border rounded-lg overflow-hidden bg-border">
        <AnimatePresence mode="wait">
          {skillsData[activeTab].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-bg2 p-5 flex flex-col gap-2 transition-colors hover:bg-bg3"
            >
              <item.Icon className="w-5 h-5 text-accent" />
              <div className="font-mono text-[12px] text-fg font-medium">{item.name}</div>
              <div className="text-[11px] text-fg3 font-mono">{item.type}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { Lightbulb, Users, Target, RefreshCcw } from 'lucide-react';

const softSkills = [
  { name: 'Resolução de Problemas', desc: 'Capacidade de analisar desafios complexos e propor soluções eficientes e escaláveis.', Icon: Lightbulb },
  { name: 'Comunicação Eficaz', desc: 'Habilidade em traduzir requisitos técnicos para stakeholders e colaborar com times multidisciplinares.', Icon: Users },
  { name: 'Autogestão e Entrega', desc: 'Foco em prazos e qualidade, gerenciando o ciclo de vida do software de forma autônoma.', Icon: Target },
  { name: 'Adaptabilidade', desc: 'Agilidade em aprender novas tecnologias e se ajustar a mudanças de escopo ou mercado.', Icon: RefreshCcw },
];

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="py-24 px-5 md:px-10 max-w-[1000px] mx-auto">
      <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-12 flex items-center gap-3">
        // soft skills
        <span className="flex-1 h-[0.5px] bg-border2"></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-bg2 border border-border rounded-lg hover:border-accent/50 transition-colors"
          >
            <skill.Icon className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-serif text-[1.4rem] text-fg mb-2">{skill.name}</h3>
            <p className="text-fg2 text-[14px] leading-relaxed">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;

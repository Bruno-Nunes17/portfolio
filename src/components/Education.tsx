import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Languages } from 'lucide-react';

const education = [
  {
    title: 'Pós-graduação em Análise de Dados e Estatística',
    institution: 'Em andamento',
    period: 'Atual',
    Icon: GraduationCap,
  },
  {
    title: 'Bacharelado em Ciências Exatas e Tecnológicas (BCET)',
    institution: 'Universidade Federal do Recôncavo da Bahia (UFRB)',
    period: 'Trancado',
    Icon: BookOpen,
  },
  {
    title: 'Tecnólogo em Radiologia',
    institution: 'Centro Universitário Maria Milza (UNIMAM)',
    period: 'Concluído',
    Icon: GraduationCap,
  },
];

const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário' },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-5 md:px-10 max-w-[1000px] mx-auto">
      <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-12 flex items-center gap-3">
        // formação acadêmica
        <span className="flex-1 h-[0.5px] bg-border2"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="mt-1">
                <item.Icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-[1.2rem] text-fg leading-tight mb-1">{item.title}</h3>
                <p className="text-fg2 text-[13px]">{item.institution}</p>
                <span className="inline-block mt-2 font-mono text-[10px] text-fg3 uppercase tracking-widest">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-bg2 p-8 border border-border rounded-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Languages className="w-5 h-5 text-accent" />
            <h3 className="font-serif text-[1.4rem] text-fg">Idiomas</h3>
          </div>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between items-end mb-1">
                  <span className="font-mono text-[13px] text-fg">{lang.name}</span>
                  <span className="font-mono text-[11px] text-fg3 uppercase tracking-tighter">{lang.level}</span>
                </div>
                <div className="h-[2px] bg-border w-full">
                  <div 
                    className="h-full bg-accent" 
                    style={{ width: lang.level === 'Nativo' ? '100%' : '60%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

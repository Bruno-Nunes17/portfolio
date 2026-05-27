import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, PlayCircle, AppWindow, Server, Code2 } from 'lucide-react';

const projects = [
  {
    name: 'RadioPos – Guia Digital',
    type: 'Full Stack',
    image: '',
    desc: 'Aplicação web progressiva (PWA) para auxiliar estudantes e profissionais de radiologia no posicionamento preciso de exames. Foco em suporte offline via service workers.',
    tags: ['React', 'TypeScript', 'Fastify', 'Prisma', 'PostgreSQL', 'PWA'],
    links: {
      github: '',
      live: '',
      frontend: '',
      backend: ''
    }
  },
  {
    name: 'CellFix – Sistema de Loja',
    type: 'Full Stack',
    image: '',
    desc: 'Gestão operacional completa com controle de ordens de serviço, acompanhamento de status, fluxo de caixa e gestão de estoque em tempo real.',
    tags: ['Next.js', 'TypeScript', 'Neon'],
    links: {
      github: '',
      live: ''
    }
  },
  {
    name: 'Gestão de Pacientes',
    type: 'Full Stack',
    image: '',
    desc: 'Controle de medicação, métricas de saúde e relatórios multidisciplinares. Aplicado em uma instituição de longa permanência para idosos na região.',
    tags: ['Node.js', 'TypeScript', 'Fastify', 'Prisma', 'MongoDB', 'React'],
    links: {
      github: '',
      video: ''
    }
  },
  {
    name: 'Gestão de Treino com IA',
    type: 'Full Stack',
    image: '',
    desc: 'Plataforma inteligente com sugestões automatizadas de treinos baseadas no perfil do usuário, integrada com Vercel AI SDK e arquitetura em camadas.',
    tags: ['Next.js', 'Node.js', 'Vercel AI SDK', 'shadcn/ui'],
    links: {
      github: ''
    }
  },
  {
    name: 'EcoTrace – Telemetria PWA',
    type: 'Full Stack',
    image: '',
    desc: 'Monitoramento e análise de métricas de triatlo em tempo real, com captura estável de coordenadas GPS e altitude direto pelo navegador.',
    tags: ['TypeScript', 'React', 'Fastify', 'Prisma', 'PostgreSQL'],
    links: {
      github: '',
      live: ''
    }
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => project.tags.forEach(tag => tags.add(tag)));
    return ['Todos', ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projects;
    return projects.filter(project => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 px-5 md:px-10 max-w-[1200px] mx-auto">
      <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-8 flex items-center gap-3">
        // projetos
        <span className="flex-1 h-[0.5px] bg-border2"></span>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-1.5 font-mono text-[11px] tracking-wide rounded-full border transition-all ${
              activeFilter === tag
                ? 'bg-accent text-bg border-accent'
                : 'bg-transparent text-fg2 border-border hover:border-fg3 hover:text-fg'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-bg2 border border-border rounded-xl overflow-hidden flex flex-col group hover:border-accent/50 transition-colors"
            >
              {project.image && (
                <div className="h-48 relative overflow-hidden border-b border-border bg-bg">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-bg/90 backdrop-blur text-fg px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded border border-border">
                    {project.type}
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {!project.image && (
                  <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">
                    {project.type}
                  </div>
                )}
                
                <h3 className="font-serif text-[1.6rem] text-fg mb-3 leading-tight tracking-tight group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-fg2 text-[14px] leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="font-mono text-[10px] text-accent bg-accent-dim px-2 py-1 rounded-[2px] tracking-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links && Object.values(project.links).some(link => link !== undefined && link !== '') && (
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border mt-auto">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-fg3 hover:text-fg transition-colors flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider">
                        <Code2 className="w-4 h-4" /> Code
                      </a>
                    )}
                    {project.links.frontend && (
                      <a href={project.links.frontend} target="_blank" rel="noopener noreferrer" className="text-fg3 hover:text-fg transition-colors flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider">
                        <AppWindow className="w-4 h-4" /> Front
                      </a>
                    )}
                    {project.links.backend && (
                      <a href={project.links.backend} target="_blank" rel="noopener noreferrer" className="text-fg3 hover:text-fg transition-colors flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider">
                        <Server className="w-4 h-4" /> Back
                      </a>
                    )}
                    {project.links.video && (
                      <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="text-fg3 hover:text-fg transition-colors flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider">
                        <PlayCircle className="w-4 h-4" /> Vídeo
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-fg3 hover:text-accent transition-colors flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider ml-auto">
                        <ExternalLink className="w-4 h-4" /> Preview
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;

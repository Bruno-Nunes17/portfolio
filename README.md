# Bruno Oliveira Nunes — Full Stack Developer Portfolio

Este é um portfólio moderno, responsivo e de alta performance, desenvolvido com as tecnologias mais atuais do ecossistema React. O projeto foi migrado de um HTML estático para uma arquitetura componentizada, focada em escalabilidade, estética refinada e excelente experiência do usuário (UX).

## 🚀 Tecnologias Utilizadas

- **Framework:** [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) (com **TypeScript**)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (Tema personalizado com cores e fontes exclusivas)
- **Animações:** [Framer Motion](https://www.framer.com/motion/) (Efeitos de scroll, transições de abas e estados de hover)
- **Ícones:** [Lucide React](https://lucide.dev/) e [React Icons](https://react-icons.github.io/react-icons/)
- **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)

## ✨ Funcionalidades Principais

- **Design Responsivo:** Adaptado minuciosamente para dispositivos móveis, tablets e desktops.
- **Navbar Inteligente:** Menu flutuante com suporte a menu hambúrguer no mobile e navegação por âncoras com scroll suave.
- **Hero Section:** Apresentação de impacto com foto de perfil dinâmica, botões de ação (Projetos e Download de CV) e links sociais oficiais.
- **Grid de Projetos Dinâmico:**
  - Renderização condicional de imagens e links.
  - Cards detalhados com badges de categoria (Front, Back, Full).
  - Botões específicos para código-fonte, demonstração ao vivo e vídeo.
- **Habilidades Interativas:** Sistema de abas para categorizar competências (Front-end, Back-end, Infra e Qualidade de Código).
- **Seções Complementares:** Detalhamento de Soft Skills e Formação Acadêmica com barra de proficiência em idiomas.
- **Botão Voltar ao Topo:** Componente flutuante com animação de visibilidade baseada no comportamento de scroll do usuário.

## 📁 Estrutura do Projeto

```text
src/
├── assets/             # Imagens e recursos estáticos (ex: foto.png)
├── components/         # Componentes React reutilizáveis
│   ├── BackToTop.tsx   # Botão flutuante para subir a página
│   ├── Contact.tsx     # Seção de contato com links e WhatsApp
│   ├── Education.tsx   # Histórico acadêmico e idiomas
│   ├── Hero.tsx        # Primeira dobra com intro e foto
│   ├── Navbar.tsx      # Barra de navegação responsiva
│   ├── Projects.tsx    # Grid dinâmica de projetos
│   ├── Skills.tsx      # Abas interativas de tecnologias
│   └── SoftSkills.tsx  # Competências comportamentais
├── App.tsx             # Componente principal e orquestração do layout
├── index.css           # Configurações globais de estilo e utilitários Tailwind
└── main.tsx            # Ponto de entrada da aplicação
```

## 🛠️ Como Executar

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [pnpm](https://pnpm.io/installation) instalados.

1. **Clone o repositório:**

    ```bash
    git clone <url-do-repositorio>
    cd portfolio-react
    ```

2. **Instale as dependências:**

    ```bash
    pnpm install
    ```

3. **Inicie o servidor de desenvolvimento:**

    ```bash
    pnpm dev
    ```

4. **Gerar a versão de produção (Build):**

    ```bash
    pnpm build
    ```

## 📝 Personalização

- **Dados e Projetos:** Edite as constantes dentro de `src/components/Projects.tsx` e `src/components/Skills.tsx` para adicionar novos itens.
- **Cores e Fontes:** As configurações visuais principais estão em `tailwind.config.js`.
- **Currículo:** Substitua o arquivo `public/curriculo.pdf` pelo seu documento pessoal para que o botão de download funcione corretamente.

---

Desenvolvido com ☕ e TypeScript por **Bruno Oliveira Nunes**.

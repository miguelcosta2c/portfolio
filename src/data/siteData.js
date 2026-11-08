
export const siteData = {
  /* ---------- SEO ---------- */
  seo: {
    title: "Miguel Cosme Costa — Desenvolvedor Web Freelancer",
    description:
      "Desenvolvimento de landing pages, websites e sistemas web. Projetos personalizados, responsivos e pensados para o seu negócio.",
    themeColor: "#06070b",
  },

  /* ---------- Ordem e presença das seções ---------- */
  layout: {
    sections: [
      "about",
      "services",
      "projects",
      "process",
      "differentials",
      "testimonials",
      "faq",
      "contact",
    ],
  },

  /* ---------- Identidade ---------- */
  personal: {
    name: "Miguel Cosme Costa",
    brand: "miguelcos.dev",
    role: "Desenvolvedor Web Freelancer",
    location: "Niterói, RJ — Brasil",
    description:
      "Desenvolvo soluções digitais que unem design, tecnologia e funcionalidade. Do primeiro conceito à publicação, transformo ideias em experiências web pensadas para cada negócio.",
    profileImage: "/images/eu.png",
  },

  /* ---------- Imagens globais ---------- */
  images: {
    placeholder: "/images/placeholder.svg",
  },

  /* ---------- Navbar ---------- */
  navbar: {
    links: [
      { label: "Sobre", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Projetos", href: "#projects" },
      { label: "Processo", href: "#process" },
      { label: "Contato", href: "#contact" },
    ],
    cta: { text: "Vamos conversar", link: "@email" },
  },

  /* ---------- Hero ---------- */
  hero: {
    badge: "Disponível para novos projetos",
    title: "Ideias bem construídas merecem uma presença digital à altura.",
    highlightWords: ["presença", "digital"],
    subtitle:
      "Desenvolvo websites, landing pages e sistemas web personalizados, combinando design moderno, tecnologia e atenção aos detalhes.",
    primaryButton: { text: "Vamos conversar", link: "@email" },
    secondaryButton: { text: "Conheça meu trabalho", link: "#projects" },
    meta: [
      "Desenvolvimento personalizado",
      "Design responsivo",
      "Tecnologia moderna",
    ],
    floatingTags: ["React", "Django", "Tailwind CSS", "Python"],
    scrollHint: "Explore meu trabalho",
  },

  /* ---------- Sobre ---------- */
  about: {
    eyebrow: "Sobre mim",
    title: "Tecnologia, criatividade e dedicação em cada projeto.",
    paragraphs: [
      "Sou Miguel Cosme Costa, desenvolvedor web freelancer e estudante de Informática no IFRJ — Campus Niterói. Tenho interesse em tecnologia e desenvolvimento de soluções digitais que realmente façam sentido para as pessoas e os negócios.",
      "Trabalho com desenvolvimento frontend e backend, utilizando tecnologias como React, Tailwind CSS, Python e Django. Gosto de participar de todas as etapas de um projeto, desde o planejamento e a estruturação até o desenvolvimento e a publicação.",
      "Acredito que um bom site vai além da aparência: ele precisa comunicar bem, funcionar corretamente e proporcionar uma experiência agradável em qualquer dispositivo.",
    ],
    highlights: [
      "Atendimento direto e personalizado",
      "Desenvolvimento pensado para cada necessidade",
      "Comunicação clara durante o projeto",
      "Atenção à qualidade do código e do design",
    ],
    skillsTitle: "Tecnologias que utilizo",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Python",
      "Django",
      "HTMX",
      "Git",
    ],
    photoCaption: "Niterói, RJ · Atendo projetos de todo o Brasil",
  },

  /* ---------- Serviços ---------- */
  services: {
    eyebrow: "Serviços",
    title: "Soluções digitais para diferentes necessidades",
    subtitle:
      "Desenvolvimento web personalizado, desde páginas de apresentação até sistemas com funcionalidades específicas.",
    items: [
      {
        title: "Landing Pages",
        description:
          "Páginas estratégicas para apresentar produtos, divulgar serviços, captar contatos e transformar visitantes em oportunidades.",
        icon: "layout",
      },
      {
        title: "Sites Institucionais",
        description:
          "Websites profissionais para empresas e profissionais que desejam apresentar seus serviços, fortalecer sua marca e conquistar presença digital.",
        icon: "building",
      },
      {
        title: "Portfólios e Sites Personalizados",
        description:
          "Experiências digitais desenvolvidas de acordo com a identidade, os objetivos e as necessidades de cada projeto.",
        icon: "palette",
      },
      {
        title: "Sistemas Web",
        description:
          "Aplicações web com funcionalidades personalizadas, integração com banco de dados e soluções desenvolvidas para facilitar processos.",
        icon: "code",
      },
      {
        title: "Dashboards e Painéis Administrativos",
        description:
          "Interfaces para visualizar informações, acompanhar dados e gerenciar operações de maneira organizada.",
        icon: "chart-no-axes-combined",
      },
      {
        title: "Websites Comerciais",
        description:
          "Soluções digitais para negócios que precisam apresentar produtos, serviços e facilitar o contato com seus clientes.",
        icon: "store",
      },
    ],
  },

  /* ---------- Projetos ---------- */
  projects: {
    eyebrow: "Portfólio",
    title: "Projetos e experiências",
    subtitle:
      "Conheça alguns dos trabalhos que desenvolvi e soluções que utilizo para explorar novas possibilidades no desenvolvimento web.",
    note:
      "Os projetos identificados como demonstrativos são criações conceituais desenvolvidas para apresentar minhas habilidades. Os demais correspondem a experiências em projetos reais.",
    items: [
      {
        id: 1,
        title: "Feira de Economia Solidária",
        category: "Landing Page",
        description:
          "Desenvolvimento de uma página web para apresentar uma feira de economia solidária, destacando seus participantes, produtos e informações do evento por meio de uma experiência visual organizada.",
        image: "/images/project-1.svg",
        technologies: ["React", "Vite", "Tailwind CSS"],
        link: "https://ecosol-em-rede.vercel.app/",
        featured: true,
        demo: false,
      },
      {
        id: 2,
        title: "Portfólio — Fotógrafo",
        category: "Website",
        description:
          "Projeto conceitual de um portfólio visual para profissionais de fotografia, com galeria de imagens, apresentação profissional e navegação responsiva.",
        image: "/images/project-3.svg",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        link: "",
        featured: false,
        demo: true,
      },
      {
        id: 3,
        title: "Experiência Digital — Tecnologia",
        category: "Site Personalizado",
        description:
          "Conceito de website para uma marca de tecnologia, explorando identidade visual, interações, animações e uma experiência digital diferenciada.",
        image: "/images/project-4.svg",
        technologies: ["React", "Three.js", "Tailwind CSS"],
        link: "",
        featured: false,
        demo: true,
      },
      {
        id: 4,
        title: "Sistema de Gestão Comercial",
        category: "Sistema Web",
        description:
          "Projeto conceitual de uma aplicação para gerenciamento de produtos, informações comerciais e operações administrativas, com interface intuitiva e organização de dados.",
        image: "/images/project-2.svg",
        technologies: ["Python", "Django", "HTMX"],
        link: "",
        featured: true,
        demo: true,
      },
    ],
  },

  /* ---------- Processo ---------- */
  process: {
    eyebrow: "Processo",
    title: "Do planejamento à publicação",
    subtitle:
      "Cada projeto segue etapas organizadas para garantir clareza, acompanhamento e um resultado alinhado às suas necessidades.",
    steps: [
      {
        title: "Primeira conversa",
        description:
          "Conheço seu negócio, entendo sua ideia e identifico os objetivos que você deseja alcançar com o projeto.",
        icon: "message",
      },
      {
        title: "Briefing e planejamento",
        description:
          "Organizo as informações, funcionalidades, referências e necessidades para definir a melhor solução.",
        icon: "clipboard",
      },
      {
        title: "Proposta e alinhamento",
        description:
          "Apresento o escopo, o investimento e o prazo estimado. Tudo é alinhado antes do início do desenvolvimento.",
        icon: "file-text",
      },
      {
        title: "Desenvolvimento",
        description:
          "Transformo o planejamento em uma solução funcional, trabalhando no design, na programação e na responsividade.",
        icon: "code",
      },
      {
        title: "Revisão e entrega",
        description:
          "Apresento o resultado, realizo os ajustes previstos e preparo a publicação e a entrega do projeto.",
        icon: "rocket",
      },
    ],
  },

  /* ---------- Diferenciais ---------- */
  differentials: {
    eyebrow: "Diferenciais",
    title: "Mais do que desenvolver páginas, construir boas soluções.",
    subtitle:
      "Cada decisão técnica e visual tem um propósito: entregar uma experiência útil, consistente e bem construída.",
    items: [
      {
        title: "Desenvolvimento personalizado",
        description:
          "Cada projeto é pensado de acordo com seus objetivos, identidade visual e necessidades.",
        icon: "palette",
      },
      {
        title: "Responsividade",
        description:
          "Interfaces planejadas para proporcionar uma boa experiência em celulares, tablets e computadores.",
        icon: "smartphone",
      },
      {
        title: "Frontend e Backend",
        description:
          "Possibilidade de desenvolver tanto interfaces modernas quanto aplicações com lógica de servidor e banco de dados.",
        icon: "braces",
      },
      {
        title: "Código organizado",
        description:
          "Estruturação do projeto com atenção à organização, legibilidade e facilidade de evolução.",
        icon: "code",
      },
      {
        title: "Experiência do usuário",
        description:
          "Navegação intuitiva, hierarquia visual e funcionalidades pensadas para facilitar a utilização.",
        icon: "mouse-pointer-click",
      },
      {
        title: "Acompanhamento próximo",
        description:
          "Comunicação durante as etapas do projeto para manter as decisões alinhadas e evitar surpresas.",
        icon: "messages-square",
      },
    ],
  },

  /* ---------- Depoimentos ---------- */
  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que dizem sobre meu trabalho",
    items: [],
  },

  /* ---------- FAQ ---------- */
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Quais tipos de projetos você desenvolve?",
        answer:
          "Desenvolvo landing pages, sites institucionais, portfólios, websites comerciais, sistemas web e dashboards. Cada projeto é avaliado de acordo com suas necessidades e funcionalidades.",
      },
      {
        question: "Os sites funcionam em celulares?",
        answer:
          "Sim. Os projetos são desenvolvidos com design responsivo, considerando diferentes tamanhos de tela, como celulares, tablets e computadores.",
      },
      {
        question: "Quanto tempo leva para desenvolver um site?",
        answer:
          "O prazo depende do tamanho, das funcionalidades e da complexidade do projeto. Após entender suas necessidades, apresento uma estimativa de prazo na proposta.",
      },
      {
        question: "Como funciona o orçamento?",
        answer:
          "Primeiro conversamos sobre sua ideia e necessidades. Depois, preparo uma proposta com escopo, funcionalidades, prazo e investimento, para que tudo fique claro antes do início.",
      },
      {
        question: "Posso solicitar alterações depois da entrega?",
        answer:
          "Sim. Podemos combinar serviços de manutenção e melhorias após a entrega. Alterações e novas funcionalidades são avaliadas e orçadas separadamente.",
      },
      {
        question: "Você também desenvolve sistemas com banco de dados?",
        answer:
          "Sim. Também trabalho com aplicações backend utilizando Python e Django, permitindo desenvolver sistemas com autenticação, gerenciamento de informações e integração com bancos de dados.",
      },
      {
        question: "Como funciona a manutenção?",
        answer:
          "A manutenção pode ser contratada separadamente, conforme a necessidade do projeto. O serviço pode incluir acompanhamento técnico, correções e suporte. Novas funcionalidades são combinadas à parte.",
      },
    ],
  },

  /* ---------- Contato ---------- */
  contact: {
    eyebrow: "Contato",
    title: "Tem uma ideia? Vamos conversar.",
    subtitle:
      "Conte um pouco sobre o que você precisa. Vamos entender seu projeto e encontrar uma solução que faça sentido para o seu negócio.",
    email: "miguelcosmecosta@gmail.com",
    channels: [
      {
        label: "LinkedIn",
        icon: "linkedin",
        link: "@linkedin",
        primary: true,
      },
      {
        label: "Instagram",
        icon: "instagram",
        link: "@instagram",
      },
      {
        label: "Github",
        icon: "github",
        link: "@github",
      },
      {
        label: "E-mail",
        icon: "mail",
        link: "@email",
      },
    ],
  },

  /* ---------- Redes sociais ---------- */
  social: {
    instagram: "https://instagram.com/miguelcos.dev",
    linkedin: "https://linkedin.com/in/miguel-cosme-costa-85913541b",
    github: "https://github.com/miguelcosta2c",
  },

  /* ---------- Rodapé ---------- */
  footer: {
    tagline:
      "Desenvolvimento web com propósito, tecnologia e atenção aos detalhes.",
    rights: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },

  /* ---------- Textos de interface / acessibilidade ---------- */
  ui: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    mainNav: "Navegação principal",
    footerNav: "Rodapé",
    photoAlt: "Foto de",
    coverAlt: "Capa do projeto",
    featuredBadge: "Destaque",
    demoBadge: "Projeto demonstrativo",
    viewProject: "Ver projeto",
    socialLabels: {
      instagram: "Instagram",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
};

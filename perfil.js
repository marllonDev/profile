// ---------- Traduções ----------
const translations = {
  pt: {
    roles: ["Senior Data Engineer", "AI Engineer", "Software Developer", "Open Source Advocate", "Explorador de LLMs", "Tech Mentor"],

    // Hero
    'hero-greeting': 'Olá, eu sou',
    'hero-tagline': 'Explorando dados, IA, LLMs e automação — do pipeline ao experimento no dia a dia.',
    'btn-conhecer': 'Conhecer',

    // Sobre
    'sobre-title': 'Sobre mim',
    'sobre-text-1': 'Com mais de <strong>5 anos</strong> na vanguarda da Engenharia de Dados, arquiteto <strong>ecossistemas escaláveis</strong> para líderes globais em Bancos, Seguros e Bebidas. Hoje, como <strong>Senior Data Software Engineer</strong> no setor de Crédito e Consórcio na <strong>Consórcio Embracon</strong>, construo arquiteturas de alto desempenho que transformam dados complexos em inteligência financeira estratégica.',
    'sobre-text-2': 'Passo o dia construindo fluxos de dados, testando modelos, conectando ferramentas via MCP e quebrando coisas só pra descobrir como funcionam por dentro. Minha especialidade está em conectar <strong>Data Engineering</strong> e <strong>Inteligência Artificial</strong> — integro automação com AI em plataformas de dados, alavanco MLOps e uso <strong>Generative AI</strong> no Databricks para automatizar Data Stewardship, classificação e enriquecimento de metadados.',
    'sobre-text-3': 'Sou movido por excelência técnica, otimização de performance, escalabilidade multi-cloud e operacionalização de modelos de IA em escala. Apaixonado por <strong>open source</strong> e democratização de dados. Hoje uso <strong>Claude Code</strong> como copiloto principal, roteando modelos via <strong>OpenRouter</strong> — cada contexto, sua melhor ferramenta.',

    // Stats
    'stat-anos': 'Anos de experiência',
    'stat-projetos': 'Projetos no GitHub',
    'stat-modelos': 'Modelos de IA testados',
    'stat-mcp': 'Servidores MCP conectados',
    'stat-certs': 'Certificações',
    'stat-empresas': 'Empresas & setores',

    // Stack
    'stack-title': 'Stack & ferramentas',
    'stack-text': 'O que uso no dia a dia, do editor à API.',

    // Foco
    'foco-title': 'Onde eu concentro energia',
    'skill-engdados': 'Engenharia de dados',
    'skill-pipelines': 'Pipelines & Big Data',
    'skill-arqdata': 'Arquitetura de dados',
    'skill-cloud': 'Multi-cloud (AWS/Azure)',
    'skill-automacao': 'Automação de fluxos',
    'skill-llms': 'Integração de LLMs & IA',
    'skill-devops': 'DevOps & CI/CD',
    'skill-software': 'Engenharia de software',
    'skill-observability': 'Observabilidade',

    // Experiência
    'exp-title': 'Experiência profissional',
    'exp-text': 'Trajetória em setores que movem economias — bancos, seguros, bebidas e crédito.',

    'exp-embracon-role': 'Senior Data Software Engineer',
    'exp-embracon-period': '1 ano e 1 mês · Atual',
    'exp-embracon-1': '<strong>Arquitetura de dados & pipelines:</strong> arquitetei e implementei pipelines ETL/ELT escaláveis usando Python, PySpark, Java e SQL em ambientes Multi-cloud (AWS & Azure).',
    'exp-embracon-2': '<strong>Administração de plataforma:</strong> atuei como administrador do Azure Databricks — configuração de clusters, segurança, otimização de custos e governança de dados.',
    'exp-embracon-3': '<strong>Ingestão & streaming real-time:</strong> soluções robustas de ingestão de RDBMS (Oracle, MySQL), SaaS (Salesforce) e streams em Kafka (Debezium/Confluent).',
    'exp-embracon-4': '<strong>Automação com IA:</strong> uso de Databricks AI para automatizar data stewardship, classificação e geração de metadados.',
    'exp-embracon-5': '<strong>Governança & observabilidade:</strong> frameworks de data lineage e catalogação usando Datadog e New Relic.',
    'exp-embracon-6': '<strong>DevOps:</strong> práticas CI/CD e workflows containerizados via Azure DevOps, GitHub e Docker.',
    'exp-embracon-7': '<strong>Liderança técnica:</strong> guidance sênior para novas arquiteturas, integração MLOps e resolução de incidentes.',

    'exp-ntt-role': 'Senior Data Software Engineer',
    'exp-ntt-period': '11 meses',
    'exp-ntt-1': '<strong>Observabilidade & confiabilidade:</strong> estabilidade de ambiente produtivo usando New Relic e ferramentas internas para monitorar requests, validar integridade e resolver incidentes críticos.',
    'exp-ntt-2': '<strong>DevOps:</strong> pilares de CI/CD dentro do Azure DevOps, gerenciando lifecycles em Dev, Test e Prod.',
    'exp-ntt-3': '<strong>Stakeholder management:</strong> conduzi apresentações técnicas sobre Cloud Architecture para times cross-funcionais.',
    'exp-ntt-4': '<strong>Analytics avançado:</strong> Databricks para automação de pipelines, análise de qualidade e visualizações business-centric.',
    'exp-ntt-5': '<strong>Backend Java:</strong> apps Java para sincronizar dados do Azure Data Lake Storage Gen2 com plataforma B2B core.',
    'exp-ntt-6': '<strong>Integração global:</strong> pipelines transformando pedidos/faturas para o formato padrão BEES — clientes B2B nos EUA, Europa, República Dominicana e Brasil.',

    'exp-wipro1-role': 'Senior Data Engineer',
    'exp-wipro1-period': '2 anos e 9 meses',
    'exp-wipro1-1': '<strong>Orquestração estratégica:</strong> pipelines de ingestão em larga escala com Azure Data Factory integrando SQL Server, DB2, MySQL, PostgreSQL e Oracle.',
    'exp-wipro1-2': '<strong>Arquitetura Medallion:</strong> Lakehouse robusto no Azure Databricks com camadas Bronze/Silver/Gold em Delta Lake.',
    'exp-wipro1-3': '<strong>Modelagem avançada:</strong> transformações complexas em PySpark/Python/SQL, modelagem Star Schema para BI e analytics.',
    'exp-wipro1-4': '<strong>Liderança & mentoria:</strong> liderança de time júnior, code reviews e mentoria estruturada.',
    'exp-wipro1-5': '<strong>Observabilidade:</strong> monitoring com Azure Monitor e logs internos do Databricks para pipelines batch críticos.',
    'exp-wipro1-6': '<strong>DevOps unificado:</strong> integração ADF + Databricks + Azure DevOps para ciclos automáticos.',
    'exp-wipro1-7': '<strong>Colaboração cross-funcional:</strong> parceria com Data Scientists/Analysts entregando datasets refinados para modelagem preditiva.',

    'exp-wipro2-role': 'Java Developer',
    'exp-wipro2-period': '1 ano e 4 meses',
    'exp-wipro2-1': '<strong>Full-Stack:</strong> soluções de alta performance para o Auto Frota (Java + Spring Boot), backend e front-end.',
    'exp-wipro2-2': '<strong>Ágil:</strong> Scrum team de alta velocidade entregando updates críticos para uma das maiores seguradoras do Brasil.',
    'exp-wipro2-3': '<strong>Arquitetura:</strong> participação em Architecture Design meetings — decisões de escalabilidade, schema, integração.',
    'exp-wipro2-4': '<strong>DevOps:</strong> ciclos completos com GitLab CI/CD, deploys frequentes em produção.',
    'exp-wipro2-5': '<strong>Crescimento técnico:</strong> aprofundamento em bancos relacionais e microserviços Java para o setor de seguros.',

    // Educação
    'edu-title': 'Educação',
    'edu-course-label': 'Curso',
    'edu-fiap': 'MBA em Engenharia de Dados',
    'edu-fiap-dur': 'Remoto · 1 ano',
    'edu-fiap-desc': 'Foco em Data Architectures avançadas, processamento Big Data e Cloud Infrastructure.',
    'edu-uninter': 'Análise e Desenvolvimento de Sistemas',
    'edu-uninter-dur': 'Remoto · 2.5 anos',
    'edu-uninter-desc': 'Foco em Engenharia de Software, Bancos de Dados e Full-stack Development.',
    'edu-berlitz': 'Inglês Avançado',
    'edu-berlitz-dur': 'Remoto · 1 ano',
    'edu-berlitz-desc': 'Prática diária para fluência técnica e colaboração global.',

    // Certificações
    'cert-title': 'Certificações',
    'cert-text': '12 certificações em cloud, dados, observabilidade e desenvolvimento.',

    // Awards
    'awards-title': 'Prêmios & reconhecimentos',
    'award-1-title': 'DevOps Propagator',
    'award-1-desc': 'Reconhecimento como propagador da cultura DevOps · 2025',
    'award-2-title': 'DevOps Leader in Brazil',
    'award-2-desc': 'Reconhecido entre lideranças DevOps do Brasil · 2023',

    // Projetos
    'projetos-title': 'Projetos recentes',
    'projetos-text': 'Os últimos repositórios públicos que movimentei no GitHub.',
    'repo-codebase': 'Servidor MCP de inteligência de código — codebases em grafo de conhecimento, consultas em ms.',
    'repo-omniroute': 'Gateway de IA open source — 330+ providers, 1200+ modelos, fallback automático.',
    'repo-habit': 'App para manter o hábito de beber água diariamente.',
    'repo-dab': 'Template customizado de DAB com CI/CD no GitHub Actions.',
    'repo-assets': 'Empacotamento e automação de assets.',
    'repo-imc': 'Calculadora de IMC.',
    'repo-flowshare': 'App de compartilhamento de tela (em desenvolvimento).',
    'repo-pyspark': 'Lab FIAP — programação orientada a objetos com PySpark.',
    'repo-cdc': 'Change Data Capture & event-driven & processamento de Big Data.',
    'repo-databricks': 'Hands-on LAB — democratizando os dados.',
    'repo-airflow': 'Exemplo de uso do Airflow em DataOps.',
    'repo-terraform': 'Infraestrutura de engenharia de dados com Terraform.',
    'repo-kafka': 'Sugestões via Kafka (em desenvolvimento).',
    'repo-flutter': 'Front-end Flutter para o kafka-caixa-sugestoes.',
    'repo-jogo': 'Jogo da memória para quebrar o gelo antes da Daily.',
    'repo-linkedin': 'Automação de conexão no LinkedIn.',
    'repo-n8n': 'Automações com n8n.',

    // Voluntariado
    'vol-title': 'Voluntariado',
    'vol-role': 'Tech Career Mentor · Remoto · 3 meses',
    'vol-desc': 'Mentoria de carreira para pessoas iniciando na área de tecnologia.',

    // Aspirações
    'asp-title': 'Aspirações',
    'asp-1': '🎯 Azure ou AWS Data Engineer certification',
    'asp-2': '⚡ Databricks Spark Developer certification',
    'asp-3': '🏅 Databricks Data Engineer Professional certification',

    // Hobbies
    'hob-title': 'Hobbies & interesses',
    'hob-text': 'O que faço quando o terminal fecha.',
    'hob-geek': 'Geek',
    'hob-geek-desc': 'Anime, mangá, filmes e livros.',
    'hob-tag-anime': 'Anime',
    'hob-tag-manga': 'Mangá',
    'hob-tag-movies': 'Filmes',
    'hob-tag-books': 'Livros',
    'hob-study': 'Estudo',
    'hob-study-desc': 'Leituras que expandem visão de mundo e pensamento crítico.',
    'hob-tag-philo': 'Filosofia',
    'hob-tag-history': 'História',
    'hob-tag-algo': 'Algoritmos',
    'hob-lang': 'Idiomas',
    'hob-lang-desc': 'Prática diária de inglês para fluência técnica.',
  },

  en: {
    roles: ["Senior Data Engineer", "AI Engineer", "Software Developer", "Open Source Advocate", "LLM Explorer", "Tech Mentor"],

    'hero-greeting': "Hi, I'm",
    'hero-tagline': 'Exploring data, AI, LLMs and automation — from the pipeline to the daily experiment.',
    'btn-conhecer': 'Discover',

    'sobre-title': 'About me',
    'sobre-text-1': 'With over <strong>5 years</strong> at the forefront of Data Engineering, I architect <strong>scalable data ecosystems</strong> for global leaders in Banking, Insurance, and Beverage production. Currently serving as a <strong>Senior Data Software Engineer</strong> in the Credit and Consortium industry at <strong>Consórcio Embracon</strong>, I focus on building high-performance architectures that transform complex data into strategic financial intelligence.',
    'sobre-text-2': "I spend my days building data flows, testing models, connecting tools via MCP and breaking things just to figure out how they work inside. My expertise lies in bridging the gap between traditional <strong>Data Engineering</strong> and <strong>Artificial Intelligence</strong> — I integrate AI-driven automation into data platforms, leverage MLOps, and utilize <strong>Generative AI</strong> features within Databricks to automate Data Stewardship, classification, and metadata enrichment.",
    'sobre-text-3': "I'm driven by technical excellence, performance optimization, multi-cloud scalability, and the operationalization of AI models at scale. Passionate about <strong>open source</strong> and data democratization. Today I use <strong>Claude Code</strong> as my main copilot, routing models via <strong>OpenRouter</strong> — each context, its best tool.",

    'stat-anos': 'Years of experience',
    'stat-projetos': 'GitHub projects',
    'stat-modelos': 'AI models tested',
    'stat-mcp': 'MCP servers connected',
    'stat-certs': 'Certifications',
    'stat-empresas': 'Companies & sectors',

    'stack-title': 'Stack & tools',
    'stack-text': 'What I use every day, from editor to API.',

    'foco-title': 'Where I focus my energy',
    'skill-engdados': 'Data Engineering',
    'skill-pipelines': 'Pipelines & Big Data',
    'skill-arqdata': 'Data architecture',
    'skill-cloud': 'Multi-cloud (AWS/Azure)',
    'skill-automacao': 'Workflow automation',
    'skill-llms': 'LLM & AI integration',
    'skill-devops': 'DevOps & CI/CD',
    'skill-software': 'Software engineering',
    'skill-observability': 'Observability',

    'exp-title': 'Professional experience',
    'exp-text': 'A journey across sectors that move economies — banking, insurance, beverage, and credit.',

    'exp-embracon-role': 'Senior Data Software Engineer',
    'exp-embracon-period': '1 year 1 month · Current',
    'exp-embracon-1': '<strong>Data architecture & pipelines:</strong> architected and implemented scalable ETL/ELT pipelines using Python, PySpark, Java, and SQL across Multi-cloud (AWS & Azure) environments.',
    'exp-embracon-2': '<strong>Platform administration:</strong> served as Azure Databricks administrator — cluster configuration, security, cost optimization, and data governance.',
    'exp-embracon-3': '<strong>Ingestion & real-time streaming:</strong> robust ingestion solutions from RDBMS (Oracle, MySQL), SaaS (Salesforce), and high-throughput real-time streams via Kafka (Debezium/Confluent).',
    'exp-embracon-4': '<strong>AI-driven automation:</strong> leveraged Databricks AI features to automate data stewardship, classification, and metadata generation.',
    'exp-embracon-5': '<strong>Governance & observability:</strong> comprehensive data lineage and cataloging frameworks using Datadog and New Relic.',
    'exp-embracon-6': '<strong>DevOps:</strong> CI/CD best practices and containerized workflows using Azure DevOps, GitHub, and Docker.',
    'exp-embracon-7': '<strong>Technical leadership:</strong> senior-level guidance for new architectures, MLOps integration, and advanced incident resolution.',

    'exp-ntt-role': 'Senior Data Software Engineer',
    'exp-ntt-period': '11 months',
    'exp-ntt-1': '<strong>Observability & reliability:</strong> managed production environment stability using New Relic and custom internal tools to monitor requests, validate data integrity, and resolve high-priority incidents.',
    'exp-ntt-2': '<strong>DevOps:</strong> established robust CI/CD deployment pillars within Azure DevOps, managing lifecycle environments across Dev, Test, and Production.',
    'exp-ntt-3': '<strong>Stakeholder management:</strong> led technical presentations on Cloud Architecture for cross-functional teams and key stakeholders.',
    'exp-ntt-4': '<strong>Advanced analytics:</strong> Databricks for pipeline automation, data quality analysis, and business-centric visualizations.',
    'exp-ntt-5': '<strong>Java backend:</strong> developed Java applications to sync processed data from Azure Data Lake Storage Gen2 into the core B2B platform.',
    'exp-ntt-6': '<strong>Global integration:</strong> pipelines to transform complex orders and invoices into the standardized BEES format — B2B customers across USA, Europe, Dominican Republic, and Brazil.',

    'exp-wipro1-role': 'Senior Data Engineer',
    'exp-wipro1-period': '2 years 9 months',
    'exp-wipro1-1': '<strong>Strategic orchestration:</strong> large-scale ingestion pipelines using Azure Data Factory integrating SQL Server, DB2, MySQL, PostgreSQL, and Oracle.',
    'exp-wipro1-2': '<strong>Medallion architecture:</strong> robust Lakehouse on Azure Databricks with Bronze/Silver/Gold layers in Delta Lake.',
    'exp-wipro1-3': '<strong>Advanced modeling:</strong> complex transformations in PySpark/Python/SQL, Star Schema modeling for BI and analytics.',
    'exp-wipro1-4': '<strong>Leadership & mentoring:</strong> led a team of junior developers, code reviews, and structured mentorship.',
    'exp-wipro1-5': '<strong>Observability:</strong> monitoring with Azure Monitor and Databricks internal logs for mission-critical batch pipelines.',
    'exp-wipro1-6': '<strong>Unified DevOps:</strong> ADF + Databricks + Azure DevOps integration for automated deployment cycles.',
    'exp-wipro1-7': '<strong>Cross-functional collaboration:</strong> partnered with Data Scientists/Analysts, delivering refined datasets for predictive modeling.',

    'exp-wipro2-role': 'Java Developer',
    'exp-wipro2-period': '1 year 4 months',
    'exp-wipro2-1': '<strong>Full-Stack:</strong> high-performance solutions for the Auto Frota platform (Java + Spring Boot), backend and front-end.',
    'exp-wipro2-2': "<strong>Agile:</strong> high-velocity Scrum team delivering mission-critical updates for one of Brazil's largest insurance providers.",
    'exp-wipro2-3': '<strong>Architecture:</strong> participated in Architecture Design meetings — decisions on scalability, schema, and integration.',
    'exp-wipro2-4': '<strong>DevOps:</strong> full software lifecycles with GitLab CI/CD, frequent production deploys.',
    'exp-wipro2-5': '<strong>Technical growth:</strong> deepened core competencies in relational databases and Java microservices for the insurance sector.',

    'edu-title': 'Education',
    'edu-course-label': 'Course',
    'edu-fiap': 'MBA in Data Engineering',
    'edu-fiap-dur': 'Remote · 1 year',
    'edu-fiap-desc': 'Concentrated on advanced Data Architectures, Big Data processing, and Cloud Infrastructure.',
    'edu-uninter': 'Analysis and Systems Development',
    'edu-uninter-dur': 'Remote · 2.5 years',
    'edu-uninter-desc': 'Focused on Software Engineering, Database Management, and Full-stack Development.',
    'edu-berlitz': 'Advanced English',
    'edu-berlitz-dur': 'Remote · 1 year',
    'edu-berlitz-desc': 'Daily practice for technical fluency and global collaboration.',

    'cert-title': 'Certifications',
    'cert-text': '12 certifications in cloud, data, observability, and development.',

    'awards-title': 'Awards & recognition',
    'award-1-title': 'DevOps Propagator',
    'award-1-desc': 'Recognized as a propagator of the DevOps culture · 2025',
    'award-2-title': 'DevOps Leader in Brazil',
    'award-2-desc': 'Recognized among DevOps leaders in Brazil · 2023',

    'projetos-title': 'Recent projects',
    'projetos-text': "The latest public repositories I've been working on.",
    'repo-codebase': 'MCP server for code intelligence — codebases as a knowledge graph, queries in ms.',
    'repo-omniroute': 'Open source AI gateway — 330+ providers, 1200+ models, automatic fallback.',
    'repo-habit': 'App to build the habit of drinking water daily.',
    'repo-dab': 'Custom DAB template with CI/CD on GitHub Actions.',
    'repo-assets': 'Asset bundling and automation.',
    'repo-imc': 'BMI calculator.',
    'repo-flowshare': 'Screen sharing app (in development).',
    'repo-pyspark': 'FIAP lab — object-oriented programming with PySpark.',
    'repo-cdc': 'Change Data Capture & event-driven & Big Data processing.',
    'repo-databricks': 'Hands-on LAB — democratizing data.',
    'repo-airflow': 'Example of Airflow usage in DataOps.',
    'repo-terraform': 'Data engineering infrastructure with Terraform.',
    'repo-kafka': 'Suggestions via Kafka (in development).',
    'repo-flutter': 'Flutter front-end for kafka-caixa-sugestoes.',
    'repo-jogo': 'Memory game to break the ice before the Daily standup.',
    'repo-linkedin': 'LinkedIn connection automation.',
    'repo-n8n': 'Automations with n8n.',

    'vol-title': 'Volunteer',
    'vol-role': 'Tech Career Mentor · Remote · 3 months',
    'vol-desc': 'Career mentorship for people starting in the tech field.',

    'asp-title': 'Aspirations',
    'asp-1': '🎯 Azure or AWS Data Engineer certification',
    'asp-2': '⚡ Databricks Spark Developer certification',
    'asp-3': '🏅 Databricks Data Engineer Professional certification',

    'hob-title': 'Hobbies & interests',
    'hob-text': 'What I do when the terminal closes.',
    'hob-geek': 'Geek',
    'hob-geek-desc': 'Anime, manga, movies, and books.',
    'hob-tag-anime': 'Anime',
    'hob-tag-manga': 'Manga',
    'hob-tag-movies': 'Movies',
    'hob-tag-books': 'Books',
    'hob-study': 'Study',
    'hob-study-desc': 'Reading that expands worldview and critical thinking.',
    'hob-tag-philo': 'Philosophy',
    'hob-tag-history': 'History',
    'hob-tag-algo': 'Algorithms',
    'hob-lang': 'Languages',
    'hob-lang-desc': 'Daily English practice for technical fluency.',
  }
};

// ---------- Estado de idioma ----------
let currentLang = 'pt';

function applyTranslations(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('langToggle').textContent = lang === 'pt' ? 'EN' : 'PT';
}

// ---------- Botão de idioma ----------
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyTranslations(currentLang);

  roleIdx = 0;
  charIdx = 0;
  deleting = false;
  clearTimeout(typeTimeout);
  typeTick();
});

// ---------- Efeito de digitação ----------
const typingEl = document.getElementById("typing");
let roleIdx = 0;
let charIdx = 0;
let deleting = false;
let typeTimeout;

function typeTick() {
  const roles = translations[currentLang].roles;
  const role = roles[roleIdx];
  if (!deleting) {
    charIdx++;
    typingEl.textContent = role.slice(0, charIdx);
    if (charIdx === role.length) {
      deleting = true;
      typeTimeout = setTimeout(typeTick, 1800);
      return;
    }
    typeTimeout = setTimeout(typeTick, 70);
  } else {
    charIdx--;
    typingEl.textContent = role.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeTimeout = setTimeout(typeTick, 350);
      return;
    }
    typeTimeout = setTimeout(typeTick, 35);
  }
}
typeTick();

// ---------- Glow do hero segue o mouse ----------
const hero = document.getElementById("hero");
const glow = document.getElementById("heroGlow");
if (hero && glow) {
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - r.left) + "px";
    glow.style.top  = (e.clientY - r.top)  + "px";
  });
}

// ---------- Reveal on scroll + animações ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add("visible");
    io.unobserve(el);

    if (el.classList.contains("stat-value")) animateCount(el);
    if (el.classList.contains("skill-fill")) el.style.width = el.dataset.width + "%";
  });
}, { threshold: 0.35 });

document.querySelectorAll(".reveal, .stat-value, .skill-fill").forEach((el) => io.observe(el));

// ---------- Contadores animados ----------
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const dur = 1200;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ---------- Ano no footer ----------
document.getElementById("ano").textContent = new Date().getFullYear();

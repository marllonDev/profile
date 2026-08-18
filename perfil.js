// ---------- Traduções ----------
const translations = {
  pt: {
    roles: ["Engenheiro de Dados", "Engenheiro de IA", "Desenvolvedor", "Open Source Advocate", "Explorador de LLMs"],
    'hero-greeting': 'Olá, eu sou',
    'hero-tagline': 'Explorando dados, IA, LLMs e automação — do pipeline ao experimento no dia a dia.',
    'btn-conhecer': 'Conhecer',
    'sobre-title': 'Sobre mim',
    'sobre-text-1': '<strong>Senior Data Software Engineer & AI Engineer</strong> na Consórcio Embracon, formado pela FIAP e apaixonado por projetos open source. Trabalho com ecossistemas de dados end-to-end — da ingestão ao consumo — usando Spark, Kafka, Airflow e Databricks no dia a dia. Certificado <strong>2x Azure</strong> e <strong>1x AWS</strong>.',
    'sobre-text-2': 'Passo o dia construindo fluxos de dados, testando modelos, conectando ferramentas via MCP e quebrando coisas só pra descobrir como funcionam por dentro.',
    'sobre-text-3': 'Hoje trabalho com <strong>Claude Code</strong> como copiloto principal, roteando modelos via <strong>OpenRouter</strong> e montando perfis de uso por projeto — cada contexto, sua melhor ferramenta.',
    'stat-projetos': 'Projetos explorados',
    'stat-modelos': 'Modelos de IA testados',
    'stat-mcp': 'Servidores MCP conectados',
    'stat-ferramentas': 'Ferramentas no fluxo',
    'stat-certs': 'Certificações Cloud',
    'stack-title': 'Stack & ferramentas',
    'stack-text': 'O que uso no dia a dia, do editor à API.',
    'foco-title': 'Onde eu concentro energia',
    'skill-engdados': 'Engenharia de dados',
    'skill-pipelines': 'Pipelines & Big Data',
    'skill-automacao': 'Automação de fluxos',
    'skill-llms': 'Integração de LLMs',
    'skill-arqdata': 'Arquitetura de dados',
    'skill-software': 'Engenharia de software',
    'skill-testes': 'Testes & experimentos',
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
  },
  en: {
    roles: ["Data Engineer", "AI Engineer", "Developer", "Open Source Advocate", "LLM Explorer"],
    'hero-greeting': 'Hi, I\'m',
    'hero-tagline': 'Exploring data, AI, LLMs and automation — from the pipeline to the daily experiment.',
    'btn-conhecer': 'Discover',
    'sobre-title': 'About me',
    'sobre-text-1': '<strong>Senior Data Software Engineer & AI Engineer</strong> at Consórcio Embracon, FIAP graduate and passionate about open source projects. I work with end-to-end data ecosystems — from ingestion to consumption — using Spark, Kafka, Airflow and Databricks every day. Certified <strong>2x Azure</strong> and <strong>1x AWS</strong>.',
    'sobre-text-2': 'I spend my days building data flows, testing models, connecting tools via MCP and breaking things just to figure out how they work inside.',
    'sobre-text-3': 'Today I use <strong>Claude Code</strong> as my main copilot, routing models via <strong>OpenRouter</strong> and building usage profiles per project — each context, its best tool.',
    'stat-projetos': 'Projects explored',
    'stat-modelos': 'AI models tested',
    'stat-mcp': 'MCP servers connected',
    'stat-ferramentas': 'Tools in the workflow',
    'stat-certs': 'Cloud certifications',
    'stack-title': 'Stack & tools',
    'stack-text': 'What I use every day, from editor to API.',
    'foco-title': 'Where I focus my energy',
    'skill-engdados': 'Data Engineering',
    'skill-pipelines': 'Pipelines & Big Data',
    'skill-automacao': 'Workflow automation',
    'skill-llms': 'LLM integration',
    'skill-arqdata': 'Data architecture',
    'skill-software': 'Software engineering',
    'skill-testes': 'Testing & experiments',
    'projetos-title': 'Recent projects',
    'projetos-text': 'The latest public repositories I\'ve been working on.',
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
  }
};

// ---------- Estado de idioma ----------
let currentLang = 'pt';

function applyTranslations(lang) {
  const t = translations[lang];

  // Texto simples
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML (parágrafos com <strong>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // html lang attr
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  // Botão mostra o idioma oposto (o que vai activar)
  document.getElementById('langToggle').textContent = lang === 'pt' ? 'EN' : 'PT';
}

// ---------- Botão de idioma ----------
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyTranslations(currentLang);

  // Reinicia o efeito de digitação com os roles do novo idioma
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

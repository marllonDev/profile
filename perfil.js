// ---------- Efeito de digitação ----------
const roles = [
  "Engenheiro de Dados",
  "Desenvolvedor",
  "Entusiasta de IA",
  "Explorador de LLMs",
  "Automatizador de fluxos",
  "Usuário de Claude Code",
];
const typingEl = document.getElementById("typing");
let roleIdx = 0;
let charIdx = 0;
let deleting = false;

function typeTick() {
  const role = roles[roleIdx];
  if (!deleting) {
    charIdx++;
    typingEl.textContent = role.slice(0, charIdx);
    if (charIdx === role.length) {
      deleting = true;
      setTimeout(typeTick, 1800);
      return;
    }
    setTimeout(typeTick, 70);
  } else {
    charIdx--;
    typingEl.textContent = role.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(typeTick, 350);
      return;
    }
    setTimeout(typeTick, 35);
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
    glow.style.top = (e.clientY - r.top) + "px";
  });
}

// ---------- Reveal on scroll + animações ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add("visible");
    io.unobserve(el);

    if (el.classList.contains("stat-value")) {
      animateCount(el);
    }
    if (el.classList.contains("skill-fill")) {
      el.style.width = el.dataset.width + "%";
    }
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

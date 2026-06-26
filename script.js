// ============================================================
//  script.js – Traveller Tweet Chess Tournament
//  Handles: language toggle (i18n), FAQ accordion,
//           mobile menu, header scroll shadow, mini board
// ============================================================

import { translations } from "./i18n.js";
import { siteData }     from "./siteData.js";

// ── State ─────────────────────────────────────────────────
let currentLang = "en";

// ── Boot ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderMiniBoard();
  applyLang("en");
  initHeaderScroll();
  initFAQ();
  initMobileMenu();
  renderSchedule();
  renderPrizes();
  renderFAQ();
  renderStats();
});

// ── Language toggle ───────────────────────────────────────
window.toggleLang = function () {
  currentLang = currentLang === "en" ? "ar" : "en";
  applyLang(currentLang);
};

function applyLang(lang) {
  const t   = translations[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  document.documentElement.lang = lang;
  document.documentElement.dir  = dir;
  document.body.classList.toggle("rtl", lang === "ar");

  // Update all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update lang button
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = t.langSwitch;

  // Re-render dynamic sections so they pick up new language
  renderSchedule();
  renderPrizes();
  renderFAQ();
  renderStats();
}

function t(key) {
  return translations[currentLang][key] ?? key;
}

// ── Dynamic renders (driven by siteData) ─────────────────

function renderStats() {
  const el = document.getElementById("heroStats");
  if (!el) return;
  el.innerHTML = siteData.stats.map((s, i) => `
    ${i > 0 ? '<div class="stat-div"></div>' : ""}
    <div class="stat">
      <span class="stat-num">${s.prefix ?? ""}${s.num}</span>
      <span class="stat-lbl">${currentLang === "ar" ? s.labelAr : s.labelEn}</span>
    </div>
  `).join("");
}

function renderSchedule() {
  const el = document.getElementById("timelineList");
  if (!el) return;
  el.innerHTML = siteData.schedule.map(item => `
    <div class="timeline-item">
      <div class="t-date">${item.date}</div>
      <div class="t-dot"></div>
      <div class="t-info">
        <h4>${currentLang === "ar" ? item.titleAr : item.titleEn}</h4>
        <p>${currentLang === "ar" ? item.descAr  : item.descEn}</p>
      </div>
    </div>
  `).join("");
}

function renderPrizes() {
  const el = document.getElementById("prizesGrid");
  if (!el) return;
  el.innerHTML = siteData.prizes.map(p => `
    <div class="prize-card ${p.tier}">
      ${p.crown ? '<div class="prize-crown">👑</div>' : ""}
      <div class="prize-rank">${p.rank}</div>
      <div class="prize-icon">${p.icon}</div>
      <div class="prize-name">${currentLang === "ar" ? p.nameAr : p.nameEn}</div>
      <div class="prize-amt">${p.amount}</div>
      <p>${currentLang === "ar" ? p.extraAr : p.extraEn}</p>
    </div>
  `).join("");
}

function renderFAQ() {
  const el = document.getElementById("faqList");
  if (!el) return;
  el.innerHTML = siteData.faq.map((item, i) => `
    <div class="faq-item" data-faq="${i}">
      <button class="faq-q" onclick="toggleFaq(${i})">
        <span>${currentLang === "ar" ? item.questionAr : item.questionEn}</span>
        <span class="faq-arrow">↓</span>
      </button>
      <div class="faq-a">${currentLang === "ar" ? item.answerAr : item.answerEn}</div>
    </div>
  `).join("");
}

// ── FAQ Accordion ─────────────────────────────────────────
window.toggleFaq = function (index) {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.toggle("open");
    } else {
      item.classList.remove("open"); // close others
    }
  });
};

// ── Mobile menu ───────────────────────────────────────────
window.toggleMenu = function () {
  const menu = document.getElementById("mobileMenu");
  const btn  = document.getElementById("hamburger");
  if (!menu) return;
  menu.classList.toggle("open");
  btn?.classList.toggle("active");
};

function initMobileMenu() {
  // Close menu when a link inside it is clicked
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("mobileMenu")?.classList.remove("open");
      document.getElementById("hamburger")?.classList.remove("active");
    });
  });
}

// ── Header scroll shadow ──────────────────────────────────
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
}

// ── FAQ init (for static HTML fallback) ───────────────────
function initFAQ() {
  // Only needed if FAQ isn't dynamically rendered
  document.querySelectorAll(".faq-q[onclick]").forEach(btn => {
    // Already wired via onclick; nothing extra needed here
  });
}

// ── Mini Chess Board ──────────────────────────────────────
function renderMiniBoard() {
  const board = document.getElementById("miniBoard");
  if (!board) return;

  const startPos = [
    ["♜","♞","♝","♛","♚","♝","♞","♜"],
    ["♟","♟","♟","♟","♟","♟","♟","♟"],
    [ "","","","","","","",""],
    [ "","","","","","","",""],
    [ "","","","","","","",""],
    [ "","","","","","","",""],
    ["♙","♙","♙","♙","♙","♙","♙","♙"],
    ["♖","♘","♗","♕","♔","♗","♘","♖"],
  ];

  board.innerHTML = "";
  startPos.forEach((row, r) => {
    row.forEach((piece, c) => {
      const sq = document.createElement("div");
      sq.className = "sq " + ((r + c) % 2 === 0 ? "sq-l" : "sq-d");
      if (piece) {
        const sp = document.createElement("span");
        sp.textContent = piece;
        sq.appendChild(sp);
      }
      board.appendChild(sq);
    });
  });
}

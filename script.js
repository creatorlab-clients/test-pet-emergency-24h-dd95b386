/* ============================================================
   template-veterinari-002 — Pet Emergency 24h
   script.js — scroll animation, icons, interactions
   ============================================================ */

/* --- Frame config ----------------------------------------- */
var FRAME_PATH  = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/veterinari-002/frames/';
var FRAME_COUNT = 151;
var FRAME_PREFIX = 'frame_';
var FRAME_PAD   = 4;
var FRAME_EXT   = '.webp';

/* --- Image fallback --------------------------------------- */
window.__imgFallback = function(img, label) {
  var w = img.naturalWidth || 400;
  var h = img.naturalHeight || 300;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '">'
    + '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#1A6B45"/>'
    + '<stop offset="100%" stop-color="#0D2D1E"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="url(#g)"/>'
    + '<text x="50%" y="50%" font-family="sans-serif" font-size="14" fill="rgba(255,255,255,0.5)" text-anchor="middle" dy="0.35em">'
    + (label || 'imagem') + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

/* --- Phosphor Icons (256×256) ----------------------------- */
var PHOSPHOR_ICONS = {
  'FirstAidKit': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><rect x="32" y="64" width="192" height="160" rx="16"/><path d="M168 64V48a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16"/><line x1="128" y1="112" x2="128" y2="176"/><line x1="96" y1="144" x2="160" y2="144"/></svg>',
  'Scissors':    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><circle cx="72" cy="184" r="32"/><circle cx="72" cy="72" r="32"/><line x1="96" y1="160" x2="224" y2="32"/><line x1="96" y1="96" x2="224" y2="224"/></svg>',
  'Microscope':  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M88 56l40 40"/><path d="M128 96l24-24a16 16 0 0 1 22.6 22.6L150.6 119 128 96z"/><path d="M80 48a16 16 0 0 1 22.6 0L128 73.4"/><path d="M56 200h144"/><path d="M128 136v64"/><circle cx="128" cy="152" r="24"/></svg>',
  'PawPrint':    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="96" cy="72" rx="24" ry="32"/><ellipse cx="160" cy="72" rx="24" ry="32"/><ellipse cx="56" cy="128" rx="20" ry="28"/><ellipse cx="200" cy="128" rx="20" ry="28"/><path d="M128 176c-40 0-72-24-72-48 0-16 16-24 32-16l40 16 40-16c16-8 32 0 32 16 0 24-32 48-72 48z"/></svg>',
  'Clock':       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',
  'UsersThree':  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M16 208c0-32 28-56 64-56a80 80 0 0 0 0-48C62 104 32 80 32 48c0-17.7 14.3-32 32-32s32 14.3 32 32"/><circle cx="128" cy="80" r="40"/><path d="M80 208c0-26.5 21.5-48 48-48s48 21.5 48 48"/><path d="M176 104c36 0 64 24 64 56"/><path d="M192 48c0 17.7-14.3 32-32 32"/><path d="M160 48c0-17.7 14.3-32 32-32s32 14.3 32 32c0 17.7-14.3 32-32 32"/></svg>',
  'Stethoscope': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M80 48v80a72 72 0 0 0 144 0v-16"/><circle cx="224" cy="96" r="24"/><path d="M56 32a24 24 0 0 1 48 0v96"/><line x1="56" y1="32" x2="80" y2="32"/></svg>',
  'Heart':       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" stroke="none"><path d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62z"/></svg>',
  'Lightning':   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><polygon points="144,16 48,144 128,144 112,240 208,112 128,112"/></svg>',
  'Moon':        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M216 112A88 88 0 1 1 144 40a72 72 0 0 0 72 72z"/></svg>',
  'MapPin':      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80z"/><circle cx="128" cy="104" r="24"/></svg>',
  'Phone':       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M222.37 158.46l-47.11-21.11a16 16 0 0 0-15.17 1.4l-32.29 21.52A117.03 117.03 0 0 1 74.12 107.7l21.29-31.93a16 16 0 0 0 1.48-15.17L75.88 13.63a16 16 0 0 0-16.62-9.52A48.66 48.66 0 0 0 16 48c0 106.06 85.94 192 192 192a48.66 48.66 0 0 0 43.89-43.26 16 16 0 0 0-9.52-16.62z"/></svg>',
  'WhatsApp':    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M128 24a104 104 0 0 0-91.82 152.88L24 232l57.77-11.89A104 104 0 1 0 128 24z"/><path d="M96 144c22 22 44 32 56 28l10-12c4-4 10-4 14 0l18 18a8 8 0 0 1 0 12c-8 8-28 14-60-18s-26-52-18-60a8 8 0 0 1 12 0l18 18c4 4 4 10 0 14z" fill="currentColor" stroke="none"/></svg>',
  'Instagram':   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="40"/><circle cx="180" cy="76" r="8" fill="currentColor" stroke="none"/></svg>',
  'ArrowRight':  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><line x1="40" y1="128" x2="216" y2="128"/><polyline points="144,56 216,128 144,200"/></svg>',
  'CheckCircle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0z" fill="currentColor" stroke="none"/><circle cx="128" cy="128" r="96"/></svg>',
  'Warning':     '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19 23.51 23.51 0 0 0 .02-23.72z"/><line x1="128" y1="104" x2="128" y2="144"/><circle cx="128" cy="176" r="8" fill="currentColor" stroke="none"/></svg>',
  'ShieldCheck': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M40 114.79V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v58.77c0 84.18-71.31 112.07-88 118.41C111.31 226.86 40 199 40 114.79z"/><polyline points="88,136 112,160 168,104"/></svg>',
  'Star':        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" stroke="none"><path d="M243.2 93.63a16 16 0 0 0-13.58-11L166 76.89 141.35 19.64a16 16 0 0 0-26.7 0L90 76.89l-63.62 5.73a16 16 0 0 0-9.07 27.86l47.85 43-13.8 62.65a16 16 0 0 0 23.84 17.34L128 198.16l43.79 35.31a16 16 0 0 0 23.84-17.34l-13.8-62.65 47.85-43a16 16 0 0 0 3.52-16.85z"/></svg>',
  'X':           '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"><line x1="200" y1="56" x2="56" y2="200"/><line x1="56" y1="56" x2="200" y2="200"/></svg>',
  'List':        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><line x1="40" y1="128" x2="216" y2="128"/><line x1="40" y1="64" x2="216" y2="64"/><line x1="40" y1="192" x2="216" y2="192"/></svg>',
  'Hospital':    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M32 224V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v168"/><line x1="16" y1="224" x2="240" y2="224"/><line x1="128" y1="48" x2="128" y2="224"/><line x1="32" y1="136" x2="224" y2="136"/><line x1="104" y1="80" x2="104" y2="112"/><line x1="88" y1="96" x2="120" y2="96"/><line x1="160" y1="80" x2="160" y2="112"/><line x1="144" y1="96" x2="176" y2="96"/><line x1="104" y1="168" x2="104" y2="200"/><line x1="88" y1="184" x2="120" y2="184"/></svg>',
};

/* ============================================================
   MAIN IIFE
   ============================================================ */
(function () {
  'use strict';

  /* --- Inject icons --------------------------------------- */
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    if (PHOSPHOR_ICONS[name]) {
      el.innerHTML = PHOSPHOR_ICONS[name];
      el.classList.add('icon');
    }
  });

  /* --- Footer year --------------------------------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* --- Navbar scroll shrink ------------------------------ */
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }
    }, { passive: true });
  }

  /* --- Mobile nav toggle --------------------------------- */
  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      hamburger.innerHTML = open
        ? PHOSPHOR_ICONS['X']
        : PHOSPHOR_ICONS['List'];
    });
    /* close on link click */
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = PHOSPHOR_ICONS['List'];
      });
    });
  }

  /* --- IntersectionObserver: fade-up -------------------- */
  if ('IntersectionObserver' in window) {
    var ioFade = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          ioFade.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(function (el) {
      ioFade.observe(el);
    });

    /* stagger cards */
    var ioStagger = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var items = e.target.querySelectorAll('.stagger-card');
          items.forEach(function (item, i) {
            setTimeout(function () {
              item.classList.add('is-visible');
            }, i * 110);
          });
          ioStagger.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.stagger-grid').forEach(function (el) {
      ioStagger.observe(el);
    });
  } else {
    /* fallback: show everything */
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* --- Scroll canvas ------------------------------------- */
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx        = canvas.getContext('2d');
  var frameIndex = 0;
  var frames     = [];
  var loaded     = 0;
  var dpr        = window.devicePixelRatio || 1;

  function pad(n) {
    var s = String(n);
    while (s.length < FRAME_PAD) s = '0' + s;
    return s;
  }

  function resize() {
    var cw = canvas.offsetWidth;
    var ch = canvas.offsetHeight;
    canvas.width  = cw * dpr;
    canvas.height = ch * dpr;
    ctx.scale(dpr, dpr);
    renderFrame(frameIndex);
  }

  function renderFrame(idx) {
    var img = frames[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;
    var cw = canvas.offsetWidth;
    var ch = canvas.offsetHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    var scale = Math.max(cw / iw, ch / ih);
    var w = iw * scale;
    var h = ih * scale;
    var x = (cw - w) / 2;
    var y = (ch - h) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, w, h);
  }

  function updateFrame() {
    var pin  = section.querySelector('.scroll-anim-pin');
    var rect = section.getBoundingClientRect();
    var totalH = section.offsetHeight - (pin ? pin.offsetHeight : window.innerHeight);
    var progress = Math.min(1, Math.max(0, -rect.top / totalH));
    var idx = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
    if (idx !== frameIndex) {
      frameIndex = idx;
      renderFrame(frameIndex);
    }
  }

  /* preload first frame, then rest */
  function preload() {
    var first = new Image();
    first.onload = function () {
      frames[0] = first;
      resize();
    };
    first.src = FRAME_PATH + FRAME_PREFIX + pad(1) + FRAME_EXT;

    for (var i = 1; i < FRAME_COUNT; i++) {
      (function (n) {
        var img = new Image();
        img.onload = function () { frames[n] = img; loaded++; };
        img.src = FRAME_PATH + FRAME_PREFIX + pad(n + 1) + FRAME_EXT;
      })(i);
    }
  }

  window.addEventListener('scroll', updateFrame, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  preload();

})();

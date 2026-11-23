/* =========================================================
   For Mother — private application page
   ========================================================= */

/* ---------- EDIT HERE ---------- */

// Moodboard images. Drop yours in /assets/Mother/Moodboard/ and list them here.
// The stand-ins below are borrowed from the photography section until then.
const MOODBOARD = [
  '/assets/Photography/thumbs/Digital/Peeduh/DSC01185-Edit.jpg',
  '/assets/Photography/thumbs/Film/Roll 3/branden da neg roll 3 25-3-26-01.jpg',
  '/assets/Photography/thumbs/Digital/Museum Research/DSC03147.jpg',
  '/assets/Photography/thumbs/Digital/Sunset on the Concourse/01-1.jpg',
  '/assets/Photography/thumbs/Film/Roll 2/branden da neg roll 2 25-3-26-02.jpg',
  '/assets/Photography/thumbs/Digital/Javen 350Z/DSC03112-2.jpg',
  '/assets/Photography/thumbs/Film/Roll 1/brandon da neg roll1 25-3-26-02.jpg',
  '/assets/Photography/thumbs/Digital/Revzilla/DSC03556-2.jpg',
  '/assets/Photography/thumbs/Digital/Dominican Republic/DSC00048.jpg',
];

// Earliest ad: if it lives on YouTube, put the video ID here (the part after "v=")
// and it will play in place of the local video file.
const AD_YOUTUBE_ID = '';

/* ---------- END EDIT ---------- */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ============ Scroll reveal ============ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
function observeReveals(root = document) {
  root.querySelectorAll('.reveal:not(.in)').forEach((el) => revealObserver.observe(el));
}
observeReveals();

// Safety net: anything that has reached the screen gets shown, even if the
// observer above missed it (fast scrolls, jumps, browser quirks).
function revealPassed() {
  const limit = window.innerHeight * 0.95;
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
    if (el.getBoundingClientRect().top < limit) {
      el.classList.add('in');
      revealObserver.unobserve(el);
    }
  });
}
let revealTick = false;
window.addEventListener('scroll', () => {
  if (!revealTick) { revealTick = true; requestAnimationFrame(() => { revealTick = false; revealPassed(); }); }
}, { passive: true });
window.addEventListener('load', revealPassed);

/* ============ 1. Hero: five words pop in over the headshot ============ */
(function hero() {
  const section = document.getElementById('hero');
  const sticky = section.querySelector('.hero-sticky');
  const words = Array.from(section.querySelectorAll('.hero-word'));
  const hint = section.querySelector('.hero-hint');
  // Scroll progress (0–1) at which each word appears.
  const start = 0.08, end = 0.72;
  const steps = words.map((_, i) => start + (end - start) * (i / Math.max(1, words.length - 1)));

  let ticking = false;
  function update() {
    ticking = false;
    const total = section.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / total));
    words.forEach((w, i) => w.classList.toggle('on', p >= steps[i]));
    if (!reduceMotion) sticky.style.setProperty('--zoom', (1 + p * 0.04).toFixed(4));
    sticky.style.setProperty('--bright', (1 - p * 0.3).toFixed(3));
    hint.style.opacity = p > 0.03 ? 0 : 1;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* ============ Name: the ✽ spins as you scroll, like the home screen ============ */
(function scrollMotif() {
  const motif = document.getElementById('scroll-motif');
  if (!motif || reduceMotion) return;
  let rotation = 0;
  let running = false;
  function animate() {
    const target = window.scrollY * 0.3;
    rotation += (target - rotation) * 0.08;
    motif.style.transform = `rotate(${rotation.toFixed(2)}deg)`;
    if (Math.abs(target - rotation) > 0.1) requestAnimationFrame(animate);
    else running = false;
  }
  window.addEventListener('scroll', () => {
    if (!running) { running = true; requestAnimationFrame(animate); }
  }, { passive: true });
})();

/* ============ 2. Floating 3D moodboard ============ */
(function moodboard() {
  const section = document.getElementById('mood');
  const stage = document.getElementById('mood-stage');
  const world = document.createElement('div');
  world.className = 'mood-world';
  stage.appendChild(world);

  // Layout slots: x/y as a fraction of the section, z depth in px (negative = farther),
  // w = width as a fraction of the section width (clamped), r = tilt in degrees.
  const SLOTS = [
    { x: 0.12, y: 0.16, z: -120, w: 0.17, r: -7 },
    { x: 0.86, y: 0.12, z: -380, w: 0.16, r: 6 },
    { x: 0.30, y: 0.06, z: -650, w: 0.14, r: 3 },
    { x: 0.66, y: 0.24, z: 60,   w: 0.15, r: -4 },
    { x: 0.08, y: 0.52, z: -480, w: 0.15, r: 5 },
    { x: 0.92, y: 0.50, z: -60,  w: 0.18, r: -6 },
    { x: 0.24, y: 0.82, z: 40,   w: 0.16, r: 4 },
    { x: 0.74, y: 0.86, z: -300, w: 0.17, r: -3 },
    { x: 0.50, y: 0.94, z: -600, w: 0.14, r: 7 },
    { x: 0.42, y: 0.30, z: -820, w: 0.13, r: -5 },
    { x: 0.58, y: 0.70, z: -760, w: 0.13, r: 4 },
    { x: 0.04, y: 0.86, z: -200, w: 0.13, r: -8 },
  ];

  const cards = SLOTS.map((slot, i) => {
    const el = document.createElement('div');
    el.className = 'mood-card';
    const img = document.createElement('img');
    img.alt = '';
    img.decoding = 'async';
    img.loading = 'lazy';
    img.src = MOODBOARD[i % MOODBOARD.length];
    img.onload = () => img.classList.add('loaded');
    if (slot.z < -500) img.style.filter = `blur(${slot.z < -700 ? 2 : 1}px) brightness(0.8)`;
    el.appendChild(img);
    world.appendChild(el);
    return {
      el, slot,
      phase: Math.random() * Math.PI * 2,
      speed: 0.35 + Math.random() * 0.35,
      // How strongly this card reacts: nearer cards move more.
      depth: (slot.z + 900) / 1050,
      push: { x: 0, y: 0 },
    };
  });

  let W = 0, H = 0;
  function measure() {
    W = section.clientWidth;
    H = section.clientHeight;
    const isSmall = W < 768;
    cards.forEach((c) => {
      const w = Math.max(isSmall ? 110 : 150, Math.min(340, c.slot.w * W * (isSmall ? 1.6 : 1)));
      c.w = w;
      c.el.style.width = w + 'px';
    });
  }
  measure();
  window.addEventListener('resize', measure);

  // Pointer: normalised (-1..1) for parallax, plus raw position inside the section for the repel effect.
  const mouse = { tx: 0, ty: 0, x: 0, y: 0, px: -9999, py: -9999 };
  if (finePointer) {
    window.addEventListener('pointermove', (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
      const r = section.getBoundingClientRect();
      mouse.px = e.clientX - r.left;
      mouse.py = e.clientY - r.top;
    }, { passive: true });
    section.addEventListener('pointerleave', () => { mouse.px = mouse.py = -9999; });
  }

  let running = false;
  let rafId = 0;
  const REPEL_RADIUS = 260;
  const REPEL_FORCE = 110;

  function frame(now) {
    const t = now / 1000;
    mouse.x += (mouse.tx - mouse.x) * 0.06;
    mouse.y += (mouse.ty - mouse.y) * 0.06;

    const rect = section.getBoundingClientRect();
    // -1 when the section enters from below, +1 when it leaves at the top.
    const scrollP = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / (rect.height / 2 + window.innerHeight / 2);

    world.style.transform = `rotateY(${(mouse.x * 7).toFixed(2)}deg) rotateX(${(-mouse.y * 5).toFixed(2)}deg)`;

    for (const c of cards) {
      const { slot, depth } = c;
      const baseX = slot.x * W - c.w / 2;
      const baseY = slot.y * H - c.w * 0.6;

      const floatX = reduceMotion ? 0 : Math.sin(t * c.speed + c.phase) * 14;
      const floatY = reduceMotion ? 0 : Math.cos(t * c.speed * 0.8 + c.phase) * 18;
      const floatR = reduceMotion ? 0 : Math.sin(t * c.speed * 0.6 + c.phase) * 2;

      // Follow the mouse (nearer cards follow more) …
      const parX = mouse.x * 50 * depth;
      const parY = mouse.y * 36 * depth;
      // … and drift with scroll, which sells the depth.
      const scrollY = -scrollP * 260 * depth;

      // … but get nudged away when the cursor comes close.
      let tx = 0, ty = 0;
      const cx = baseX + c.w / 2 + parX, cy = baseY + c.w * 0.6 + parY + scrollY;
      const dx = cx - mouse.px, dy = cy - mouse.py;
      const d = Math.hypot(dx, dy);
      if (d < REPEL_RADIUS && d > 0.01) {
        const f = Math.pow(1 - d / REPEL_RADIUS, 2) * REPEL_FORCE * (0.4 + depth * 0.6);
        tx = (dx / d) * f;
        ty = (dy / d) * f;
      }
      c.push.x += (tx - c.push.x) * 0.08;
      c.push.y += (ty - c.push.y) * 0.08;

      const x = baseX + floatX + parX + c.push.x;
      const y = baseY + floatY + parY + scrollY + c.push.y;
      c.el.style.transform =
        `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${slot.z}px) rotate(${(slot.r + floatR).toFixed(2)}deg)`;
    }
    rafId = requestAnimationFrame(frame);
  }

  // Only animate while the section is on screen.
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !running) { running = true; rafId = requestAnimationFrame(frame); }
    else if (!entry.isIntersecting && running) { running = false; cancelAnimationFrame(rafId); }
  }, { rootMargin: '200px 0px' }).observe(section);
})();

/* ============ 3. Earliest ad video ============ */
(function adVideo() {
  const wrap = document.getElementById('spot-video');
  if (AD_YOUTUBE_ID) {
    wrap.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(AD_YOUTUBE_ID)}?rel=0&modestbranding=1&playsinline=1"
      title="Earliest ad" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>`;
    return;
  }
  const video = wrap.querySelector('video');
  // Start at half volume; the original spot is mixed loud.
  // Set it up front, again once the file loads, and again on first play,
  // because some browsers reset volume when the media loads. After the first
  // play the viewer's own volume choice is left alone.
  let volumeSet = false;
  const halfVolume = () => { if (!volumeSet) video.volume = 0.5; };
  halfVolume();
  video.addEventListener('loadedmetadata', halfVolume);
  video.addEventListener('canplay', halfVolume);
  video.addEventListener('play', () => { halfVolume(); volumeSet = true; });
  video.addEventListener('error', () => wrap.classList.add('missing'));
  // A <video> with a missing src fires error on its <source>-less element in most browsers,
  // but double-check once metadata should have arrived.
  setTimeout(() => { if (video.readyState === 0 && video.networkState === 3) wrap.classList.add('missing'); }, 4000);
})();

/* ============ 5. CV, pulled from the main site ============ */
(async function cv() {
  const slot = document.getElementById('cv-slot');
  try {
    const res = await fetch('/', { cache: 'no-cache' });
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const cvView = doc.getElementById('cv-view');
    if (!cvView) throw new Error('CV not found');
    Array.from(cvView.children).forEach((child) => {
      if (child.classList.contains('detail-header')) return;
      const clone = document.importNode(child, true);
      clone.classList.add('reveal');
      slot.appendChild(clone);
    });
    observeReveals(slot);
  } catch (err) {
    slot.innerHTML = '<p class="cv-entry-detail">The CV is on <a href="https://brandenchi.com/" style="text-decoration:underline">brandenchi.com</a>.</p>';
  }
})();

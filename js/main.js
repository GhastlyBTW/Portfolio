const PLACEHOLDER_COUNT = 6;
const PHOTO_PROJECT_INDEX = 3;
const SITE_BASE = 'https://brandenchi.com';
const DEFAULT_OG_IMAGE = SITE_BASE + '/assets/Thumbnails/Branden Chi Detention Watch Network Wall Mockup Share.jpg';

function updateMeta({ title, description, canonical, image }) {
  document.title = title;
  const fullUrl = SITE_BASE + (canonical || '/');
  const fullImage = image
    ? (image.startsWith('http') ? image : SITE_BASE + '/' + image)
    : DEFAULT_OG_IMAGE;
  const sel = (s) => document.querySelector(s);
  const set = (s, v) => { const el = sel(s); if (el) el.content = v; };
  const setHref = (s, v) => { const el = sel(s); if (el) el.href = v; };
  set('meta[name="description"]', description);
  setHref('link[rel="canonical"]', fullUrl);
  set('meta[property="og:title"]', title);
  set('meta[property="og:description"]', description);
  set('meta[property="og:url"]', fullUrl);
  set('meta[property="og:image"]', fullImage);
  set('meta[name="twitter:title"]', title);
  set('meta[name="twitter:description"]', description);
  set('meta[name="twitter:image"]', fullImage);
}

function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Old URLs that should still open a renamed project
const SLUG_ALIASES = { 'detention-watch-network': 'detention-watch-network-through-their-eyes', 'dove': 'dove-done-with-gentle', 'liquid-dove': 'dove-done-with-gentle' };

function findProjectBySlug(slug) {
  slug = SLUG_ALIASES[slug] || slug;
  return CONTENT.projects.findIndex((p) => toSlug(p.name) === slug);
}

function findCollectionBySlug(slug) {
  return photoCollections.findIndex((c) => toSlug(c.name) === slug);
}

// Asset-only project data — all text/copy lives in js/content.js
const projects = [
  // 0 — Detention Watch Network — Through Their Eyes
  {
    thumbnail: 'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Wall Mockup.webp',
    gallery: [
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Elderly Man Poster.webp',   // 0  vertical
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Child Poster.webp',         // 1  vertical
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Young Man Poster.webp',     // 2  vertical
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Woman Poster.webp',         // 3  vertical
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Oculus Video.mp4',          // 4  video (has sound)
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Elderly Man Banner.webp',   // 5  horizontal
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Child Banner.webp',         // 6  horizontal
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Young Man Banner.webp',     // 7  horizontal
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Woman Banner.webp',         // 8  horizontal
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Wall Mockup.webp',          // 9  poster wall
    ],
    galleryAlts: [
      'Through Their Eyes poster — elderly man: "A piece of paper doesn\'t make you human"',
      'Through Their Eyes poster — crying child: "I was afraid that I would go to school and never see her again"',
      'Through Their Eyes poster — young man in glasses: "We aren\'t guilty for the policies of our own government"',
      'Through Their Eyes poster — young woman: "I\'m still trying to process being stopped because of my color and my race"',
      'Video of Through Their Eyes digital banners running along the Oculus concourse in New York City',
      'Through Their Eyes horizontal banner — elderly man',
      'Through Their Eyes horizontal banner — crying child',
      'Through Their Eyes horizontal banner — young man in glasses',
      'Through Their Eyes horizontal banner — young woman',
      'Wall of Through Their Eyes wild posting posters',
    ],
    // Wild Posting: wall mockup + posters grid. Audible Billboards: Oculus video + banners stacked.
    sections: [
      { blocks: [
        { type: 'img', idx: 9 },
        { type: 'row', indices: [0, 1, 2, 3] },
      ] },
      // Audible Billboards
      { blocks: [
        { type: 'video', idx: 4, inView: true, controls: true, sound: true,
          poster: 'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Oculus Video Poster.webp' },
        { type: 'img', idx: 5 },
        { type: 'img', idx: 6 },
        { type: 'img', idx: 7 },
        { type: 'img', idx: 8 },
      ] },
    ],
  },
  // 1 — Polaroid — Frame the Moment
  {
    thumbnail: 'assets/Polaroid/Branden Chi Polaroid Frame the Moment Park.webp',
    gallery: [
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Oculus.webp',
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Subway.webp',
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Park.webp',
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Bridge.webp',
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Wild Posting mockup.webp',          // 4  wild posting mockup
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Baby Birth Wild Posting.webp',      // 5  vertical frame
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Friends on the beach.webp',         // 6  horizontal frame
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Man on a trip Wild posting.webp',   // 7  horizontal frame
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Birthday Wild posting.webp',        // 8  vertical frame
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment wedding Wild posting.webp',         // 9  vertical frame
      'assets/Polaroid/Branden Chi Polaroid Frame the Moment Mountain Top Wild Posting.webp',    // 10 horizontal frame
      'assets/Polaroid/Social Ad Mockup.png',                                  // 11 social ad mockup
      'assets/Polaroid/Polaroid Ad.mp4',                                       // 12 vertical video ad
    ],
    galleryAlts: [
      'Polaroid frame installation at the Oculus — Polaroid Frame the Moment campaign',
      'Polaroid frame installation in a subway station — Polaroid Frame the Moment campaign',
      'Polaroid frame installation in a park — Polaroid Frame the Moment campaign',
      'Polaroid frame installation framing a bridge — Polaroid Frame the Moment campaign',
      'Polaroid Frame the Moment wild posting wall mockup',
      'Frame Her Moment poster — new mother holding her baby in a Polaroid frame',
      'Frame Our Moment poster — friends on the beach at sunset in a Polaroid frame',
      'Frame His Moment poster — man on a coastal trip in a Polaroid frame',
      'Frame Your Moment poster — friends celebrating a birthday in a Polaroid frame',
      'Frame Their Moment poster — newlyweds at their wedding in a Polaroid frame',
      'Frame That Moment poster — woman on a mountain top in a Polaroid frame',
      'Polaroid Frame the Moment social media ad mockup',
      'Polaroid Frame the Moment vertical video ad',
    ],
    // Posters alternate vertical/horizontal frames in a checkerboard so like layouts never touch
    sections: [
      { blocks: [{ type: 'img', idx: 0 }, { type: 'img', idx: 1 }, { type: 'img', idx: 2 }, { type: 'img', idx: 3 }] },
      { blocks: [
        { type: 'img', idx: 4 },
        { type: 'row', indices: [5, 6] },
        { type: 'row', indices: [7, 8] },
        { type: 'row', indices: [9, 10] },
        { type: 'img', idx: 11 },
        { type: 'video', idx: 12, narrow: true },
      ] },
    ],
  },
  // 2 — Dove — Done with Gentle
  {
    thumbnail: 'assets/Dove/Branden Chi Dove Guy Biting Soap.webp',   // header: man close-up
    heroAlt: 'Key visual: close-up of a man in silver sunglasses and rings calmly biting into a bar of Dove',
    gallery: [
      'assets/Dove/Branden Chi Dove Girl Biting Soap.webp',       // 0
      'assets/Dove/Branden Chi Dove Social Media Mockups.webp',   // 1
      'assets/Dove/Branden Chi Dove Soap Being Eaten.webp',       // 2  animated
      'assets/Dove/Branden Chi Dove Billboard Girl.webp',         // 3
      'assets/Dove/Branden Chi Dove Billboard Guy.webp',          // 4
    ],
    galleryAlts: [
      'Key visual: close-up of a woman in black sunglasses and stiletto nails calmly biting into a bar of Dove',
      'Three phones showing behind-the-scenes Instagram Reels from the Dove — Done with Gentle shoot',
      'Animation of a bar of Dove being eaten, one bite at a time',
      'Logo-only billboard in New York: close-up of a woman with stiletto nails biting into a bar of Dove',
      'Logo-only billboard in New York: close-up of a man in rings and sunglasses biting into a bar of Dove',
    ],
    sections: [
      { blocks: [
        { type: 'img', idx: 0 },
        { type: 'row', indices: [3, 4] },   // billboards two-up (stack on mobile)
        { type: 'img', idx: 1 },
        { type: 'img', idx: 2 },   // animation stays last
      ] },
    ],
  },
  // 3 — Photography: Personal
  {
    thumbnail: null,
    gallery: [],
  },
];

let _detailScrollHandler = null;
const _unlockedProjects = new Set();
const _GATE_PASSWORD = 'preview';

// ==================== FOOTER CONFIG ====================

const FOOTER_SECTIONS = [
  {
    key: 'work',
    label: 'Work',
    navigate() { transitionTo(() => showIndex()); },
    getFeaturedImage() { return 'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch Network Wall Mockup.webp'; },
    featuredTitle: 'Detention Watch Network — Through Their Eyes',
    featuredMeta: '01 / 03',
    blocks: [
      { w: '31%', h: '100px' },
      { w: '31%', h: '100px' },
      { w: '31%', h: '100px' },
      { w: '31%', h: '100px' },
      { w: '31%', h: '100px' },
      { w: '31%', h: '100px' },
    ],
  },
  {
    key: 'photography',
    label: 'Photography',
    navigate() { transitionTo(() => showPhotography()); },
    getFeaturedImage() {
      return (typeof photoCollections !== 'undefined' && photoCollections[0])
        ? photoCollections[0].thumbnail
        : null;
    },
    featuredTitle: 'Personal Photography',
    featuredMeta: 'View all',
    blocks: [
      { w: '100%', h: '130px' },
      { w: '31%', h: '65px' },
      { w: '31%', h: '65px' },
      { w: '31%', h: '65px' },
    ],
  },
  {
    key: 'about',
    label: 'About',
    navigate() { transitionTo(() => showAbout()); },
    getFeaturedImage() { return 'assets/about/Artboard 2@300x-100.jpg'; },
    featuredTitle: 'Branden Chi',
    featuredMeta: 'Read more',
    blocks: [
      { w: '52%', h: '16px' },
      { w: '100%', h: '11px' },
      { w: '88%', h: '11px' },
      { w: '72%', h: '11px' },
      { w: '55%', h: '11px' },
      { w: '100%', h: '1px', extra: 'margin:8px 0;background:rgba(255,255,255,0.1)' },
      { w: '40%', h: '11px' },
      { w: '62%', h: '11px' },
      { w: '78%', h: '11px' },
    ],
  },
  {
    key: 'contact',
    label: 'Email',
    navigate() { window.location.href = 'mailto:branden.chi.07@gmail.com'; },
    getFeaturedImage() { return 'assets/about/Branden Chi About me.jpg'; },
    featuredTitle: 'branden.chi.07@gmail.com',
    featuredMeta: 'Copy',
    blocks: [
      { w: '65%', h: '16px' },
      { w: '100%', h: '1px', extra: 'margin:8px 0;background:rgba(255,255,255,0.1)' },
      { w: '55%', h: '11px' },
      { w: '38%', h: '11px' },
      { w: '28%', h: '11px' },
      { w: '100%', h: '1px', extra: 'margin:8px 0;background:rgba(255,255,255,0.1)' },
      { w: '45%', h: '11px' },
      { w: '30%', h: '11px' },
    ],
  },
];

let _footerCurrentKey = null;
let _footerActiveKey = null;
let _footerObserver = null;

// photoCollections is loaded from js/photo-collections.js (auto-generated by sync-photos.sh)

// ==================== SMOOTH SCROLL ====================

const scroll = {
  current: 0,
  target: 0,
  ease: 0.08,
  ticking: false,
};

function getMaxScroll() {
  return document.documentElement.scrollHeight - window.innerHeight;
}

function clampTarget() {
  scroll.target = Math.max(0, Math.min(scroll.target, getMaxScroll()));
}

function tick() {
  scroll.current += (scroll.target - scroll.current) * scroll.ease;

  if (Math.abs(scroll.target - scroll.current) < 0.5) {
    scroll.current = scroll.target;
    window.scrollTo(0, scroll.current);
    scroll.ticking = false;
    return;
  }

  window.scrollTo(0, scroll.current);
  requestAnimationFrame(tick);
}

function startTick() {
  if (!scroll.ticking) {
    scroll.ticking = true;
    requestAnimationFrame(tick);
  }
}

function smoothScrollTo(y) {
  scroll.target = y;
  clampTarget();
  startTick();
}

function jumpTo(y) {
  scroll.current = y;
  scroll.target = y;
  window.scrollTo(0, y);
}

// ==================== HORIZONTAL SCROLL (INDEX) ====================

const hscroll = {
  current: 0,
  target: 0,
  ease: 0.08,
  ticking: false,
};

function getIndexScrollArea() {
  return document.getElementById('index-scroll-area');
}

function getMaxHScroll() {
  const el = getIndexScrollArea();
  if (!el) return 0;
  return el.scrollWidth - el.clientWidth;
}

function clampHTarget() {
  hscroll.target = Math.max(0, Math.min(hscroll.target, getMaxHScroll()));
}

// Measured once and refreshed on resize, so the swipe animation never forces a layout read per frame
let _hCardWidth = 0;
let _hCards = null;
function getHCardWidth() {
  if (!_hCardWidth) { const el = getIndexScrollArea(); _hCardWidth = el ? el.clientWidth : 0; }
  return _hCardWidth;
}
function getHCards() {
  if (!_hCards) _hCards = Array.from(document.querySelectorAll('#index-view .project-card'));
  return _hCards;
}
window.addEventListener('resize', () => { _hCardWidth = 0; });

function updateCardOpacity() {
  if (window.innerWidth <= 768) return;
  const cardWidth = getHCardWidth();
  if (cardWidth === 0) return;
  const x = hscroll.current;
  getHCards().forEach((card, i) => {
    if (!card.classList.contains('anim-in')) return;
    const dist = Math.abs(x - i * cardWidth) / cardWidth;
    const opacity = Math.max(0, 1 - dist);
    const translateY = (1 - opacity) * 18;
    card.style.opacity = opacity;
    card.style.transform = `translateY(${translateY}px)`;
  });
}

function tickH() {
  hscroll.current += (hscroll.target - hscroll.current) * hscroll.ease;
  const el = getIndexScrollArea();
  if (!el) { hscroll.ticking = false; return; }

  if (Math.abs(hscroll.target - hscroll.current) < 0.5) {
    hscroll.current = hscroll.target;
    el.scrollLeft = hscroll.current;
    hscroll.ticking = false;
    updateSidebarFromHScroll();
    updateCardOpacity();
    return;
  }

  el.scrollLeft = hscroll.current;
  updateSidebarFromHScroll();
  updateCardOpacity();
  requestAnimationFrame(tickH);
}

function startHScroll() {
  if (!hscroll.ticking) {
    hscroll.ticking = true;
    requestAnimationFrame(tickH);
  }
}

function smoothHScrollTo(x) {
  hscroll.target = x;
  clampHTarget();
  startHScroll();
}

function jumpHTo(x) {
  hscroll.current = x;
  hscroll.target = x;
  const el = getIndexScrollArea();
  if (el) el.scrollLeft = x;
}

let _hActiveIndex = -1;
function updateSidebarFromHScroll() {
  const cardWidth = getHCardWidth();
  if (cardWidth === 0) return;
  const index = Math.round(hscroll.current / cardWidth);
  if (index === _hActiveIndex) return;   // only touch the sidebar when the card actually changes
  setActiveProject(index);
  document.getElementById('project-list').classList.add('has-scroll-active');
}

function scrollIndexToCard(index) {
  const el = getIndexScrollArea();
  if (!el) return;
  const cardWidth = getHCardWidth();
  smoothHScrollTo(index * cardWidth);
}

// ==================== SMOOTH SCROLL ====================

// Accumulation-based: require 50px of intentional delta before advancing.
// During animation, drain accumulator to zero so decaying momentum can't re-trigger.
let _hscrollAccum = 0;
let _hscrollLocked = false;
const H_TRIGGER = 50;

function initSmoothScroll() {
  scroll.current = window.scrollY;
  scroll.target = window.scrollY;

  window.addEventListener('wheel', (e) => {
    // Let photo view scroll natively — custom scroll is too expensive with backdrop-filter
    const onPhotoView = document.body.classList.contains('photo-active') && !document.body.classList.contains('gallery-active');
    if (onPhotoView) return;

    e.preventDefault();
    if (isIndexVisible() && window.innerWidth > 768) {
      if (_hscrollLocked) {
        _hscrollAccum = 0; // drain momentum during animation — prevents re-trigger on unlock
        return;
      }

      _hscrollAccum += e.deltaY;
      if (Math.abs(_hscrollAccum) < H_TRIGGER) return;

      const cardWidth = getHCardWidth();
      if (cardWidth === 0) return;
      const currentCard = Math.round(hscroll.target / cardWidth);
      const delta = _hscrollAccum > 0 ? 1 : -1;
      const numCards = CONTENT.projects.length;
      const targetCard = Math.max(0, Math.min(currentCard + delta, numCards - 1));

      _hscrollAccum = 0;
      if (targetCard === currentCard) return;

      hscroll.target = targetCard * cardWidth;
      clampHTarget();
      startHScroll();
      _hscrollLocked = true;
      setTimeout(() => { _hscrollLocked = false; }, 600);
    } else {
      scroll.target += e.deltaY;
      clampTarget();
      startTick();
    }
  }, { passive: false });

  window.addEventListener('scroll', () => {
    if (!scroll.ticking) {
      scroll.current = window.scrollY;
      scroll.target = window.scrollY;
    }
  });
}

// ==================== ANIMATION SYSTEM ====================

let _animObserver = null;
let _hasInitiallyLoaded = false;
let _dividerScrollHandler = null;



function initDividerScroll() {
  if (_dividerScrollHandler) {
    window.removeEventListener('scroll', _dividerScrollHandler);
  }
  const update = () => {
    const vh = window.innerHeight;
    document.querySelectorAll('.project-section-divider').forEach((el) => {
      const rect = el.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.45)));
      el.style.transform = `scaleX(${progress})`;
    });
  };
  _dividerScrollHandler = update;
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initAnimObserver() {
  if (_animObserver) return;
  _animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('anim-in');
      _animObserver.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
}

function observeAnimations(container) {
  initAnimObserver();
  container.querySelectorAll(
    '.anim-slide-left, .anim-fade-up'
  ).forEach((el) => _animObserver.observe(el));
}

function replayHomeAnimations() {
  const siteName = document.querySelector('.site-name');
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  siteName.classList.remove('slide-in');
  sidebarItems.forEach((item) => item.classList.remove('slide-in'));
  void siteName.offsetWidth;
  setTimeout(() => siteName.classList.add('slide-in'), 30);
  sidebarItems.forEach((item, i) => {
    setTimeout(() => item.classList.add('slide-in'), 30 + (i + 1) * 60);
  });
  const firstCard = document.querySelector('#index-view .project-card');
  if (firstCard) {
    firstCard.classList.remove('anim-in');
    firstCard.style.opacity = '';
    firstCard.style.transform = '';
    void firstCard.offsetWidth;
    firstCard.style.animationDelay = '0ms';
    setTimeout(() => firstCard.classList.add('anim-in'), 60);
  }
}

// ==================== VIEW MANAGEMENT ====================

const ALL_VIEWS = ['index-view', 'detail-view', 'cv-view', 'photo-view', 'photo-gallery-view', 'about-view'];

function showView(id) {
  ALL_VIEWS.forEach((viewId) => {
    document.getElementById(viewId).style.display = viewId === id ? 'block' : 'none';
  });
}

// ==================== PAGE TRANSITION ====================

let _transitioning = false;

function transitionTo(fn) {
  if (_transitioning) { fn(); return; }
  _transitioning = true;
  const overlay = document.getElementById('page-transition');

  // Slide in: expo ease-out — fast entry, decelerates smoothly to stop
  overlay.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  overlay.style.transform = 'translateX(0)';
  overlay.style.pointerEvents = 'all';
  overlay.classList.add('pt-visible');

  // Korean fill starts at 520ms delay, takes 550ms → fully visible at ~1070ms
  // Fire fn() at 1250ms (Korean has been fully visible ~180ms)
  setTimeout(() => {
    fn();
    requestAnimationFrame(() => {
      // Slide out: starts moving immediately, accelerates to fast exit
      overlay.style.transition = 'transform 0.5s cubic-bezier(0.3, 0, 0.8, 1)';
      overlay.style.transform = 'translateX(-100%)';
    });
    setTimeout(() => {
      overlay.style.transition = 'none';
      overlay.style.transform = 'translateX(100%)';
      overlay.style.pointerEvents = 'none';
      overlay.classList.remove('pt-visible');
      _transitioning = false;
    }, 520);
  }, 1250);
}

// ==================== LOADER ====================

function initLoader() {
  const loader = document.getElementById('loader');
  const logo = document.querySelector('.loader-logo');
  const content = document.getElementById('content');
  const siteName = document.querySelector('.site-name');

  setTimeout(() => {
    logo.classList.add('zoom-out');
  }, 1200);

  setTimeout(() => {
    loader.classList.add('done');
  }, 1700);

  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const staggerStart = 2000;
  const staggerGap = 80;

  setTimeout(() => {
    siteName.classList.add('slide-in');
  }, staggerStart);

  sidebarItems.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add('slide-in');
    }, staggerStart + (i + 1) * staggerGap);
  });

  setTimeout(() => {
    content.classList.add('visible');
  }, staggerStart + 300);
}

// ==================== SCROLL MOTIF ====================

function initScrollMotif() {
  const motif = document.getElementById('scroll-motif');
  if (!motif) return;

  let rotation = 0;
  let targetRotation = 0;

  window.addEventListener('wheel', (e) => {
    targetRotation += e.deltaY * 0.3;
  }, { passive: true });

  function animate() {
    rotation += (targetRotation - rotation) * 0.08;
    motif.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// ==================== GREETING ====================

const greetings = CONTENT.greetings;

let greetingIndex = Math.floor(Math.random() * greetings.length);

function setGreetingText(text) {
  ['greeting', 'about-greeting'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

function cycleGreeting() {
  const els = ['greeting', 'about-greeting'].map((id) => document.getElementById(id)).filter(Boolean);
  if (!els.length) return;
  els.forEach((el) => { el.style.opacity = '0'; });
  setTimeout(() => {
    greetingIndex = (greetingIndex + 1) % greetings.length;
    const text = greetings[greetingIndex];
    els.forEach((el) => { el.textContent = text; el.style.opacity = '1'; });
  }, 300);
}

// Photography quip — random each visit, never the same one twice in a row
let photoQuipIndex = -1;
function pickPhotoQuip() {
  const quips = CONTENT.photoQuips || [];
  const el = document.getElementById('photo-top-quip');
  if (!el || !quips.length) return;
  let i = Math.floor(Math.random() * quips.length);
  if (quips.length > 1 && i === photoQuipIndex) i = (i + 1) % quips.length;
  photoQuipIndex = i;
  el.textContent = quips[i];
}

// ==================== NAVIGATION ====================

function isIndexVisible() {
  return document.getElementById('index-view').style.display !== 'none';
}

function pushRoute(path) {
  if (window.location.pathname !== path) {
    history.pushState(null, '', path);
  }
}

function showIndex(fromPop) {
  updateMeta({
    title: 'Branden Chi — Art Director, New York City',
    description: 'Portfolio of Branden Chi, a Korean American Art Director based in New York City, creating work in art direction, copy writing, and photography.',
    canonical: '/',
  });
  exitAbout();
  exitPhoto();
  exitDetail();
  showFooter('work');
  showView('index-view');
  document.body.classList.add('index-active');
  jumpTo(0);
  if (window.innerWidth > 768) {
    jumpHTo(0);
    setActiveProject(0);
    document.getElementById('project-list').classList.add('has-scroll-active');
  } else {
    clearActiveProject();
  }
  showWorkNav();
  if (!fromPop) pushRoute('/');
  cycleGreeting();
  if (_hasInitiallyLoaded) {
    replayHomeAnimations();
  }
  _hasInitiallyLoaded = true;
}

function showCV(fromPop) {
  updateMeta({
    title: 'CV — Branden Chi',
    description: 'Curriculum vitae for Branden Chi — Art Director based in New York City with experience in art direction, copy writing, packaging design, and photography.',
    canonical: '/cv',
  });
  showAbout(true); // sets up observer for CV elements
  // Take over from the observer so the staggered animation runs on arrival
  const cvSection = document.getElementById('cv-section');
  if (cvSection && _animObserver) {
    cvSection.querySelectorAll('.cv-section-label, .cv-entry').forEach((el) => {
      _animObserver.unobserve(el);
    });
  }
  if (!fromPop) pushRoute('/cv');
  setTimeout(() => {
    if (cvSection) {
      cvSection.scrollIntoView({ behavior: fromPop ? 'auto' : 'smooth', block: 'start' });
    }
    setTimeout(() => {
      document.querySelectorAll('#cv-section .cv-section-label, #cv-section .cv-entry').forEach((el, i) => {
        el.classList.remove('anim-in');
        void el.offsetWidth;
        setTimeout(() => el.classList.add('anim-in'), 60 + i * 55);
      });
    }, fromPop ? 0 : 350);
  }, 80);
}

// Video with optional play/pause + sound buttons, and optional play-only-when-visible.
const VIDEO_ICONS = {
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
  muted: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h3l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h3l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};

function wrapGalleryVideo(video, block) {
  const wrap = document.createElement('div');
  wrap.className = 'gallery-video-wrap';
  wrap.appendChild(video);
  let userPaused = false;
  let userMuted = false;   // only true if the visitor pressed mute themselves

  // Play with sound when the browser allows it. If it blocks sound (no click on the
  // page yet), play muted and switch the sound on at the visitor's first click/tap.
  const startPlayback = () => {
    if (!block.sound || userMuted) { video.play().catch(() => {}); return; }
    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      video.dispatchEvent(new Event('volumechange'));
      video.play().catch(() => {});
      const unmuteOnGesture = () => {
        if (!userMuted) { video.muted = false; video.dispatchEvent(new Event('volumechange')); }
      };
      document.addEventListener('pointerdown', unmuteOnGesture, { once: true, capture: true });
      document.addEventListener('keydown', unmuteOnGesture, { once: true, capture: true });
    });
  };

  if (block.controls) {
    const bar = document.createElement('div');
    bar.className = 'gallery-video-controls';

    const playBtn = document.createElement('button');
    playBtn.type = 'button';
    playBtn.className = 'gallery-video-btn';
    const syncPlay = () => {
      const paused = video.paused;
      playBtn.innerHTML = paused ? VIDEO_ICONS.play : VIDEO_ICONS.pause;
      playBtn.setAttribute('aria-label', paused ? 'Play video' : 'Pause video');
    };
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.paused) { userPaused = false; startPlayback(); }
      else { userPaused = true; video.pause(); }
    });
    video.addEventListener('play', syncPlay);
    video.addEventListener('pause', syncPlay);
    syncPlay();

    const soundBtn = document.createElement('button');
    soundBtn.type = 'button';
    soundBtn.className = 'gallery-video-btn';
    const syncSound = () => {
      soundBtn.innerHTML = video.muted ? VIDEO_ICONS.muted : VIDEO_ICONS.sound;
      soundBtn.setAttribute('aria-label', video.muted ? 'Turn sound on' : 'Mute');
    };
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      userMuted = video.muted;
      syncSound();
    });
    video.addEventListener('volumechange', syncSound);
    syncSound();

    bar.appendChild(playBtn);
    bar.appendChild(soundBtn);
    wrap.appendChild(bar);
  }

  if (block.inView && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { if (!userPaused) startPlayback(); }
      else if (!video.paused) video.pause();
    }, { threshold: 0.4 }).observe(wrap);
  } else if (block.inView) {
    video.autoplay = true;
  }
  return wrap;
}

function renderGalleryBlock(block, images, galleryAlts, name) {
  if (block.type === 'img') {
    const src = images[block.idx];
    if (!src) return null;
    const img = document.createElement('img');
    img.src = src;
    img.alt = (galleryAlts && galleryAlts[block.idx]) || name;
    img.loading = 'lazy';
    img.decoding = 'async';
    return img;
  } else if (block.type === 'video') {
    const src = images[block.idx];
    if (!src) return null;
    const video = document.createElement('video');
    video.src = src;
    video.autoplay = !block.inView;          // inView videos start only once scrolled to
    video.loop = true;
    video.muted = true;                      // browsers only autoplay muted video
    video.playsInline = true;
    video.preload = block.inView ? 'metadata' : 'auto';
    if (block.poster) video.poster = block.poster;
    video.style.width = '100%';
    video.style.display = 'block';
    if (block.narrow) video.classList.add('gallery-video-narrow');
    if (galleryAlts && galleryAlts[block.idx]) video.setAttribute('aria-label', galleryAlts[block.idx]);
    if (!block.inView && !block.controls) return video;
    return wrapGalleryVideo(video, block);
  } else if (block.type === 'row') {
    const row = document.createElement('div');
    row.className = 'gallery-img-row';
    block.indices.forEach((idx) => {
      const src = images[idx];
      if (!src) return;
      const img = document.createElement('img');
      img.src = src;
      img.alt = (galleryAlts && galleryAlts[idx]) || name;
      img.loading = 'lazy';
      img.decoding = 'async';
      row.appendChild(img);
    });
    return row;
  }
  return null;
}


function renderSplitDetail(gallery, project, copy, index, images) {
  // Intro section
  const intro = document.createElement('div');
  intro.className = 'project-split-intro';

  const introLeft = document.createElement('div');
  introLeft.className = 'project-intro-left';

  const metaLine = document.createElement('div');
  metaLine.className = 'project-meta-line anim-slide-left';
  metaLine.textContent = copy.year + ' · ' + copy.category;

  const displayName = document.createElement('h1');
  displayName.className = 'project-display-name anim-slide-left';
  displayName.style.animationDelay = '80ms';
  displayName.textContent = copy.name;

  introLeft.appendChild(metaLine);
  introLeft.appendChild(displayName);

  const accordionWrap = document.createElement('div');
  accordionWrap.className = 'project-intro-accordions anim-slide-left';
  accordionWrap.style.animationDelay = '160ms';

  (copy.introBlocks || [
    { label: 'Brief',    text: copy.brief    },
    { label: 'Insight',  text: copy.insight  },
    { label: 'Strategy', text: copy.strategy },
  ]).forEach(({ label, text }) => {
    if (!text) return;

    const item = document.createElement('div');
    item.className = 'project-intro-item';

    const header = document.createElement('div');
    header.className = 'project-intro-item-header';

    const lbl = document.createElement('span');
    lbl.className = 'project-intro-item-label';
    lbl.textContent = label;
    header.appendChild(lbl);

    const body = document.createElement('div');
    body.className = 'project-intro-item-body';

    const p = document.createElement('p');
    p.className = 'project-intro-brief';
    p.textContent = text;
    body.appendChild(p);

    item.appendChild(header);
    item.appendChild(body);

    accordionWrap.appendChild(item);
  });

  introLeft.appendChild(accordionWrap);

  const introRight = document.createElement('div');
  introRight.className = 'project-intro-right';

  if (project.thumbnail) {
    const heroImg = document.createElement('img');
    heroImg.src = project.thumbnailFallback || project.thumbnail;
    heroImg.alt = project.heroAlt || copy.name;
    heroImg.decoding = 'async';
    heroImg.className = 'anim-fade-up';
    heroImg.style.animationDelay = '120ms';
    introRight.appendChild(heroImg);
  }

  intro.appendChild(introLeft);
  intro.appendChild(introRight);
  gallery.appendChild(intro);

  // Content sections
  const contentSections = CONTENT.projects[index].sections || [];
  (project.sections || []).forEach((sec, si) => {
    const contentSec = contentSections[si] || {};

    const sectionEl = document.createElement('div');
    sectionEl.className = 'project-section';

    const leftEl = document.createElement('div');
    leftEl.className = 'section-left';

    if (contentSec.title) {
      const label = document.createElement('span');
      label.className = 'section-label anim-slide-left';
      label.textContent = contentSec.title;
      leftEl.appendChild(label);
      const secDivider = document.createElement('div');
      secDivider.className = 'section-label-divider';
      leftEl.appendChild(secDivider);
    }

    if (contentSec.text) {
      const text = document.createElement('p');
      text.className = 'section-text anim-slide-left';
      text.textContent = contentSec.text;
      leftEl.appendChild(text);
    }

    const rightEl = document.createElement('div');
    rightEl.className = 'section-right';

    sec.blocks.forEach((block, bi) => {
      const el = renderGalleryBlock(block, images, project.galleryAlts, copy.name);
      if (el) {
        el.classList.add('anim-fade-up');
        el.style.animationDelay = (bi * 100) + 'ms';
        rightEl.appendChild(el);
      }
    });

    sectionEl.appendChild(leftEl);
    sectionEl.appendChild(rightEl);
    gallery.appendChild(sectionEl);
  });

  renderNextProjectFooter(gallery, index);
  observeAnimations(gallery);
  initDividerScroll();
}

function renderNextProjectFooter(container, currentIndex) {
  const navIndices = projects.map((_, i) => i).filter(i => i !== PHOTO_PROJECT_INDEX);
  const navPos = navIndices.indexOf(currentIndex);
  const nextIdx = navIndices[(navPos + 1) % navIndices.length];
  const nextProject = projects[nextIdx];
  const nextCopy = CONTENT.projects[nextIdx];

  const divider = document.createElement('div');
  divider.className = 'project-section-divider';
  container.appendChild(divider);

  const footer = document.createElement('div');
  footer.className = 'project-next-footer';
  footer.addEventListener('click', () => transitionTo(() => showDetail(nextIdx)));

  const label = document.createElement('div');
  label.className = 'project-next-label';
  label.textContent = 'NEXT PROJECT';

  const content = document.createElement('div');
  content.className = 'project-next-content';

  const left = document.createElement('div');
  left.className = 'project-next-left';

  const name = document.createElement('h2');
  name.className = 'project-next-name';
  name.textContent = nextCopy.name;

  const desc = document.createElement('p');
  desc.className = 'project-next-desc';
  desc.textContent = nextCopy.cardDescription;

  left.appendChild(name);
  left.appendChild(desc);

  const right = document.createElement('div');
  right.className = 'project-next-right';

  if (nextProject.thumbnail || nextProject.thumbnailFallback) {
    const img = document.createElement('img');
    img.src = nextProject.thumbnailFallback || nextProject.thumbnail;
    img.alt = nextCopy.name;
    img.decoding = 'async';
    right.appendChild(img);
  }

  content.appendChild(left);
  content.appendChild(right);
  footer.appendChild(label);
  footer.appendChild(content);
  container.appendChild(footer);
}

function updateDetailOverlaySelection(index) {
  document.querySelectorAll('.project-overlay-item').forEach((item) => {
    item.classList.toggle('active', parseInt(item.dataset.project, 10) === index);
  });
}

let _activeDetailIndex = -1;

function showDetail(index, fromPop) {
  _activeDetailIndex = index;
  document.body.classList.remove('index-active');
  exitAbout();
  exitPhoto();
  if (index === PHOTO_PROJECT_INDEX) {
    showPhotography(fromPop);
    return;
  }

  const project = projects[index];
  const copy = CONTENT.projects[index];

  if (project.locked && !_unlockedProjects.has(index)) {
    showPasswordGate(index, fromPop);
    return;
  }
  if (!project || !copy) return;

  updateMeta({
    title: copy.name + ' — Branden Chi',
    description: copy.metaDescription,
    canonical: '/' + toSlug(copy.name),
    image: project.thumbnailFallback || project.thumbnail,
  });

  // Activate detail mode (hides sidebar, shows controls)
  document.body.classList.add('detail-active');

  const isSplit = !!(project.sections && CONTENT.projects[index].sections);
  if (isSplit) {
    document.body.classList.add('detail-split');
  } else {
    document.body.classList.remove('detail-split');
  }

  // Update credits panel content
  const creditsPanelText = document.getElementById('credits-panel-text');
  if (creditsPanelText) creditsPanelText.textContent = copy.credits || '';
  const creditsBtnEl = document.getElementById('detail-credits-btn');
  if (creditsBtnEl) creditsBtnEl.style.display = copy.credits ? '' : 'none';

  const gallery = document.getElementById('detail-gallery');
  gallery.innerHTML = '';
  const images = project.gallery || [];

  if (isSplit) {
    renderSplitDetail(gallery, project, copy, index, images);
    // Intro elements are above the fold — trigger immediately with stagger
    const introAnims = gallery.querySelectorAll('.project-split-intro .anim-fade-up, .project-split-intro .anim-slide-left');
    introAnims.forEach((el) => {
      const delay = parseFloat(el.style.animationDelay) || 0;
      setTimeout(() => el.classList.add('anim-in'), delay + 50);
    });
  } else {
    // Legacy single-column layout for projects without sections
    document.getElementById('detail-title').textContent = copy.name;
    const metaRow = document.getElementById('detail-meta');
    metaRow.querySelector('.detail-year').textContent = copy.year;
    metaRow.querySelector('.detail-category').textContent = copy.category;

    const hero = document.getElementById('detail-hero');
    const heroPlaceholder = hero.querySelector('.placeholder-img');
    const heroImg = hero.querySelector('img');
    if (project.thumbnail) {
      const heroSrc = project.thumbnailFallback || project.thumbnail;
      if (heroImg) { heroImg.src = heroSrc; heroImg.alt = copy.name; }
      else { const img = document.createElement('img'); img.src = heroSrc; img.alt = copy.name; hero.appendChild(img); }
      if (heroPlaceholder) heroPlaceholder.style.display = 'none';
    } else {
      if (heroImg) heroImg.remove();
      if (heroPlaceholder) heroPlaceholder.style.display = '';
    }

    if (project.galleryBlocks) {
      let textBlockCount = 0;
      project.galleryBlocks.forEach((block) => {
        if (block.type === 'text') {
          const p = document.createElement('p');
          p.className = 'gallery-text-block';
          p.textContent = (copy.galleryText && copy.galleryText[textBlockCount]) || '';
          textBlockCount++;
          gallery.appendChild(p);
        } else {
          const el = renderGalleryBlock(block, images, project.galleryAlts, copy.name);
          if (el) gallery.appendChild(el);
        }
      });
    } else if (images.length) {
      images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = (project.galleryAlts && project.galleryAlts[i]) || copy.name;
        img.loading = 'lazy';
        img.decoding = 'async';
        gallery.appendChild(img);
      });
    } else {
      for (let i = 0; i < PLACEHOLDER_COUNT; i++) {
        const div = document.createElement('div');
        div.className = 'placeholder-img gallery-placeholder';
        gallery.appendChild(div);
      }
    }

    const navIndices = projects.map((_, i) => i).filter(i => i !== PHOTO_PROJECT_INDEX);
    const navPos = navIndices.indexOf(index);
    const prevIdx = navIndices[(navPos - 1 + navIndices.length) % navIndices.length];
    const nextIdx = navIndices[(navPos + 1) % navIndices.length];
    document.getElementById('prev-project-text').textContent = CONTENT.projects[prevIdx].name;
    document.getElementById('next-project-text').textContent = CONTENT.projects[nextIdx].name;
    document.getElementById('prev-project').onclick = (e) => { e.preventDefault(); transitionTo(() => showDetail(prevIdx)); };
    document.getElementById('next-project').onclick = (e) => { e.preventDefault(); transitionTo(() => showDetail(nextIdx)); };
  }

  updateDetailOverlaySelection(index);

  // Scroll: fade site name + hide credits near bottom
  const siteNameEl = document.getElementById('detail-site-name-fixed');
  if (siteNameEl) {
    siteNameEl.style.opacity = '1';
    if (_detailScrollHandler) window.removeEventListener('scroll', _detailScrollHandler);
    _detailScrollHandler = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - vh;

      // Fade name as user scrolls down
      siteNameEl.style.opacity = Math.max(0, 1 - scrollY / 160);

      // Auto-hide credits when near the bottom of the page
      const creditsPanel = document.getElementById('credits-panel');
      if (creditsPanel) {
        const nearBottom = maxScroll > 0 && scrollY / maxScroll > 0.78;
        creditsPanel.classList.toggle('scroll-hidden', nearBottom);
      }

      // Pin controls above the Next Project divider as it scrolls into view
      const controls = document.getElementById('detail-controls');
      const divider = document.querySelector('.project-section-divider');
      if (controls && divider) {
        const controlsH = controls.offsetHeight;
        if (controlsH > 0) {
          const dividerTop = divider.getBoundingClientRect().top;
          const defaultBottom = 32;
          if (dividerTop < vh - defaultBottom - controlsH) {
            const rawBottom = vh - dividerTop + 12;
            const maxBottom = vh - controlsH - 16;
            controls.style.bottom = Math.min(rawBottom, maxBottom) + 'px';
          } else {
            controls.style.bottom = '';
          }
        }
      }
    };
    window.addEventListener('scroll', _detailScrollHandler, { passive: true });
  }

  showFooter('work');
  showView('detail-view');
  jumpTo(0);
  smoothScrollTo(0);
  showWorkNav();
  setActiveProject(index);
  document.getElementById('project-list').classList.add('has-scroll-active');
  if (!fromPop) pushRoute('/' + toSlug(copy.name));
  cycleGreeting();
}

// ==================== ABOUT ====================

function showAbout(fromPop) {
  document.body.classList.remove('index-active');
  exitDetail();
  exitPhoto();
  updateMeta({
    title: 'About — Branden Chi',
    description: 'Branden Chi is a Korean American Art Director from Delaware, now based in New York City, creating work that makes people stop and think.',
    canonical: '/about',
    image: 'assets/about/Branden Chi - About.jpg',
  });
  showFooter('about');
  showView('about-view');
  jumpTo(0);
  clearActiveProject();
  document.querySelector('.sidebar').classList.add('minimal');
  document.body.classList.add('about-active');
  if (!fromPop) pushRoute('/about');
  cycleGreeting();

  const aboutScroll = document.getElementById('about-scroll');
  aboutScroll.scrollLeft = 0;

  // Animate about page elements
  document.querySelectorAll('.headshot-img, .about-bio p, .music-label').forEach((el, i) => {
    el.classList.remove('anim-in');
    void el.offsetWidth;
    setTimeout(() => el.classList.add('anim-in'), 80 + i * 90);
  });

  // Set up scroll-triggered animation for CV entries so they appear
  // whether the user scrolls down from About or lands via showCV()
  const cvSection = document.getElementById('cv-section');
  if (cvSection) {
    initAnimObserver();
    cvSection.querySelectorAll('.cv-section-label, .cv-entry').forEach((el) => {
      el.classList.remove('anim-in');
      _animObserver.observe(el);
    });
  }

  showAboutScrollIndicator();
}

function showAboutScrollIndicator() {
  const indicator = document.getElementById('about-scroll-indicator');
  if (!indicator) return;
  indicator.classList.remove('hidden');

  setTimeout(() => {
    indicator.classList.add('visible');

    const hide = () => {
      indicator.classList.remove('visible');
      indicator.classList.add('hidden');
      window.removeEventListener('scroll', hide);
    };
    window.addEventListener('scroll', hide, { passive: true });
  }, 1200);
}

function exitDetail() {
  document.body.classList.remove('detail-active');
  document.body.classList.remove('detail-split');
  if (_detailScrollHandler) {
    window.removeEventListener('scroll', _detailScrollHandler);
    _detailScrollHandler = null;
  }
  if (_dividerScrollHandler) {
    window.removeEventListener('scroll', _dividerScrollHandler);
    _dividerScrollHandler = null;
  }
  const controls = document.getElementById('detail-controls');
  if (controls) controls.style.bottom = '';
  const creditsPanel = document.getElementById('credits-panel');
  if (creditsPanel) creditsPanel.classList.remove('open');
  const overlay = document.getElementById('project-overlay');
  if (overlay) overlay.classList.remove('open');
}

function exitAbout() {
  document.querySelector('.sidebar').classList.remove('minimal');
  document.body.classList.remove('about-active');

  const indicator = document.getElementById('about-scroll-indicator');
  if (indicator) {
    indicator.classList.remove('visible');
    indicator.classList.add('hidden');
  }
}

// ==================== PHOTOGRAPHY ====================

let activeFilter = 'all';

function getCollectionCategory(collection) {
  const sub = collection.subtitle.toLowerCase();
  if (sub.includes('car photography')) return 'Car Photography';
  if (sub.includes('street photography')) return 'Street Photography';
  if (sub.includes('35mm') || sub.includes('film')) return 'Film';
  return 'Other';
}

function showPhotography(fromPop) {
  document.body.classList.remove('index-active');
  updateMeta({
    title: 'Photography — Branden Chi',
    description: 'Personal photography by Branden Chi spanning digital car photography, street photography, and 35mm film — shot on Sony A7C and Canon Sureshot.',
    canonical: '/photography',
    image: photoCollections[0] ? photoCollections[0].thumbnail : null,
  });
  exitAbout();
  exitPhoto();
  exitDetail();
  document.body.classList.add('photo-active');
  pickPhotoQuip();
  activeFilter = 'all';
  document.querySelectorAll('.photo-filter').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
  renderCollections();
  showFooter('photography');
  showView('photo-view');
  jumpTo(0);
  showWorkNav();
  clearActiveCollection();
  if (!fromPop) pushRoute('/photography');
  cycleGreeting();
  initPhotoBarScroll();
}

function showGallery(collectionIndex, fromPop) {
  const collection = photoCollections[collectionIndex];
  if (!collection) return;
  showCollectionGallery(collectionIndex, fromPop);
}

// ==================== COLLECTION GALLERY ====================

let _galleryIdx = -1;
let _galleryScrollX = 0;
let _galleryTargetX = 0;
let _galleryRafId = null;
let _galleryWheelFn = null;
let _galleryTouchStartX = 0;
let _galleryTouchFn = null;

function getGalleryMaxScroll() {
  const strip = document.getElementById('gallery-strip');
  const viewport = document.getElementById('gallery-viewport');
  if (!strip || !viewport) return 0;
  return Math.min(0, viewport.clientWidth - strip.scrollWidth);
}

function updateGalleryCounter(idx, total) {
  const el = document.getElementById('gallery-counter');
  if (!el) return;
  const cur = String(idx + 1).padStart(2, '0');
  const tot = String(total).padStart(2, '0');
  el.textContent = cur + ' / ' + tot;
}

function startGalleryRaf() {
  if (_galleryRafId) return;
  if (window.innerWidth <= 768) return;
  function tick() {
    _galleryScrollX += (_galleryTargetX - _galleryScrollX) * 0.1;
    const strip = document.getElementById('gallery-strip');
    if (strip) strip.style.transform = `translateX(${_galleryScrollX}px)`;
    if (_galleryIdx !== -1) {
      const collection = photoCollections[_galleryIdx];
      if (collection && collection.images.length > 1) {
        const maxScroll = getGalleryMaxScroll();
        const progress = maxScroll < 0 ? Math.abs(_galleryScrollX) / Math.abs(maxScroll) : 0;
        const idx = Math.round(progress * (collection.images.length - 1));
        updateGalleryCounter(idx, collection.images.length);
      }
    }
    if (Math.abs(_galleryTargetX - _galleryScrollX) > 0.5) {
      _galleryRafId = requestAnimationFrame(tick);
    } else {
      _galleryScrollX = _galleryTargetX;
      if (strip) strip.style.transform = `translateX(${_galleryScrollX}px)`;
      _galleryRafId = null;
    }
  }
  _galleryRafId = requestAnimationFrame(tick);
}

function showCollectionGallery(collectionIdx, fromPop) {
  const collection = photoCollections[collectionIdx];
  if (!collection) return;

  exitAbout();
  exitDetail();
  exitGallery();

  _galleryIdx = collectionIdx;
  _galleryScrollX = 0;
  _galleryTargetX = 0;

  updateMeta({
    title: collection.name + ' — Branden Chi Photography',
    description: 'Photography collection by Branden Chi: ' + collection.subtitle + '.',
    canonical: '/photography/' + toSlug(collection.name),
    image: collection.thumbnail,
  });

  // Populate info panel
  document.getElementById('gallery-title').textContent = collection.name;
  const subEl = document.getElementById('gallery-subtitle');
  if (subEl) subEl.textContent = collection.subtitle;

  // Build image strip
  const strip = document.getElementById('gallery-strip');
  strip.innerHTML = '';
  strip.style.transform = window.innerWidth <= 768 ? '' : 'translateX(0)';
  collection.images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.loading = i < 3 ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.alt = collection.name + ' — photo ' + (i + 1);
    strip.appendChild(img);
  });

  updateGalleryCounter(0, collection.images.length);

  const _galleryMobile = window.innerWidth <= 768;

  if (!_galleryMobile) {
    // Wheel handler: vertical scroll → horizontal strip movement
    _galleryWheelFn = (e) => {
      e.preventDefault();
      const delta = (e.deltaY || 0) + (e.deltaX || 0);
      _galleryTargetX -= delta * 1.2;
      _galleryTargetX = Math.max(getGalleryMaxScroll(), Math.min(0, _galleryTargetX));
      startGalleryRaf();
    };
    window.addEventListener('wheel', _galleryWheelFn, { passive: false });

    // Touch swipe (horizontal) on desktop/tablet
    _galleryTouchFn = (e) => {
      if (e.type === 'touchstart') {
        _galleryTouchStartX = e.touches[0].clientX;
      } else if (e.type === 'touchmove') {
        const dx = _galleryTouchStartX - e.touches[0].clientX;
        _galleryTouchStartX = e.touches[0].clientX;
        _galleryTargetX -= dx * 1.5;
        _galleryTargetX = Math.max(getGalleryMaxScroll(), Math.min(0, _galleryTargetX));
        startGalleryRaf();
      }
    };
    window.addEventListener('touchstart', _galleryTouchFn, { passive: true });
    window.addEventListener('touchmove', _galleryTouchFn, { passive: true });
  }

  document.body.classList.add('photo-active');
  document.body.classList.add('gallery-active');
  showView('photo-gallery-view');
  showFooter('photography');
  setActiveCollection(collectionIdx);
  showPhotoNav();
  jumpTo(0);

  if (!fromPop) pushRoute('/photography/' + toSlug(collection.name));
}

function exitGallery() {
  if (_galleryWheelFn) { window.removeEventListener('wheel', _galleryWheelFn); _galleryWheelFn = null; }
  if (_galleryTouchFn) {
    window.removeEventListener('touchstart', _galleryTouchFn);
    window.removeEventListener('touchmove', _galleryTouchFn);
    _galleryTouchFn = null;
  }
  if (_galleryRafId) { cancelAnimationFrame(_galleryRafId); _galleryRafId = null; }
  _galleryIdx = -1;
  document.body.classList.remove('gallery-active');
}

let _photoBarScrollHandler = null;

function initPhotoBarScroll() {
  const bar = document.getElementById('photo-top-bar');
  if (!bar) return;
  let lastY = window.scrollY;
  bar.classList.remove('bar-hidden');
  _photoBarScrollHandler = () => {
    if (!document.body.classList.contains('photo-active') || document.body.classList.contains('gallery-active')) return;
    const y = window.scrollY;
    if (y > lastY && y > 60) {
      bar.classList.add('bar-hidden');
    } else {
      bar.classList.remove('bar-hidden');
    }
    lastY = y;
  };
  window.addEventListener('scroll', _photoBarScrollHandler, { passive: true });
}

function exitPhoto() {
  if (_parallaxCleanup) { _parallaxCleanup(); _parallaxCleanup = null; }
  if (_photoBarScrollHandler) {
    window.removeEventListener('scroll', _photoBarScrollHandler);
    _photoBarScrollHandler = null;
  }
  const bar = document.getElementById('photo-top-bar');
  if (bar) bar.classList.remove('bar-hidden');
  exitGallery();
  document.body.classList.remove('photo-active');
}

function initLightboxEvents() {}

let _parallaxCleanup = null;

function applyCollectionFilter() {
  document.querySelectorAll('.photo-grid-item').forEach((item) => {
    const idx = parseInt(item.dataset.collection);
    const collection = photoCollections[idx];
    const matches = !collection || activeFilter === 'all' || getCollectionCategory(collection) === activeFilter;
    item.style.display = matches ? '' : 'none';
  });
}

let _collectionsRendered = false;

function renderCollections() {
  const container = document.getElementById('photo-collections');

  if (_collectionsRendered) {
    applyCollectionFilter();
    return;
  }

  container.innerHTML = '';

  if (!photoCollections.length) {
    const msg = document.createElement('p');
    msg.className = 'gallery-empty';
    msg.textContent = 'No collections found.';
    container.appendChild(msg);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'photo-grid';

  photoCollections.forEach((collection, i) => {
    const item = document.createElement('div');
    item.className = 'photo-grid-item';
    item.dataset.collection = i;

    if (collection.thumbnail) {
      const img = document.createElement('img');
      img.src = collection.thumbnail;
      img.alt = collection.name;
      img.loading = i < 2 ? 'eager' : 'lazy';
      img.decoding = 'async';
      item.appendChild(img);
    }

    const overlay = document.createElement('div');
    overlay.className = 'photo-grid-overlay';
    const nameEl = document.createElement('span');
    nameEl.className = 'photo-grid-name';
    nameEl.textContent = collection.name;
    overlay.appendChild(nameEl);
    item.appendChild(overlay);

    item.addEventListener('click', () => transitionTo(() => showCollectionGallery(i)));
    grid.appendChild(item);
  });

  container.appendChild(grid);
  _collectionsRendered = true;
  applyCollectionFilter();
}

// ==================== SIDEBAR ====================

function setActiveProject(index) {
  _hActiveIndex = index;
  const links = document.querySelectorAll('#project-list a');
  links.forEach((link) => link.classList.remove('active'));
  const activeLink = document.querySelector(`#project-list a[data-project="${index}"]`);
  if (activeLink) activeLink.classList.add('active');
}

function clearActiveProject() {
  const links = document.querySelectorAll('#project-list a');
  links.forEach((link) => link.classList.remove('active'));
  document.getElementById('project-list').classList.remove('has-scroll-active');
}

function initNavigation() {
  document.getElementById('home-link').addEventListener('click', (e) => {
    e.preventDefault();
    if (isIndexVisible()) {
      smoothScrollTo(0);
    } else {
      transitionTo(() => showIndex());
    }
  });

  document.querySelectorAll('#project-list a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const index = parseInt(link.dataset.project, 10);

      if (isIndexVisible()) {
        scrollIndexToCard(index);
      } else {
        transitionTo(() => showDetail(index));
      }
    });
  });

  document.querySelectorAll('.details-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const index = parseInt(link.dataset.project, 10);
      transitionTo(() => showDetail(index));
    });
  });

  document.querySelectorAll('.thumbnail').forEach((thumb) => {
    const card = thumb.closest('.project-card');
    if (!card) return;
    const index = parseInt(card.dataset.index, 10);
    thumb.addEventListener('click', () => {
      transitionTo(() => showDetail(index));
    });
  });

  document.getElementById('index-link').addEventListener('click', (e) => {
    e.preventDefault();
    transitionTo(() => showIndex());
  });

  document.getElementById('cv-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    transitionTo(() => showCV());
  });

  document.getElementById('cv-index-link').addEventListener('click', (e) => {
    e.preventDefault();
    transitionTo(() => showIndex());
  });

  document.getElementById('about-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    transitionTo(() => showAbout());
  });

  document.getElementById('photo-home-link').addEventListener('click', (e) => {
    e.preventDefault();
    if (document.body.classList.contains('gallery-active')) {
      transitionTo(() => showPhotography());
    } else {
      transitionTo(() => showIndex());
    }
  });

  document.getElementById('gallery-back-link').addEventListener('click', (e) => {
    e.preventDefault();
    transitionTo(() => showPhotography());
  });

  document.querySelectorAll('.accordion-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });

  document.querySelectorAll('.photo-filter').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      document.querySelectorAll('.photo-filter').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      applyCollectionFilter();
    });
  });
}

// ==================== SIDEBAR NAV TOGGLE ====================

function showWorkNav() {
  document.getElementById('work-nav').style.display = '';
  document.getElementById('photo-nav').style.display = 'none';
}

function showPhotoNav() {
  document.getElementById('work-nav').style.display = 'none';
  document.getElementById('photo-nav').style.display = '';
}

function initCollectionList() {
  const list = document.getElementById('collection-list');
  photoCollections.forEach((collection, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.dataset.collection = i;
    a.innerHTML = `${collection.name} <span class="nav-arrow"></span>`;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      transitionTo(() => showGallery(i));
    });
    li.appendChild(a);
    list.appendChild(li);
  });
}

function setActiveCollection(index) {
  const links = document.querySelectorAll('#collection-list a');
  links.forEach((link) => link.classList.remove('active'));
  const active = document.querySelector(`#collection-list a[data-collection="${index}"]`);
  if (active) active.classList.add('active');
}

function clearActiveCollection() {
  const links = document.querySelectorAll('#collection-list a');
  links.forEach((link) => link.classList.remove('active'));
  document.getElementById('collection-list').classList.remove('has-scroll-active');
}

// ==================== SCROLL HIGHLIGHT ====================

let scrollObserver = null;
let collectionObserver = null;

function initScrollHighlight() {
  const scrollArea = document.getElementById('index-scroll-area');
  const projectList = document.getElementById('project-list');
  const cards = document.querySelectorAll('#index-view .project-card[data-index]');
  if (!cards.length) return;

  const isMobile = () => window.innerWidth <= 768;

  scrollObserver = new IntersectionObserver((entries) => {
    if (!isIndexVisible()) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index;
        if (isMobile()) {
          projectList.classList.add('has-scroll-active');
          setActiveProject(index);
        }
        if (!entry.target.classList.contains('anim-in')) {
          entry.target.classList.add('anim-in');
          // Let CSS animation run, then JS opacity takes over on next scroll
        }
      }
    });
  }, { threshold: [0, 0.1, 0.5], root: isMobile() ? null : scrollArea });

  cards.forEach((card) => scrollObserver.observe(card));
}

function observeCollections() {
  if (collectionObserver) collectionObserver.disconnect();

  const collectionList = document.getElementById('collection-list');
  const cards = document.querySelectorAll('#photo-collections .project-card');
  if (!cards.length) return;

  collectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
        collectionList.classList.add('has-scroll-active');
        setActiveCollection(index);
      }
    });
  }, { threshold: 0.4 });

  cards.forEach((card) => collectionObserver.observe(card));
}

// ==================== HAMBURGER ====================

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');

  function closeMenu() {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
  }

  // Build project links section
  const projectSection = document.createElement('div');
  projectSection.className = 'mobile-menu-projects';
  const _menuProjectLinks = [];
  projects.forEach((p, i) => {
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'mobile-menu-project-link';
    link.dataset.projectIdx = i;
    link.textContent = i === PHOTO_PROJECT_INDEX ? 'Photography' : CONTENT.projects[i].name;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      if (i === PHOTO_PROJECT_INDEX) transitionTo(() => showPhotography());
      else transitionTo(() => showDetail(i));
    });
    projectSection.appendChild(link);
    _menuProjectLinks.push(link);
  });
  menu.appendChild(projectSection);

  // Build contact links section
  const contactSection = document.createElement('div');
  contactSection.className = 'mobile-menu-contact';
  const _menuContactLinks = {};
  [
    { label: 'Email', key: 'email', href: 'mailto:branden.chi.07@gmail.com', external: false },
    { label: 'CV',    key: 'cv',    href: '#', external: false, action: () => transitionTo(() => showCV()) },
    { label: 'About', key: 'about', href: '#', external: false, action: () => transitionTo(() => showAbout()) },
    { label: 'Instagram', key: 'instagram', href: 'https://www.instagram.com/brand.en_/', external: true },
    { label: 'LinkedIn',  key: 'linkedin',  href: 'https://www.linkedin.com/in/branden-chi-360a06298', external: true },
  ].forEach(({ label, key, href, external, action }) => {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;
    if (external) { a.target = '_blank'; a.rel = 'noopener'; }
    a.addEventListener('click', (e) => {
      if (action) { e.preventDefault(); closeMenu(); action(); }
      else closeMenu();
    });
    contactSection.appendChild(a);
    _menuContactLinks[key] = a;
  });
  menu.appendChild(contactSection);

  // Take Me Home button
  const homeBtn = document.createElement('button');
  homeBtn.className = 'mobile-menu-home-btn';
  homeBtn.textContent = 'Take Me Home';
  homeBtn.addEventListener('click', () => { closeMenu(); transitionTo(() => showIndex()); });
  menu.appendChild(homeBtn);

  function updateMenuActive() {
    const b = document.body.classList;
    const isPhoto = b.contains('photo-active') || b.contains('gallery-active');
    const isAbout = b.contains('about-active');
    const isCv    = b.contains('cv-active');
    const isDetail = b.contains('detail-active');
    const hasSection = isPhoto || isAbout || isCv || isDetail;

    menu.classList.toggle('menu-has-current', hasSection);

    _menuProjectLinks.forEach((link) => {
      const idx = parseInt(link.dataset.projectIdx, 10);
      const isCurrent = idx === PHOTO_PROJECT_INDEX
        ? isPhoto
        : (isDetail && _activeDetailIndex === idx);
      link.classList.toggle('menu-current', isCurrent);
    });

    if (_menuContactLinks.about) _menuContactLinks.about.classList.toggle('menu-current', isAbout);
    if (_menuContactLinks.cv)    _menuContactLinks.cv.classList.toggle('menu-current', isCv);
  }

  hamburger.addEventListener('click', () => {
    updateMenuActive();
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
  });

  const aboutBack = document.getElementById('about-back-link');
  if (aboutBack) {
    aboutBack.addEventListener('click', (e) => {
      e.preventDefault();
      transitionTo(() => showIndex());
    });
  }

  const mobileMotif = document.getElementById('mobile-scroll-motif');
  if (mobileMotif) {
    window.addEventListener('wheel', (e) => {
      if (!mobileMotif.offsetParent) return;
      const current = parseFloat(mobileMotif.style.getPropertyValue('--r') || 0);
      mobileMotif.style.setProperty('--r', current + e.deltaY * 0.3);
      mobileMotif.style.transform = `rotate(${current + e.deltaY * 0.3}deg)`;
    }, { passive: true });
  }
}

// ==================== ROUTING ====================

function handleRoute() {
  const redirect = sessionStorage.getItem('redirect');
  if (redirect) {
    sessionStorage.removeItem('redirect');
    history.replaceState(null, '', redirect);
  }
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) {
    showIndex(true);
  } else if (segments[0] === 'cv') {
    showCV(true);
  } else if (segments[0] === 'about') {
    showAbout(true);
  } else if (segments[0] === 'photography' && segments[1]) {
    const ci = findCollectionBySlug(segments[1]);
    if (ci !== -1) showGallery(ci, true);
    else showIndex(true);
  } else if (segments[0] === 'photography') {
    showPhotography(true);
  } else {
    const pi = findProjectBySlug(segments[0]);
    if (pi !== -1) showDetail(pi, true);
    else showIndex(true);
  }
}

window.addEventListener('popstate', handleRoute);

// ==================== MUSIC ====================

const albums = [
  { title: 'Perfect Pair', artist: 'beabadoobee', cover: 'assets/about/albums/Beatopia.jpeg', audio: 'assets/about/mp3/beabadoobee - the perfect pair (Official Audio).mp3' },
  { title: 'Cologne', artist: 'beabadoobee', cover: 'assets/about/albums/Our Extended Play.jpeg', audio: 'assets/about/mp3/beabadoobee - Cologne (Lyrics).mp3' },
  { title: 'Risk', artist: 'Deftones', cover: 'assets/about/albums/Diamond Eyes.jpg', audio: 'assets/about/mp3/Deftones –  Risk (Official Visualizer).mp3' },
  { title: 'Cafe Con Ron', artist: 'Bad Bunny', cover: 'assets/about/albums/Debi TIrar Mas Fotos.png', audio: 'assets/about/mp3/CAFé CON RON.mp3' },
  { title: 'Asphyxiation', artist: 'Cafuné', cover: 'assets/about/albums/e-Asphyxiation.jpg', audio: 'assets/about/mp3/Cafuné - e-Asphyxiation (Official Video).mp3' },
  { title: 'Orbiter', artist: 'Noah Kahan', cover: 'assets/about/albums/The Great Divide.jpeg', audio: 'assets/about/mp3/Noah Kahan - Orbiter (Lyrics).mp3' },
  { title: 'Olivia', artist: 'The Back Seat Lovers', cover: 'assets/about/albums/When we were Friends.jpg', audio: 'assets/about/mp3/Olivia.mp3' },
  { title: 'Cinema', artist: 'The Marías', cover: 'assets/about/albums/Cinema.jpeg', audio: 'assets/about/mp3/The Marías - Heavy (Official Audio) (1).mp3' },
  { title: 'Blue Flame', artist: 'LE SSERAFIM', cover: 'assets/about/albums/Le_Sserafim_-_Unforgiven.png', audio: 'assets/about/mp3/Blue Flame (2023 Ver.).mp3' },
  { title: 'Concrete', artist: 'Malcolm Todd', cover: 'assets/about/albums/Malcolm Todd.png', audio: 'assets/about/mp3/Malcolm Todd - Concrete-[AudioTrimmer.com].mp3' },
];

let currentAudio = null;

function initMusic() {
  const grid = document.getElementById('album-grid');
  const npTitle = document.getElementById('np-title');
  const npArtist = document.getElementById('np-artist');
  const nowPlaying = document.getElementById('now-playing');

  albums.forEach((album, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'album-wrapper';

    const item = document.createElement('div');
    item.className = 'album-item';

    if (album.cover) {
      const img = document.createElement('img');
      img.src = album.cover;
      img.alt = `${album.title} — ${album.artist}`;
      img.decoding = 'async';
      item.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'album-placeholder';
      item.appendChild(placeholder);
    }

    const overlay = document.createElement('div');
    overlay.className = 'album-overlay';
    overlay.innerHTML = `<span class="album-overlay-title">${album.title}</span><span class="album-overlay-artist">${album.artist}</span>`;
    item.appendChild(overlay);

    let audio = null;
    if (album.audio) {
      audio = new Audio(album.audio);
      audio.volume = 0.5;
    }

    wrapper.addEventListener('click', () => {
      if (window.innerWidth > 768) return;
      const wasActive = item.classList.contains('tapped');
      document.querySelectorAll('.album-item.tapped').forEach((el) => el.classList.remove('tapped'));
      if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; currentAudio = null; }
      if (!wasActive) {
        item.classList.add('tapped');
        if (audio) { audio.play(); currentAudio = audio; }
      }
    });

    wrapper.addEventListener('mouseenter', () => {
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      if (audio) {
        audio.play();
        currentAudio = audio;
      }
      npTitle.textContent = album.title;
      npArtist.textContent = album.artist;
      nowPlaying.classList.add('active');
    });

    wrapper.addEventListener('mouseleave', () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      nowPlaying.classList.remove('active');
      currentAudio = null;
    });

    wrapper.appendChild(item);
    grid.appendChild(wrapper);
  });
}

// ==================== RANDOM PHOTO THUMBNAIL ====================

function initRandomPhotoThumb() {
  const allImages = photoCollections.flatMap((c) => c.images);
  if (!allImages.length) return;

  const src = allImages[Math.floor(Math.random() * allImages.length)];

  const card = document.querySelector(`.project-card[data-index="${PHOTO_PROJECT_INDEX}"]`);
  if (!card) return;
  const placeholder = card.querySelector('.placeholder-img');
  if (!placeholder) return;

  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Photography: Personal';
  img.decoding = 'async';
  placeholder.replaceWith(img);
}

// ==================== DETAIL OVERLAY & CREDITS ====================

function initDetailOverlay() {
  const overlay = document.getElementById('project-overlay');
  const hamburger = document.getElementById('detail-hamburger-btn');
  const closeBtn = document.getElementById('overlay-close');
  if (!overlay || !hamburger) return;

  const list = overlay.querySelector('.project-overlay-list');
  projects.forEach((p, i) => {
    if (i === PHOTO_PROJECT_INDEX) return;
    const item = document.createElement('div');
    item.className = 'project-overlay-item';
    item.dataset.project = i;
    item.textContent = CONTENT.projects[i].name;
    item.addEventListener('click', () => {
      overlay.classList.remove('open');
      transitionTo(() => showDetail(i));
    });
    list.appendChild(item);
  });

  let _overlayCloseTimer = null;

  function getOverlayItems() {
    return [...overlay.querySelectorAll('.project-overlay-item')];
  }

  function clearItemStyles(items) {
    items.forEach((el) => {
      el.style.opacity = '';
      el.style.transform = '';
      el.style.transition = '';
    });
  }

  function openOverlay() {
    if (_overlayCloseTimer) { clearTimeout(_overlayCloseTimer); _overlayCloseTimer = null; }
    const items = getOverlayItems();
    clearItemStyles(items);
    items.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'none';
    });
    overlay.classList.add('open');
    items.forEach((el, i) => {
      const targetOpacity = el.classList.contains('active') ? '1' : '0.2';
      setTimeout(() => {
        el.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)';
        el.style.opacity = targetOpacity;
        el.style.transform = '';
      }, 50 + i * 55);
      setTimeout(() => { clearItemStyles([el]); }, 50 + i * 55 + 450);
    });
  }

  function closeOverlay() {
    if (_overlayCloseTimer) { clearTimeout(_overlayCloseTimer); _overlayCloseTimer = null; }
    const items = getOverlayItems();
    overlay.classList.remove('open');
    items.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        el.style.opacity = '0';
        el.style.transform = 'translateY(-10px)';
      }, i * 25);
    });
    _overlayCloseTimer = setTimeout(() => {
      _overlayCloseTimer = null;
      clearItemStyles(items);
    }, items.length * 25 + 250);
  }

  hamburger.addEventListener('click', openOverlay);
  if (closeBtn) closeBtn.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });

  // "Take Me Home" button at top of overlay
  const takeHomeBtn = document.getElementById('overlay-take-home-btn');
  if (takeHomeBtn) {
    takeHomeBtn.addEventListener('click', () => {
      overlay.classList.remove('open');
      transitionTo(() => showIndex());
    });
  }

  // Site name in overlay goes to index
  const overlayHomeLnk = overlay.querySelector('.overlay-home-link');
  if (overlayHomeLnk) {
    overlayHomeLnk.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.remove('open');
      transitionTo(() => showIndex());
    });
  }

  // Fixed site name at top-left goes to index
  const detailSiteName = document.getElementById('detail-site-name-fixed');
  if (detailSiteName) {
    detailSiteName.addEventListener('click', (e) => { e.preventDefault(); transitionTo(() => showIndex()); });
  }

}

function initCreditsPanel() {
  const creditsBtn = document.getElementById('detail-credits-btn');
  const panel = document.getElementById('credits-panel');
  const closeBtn = document.getElementById('credits-panel-close');
  if (!creditsBtn || !panel) return;

  creditsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const nearBottom = maxScroll > 0 && window.scrollY / maxScroll > 0.78;
    if (nearBottom && !panel.classList.contains('open')) {
      window.scrollTo({ top: maxScroll * 0.72, behavior: 'smooth' });
      setTimeout(() => panel.classList.add('open'), 380);
    } else {
      panel.classList.toggle('open');
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => panel.classList.remove('open'));
  }
}

// ==================== PASSWORD GATE ====================

function showPasswordGate(index, fromPop) {
  const gate = document.getElementById('password-gate');
  const nameEl = document.getElementById('password-gate-name');
  const input = document.getElementById('password-gate-input');
  const errorEl = document.getElementById('password-gate-error');

  nameEl.textContent = CONTENT.projects[index].name;
  input.value = '';
  errorEl.textContent = '';
  gate.classList.add('open');
  setTimeout(() => input.focus(), 80);

  const trySubmit = () => {
    if (input.value.trim() === _GATE_PASSWORD) {
      _unlockedProjects.add(index);
      closeGate();
      showDetail(index, fromPop);
    } else {
      errorEl.textContent = 'Incorrect password.';
      input.value = '';
      input.focus();
    }
  };

  const closeGate = () => {
    gate.classList.remove('open');
    input.onkeydown = null;
  };

  input.onkeydown = (e) => { if (e.key === 'Enter') trySubmit(); };

  document.getElementById('password-gate-submit').onclick = trySubmit;
  document.getElementById('password-gate-close').onclick = closeGate;
  gate.onclick = (e) => { if (e.target === gate) closeGate(); };
}

// ==================== FOOTER ====================

function initFooter() {
  const nav = document.getElementById('footer-nav');
  if (!nav) return;

  FOOTER_SECTIONS.forEach((section) => {
    const item = document.createElement('a');
    item.href = '#';
    item.className = 'footer-nav-item';
    item.dataset.key = section.key;
    item.textContent = section.label;
    item.addEventListener('mouseenter', () => footerActivate(section.key, null, null, null, item));
    item.addEventListener('focus', () => footerActivate(section.key, null, null, null, item));
    item.addEventListener('click', (e) => { e.preventDefault(); section.navigate(); });
    nav.appendChild(item);
  });

  const sep = document.createElement('div');
  sep.className = 'footer-nav-sep';
  nav.appendChild(sep);

  CONTENT.projects.slice(0, PHOTO_PROJECT_INDEX).forEach((proj, i) => {
    const copy = CONTENT.projects[i];
    if (!copy || !copy.name) return;
    const item = document.createElement('a');
    item.href = '#';
    item.className = 'footer-nav-item footer-proj-item';
    item.dataset.proj = i;
    item.textContent = copy.shortName || copy.name;
    const rawProj = projects[i];
    const imgSrc = rawProj?.thumbnailFallback || rawProj?.thumbnail;
    item.addEventListener('mouseenter', () => {
      _footerMoveHighlightEl(item);
      footerActivate('_proj_' + i, copy.name, copy.category || '', imgSrc ? () => imgSrc : null, item);
    });
    item.addEventListener('focus', () => {
      _footerMoveHighlightEl(item);
      footerActivate('_proj_' + i, copy.name, copy.category || '', imgSrc ? () => imgSrc : null, item);
    });
    item.addEventListener('click', (e) => { e.preventDefault(); transitionTo(() => showDetail(i)); });
    nav.appendChild(item);
  });

  const footer = document.getElementById('site-footer');
  if (footer) footer.addEventListener('mouseleave', footerReturnToDefault);

  const wordmark = document.getElementById('footer-wordmark');
  if (wordmark) wordmark.addEventListener('click', (e) => { e.preventDefault(); transitionTo(() => showIndex()); });

  function tickClock() {
    const clock = document.getElementById('footer-clock');
    if (!clock) return;
    const now = new Date();
    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    clock.textContent = `${h}:${m} ${ampm}`;
  }
  tickClock();
  setInterval(tickClock, 60000);
}

function showFooter(key) {
  _footerCurrentKey = key;
  _footerActiveKey = null;
  document.querySelectorAll('.footer-nav-item').forEach((item) => {
    item.classList.toggle('footer-current', item.dataset.key === key);
    item.classList.remove('footer-item-active');
  });
  requestAnimationFrame(() => _footerMoveHighlight(key));
}

function hideFooter() {}

let _footerPreviewTimer = null;

function footerActivate(key, featuredTitle, featuredMeta, getFeaturedImage, triggerEl) {
  if (_footerActiveKey === key) return;
  _footerActiveKey = key;

  _footerMoveHighlight(key);
  document.querySelectorAll('.footer-nav-item').forEach((el) => {
    el.classList.toggle('footer-item-active', el.dataset.key === key && !el.dataset.proj);
  });

  // Only show preview popup for project items, not section nav items
  if (!key.startsWith('_proj_')) return;

  const title = featuredTitle;
  const meta = featuredMeta;
  const imgSrc = getFeaturedImage ? getFeaturedImage() : null;

  const preview = document.getElementById('footer-preview');
  const img = document.getElementById('footer-preview-img');
  const placeholder = document.getElementById('footer-preview-placeholder');
  const titleEl = document.getElementById('footer-preview-title');
  const metaEl = document.getElementById('footer-preview-meta');
  if (!preview) return;

  if (imgSrc) {
    img.src = imgSrc;
    img.style.display = 'block';
    placeholder.style.display = 'none';
  } else {
    img.style.display = 'none';
    placeholder.style.display = 'block';
  }
  if (titleEl) titleEl.textContent = title || '';
  if (metaEl) metaEl.textContent = meta || '';

  if (triggerEl) {
    const taskbar = document.querySelector('.footer-taskbar');
    if (taskbar) {
      const taskbarRect = taskbar.getBoundingClientRect();
      const itemRect = triggerEl.getBoundingClientRect();
      const taskbarCenter = taskbarRect.left + taskbarRect.width / 2;
      const itemCenter = itemRect.left + itemRect.width / 2;
      const offset = itemCenter - taskbarCenter;
      const previewW = 280;
      const halfPreview = previewW / 2;
      const minX = -taskbarCenter + halfPreview + 8;
      const maxX = (window.innerWidth - taskbarCenter) - halfPreview - 8;
      const clamped = Math.max(minX, Math.min(maxX, offset));
      preview.style.setProperty('--preview-x', clamped + 'px');
    }
  }

  clearTimeout(_footerPreviewTimer);
  _footerPreviewTimer = setTimeout(() => preview.classList.add('preview-visible'), 30);
}

function footerHidePreview() {
  _footerActiveKey = null;
  clearTimeout(_footerPreviewTimer);
  const preview = document.getElementById('footer-preview');
  if (preview) preview.classList.remove('preview-visible');
  if (_footerCurrentKey) {
    requestAnimationFrame(() => _footerMoveHighlight(_footerCurrentKey));
    document.querySelectorAll('.footer-nav-item').forEach((el) => {
      el.classList.remove('footer-item-active');
    });
  } else {
    const highlight = document.getElementById('footer-highlight');
    if (highlight) highlight.classList.remove('hl-visible');
  }
}

function footerReturnToDefault() {
  footerHidePreview();
}

function _footerMoveHighlight(key) {
  const nav = document.getElementById('footer-nav');
  const item = nav && nav.querySelector(`[data-key="${key}"]`);
  if (item) _footerMoveHighlightEl(item);
}

function _footerMoveHighlightEl(item) {
  const nav = document.getElementById('footer-nav');
  const highlight = document.getElementById('footer-highlight');
  if (!item || !nav || !highlight) return;
  const navRect = nav.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();
  highlight.style.left = (itemRect.left - navRect.left) + 'px';
  highlight.style.width = itemRect.width + 'px';
  highlight.classList.add('hl-visible');
}


// ==================== CURSOR ====================

function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  let tx = -100, ty = -100, cx = -100, cy = -100;

  (function lerp() {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(lerp);
  })();

  document.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    cursor.classList.remove('cursor-hidden');
  });
  document.addEventListener('mouseleave', () => cursor.classList.add('cursor-hidden'));
  document.addEventListener('mouseenter', () => cursor.classList.remove('cursor-hidden'));

  // Only interactive elements — avoids false-positives from large padding areas
  const HOVER_TARGETS = 'a, button, [role="button"], input, select, textarea, label, .project-card, .project-next-footer';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(HOVER_TARGETS)) cursor.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(HOVER_TARGETS)) cursor.classList.remove('cursor-hover');
  });
}

// ==================== INIT ====================

window.addEventListener('resize', () => { _cachedCardW = 0; }, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
  // Populate copy from content.js
  const bioEl = document.querySelector('.about-bio');
  if (bioEl && CONTENT.about && CONTENT.about.bio) {
    bioEl.innerHTML = CONTENT.about.bio.map(p => `<p>${p}</p>`).join('');
  }
  document.querySelectorAll('.project-card').forEach((card) => {
    const idx = parseInt(card.dataset.index, 10);
    const copy = CONTENT.projects[idx];
    if (!copy) return;
    const descEl = card.querySelector('.card-description');
    if (descEl) descEl.textContent = copy.cardDescription;
  });

  initRandomPhotoThumb();
  initMusic();
  initLoader();
  initScrollMotif();
  initSmoothScroll();
  initNavigation();
  initCollectionList();
  initScrollHighlight();
  initHamburger();
  initLightboxEvents();
  initDetailOverlay();
  initCreditsPanel();
  initAnimObserver();
  initFooter();
  initCursor();

  // Animate first card on initial load; others animate via IntersectionObserver as user scrolls
  setTimeout(() => {
    const firstCard = document.querySelector('#index-view .project-card');
    if (firstCard) firstCard.classList.add('anim-in');
  }, 2200);

  handleRoute();
});

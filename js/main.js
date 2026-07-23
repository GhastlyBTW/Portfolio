const PLACEHOLDER_COUNT = 6;
const PHOTO_PROJECT_INDEX = 5;
const SITE_BASE = 'https://brandenchi.com';
const DEFAULT_OG_IMAGE = SITE_BASE + '/assets/Thumbnails/Branden Chi Detention Watch Network Wild Postings.jpg';

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

function findProjectBySlug(slug) {
  return CONTENT.projects.findIndex((p) => toSlug(p.name) === slug);
}

function findCollectionBySlug(slug) {
  return photoCollections.findIndex((c) => toSlug(c.name) === slug);
}

// Asset-only project data — all text/copy lives in js/content.js
const projects = [
  // 0 — Detention Watch Network
  {
    thumbnail: 'assets/Thumbnails/Branden Chi Detention Watch Network Wild Posting.gif',
    thumbnailFallback: 'assets/Thumbnails/Branden Chi Detention Watch Network Wild Postings.jpg',
    gallery: [
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkLanding Page.jpg',
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkWebsite Landing Page Mockuo.jpg',
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkWild Posting.jpg',
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkElderly Man Poster.jpg',
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkWoman Poster.jpg',
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkYoung Man Poster.jpg',
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkSocial Media post Phone Mockup.jpg',
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkElderly Man Social Post.png',
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkLittle Kid Social Post.png',
      'assets/Detention Watch Network Web Photos/Branden Chi Detention Watch NetworkWoman Social Post.jpg',
    ],
    galleryAlts: [
      'Detention Watch Network campaign website landing page design',
      'Detention Watch Network campaign website mockup displayed on a desktop screen',
      'Wild posting street advertisement for the Detention Watch Network ICE awareness campaign',
      'Poster of an elderly man detained by ICE — Detention Watch Network campaign',
      'Poster of a woman detained by ICE — Detention Watch Network campaign',
      'Poster of a young man detained by ICE — Detention Watch Network campaign',
      'Detention Watch Network social media post displayed on a phone mockup',
      'Social media post about an elderly man detained by ICE — Detention Watch Network',
      'Social media post about a child separated from family by ICE — Detention Watch Network',
      'Social media post about a woman detained by ICE — Detention Watch Network',
    ],
    sections: [
      { blocks: [{ type: 'img', idx: 2 }, { type: 'row', indices: [3, 4, 5] }] },
      { blocks: [{ type: 'img', idx: 6 }, { type: 'row', indices: [7, 8, 9] }] },
      { blocks: [{ type: 'img', idx: 1 }, { type: 'img', idx: 0 }] },
    ],
  },
  // 1 — Liquid Dove
  {
    thumbnail: 'assets/Thumbnails/Branden Chi Liquid Dove Rage Bait Ad Mockup.jpg',
    gallery: [
      'assets/Liquid Dove/Branden Chi Liquid Dove Rage Bait Ad Mockup.jpg',
      'assets/Liquid Dove/Branden Chi Liquid Dove bottle.png',
      'assets/Liquid Dove/Branden Chi Liquid Dove BOX.png',
      'assets/Liquid Dove/Branden Chi Liquid Dove Raigbait_3.jpg',
      'assets/Liquid Dove/Branden Chi Liquid Dove Ragebait_2.jpg',
      'assets/Liquid Dove/Branden Chi Liquid Dove News headline.jpg',
    ],
    galleryAlts: [
      'Billboard rage bait advertisement mockup for the Liquid Dove collaboration campaign',
      'Liquid Dove co-branded water bottle packaging design',
      'Liquid Dove co-branded product box packaging design',
      'Rage bait advertisement variation for the Liquid Dove campaign',
      'Rage bait advertisement alternative for the Liquid Dove campaign',
      'Fake news headline used as a campaign touchpoint for Liquid Dove',
    ],
    sections: [
      { blocks: [{ type: 'img', idx: 0 }, { type: 'img', idx: 3 }] },
      { blocks: [{ type: 'img', idx: 2 }, { type: 'img', idx: 1 }] },
      { blocks: [{ type: 'img', idx: 5 }] },
    ],
  },
  // 2 — Emporio Armani - Unforgettable Night
  {
    thumbnail: 'assets/Thumbnails/Branden Chi Emporio Armani.gif',
    thumbnailFallback: 'assets/Thumbnails/Branden Chi Emporio Armani Table.jpg',
    gallery: [
      'assets/Emporio/Branden Chi Emporio Armani Napkins Red Table.jpg',
      'assets/Emporio/Branden Chi Emporio Armani Martini Glass.jpg',
      'assets/Emporio/Branden Chi Emporio Armani Napkin.jpg',
      'assets/Emporio/Branden Chi Emporio Armani Open Table Phone.png',
      'assets/Emporio/Branden Chi Emporio Armani Instagram Poll.png',
      'assets/Emporio/Branden Chi Emporio Armani Open Table Confirmation code.jpg',
    ],
    galleryAlts: [
      'Custom Emporio Armani cocktail napkins displayed on a red restaurant table — Unforgettable Night campaign',
      'Martini glass with a branded Emporio Armani cocktail napkin at a date-night restaurant',
      'Close-up of an Emporio Armani cocktail napkin with handwritten first-date fragrance tips',
      'OpenTable app on iPhone showing an Emporio Armani date tip notification',
      'Instagram poll asking followers how important scent is on a first date — Emporio Armani campaign',
      'OpenTable booking confirmation email featuring an Emporio Armani complimentary fragrance voucher',
    ],
    sections: [
      { blocks: [{ type: 'img', idx: 4 }] },
      { blocks: [{ type: 'img', idx: 0 }, { type: 'img', idx: 1 }, { type: 'img', idx: 2 }] },
      { blocks: [{ type: 'img', idx: 5 }, { type: 'img', idx: 3 }] },
    ],
  },
  // 3 — Lemaire
  {
    thumbnail: 'assets/Thumbnails/Branden Chi Lemaire Street Billboard Mockup.jpg',
    gallery: [
      'assets/Lemaire/Branden Chi Lemaire Street Billboard Mockup.jpg',
      'assets/Lemaire/Branden Chi Lemaire NYC Billboard Mockup.jpg',
      'assets/Lemaire/Branden Chi Lemaire Clothing Waste Skyscraper.jpg',
      'assets/Lemaire/Branden Chi Lemaire Model Clothing Waste.jpg',
      'assets/Lemaire/Branden Chi Lemaire Crowd City Street.jpg',
    ],
    galleryAlts: [
      'Street-level billboard mockup for Lemaire textile waste sustainability campaign',
      'New York City billboard mockup for Lemaire fast fashion awareness campaign',
      'Concept of a skyscraper wrapped in discarded clothing — Lemaire guerrilla installation',
      'Model standing among piles of textile waste — Lemaire campaign visual',
      'City street crowd surrounded by textile waste — Lemaire campaign visual',
    ],
    sections: [
      { blocks: [{ type: 'img', idx: 0 }, { type: 'img', idx: 1 }] },
      { blocks: [{ type: 'img', idx: 2 }, { type: 'img', idx: 3 }] },
      { blocks: [{ type: 'img', idx: 4 }] },
    ],
  },
  // 4 — Polaroid - Frame the Moment
  {
    thumbnail: 'assets/Polaroid/Polaroid at the beach.jpg',
    gallery: [
      'assets/Polaroid/Eiffel_tower.jpg',
      'assets/Polaroid/Branden Chi Polaroid Basketball court.jpg',
      'assets/Polaroid/Polaroid at the beach.jpg',
    ],
    galleryAlts: [
      'Eiffel Tower viewed through a Polaroid frame with a handwritten caption — Polaroid Frame the Moment campaign',
      'Basketball court viewed through a Polaroid frame — Polaroid Frame the Moment campaign',
      'Beach scene viewed through a Polaroid frame — Polaroid Frame the Moment campaign',
    ],
    sections: [
      { blocks: [{ type: 'img', idx: 0 }] },
      { blocks: [{ type: 'img', idx: 1 }, { type: 'img', idx: 2 }] },
    ],
  },
  // 5 — Photography: Personal
  {
    thumbnail: null,
    gallery: [],
  },
];

let _detailScrollHandler = null;

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

function initSmoothScroll() {
  scroll.current = window.scrollY;
  scroll.target = window.scrollY;

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    scroll.target += e.deltaY;
    clampTarget();
    startTick();
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

function runTypewriter(el) {
  const text = el.dataset.typewriter || '';
  el.removeAttribute('data-typewriter');
  el.textContent = '';
  el.style.opacity = '1';
  const totalMs = Math.max(500, Math.min(1200, text.length * 7));
  const base = totalMs / Math.max(text.length, 1);
  let i = 0;
  const tick = () => {
    if (i >= text.length) return;
    el.textContent += text[i];
    i++;
    // ease-in-out: slightly slower at edges, fastest in middle
    const t = i / text.length;
    const ease = 1 - 0.45 * Math.sin(t * Math.PI);
    setTimeout(tick, base * ease);
  };
  setTimeout(tick, parseFloat(el.dataset.typewriterDelay) || 0);
}

function initDividerScroll() {
  if (_dividerScrollHandler) {
    window.removeEventListener('scroll', _dividerScrollHandler);
  }
  const update = () => {
    const vh = window.innerHeight;
    document.querySelectorAll('.project-section-divider').forEach((el) => {
      const rect = el.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.65)));
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
      if (el.dataset.typewriter !== undefined) {
        runTypewriter(el);
      } else {
        el.classList.add('anim-in');
      }
      _animObserver.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
}

function observeAnimations(container) {
  initAnimObserver();
  container.querySelectorAll(
    '.anim-slide-left, .anim-fade-up, [data-typewriter]'
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
  document.querySelectorAll('#index-view .project-card').forEach((card, i) => {
    card.classList.remove('anim-in');
    void card.offsetWidth;
    card.style.animationDelay = '0ms';
    setTimeout(() => card.classList.add('anim-in'), 60 + i * 80);
  });
}

// ==================== VIEW MANAGEMENT ====================

const ALL_VIEWS = ['index-view', 'detail-view', 'cv-view', 'photo-view', 'photo-gallery-view', 'about-view'];

function showView(id) {
  ALL_VIEWS.forEach((viewId) => {
    document.getElementById(viewId).style.display = viewId === id ? 'block' : 'none';
  });
}

// ==================== LOADER ====================

function initLoader() {
  const loader = document.getElementById('loader');
  const logo = document.querySelector('.loader-logo');
  const content = document.getElementById('content');
  const bgLogo = document.getElementById('bg-logo');
  const siteName = document.querySelector('.site-name');

  setTimeout(() => {
    logo.classList.add('zoom-out');
  }, 1200);

  setTimeout(() => {
    loader.classList.add('done');
    bgLogo.classList.add('visible');
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

function cycleGreeting() {
  const el = document.getElementById('greeting');
  if (!el) return;
  el.style.opacity = '0';
  setTimeout(() => {
    greetingIndex = (greetingIndex + 1) % greetings.length;
    el.textContent = greetings[greetingIndex];
    el.style.opacity = '1';
  }, 300);
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
  showView('index-view');
  jumpTo(0);
  smoothScrollTo(0);
  clearActiveProject();
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
  exitAbout();
  exitPhoto();
  exitDetail();
  showView('cv-view');
  jumpTo(0);
  clearActiveProject();
  showWorkNav();
  if (!fromPop) pushRoute('/cv');
  cycleGreeting();
  document.querySelectorAll('.cv-section-label, .cv-entry').forEach((el, i) => {
    el.classList.remove('anim-in');
    void el.offsetWidth;
    setTimeout(() => el.classList.add('anim-in'), 60 + i * 55);
  });
}

function renderGalleryBlock(block, images, galleryAlts, name) {
  if (block.type === 'img') {
    const src = images[block.idx];
    if (!src) return null;
    const img = document.createElement('img');
    img.src = src;
    img.alt = (galleryAlts && galleryAlts[block.idx]) || name;
    img.loading = 'lazy';
    return img;
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
      row.appendChild(img);
    });
    return row;
  }
  return null;
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
  footer.addEventListener('click', () => showDetail(nextIdx));

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
    right.appendChild(img);
  }

  content.appendChild(left);
  content.appendChild(right);
  footer.appendChild(label);
  footer.appendChild(content);
  container.appendChild(footer);
}

function renderSplitDetail(gallery, project, copy, index, images) {
  // Intro section
  const intro = document.createElement('div');
  intro.className = 'project-split-intro';

  const introLeft = document.createElement('div');
  introLeft.className = 'project-intro-left';

  const metaLine = document.createElement('div');
  metaLine.className = 'project-meta-line anim-fade-up';
  metaLine.textContent = copy.year + ' · ' + copy.category;

  const displayName = document.createElement('h1');
  displayName.className = 'project-display-name anim-slide-left';
  displayName.style.animationDelay = '80ms';
  displayName.textContent = copy.name;

  introLeft.appendChild(metaLine);
  introLeft.appendChild(displayName);

  const accordion = document.createElement('details');
  accordion.className = 'project-intro-accordion';
  if (window.innerWidth > 860) accordion.setAttribute('open', '');

  accordion.classList.add('anim-fade-up');
  accordion.style.animationDelay = '160ms';

  const summary = document.createElement('summary');
  summary.className = 'project-intro-accordion-summary';
  summary.textContent = 'About this project';
  accordion.appendChild(summary);

  [
    { label: 'The Brief',    text: copy.brief    },
    { label: 'The Insight',  text: copy.insight  },
    { label: 'The Strategy', text: copy.strategy },
    { label: 'Credits',      text: copy.credits  },
  ].forEach(({ label, text }) => {
    if (!text) return;
    const block = document.createElement('div');
    block.className = 'project-intro-block';
    const lbl = document.createElement('span');
    lbl.className = 'project-intro-block-label';
    lbl.textContent = label;
    const p = document.createElement('p');
    p.className = 'project-intro-brief';
    p.textContent = text;
    block.appendChild(lbl);
    block.appendChild(p);
    accordion.appendChild(block);
  });

  introLeft.appendChild(accordion);

  const introRight = document.createElement('div');
  introRight.className = 'project-intro-right';

  if (project.thumbnail) {
    const heroImg = document.createElement('img');
    heroImg.src = project.thumbnailFallback || project.thumbnail;
    heroImg.alt = copy.name;
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
    }

    if (contentSec.text) {
      const text = document.createElement('p');
      text.className = 'section-text';
      text.style.opacity = '0';
      text.dataset.typewriter = contentSec.text;
      text.dataset.typewriterDelay = '120';
      text.textContent = contentSec.text; // keep for layout/sizing
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

function updateDetailOverlaySelection(index) {
  document.querySelectorAll('.project-overlay-item').forEach((item) => {
    item.classList.toggle('active', parseInt(item.dataset.project, 10) === index);
  });
}

function showDetail(index, fromPop) {
  exitAbout();
  exitPhoto();
  if (index === PHOTO_PROJECT_INDEX) {
    showPhotography(fromPop);
    return;
  }

  const project = projects[index];
  const copy = CONTENT.projects[index];
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
  if (creditsPanelText) creditsPanelText.textContent = copy.credits || 'Coming soon.';

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
    document.getElementById('prev-project').onclick = (e) => { e.preventDefault(); showDetail(prevIdx); };
    document.getElementById('next-project').onclick = (e) => { e.preventDefault(); showDetail(nextIdx); };
  }

  updateDetailOverlaySelection(index);

  // Scroll: fade site name + hide credits near bottom
  const siteNameEl = document.getElementById('detail-site-name-fixed');
  if (siteNameEl) {
    siteNameEl.style.opacity = '1';
    if (_detailScrollHandler) window.removeEventListener('scroll', _detailScrollHandler);
    _detailScrollHandler = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Fade name as user scrolls down
      siteNameEl.style.opacity = Math.max(0, 1 - scrollY / 160);

      // Auto-hide credits when near the bottom of the page
      const creditsPanel = document.getElementById('credits-panel');
      if (creditsPanel) {
        const nearBottom = maxScroll > 0 && scrollY / maxScroll > 0.78;
        creditsPanel.classList.toggle('scroll-hidden', nearBottom);
      }
    };
    window.addEventListener('scroll', _detailScrollHandler, { passive: true });
  }

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
  exitDetail();
  updateMeta({
    title: 'About — Branden Chi',
    description: 'Branden Chi is a Korean American Art Director from Delaware, now based in New York City, creating work that makes people stop and think.',
    canonical: '/about',
    image: 'assets/about/Branden Chi - About.jpg',
  });
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
  activeFilter = 'all';
  document.querySelectorAll('.photo-filter').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
  renderCollections();
  showView('photo-view');
  jumpTo(0);
  showWorkNav();
  clearActiveCollection();
  if (!fromPop) pushRoute('/photography');
  cycleGreeting();
}

function showGallery(collectionIndex, fromPop) {
  exitAbout();
  const collection = photoCollections[collectionIndex];
  if (!collection) return;
  showPhotography(true);
  setTimeout(() => openLightbox(collectionIndex), 100);
}

// ==================== LIGHTBOX ====================

const SCROLL_PER_CARD = 500;

let _lbIdx = -1;
let _lbCurr = 0;
let _stackPos = 0;
let _stackScrollTotal = 0;
let _lbWheelFn = null;
let _lbKeyFn = null;
let _lbTouchStartFn = null;
let _lbTouchEndFn = null;
let _boardPool = []; // [{element, imgIdx}] — all images rendered as a horizontal strip
let _cachedCardW = 0; // cached board width for CARD_STEP; reset on open/resize
let _stackRafPending = false; // prevents >1 rAF per frame in wheel handler

function openLightbox(collectionIdx, startIdx = 0) {
  const collection = photoCollections[collectionIdx];
  if (!collection) return;

  _lbIdx = collectionIdx;
  _lbCurr = startIdx;
  _stackPos = startIdx;
  _stackScrollTotal = startIdx * SCROLL_PER_CARD;
  _cachedCardW = 0;

  updateMeta({
    title: collection.name + ' — Branden Chi Photography',
    description: 'Photography collection by Branden Chi: ' + collection.subtitle + '.',
    canonical: '/photography/' + toSlug(collection.name),
    image: collection.thumbnail,
  });

  const lightbox = document.getElementById('photo-lightbox');
  const frame = document.getElementById('lightbox-frame');
  frame.innerHTML = '';

  const stack = document.createElement('div');
  stack.className = 'lightbox-stack';
  stack.id = 'lightbox-stack';

  const images = collection.images.length ? collection.images : [];
  const N = images.length;
  _boardPool = [];

  images.forEach((src, i) => {
    const board = document.createElement('div');
    board.className = 'lightbox-board';
    const img = document.createElement('img');
    img.src = src;
    img.alt = collection.name + ' — ' + (i + 1);
    img.loading = i < 2 ? 'eager' : 'lazy';
    img.draggable = false;
    board.appendChild(img);
    stack.appendChild(board);
    _boardPool.push({ element: board, imgIdx: i });
  });

  const counter = document.createElement('div');
  counter.className = 'lightbox-counter';
  counter.id = 'lightbox-counter';
  counter.textContent = images.length ? '1 / ' + images.length : '';

  const nameTag = document.createElement('div');
  nameTag.className = 'lightbox-name';
  nameTag.textContent = collection.name;

  frame.appendChild(stack);
  frame.appendChild(counter);
  frame.appendChild(nameTag);

  // Position boards immediately without animation
  updateStackPositions(true);

  lightbox.removeAttribute('aria-hidden');
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';

  _lbWheelFn = (e) => {
    e.preventDefault();
    const N = photoCollections[_lbIdx].images.length;
    _stackScrollTotal += e.deltaY + e.deltaX;
    _stackPos = ((_stackScrollTotal / SCROLL_PER_CARD) % N + N) % N;
    const newCurr = Math.round(_stackPos) % N;
    if (newCurr !== _lbCurr) {
      _lbCurr = newCurr;
      const counter = document.getElementById('lightbox-counter');
      if (counter) counter.textContent = (_lbCurr + 1) + ' / ' + N;
    }
    if (!_stackRafPending) {
      _stackRafPending = true;
      requestAnimationFrame(() => {
        updateStackPositions(false);
        _stackRafPending = false;
      });
    }
  };
  lightbox.addEventListener('wheel', _lbWheelFn, { passive: false });

  _lbKeyFn = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') advanceLightbox(1);
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') advanceLightbox(-1);
  };
  window.addEventListener('keydown', _lbKeyFn);

  let lbTouchStartX = 0, lbTouchStartY = 0;
  _lbTouchStartFn = (e) => { lbTouchStartX = e.touches[0].clientX; lbTouchStartY = e.touches[0].clientY; };
  _lbTouchEndFn = (e) => {
    const dx = lbTouchStartX - e.changedTouches[0].clientX;
    const dy = Math.abs(lbTouchStartY - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) advanceLightbox(dx > 0 ? 1 : -1);
  };
  lightbox.addEventListener('touchstart', _lbTouchStartFn, { passive: true });
  lightbox.addEventListener('touchend', _lbTouchEndFn, { passive: true });

  pushRoute('/photography/' + toSlug(collection.name));
}

function updateStackPositions(instant) {
  if (!_boardPool.length || _lbIdx === -1) return;
  const N = photoCollections[_lbIdx].images.length;
  if (!N) return;

  if (!_cachedCardW) {
    _cachedCardW = _boardPool[0].element.getBoundingClientRect().width || window.innerWidth * 0.60;
  }
  const CARD_STEP = _cachedCardW * 0.20;

  _boardPool.forEach(({ element, imgIdx }) => {
    let relPos = imgIdx - _stackPos;
    relPos = ((relPos % N) + N) % N;
    if (relPos > N / 2) relPos -= N;

    const absRel = Math.abs(relPos);
    const x = relPos * CARD_STEP;
    const tz = -Math.min(Math.round(absRel), 3) * 20;
    const scaleVal = 1.0 - Math.min(absRel, 1) * 0.35;
    const zIndex = 30 - Math.round(Math.min(absRel, 6)) * 4;

    if (instant) element.style.transition = 'none';
    element.style.transform = `translateX(calc(-50% + ${x}px)) translateY(-50%) translateZ(${tz}px) scale(${scaleVal.toFixed(3)})`;
    element.style.zIndex = zIndex;
    if (instant) element.offsetHeight;
    if (instant) element.style.transition = '';
  });
}

function closeLightbox() {
  const lightbox = document.getElementById('photo-lightbox');
  if (!lightbox.classList.contains('open')) return;
  if (_lbWheelFn) { lightbox.removeEventListener('wheel', _lbWheelFn); _lbWheelFn = null; }
  if (_lbKeyFn) { window.removeEventListener('keydown', _lbKeyFn); _lbKeyFn = null; }
  if (_lbTouchStartFn) { lightbox.removeEventListener('touchstart', _lbTouchStartFn); _lbTouchStartFn = null; }
  if (_lbTouchEndFn) { lightbox.removeEventListener('touchend', _lbTouchEndFn); _lbTouchEndFn = null; }
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  _lbIdx = -1;
  // Clear content after fade-out transition completes
  setTimeout(() => {
    const frame = document.getElementById('lightbox-frame');
    if (frame) frame.innerHTML = '';
  }, 520);
  pushRoute('/photography');
}

function advanceLightbox(dir) {
  if (_lbIdx === -1) return;
  const N = photoCollections[_lbIdx].images.length;
  if (!N) return;
  _stackScrollTotal += dir * SCROLL_PER_CARD;
  _stackPos = ((_stackScrollTotal / SCROLL_PER_CARD) % N + N) % N;
  _lbCurr = Math.round(_stackPos) % N;
  updateStackPositions(false);
  const counter = document.getElementById('lightbox-counter');
  if (counter) counter.textContent = (_lbCurr + 1) + ' / ' + N;
}

function exitPhoto() {
  if (_parallaxCleanup) { _parallaxCleanup(); _parallaxCleanup = null; }
  document.body.classList.remove('photo-active');
  const lightbox = document.getElementById('photo-lightbox');
  if (lightbox && lightbox.classList.contains('open')) {
    if (_lbWheelFn) { lightbox.removeEventListener('wheel', _lbWheelFn); _lbWheelFn = null; }
    if (_lbKeyFn) { window.removeEventListener('keydown', _lbKeyFn); _lbKeyFn = null; }
    if (_lbTouchStartFn) { lightbox.removeEventListener('touchstart', _lbTouchStartFn); _lbTouchStartFn = null; }
    if (_lbTouchEndFn) { lightbox.removeEventListener('touchend', _lbTouchEndFn); _lbTouchEndFn = null; }
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    _lbIdx = -1;
    setTimeout(() => {
      const frame = document.getElementById('lightbox-frame');
      if (frame) frame.innerHTML = '';
    }, 520);
  }
}

function initLightboxEvents() {
  const lightbox = document.getElementById('photo-lightbox');
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  const navBack = document.getElementById('photo-nav-back');
  if (navBack) navBack.addEventListener('click', (e) => { e.preventDefault(); showIndex(); });

  const pw = document.getElementById('photo-nav-pinwheel');
  let pwAngle = 0;
  window.addEventListener('wheel', (e) => {
    if (!document.body.classList.contains('photo-active')) return;
    pwAngle += e.deltaY * 0.3;
    if (pw) pw.style.transform = `rotate(${pwAngle}deg)`;
  }, { passive: true });
}

let _parallaxCleanup = null;
let _carouselScrollOffset = 0;
let _lastPointerAngle = null;
let _carouselPivots = [];

function updateCarouselPointerEvents(pivots, finalAngles, sceneY) {
  if (_lastPointerAngle !== null && Math.abs(sceneY - _lastPointerAngle) < 0.5) return;
  _lastPointerAngle = sceneY;
  pivots.forEach((pivot, i) => {
    let eff = ((finalAngles[i] + sceneY) % 360 + 360) % 360;
    if (eff > 180) eff -= 360;
    pivot.style.pointerEvents = Math.abs(eff) < 88 ? 'auto' : 'none';
  });
}

function applyCarouselFilter() {
  // Desktop 3D carousel
  _carouselPivots.forEach(({ pivot, collection }) => {
    const matches = activeFilter === 'all' || getCollectionCategory(collection) === activeFilter;
    const card = pivot.querySelector('.carousel-card');
    if (card) card.style.opacity = matches ? '1' : '0.15';
  });
  // Mobile grid cards
  document.querySelectorAll('.photo-mobile-card').forEach((card) => {
    const idx = parseInt(card.dataset.collection);
    const collection = photoCollections[idx];
    const matches = !collection || activeFilter === 'all' || getCollectionCategory(collection) === activeFilter;
    card.style.display = matches ? '' : 'none';
  });
}

function openMobileCollection(collectionIdx) {
  const container = document.getElementById('photo-collections');
  const collection = photoCollections[collectionIdx];
  if (!collection) return;
  container.innerHTML = '';

  // Title at top
  const title = document.createElement('h2');
  title.className = 'photo-masonry-title';
  title.textContent = collection.name;
  container.appendChild(title);

  // Masonry grid — no lightbox, just view in place
  const masonry = document.createElement('div');
  masonry.className = 'photo-masonry';
  collection.images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = (collection.alts && collection.alts[i]) || collection.name + ' — ' + (i + 1);
    img.loading = i < 8 ? 'eager' : 'lazy';
    masonry.appendChild(img);
  });
  container.appendChild(masonry);

  // Back button at bottom
  const backBtn = document.createElement('button');
  backBtn.className = 'photo-masonry-back';
  backBtn.textContent = '← Back to Collections';
  backBtn.addEventListener('click', () => renderCollections());
  container.appendChild(backBtn);
}

function renderCollections() {
  const container = document.getElementById('photo-collections');
  container.innerHTML = '';
  _carouselPivots = [];

  if (!photoCollections.length) {
    const msg = document.createElement('p');
    msg.className = 'gallery-empty';
    msg.textContent = 'No collections found.';
    container.appendChild(msg);
    return;
  }

  const stage = document.createElement('div');
  stage.className = 'carousel-stage';

  const scene = document.createElement('div');
  scene.className = 'carousel-scene';
  stage.appendChild(scene);

  const total = photoCollections.length;
  const step = total <= 1 ? 0 : 360 / total;
  const pivots = [];
  const finalAngles = [];
  _carouselScrollOffset = 0;
  _lastPointerAngle = null;

  photoCollections.forEach((collection, i) => {
    const finalAngle = i * step;
    finalAngles.push(finalAngle);

    const pivot = document.createElement('div');
    pivot.className = 'carousel-pivot';
    pivot.style.transform = 'rotateY(0deg)';
    pivot.style.opacity = '0';
    pivot.style.pointerEvents = 'none';

    const card = document.createElement('div');
    card.className = 'carousel-card';

    if (collection.thumbnail) {
      const img = document.createElement('img');
      img.src = collection.thumbnail;
      img.alt = collection.name + ' — ' + collection.subtitle;
      img.loading = 'lazy';
      card.appendChild(img);
    } else {
      const ph = document.createElement('div');
      ph.className = 'placeholder-img';
      card.appendChild(ph);
    }

    const overlay = document.createElement('div');
    overlay.className = 'carousel-overlay';
    const nameEl = document.createElement('span');
    nameEl.className = 'carousel-name';
    nameEl.textContent = collection.name;
    const subEl = document.createElement('span');
    subEl.className = 'carousel-sub';
    subEl.textContent = collection.subtitle;
    overlay.appendChild(nameEl);
    overlay.appendChild(subEl);
    card.appendChild(overlay);

    pivot.appendChild(card);

    pivot.addEventListener('click', () => openLightbox(i));
    scene.appendChild(pivot);
    pivots.push(pivot);
    _carouselPivots.push({ pivot, collection });

    if (i === 0) {
      // Origin card: fades in first at its resting position (no rotation needed)
      setTimeout(() => {
        pivot.style.transition = 'opacity 0.5s ease';
        pivot.style.opacity = '1';
      }, 150);
    } else {
      // Subsequent cards emerge from the origin and fan out to their positions
      const delay = 550 + (i - 1) * 140;
      setTimeout(() => {
        pivot.style.transition = 'transform 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.35s ease';
        pivot.style.opacity = '1';
        pivot.style.transform = `rotateY(${finalAngle}deg)`;
      }, delay);
    }
  });

  // Enable pointer-events on front-facing cards once all animations settle
  const maxDelay = 550 + (total - 2) * 140 + 1200;
  setTimeout(() => {
    updateCarouselPointerEvents(pivots, finalAngles, _carouselScrollOffset);
    applyCarouselFilter();
  }, maxDelay);

  container.appendChild(stage);
  initCarouselParallax(stage, scene, pivots, finalAngles);

  // Mobile grid (CSS hides carousel and shows this on small screens)
  const mobileGrid = document.createElement('div');
  mobileGrid.className = 'photo-mobile-grid';
  photoCollections.forEach((collection, i) => {
    const card = document.createElement('div');
    card.className = 'photo-mobile-card';
    if (collection.thumbnail) {
      const img = document.createElement('img');
      img.src = collection.thumbnail;
      img.alt = collection.name;
      img.loading = 'lazy';
      card.appendChild(img);
    }
    const name = document.createElement('span');
    name.className = 'photo-mobile-card-name';
    name.textContent = collection.name;
    card.appendChild(name);
    card.dataset.collection = i;
    card.style.animationDelay = (i * 80) + 'ms';
    card.addEventListener('click', () => openMobileCollection(i));
    mobileGrid.appendChild(card);
  });
  container.appendChild(mobileGrid);

  // Stagger mobile cards in
  mobileGrid.querySelectorAll('.photo-mobile-card').forEach((card, i) => {
    setTimeout(() => card.classList.add('anim-in'), 80 + i * 80);
  });
}

function initCarouselParallax(stage, scene, pivots, finalAngles) {
  if (_parallaxCleanup) { _parallaxCleanup(); _parallaxCleanup = null; }

  const bY = 0;
  const bX = 0;
  let tX = 0, tY = 0, cX = 0, cY = 0, running = false;

  scene.style.transform = `rotateY(0deg) rotateX(0deg)`;

  function getSceneY() { return bY + _carouselScrollOffset + cX; }

  function loop() {
    cX += (tX - cX) * 0.07;
    cY += (tY - cY) * 0.07;
    const sy = getSceneY();
    scene.style.transform = `rotateY(${sy}deg) rotateX(${bX + cY}deg)`;
    updateCarouselPointerEvents(pivots, finalAngles, sy);
    if (Math.abs(tX - cX) > 0.05 || Math.abs(tY - cY) > 0.05) {
      requestAnimationFrame(loop);
    } else {
      running = false;
    }
  }

  const mouseFn = (e) => {
    if (!document.body.classList.contains('photo-active') || _lbIdx !== -1) return;
    tX = (e.clientX / window.innerWidth * 2 - 1) * 16;
    tY = (e.clientY / window.innerHeight * 2 - 1) * -10;
    if (!running) { running = true; requestAnimationFrame(loop); }
  };

  let carouselWheelRaf = false;
  const wheelFn = (e) => {
    if (!document.body.classList.contains('photo-active') || _lbIdx !== -1) return;
    _carouselScrollOffset -= (e.deltaY + e.deltaX) * 0.12;
    if (!carouselWheelRaf) {
      carouselWheelRaf = true;
      requestAnimationFrame(() => {
        const sy = getSceneY();
        scene.style.transform = `rotateY(${sy}deg) rotateX(${bX + cY}deg)`;
        updateCarouselPointerEvents(pivots, finalAngles, sy);
        carouselWheelRaf = false;
      });
    }
  };

  let touchStartX = 0;
  const touchStartFn = (e) => {
    if (!document.body.classList.contains('photo-active') || _lbIdx !== -1) return;
    touchStartX = e.touches[0].clientX;
  };
  const touchMoveFn = (e) => {
    if (!document.body.classList.contains('photo-active') || _lbIdx !== -1) return;
    const dx = touchStartX - e.touches[0].clientX;
    touchStartX = e.touches[0].clientX;
    _carouselScrollOffset -= dx * 0.4;
    if (!carouselWheelRaf) {
      carouselWheelRaf = true;
      requestAnimationFrame(() => {
        const sy = getSceneY();
        scene.style.transform = `rotateY(${sy}deg) rotateX(${bX + cY}deg)`;
        updateCarouselPointerEvents(pivots, finalAngles, sy);
        carouselWheelRaf = false;
      });
    }
  };

  document.addEventListener('mousemove', mouseFn);
  document.addEventListener('wheel', wheelFn, { passive: true });
  document.addEventListener('touchstart', touchStartFn, { passive: true });
  document.addEventListener('touchmove', touchMoveFn, { passive: true });
  _parallaxCleanup = () => {
    document.removeEventListener('mousemove', mouseFn);
    document.removeEventListener('wheel', wheelFn);
    document.removeEventListener('touchstart', touchStartFn);
    document.removeEventListener('touchmove', touchMoveFn);
  };
}

// ==================== SIDEBAR ====================

function setActiveProject(index) {
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
      showIndex();
    }
  });

  document.querySelectorAll('#project-list a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const index = parseInt(link.dataset.project, 10);

      if (isIndexVisible()) {
        const card = document.querySelector(`.project-card[data-index="${index}"]`);
        if (card) {
          const top = card.getBoundingClientRect().top + window.scrollY;
          smoothScrollTo(top);
        }
      } else {
        showDetail(index);
      }
    });
  });

  document.querySelectorAll('.details-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const index = parseInt(link.dataset.project, 10);
      showDetail(index);
    });
  });

  document.querySelectorAll('.thumbnail').forEach((thumb) => {
    const card = thumb.closest('.project-card');
    if (!card) return;
    const index = parseInt(card.dataset.index, 10);
    thumb.addEventListener('click', () => {
      showDetail(index);
    });
  });

  document.getElementById('index-link').addEventListener('click', (e) => {
    e.preventDefault();
    showIndex();
  });

  document.getElementById('cv-link').addEventListener('click', (e) => {
    e.preventDefault();
    showCV();
  });

  document.getElementById('cv-index-link').addEventListener('click', (e) => {
    e.preventDefault();
    showIndex();
  });

  document.getElementById('about-link').addEventListener('click', (e) => {
    e.preventDefault();
    showAbout();
  });

  document.getElementById('about-index-link').addEventListener('click', (e) => {
    e.preventDefault();
    showIndex();
  });


  document.getElementById('photo-index-link').addEventListener('click', (e) => {
    e.preventDefault();
    showIndex();
  });

  document.getElementById('gallery-back-link').addEventListener('click', (e) => {
    e.preventDefault();
    showPhotography();
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
      applyCarouselFilter();
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
      showGallery(i);
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
  const projectList = document.getElementById('project-list');
  const cards = document.querySelectorAll('#index-view .project-card[data-index]');
  if (!cards.length) return;

  scrollObserver = new IntersectionObserver((entries) => {
    if (!isIndexVisible()) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index;
        projectList.classList.add('has-scroll-active');
        setActiveProject(index);
      }
    });
  }, { threshold: 0.4 });

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
  projects.forEach((p, i) => {
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'mobile-menu-project-link';
    link.textContent = i === PHOTO_PROJECT_INDEX ? 'Photography' : CONTENT.projects[i].name;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      if (i === PHOTO_PROJECT_INDEX) showPhotography();
      else showDetail(i);
    });
    projectSection.appendChild(link);
  });
  menu.appendChild(projectSection);

  // Build contact links section
  const contactSection = document.createElement('div');
  contactSection.className = 'mobile-menu-contact';
  [
    { label: 'Email', href: 'mailto:branden.chi.07@gmail.com', external: false },
    { label: 'CV',    href: '#',                               external: false, action: () => showCV() },
    { label: 'About', href: '#',                               external: false, action: () => showAbout() },
    { label: 'Instagram', href: 'https://www.instagram.com/brand.en_/', external: true },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/branden-chi-360a06298', external: true },
  ].forEach(({ label, href, external, action }) => {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;
    if (external) { a.target = '_blank'; a.rel = 'noopener'; }
    a.addEventListener('click', (e) => {
      if (action) { e.preventDefault(); closeMenu(); action(); }
      else closeMenu();
    });
    contactSection.appendChild(a);
  });
  menu.appendChild(contactSection);

  // Take Me Home button
  const homeBtn = document.createElement('button');
  homeBtn.className = 'mobile-menu-home-btn';
  homeBtn.textContent = 'Take Me Home';
  homeBtn.addEventListener('click', () => { closeMenu(); showIndex(); });
  menu.appendChild(homeBtn);

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
  });

  const aboutBack = document.getElementById('about-back-link');
  if (aboutBack) {
    aboutBack.addEventListener('click', (e) => {
      e.preventDefault();
      showIndex();
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
      showDetail(i);
    });
    list.appendChild(item);
  });

  hamburger.addEventListener('click', () => overlay.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });

  // "Take Me Home" button at top of overlay
  const takeHomeBtn = document.getElementById('overlay-take-home-btn');
  if (takeHomeBtn) {
    takeHomeBtn.addEventListener('click', () => {
      overlay.classList.remove('open');
      showIndex();
    });
  }

  // Site name in overlay goes to index
  const overlayHomeLnk = overlay.querySelector('.overlay-home-link');
  if (overlayHomeLnk) {
    overlayHomeLnk.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.remove('open');
      showIndex();
    });
  }

  // Fixed site name at top-left goes to index
  const detailSiteName = document.getElementById('detail-site-name-fixed');
  if (detailSiteName) {
    detailSiteName.addEventListener('click', (e) => { e.preventDefault(); showIndex(); });
  }

}

function initCreditsPanel() {
  const creditsBtn = document.getElementById('detail-credits-btn');
  const panel = document.getElementById('credits-panel');
  const closeBtn = document.getElementById('credits-panel-close');
  if (!creditsBtn || !panel) return;

  creditsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => panel.classList.remove('open'));
  }
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

  // Stagger index cards on first load (after loader clears)
  setTimeout(() => {
    document.querySelectorAll('#index-view .project-card').forEach((card, i) => {
      card.style.animationDelay = (i * 90) + 'ms';
      setTimeout(() => card.classList.add('anim-in'), 100 + i * 90);
    });
  }, 2200);

  handleRoute();
});

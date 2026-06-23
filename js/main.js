const PLACEHOLDER_COUNT = 6;
const PHOTO_PROJECT_INDEX = 4;

function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function findProjectBySlug(slug) {
  return projects.findIndex((p) => toSlug(p.name) === slug);
}

function findCollectionBySlug(slug) {
  return photoCollections.findIndex((c) => toSlug(c.name) === slug);
}

const projects = [
  {
    name: 'Detention Watch Network',
    category: 'Art Direction | Copy Writing',
    year: '2025',
    description: 'Each piece of media tells a story through the eyes of a victim of ICE. From a child being separated from their family, to an elderly man being beaten up. The visuals are made to invoke emotions of empathy to show the reality of the emotions these people are facing.',
    detailDescription: 'Each piece of media tells a story through the eyes of a victim of ICE. From a child being separated from their family, to an elderly man being beaten up. The visuals are made to invoke emotions of empathy to show the reality of the emotions these people are facing. The campaign spans wild postings, social media content, and a dedicated landing page — all designed to confront viewers with the human cost of detention and drive them toward action.',
    thumbnail: 'assets/Thumbnails/Branden Chi Detention Watch Network Wild Postings.jpg',
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
  },
  {
    name: 'Liquid Dove',
    category: 'Art Direction | Copy Writing | Packaging',
    year: '2025',
    description: 'Collaboration campaign with Liquid Death and Dove to bring edible Dove, and Liquid Death scented, Hygiene products to market to disrupt and disturb viewers.',
    detailDescription: 'Collaboration campaign with Liquid Death and Dove to bring edible Dove, and Liquid Death scented, Hygiene products to market to disrupt and disturb viewers. The packaging and advertising lean into absurdity, blending the visual language of both brands into something that feels simultaneously premium and unhinged.',
    thumbnail: 'assets/Thumbnails/Branden Chi Liquid Dove Rage Bait Ad Mockup.jpg',
    gallery: [],
  },
  {
    name: 'Emporio Armani',
    category: 'Art Direction | Copy Writing',
    year: '2025',
    description: 'Everyone knows that First dates comes with nerves. A small boost of comfort can shift the whole night–Scent delivers that edge.',
    detailDescription: 'Everyone knows that first dates come with nerves. A small boost of comfort can shift the whole night – scent delivers that edge. This campaign positions Emporio Armani fragrance as the quiet confidence behind a memorable evening, told through intimate moments and atmospheric visuals.',
    thumbnail: 'assets/Thumbnails/Branden Chi Emporio Armani Table.jpg',
    gallery: [],
  },
  {
    name: 'Polaroid',
    category: 'Art Direction | Copy Writing',
    year: '2025',
    description: 'In a world where travel lives and dies in camera rolls, moments disappear as fast as they’re captured. Polaroid pushes back by making memories physical again.',
    detailDescription: 'In a world where travel lives and dies in camera rolls, moments disappear as fast as they’re captured. Polaroid pushes back by making memories physical again. This campaign celebrates the act of slowing down — turning fleeting snapshots into tangible keepsakes that outlast the trip itself.',
    thumbnail: 'assets/Thumbnails/Branden Chi Polaroid Eiffel Tower.jpg',
    gallery: [],
  },
  {
    name: 'Photography: Personal',
    category: 'Digital & Film Photography',
    year: '2021 - Present',
    description: 'A collection of my photography that makes me feel fulfilled as an artist and creator. Filled with works from my passion for cars to travels, this gallery is a peek into what makes me who I am.',
    detailDescription: 'A collection of my photography that makes me feel fulfilled as an artist and creator. Filled with works from my passion for cars to travels, this gallery is a peek into what makes me who I am.',
    thumbnail: null,
    gallery: [],
  },
];

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

// ==================== VIEW MANAGEMENT ====================

const ALL_VIEWS = ['index-view', 'detail-view', 'cv-view', 'photo-view', 'photo-gallery-view'];

function showView(id) {
  ALL_VIEWS.forEach((viewId) => {
    document.getElementById(viewId).style.display = viewId === id ? 'block' : 'none';
  });
}

// ==================== LOADER ====================

function initLoader() {
  const loader = document.getElementById('loader');
  const logo = document.querySelector('.loader-logo');
  const portfolio = document.getElementById('portfolio');

  setTimeout(() => {
    logo.classList.add('zoom-out');
  }, 1200);

  setTimeout(() => {
    loader.classList.add('done');
    portfolio.classList.add('visible');
  }, 1700);
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

const greetings = [
  'Good day!',
  'Hello there.',
  'Welcome in.',
  'Nice to see you.',
  'Look around.',
  'Stay a while.',
  'Glad you\'re here.',
  'Loading screen means "creativity" in Korean.',
];

let greetingIndex = 0;

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
  showView('index-view');
  jumpTo(0);
  smoothScrollTo(0);
  clearActiveProject();
  showWorkNav();
  if (!fromPop) pushRoute('/');
  cycleGreeting();
}

function showCV(fromPop) {
  showView('cv-view');
  jumpTo(0);
  clearActiveProject();
  showWorkNav();
  if (!fromPop) pushRoute('/cv');
  cycleGreeting();
}

function showDetail(index, fromPop) {
  if (index === PHOTO_PROJECT_INDEX) {
    showPhotography(fromPop);
    return;
  }

  const project = projects[index];
  if (!project) return;

  document.getElementById('detail-title').textContent = project.name;
  document.getElementById('detail-text').textContent = project.detailDescription || project.description;

  const metaRow = document.getElementById('detail-meta');
  metaRow.querySelector('.detail-year').textContent = project.year;
  metaRow.querySelector('.detail-category').textContent = project.category;

  const hero = document.getElementById('detail-hero');
  const heroPlaceholder = hero.querySelector('.placeholder-img');
  const heroImg = hero.querySelector('img');

  if (project.thumbnail) {
    if (heroImg) {
      heroImg.src = project.thumbnail;
      heroImg.alt = project.name;
    } else {
      const img = document.createElement('img');
      img.src = project.thumbnail;
      img.alt = project.name;
      hero.appendChild(img);
    }
    if (heroPlaceholder) heroPlaceholder.style.display = 'none';
  } else {
    if (heroImg) heroImg.remove();
    if (heroPlaceholder) heroPlaceholder.style.display = '';
  }

  const gallery = document.getElementById('detail-gallery');
  gallery.innerHTML = '';
  if (project.gallery && project.gallery.length) {
    project.gallery.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = project.name;
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

  const navProjects = projects.filter((_, i) => i !== PHOTO_PROJECT_INDEX);
  const navIndex = navProjects.indexOf(project);
  const prev = navProjects[(navIndex - 1 + navProjects.length) % navProjects.length];
  const next = navProjects[(navIndex + 1) % navProjects.length];

  document.getElementById('prev-project-text').textContent = prev.name;
  document.getElementById('next-project-text').textContent = next.name;
  document.getElementById('prev-project').onclick = (e) => { e.preventDefault(); showDetail(projects.indexOf(prev)); };
  document.getElementById('next-project').onclick = (e) => { e.preventDefault(); showDetail(projects.indexOf(next)); };

  showView('detail-view');
  jumpTo(0);
  showWorkNav();
  setActiveProject(index);
  document.getElementById('project-list').classList.add('has-scroll-active');
  if (!fromPop) pushRoute('/' + toSlug(project.name));
  cycleGreeting();
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
  activeFilter = 'all';
  document.querySelectorAll('.photo-filter').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
  renderCollections();
  showView('photo-view');
  jumpTo(0);
  showPhotoNav();
  clearActiveCollection();
  observeCollections();
  if (!fromPop) pushRoute('/photography');
  cycleGreeting();
}

function showGallery(collectionIndex, fromPop) {
  const collection = photoCollections[collectionIndex];
  if (!collection) return;

  document.getElementById('gallery-title').textContent = collection.name;

  const grid = document.getElementById('masonry-grid');
  grid.innerHTML = '';

  if (collection.images.length) {
    collection.images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = collection.name;
      grid.appendChild(img);
    });
  } else {
    const msg = document.createElement('p');
    msg.className = 'gallery-empty';
    msg.textContent = 'Images coming soon.';
    grid.appendChild(msg);
  }

  const prevIdx = (collectionIndex - 1 + photoCollections.length) % photoCollections.length;
  const nextIdx = (collectionIndex + 1) % photoCollections.length;

  document.getElementById('prev-collection-text').textContent = photoCollections[prevIdx].name;
  document.getElementById('next-collection-text').textContent = photoCollections[nextIdx].name;
  document.getElementById('prev-collection').onclick = (e) => { e.preventDefault(); showGallery(prevIdx); };
  document.getElementById('next-collection').onclick = (e) => { e.preventDefault(); showGallery(nextIdx); };

  showView('photo-gallery-view');
  jumpTo(0);
  showPhotoNav();
  setActiveCollection(collectionIndex);
  document.getElementById('collection-list').classList.add('has-scroll-active');
  if (!fromPop) pushRoute('/photography/' + toSlug(collection.name));
  cycleGreeting();
}

function renderCollections() {
  const container = document.getElementById('photo-collections');
  container.innerHTML = '';

  photoCollections.forEach((collection, i) => {
    if (activeFilter !== 'all' && getCollectionCategory(collection) !== activeFilter) return;
    const article = document.createElement('article');
    article.className = 'project-card';

    const thumbDiv = document.createElement('div');
    thumbDiv.className = 'thumbnail';

    if (collection.thumbnail) {
      const img = document.createElement('img');
      img.src = collection.thumbnail;
      img.alt = collection.name;
      thumbDiv.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'placeholder-img';
      thumbDiv.appendChild(placeholder);
    }

    const info = document.createElement('div');
    info.className = 'card-info';

    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = collection.name;

    const meta = document.createElement('div');
    meta.className = 'card-meta';

    const category = document.createElement('div');
    category.className = 'card-category';
    category.textContent = collection.subtitle;

    meta.appendChild(category);
    info.appendChild(title);
    info.appendChild(meta);
    article.appendChild(thumbDiv);
    article.appendChild(info);

    article.addEventListener('click', () => showGallery(i));
    article.style.cursor = 'pointer';

    container.appendChild(article);
  });
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

  document.getElementById('photo-index-link').addEventListener('click', (e) => {
    e.preventDefault();
    showIndex();
  });

  document.getElementById('gallery-back-link').addEventListener('click', (e) => {
    e.preventDefault();
    showPhotography();
  });

  document.querySelectorAll('.photo-filter').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      document.querySelectorAll('.photo-filter').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderCollections();
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

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', () => {
  initRandomPhotoThumb();
  initLoader();
  initScrollMotif();
  initSmoothScroll();
  initNavigation();
  initCollectionList();
  initScrollHighlight();
  handleRoute();
});

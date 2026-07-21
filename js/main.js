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
    description: 'A social awareness campaign examining the documented concerns surrounding U.S. Immigration and Customs Enforcement. Each piece tells a story through the eyes of a victim of ICE — invoking empathy to show the reality of what these people are facing.',
    detailDescription: 'A social awareness campaign focused on U.S. Immigration and Customs Enforcement and the documented concerns surrounding its practices. Each post tells a story through the eyes of a victim of ICE. From a child being separated from their family, to an elderly man being beaten up. The visuals are made to invoke emotions of empathy to show the reality of the emotions these people are facing. The campaign spans wild postings, social media content, and a dedicated landing page — all designed to confront viewers with the human cost of detention and drive them toward action.',
    thumbnail: 'assets/Thumbnails/Branden Chi Detention Watch Network Wild Posting.gif',
    thumbnailFallback: 'assets/Thumbnails/Branden Chi Detention Watch Network Wild Postings.jpg',
    brief: 'The U.S. Immigration and Customs Enforcement agency has documented concerns surrounding its practices. This project aims to examine those issues and highlight where critics argue reforms may be necessary — driven by seeing the impact ICE actions have had on people personally.',
    strategy: 'Each post tells a story through the eyes of a victim of ICE. From a child being separated from their family, to an elderly man being beaten up. The visuals are made to invoke emotions of empathy to show the reality of the emotions these people are facing. The campaign spans wild postings, social media posts, and a dedicated landing page.',
    credits: '',
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
  },
  {
    name: 'Liquid Dove',
    category: 'Art Direction | Copy Writing | Packaging',
    year: '2025',
    description: 'What happens when the calm meets the storm? The Liquid Death and Dove collaboration bridges two distinctly different audiences that value the same thing — through edible Dove products inspired by Liquid Death\'s bold flavors and fearless energy.',
    detailDescription: 'What happens when the calm meets the storm? Chaos meets care. The Liquid Death and Dove collaboration shows what happens when two brands with shared values — natural ingredients and a healthier planet — collide from opposite ends of the spectrum. Edible Dove products inspired by Liquid Death\'s bold flavors and fearless energy bridge the gap between two distinctly different audiences that value the same thing.',
    thumbnail: 'assets/Thumbnails/Branden Chi Liquid Dove Rage Bait Ad Mockup.jpg',
    brief: 'How can we make Dove cooler while making Liquid Death more approachable? Despite their unconventional approach, Liquid Death\'s core values already align with Dove\'s commitment to both natural ingredients and a healthier planet. This collab has the opportunity to bridge the gap between two distinctly different audiences that value the same thing.',
    strategy: 'Combine the bold and daring branding of Liquid Death with the trusted and comforting approach of Dove. Chaos meets care through edible Dove products inspired by Liquid Death\'s bold flavors and fearless energy.',
    credits: 'Branden Chi, Matthew Payne, Daniyah Stancil',
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
  },
  {
    name: 'Emporio Armani - Unforgettable Night',
    category: 'Art Direction | Copy Writing',
    year: '2025',
    description: 'Everyone knows that first dates come with nerves. A small boost of comfort can shift the whole night — scent delivers that edge. Fragrance is a subtle extension of you, often the first thing noticed and the last thing forgotten. Have an unforgettable night with Emporio Armani.',
    detailDescription: 'Everyone knows that first dates come with nerves. A small boost of comfort can shift the whole night — scent delivers that edge. Smelling good lifts your confidence and lingers in someone else\'s memory. Fragrance is a subtle extension of you, often the first thing noticed and the last thing forgotten. This campaign for Emporio Armani\'s fragrance line turns that insight into an experience — teasing with social polls, launching through custom cocktail napkins at top NYC date-night restaurants, and sustaining through partnerships with apps like OpenTable to deliver date tips with every booking.',
    thumbnail: 'assets/Thumbnails/Branden Chi Emporio Armani.gif',
    thumbnailFallback: 'assets/Thumbnails/Branden Chi Emporio Armani Table.jpg',
    brief: 'Everyone knows that first dates come with nerves. A small boost of comfort can shift the whole night — scent delivers that edge. Smelling good lifts your confidence and lingers in someone else\'s memory. Fragrance is a subtle extension of you, often the first thing noticed and the last thing forgotten.',
    strategy: 'Tease with online polls asking how important smelling good is on a first date, inviting everyone to weigh in before the campaign drops. Launch by partnering with top date-night restaurants across New York City to slip Emporio Armani date tips onto custom cocktail napkins — guests who collect every tip can scan the final one to unlock a complimentary fragrance voucher. Sustain by partnering with apps like OpenTable to deliver date tips with every booking confirmation and table-ready alert.',
    credits: '',
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
  },
  {
    name: 'Lemaire',
    category: 'Art Direction',
    year: '2025',
    description: 'Lemaire is rooted in sustainability — creating long-lasting pieces meant to be repaired, reworn, and recycled. This social awareness campaign confronts the 92 million tons of textile waste produced globally every year, using striking urban visuals to make the scale of the crisis impossible to ignore.',
    detailDescription: 'Every year, 92 million tons of textile waste is produced globally — as heavy as 300 Empire State Buildings, an entire city skyline. Lemaire, a brand rooted in sustainability and creating long-lasting pieces meant to be repaired, reworn, and recycled, confronts that reality head-on. Through fact-based billboards in urban environments, a surrealist commercial, and guerilla installations wrapping landmark skyscrapers in discarded clothing, the campaign transforms the invisible weight of fast fashion into something monumental and unmissable.',
    thumbnail: 'assets/Thumbnails/Branden Chi Lemaire Street Billboard Mockup.jpg',
    brief: 'Every year around 92 million tons of textile waste is produced globally. That is as heavy as roughly 300 Empire State Buildings — an entire city skyline. Lemaire is a brand rooted in sustainability and creating long-lasting pieces of clothing, meant to be repaired, reworn, and recycled.',
    strategy: 'Turn a skyscraper into a tower of textile waste to visually quantify how badly fast fashion has affected our world. Prime the market with fact-based visual billboards in urban environments, launch a surrealism commercial where a character navigates a world of fast fashion waste, and dress landmark skyscrapers in cities around the world with discarded clothing to symbolize the sheer volume created every year.',
    credits: '',
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
  },
  {
    name: 'Polaroid - Frame the Moment',
    category: 'Art Direction | Copy Writing',
    year: '2025',
    description: 'With the rise of digital, film cameras have become irrelevant — but Polaroids are physical, personal, and immediate. This guerrilla campaign frames iconic landmarks around the world in the iconic Polaroid frame, turning tourist spots into living instant photos.',
    detailDescription: 'This campaign follows an unseen traveler framing iconic landmarks around the world inside Polaroid\'s instantly recognizable borders. Each image is paired with a short handwritten caption, echoing how people naturally annotate instant prints and turning every photo into a postcard from the journey. The series forms a loose travel narrative, grounded in Polaroid\'s core truth: instant photos are physical, personal, and immediate. A subtle handwritten "Polaroid 2025" mark appears on the back of each frame, keeping the work cohesive while preserving its organic, human feel. By framing the world through Polaroid, the campaign positions the brand not as a relic of nostalgia, but as a way to keep real moments with you, anywhere you go.',
    thumbnail: 'assets/Polaroid/Polaroid at the beach.jpg',
    brief: 'Polaroid has been known for their iconic instant nostalgic photos. With the rise of digital, film cameras have become irrelevant in the marketplace today. Polaroids are physical, personal, and immediate — Polaroid keeps the moment with you.',
    strategy: 'Frame iconic tourist spots around the world with the iconic Polaroid photo frame as a guerrilla installation. Each frame carries a short handwritten caption, mimicking how people naturally jot notes on instant prints, doubling as postcard-style messages from the journey. The frames tell a loose travel narrative and showcase Polaroid\'s role in documenting real moments, anywhere in the world.',
    credits: '',
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
  showView('index-view');
  jumpTo(0);
  smoothScrollTo(0);
  clearActiveProject();
  showWorkNav();
  if (!fromPop) pushRoute('/');
  cycleGreeting();
}

function showCV(fromPop) {
  updateMeta({
    title: 'CV — Branden Chi',
    description: 'Curriculum vitae for Branden Chi — Art Director based in New York City with experience in art direction, copy writing, packaging design, and photography.',
    canonical: '/cv',
  });
  exitAbout();
  exitPhoto();
  showView('cv-view');
  jumpTo(0);
  clearActiveProject();
  showWorkNav();
  if (!fromPop) pushRoute('/cv');
  cycleGreeting();
}

function showDetail(index, fromPop) {
  exitAbout();
  exitPhoto();
  if (index === PHOTO_PROJECT_INDEX) {
    showPhotography(fromPop);
    return;
  }

  const project = projects[index];
  if (!project) return;

  updateMeta({
    title: project.name + ' — Branden Chi',
    description: project.description,
    canonical: '/' + toSlug(project.name),
    image: project.thumbnailFallback || project.thumbnail,
  });

  document.getElementById('detail-title').textContent = project.name;

  const metaRow = document.getElementById('detail-meta');
  metaRow.querySelector('.detail-year').textContent = project.year;
  metaRow.querySelector('.detail-category').textContent = project.category;

  const hero = document.getElementById('detail-hero');
  const heroPlaceholder = hero.querySelector('.placeholder-img');
  const heroImg = hero.querySelector('img');

  if (project.thumbnail) {
    const setThumb = (el) => {
      const heroSrc = project.thumbnailFallback || project.thumbnail;
      el.src = heroSrc;
      el.alt = project.name;
    };
    if (heroImg) {
      setThumb(heroImg);
    } else {
      const img = document.createElement('img');
      setThumb(img);
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
    project.gallery.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = (project.galleryAlts && project.galleryAlts[i]) || project.name;
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

  document.getElementById('accordion-brief').textContent = project.brief || 'Coming soon.';
  document.getElementById('accordion-strategy').textContent = project.strategy || 'Coming soon.';
  document.getElementById('accordion-credits').textContent = project.credits || 'Coming soon.';
  document.querySelectorAll('.accordion').forEach((a) => a.classList.remove('open'));

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

// ==================== ABOUT ====================

function showAbout(fromPop) {
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

let _lbIdx = -1;
let _lbCurr = 0;
let _lbScrollAcc = 0;
let _lbWheelFn = null;
let _lbKeyFn = null;

function openLightbox(collectionIdx) {
  const collection = photoCollections[collectionIdx];
  if (!collection) return;

  _lbIdx = collectionIdx;
  _lbCurr = 0;
  _lbScrollAcc = 0;

  updateMeta({
    title: collection.name + ' — Branden Chi Photography',
    description: 'Photography collection by Branden Chi: ' + collection.subtitle + '.',
    canonical: '/photography/' + toSlug(collection.name),
    image: collection.thumbnail,
  });

  const lightbox = document.getElementById('photo-lightbox');
  const frame = document.getElementById('lightbox-frame');
  frame.innerHTML = '';

  const stage = document.createElement('div');
  stage.className = 'lightbox-stage';
  stage.id = 'lightbox-stage';

  const images = collection.images.length ? collection.images : [];
  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'lightbox-slide';
    slide.dataset.index = i;
    const img = document.createElement('img');
    img.src = src;
    img.alt = collection.name + ' — ' + (i + 1);
    img.loading = i < 3 ? 'eager' : 'lazy';
    img.draggable = false;
    slide.appendChild(img);
    stage.appendChild(slide);
  });

  const counter = document.createElement('div');
  counter.className = 'lightbox-counter';
  counter.id = 'lightbox-counter';
  counter.textContent = images.length ? '1 / ' + images.length : '';

  const nameTag = document.createElement('div');
  nameTag.className = 'lightbox-name';
  nameTag.textContent = collection.name;

  frame.appendChild(stage);
  frame.appendChild(counter);
  frame.appendChild(nameTag);

  // Set initial positions without transition (instant)
  const slides = stage.querySelectorAll('.lightbox-slide');
  slides.forEach((s) => { s.style.transition = 'none'; });
  updateLightboxPositions();
  // Re-enable transitions after next paint
  requestAnimationFrame(() => {
    slides.forEach((s) => { s.style.transition = ''; });
  });

  lightbox.removeAttribute('aria-hidden');
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';

  _lbWheelFn = (e) => {
    e.preventDefault();
    _lbScrollAcc += e.deltaY;
    if (_lbScrollAcc > 55) { _lbScrollAcc = 0; advanceLightbox(1); }
    else if (_lbScrollAcc < -55) { _lbScrollAcc = 0; advanceLightbox(-1); }
  };
  lightbox.addEventListener('wheel', _lbWheelFn, { passive: false });

  _lbKeyFn = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') advanceLightbox(1);
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') advanceLightbox(-1);
  };
  window.addEventListener('keydown', _lbKeyFn);

  pushRoute('/photography/' + toSlug(collection.name));
}

function updateLightboxPositions() {
  const slides = document.querySelectorAll('#lightbox-stage .lightbox-slide');
  const N = slides.length;
  if (!N) return;

  slides.forEach((slide, i) => {
    let offset = i - _lbCurr;
    if (offset > N / 2) offset -= N;
    if (offset < -N / 2) offset += N;

    const abs = Math.abs(offset);
    const dir = offset >= 0 ? 1 : -1;
    let ty, tz, scale, opacity, zIndex;

    if (abs === 0) {
      ty = 0; tz = 0; scale = 1; opacity = 1; zIndex = 10;
    } else if (abs === 1) {
      ty = dir * 82; tz = -80; scale = 0.78; opacity = 0.55; zIndex = 5;
    } else if (abs === 2) {
      ty = dir * 150; tz = -160; scale = 0.62; opacity = 0.2; zIndex = 2;
    } else {
      ty = dir * 200; tz = -240; scale = 0.5; opacity = 0; zIndex = 0;
    }

    slide.style.transform = `translateY(${ty}%) translateZ(${tz}px) scale(${scale})`;
    slide.style.opacity = opacity;
    slide.style.zIndex = zIndex;
  });
}

function closeLightbox() {
  const lightbox = document.getElementById('photo-lightbox');
  if (!lightbox.classList.contains('open')) return;
  if (_lbWheelFn) { lightbox.removeEventListener('wheel', _lbWheelFn); _lbWheelFn = null; }
  if (_lbKeyFn) { window.removeEventListener('keydown', _lbKeyFn); _lbKeyFn = null; }
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
  _lbCurr = (_lbCurr + dir + N) % N;
  updateLightboxPositions();
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

function renderCollections() {
  const container = document.getElementById('photo-collections');
  container.innerHTML = '';

  const visible = photoCollections.filter((c) => activeFilter === 'all' || getCollectionCategory(c) === activeFilter);

  if (!visible.length) {
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

  const total = visible.length;
  const step = total <= 1 ? 0 : 360 / total;

  visible.forEach((collection, i) => {
    const finalAngle = i * step;

    const pivot = document.createElement('div');
    pivot.className = 'carousel-pivot';
    // Start stacked at center, animate to fan position
    pivot.style.transform = 'rotateY(0deg)';
    pivot.style.opacity = '0';

    const card = document.createElement('div');
    card.className = 'carousel-card';

    if (collection.thumbnail) {
      const img = document.createElement('img');
      img.src = collection.thumbnail;
      img.alt = collection.name + ' — ' + collection.subtitle;
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

    const originalIdx = photoCollections.indexOf(collection);
    pivot.addEventListener('click', () => openLightbox(originalIdx));
    scene.appendChild(pivot);

    // Stagger fan-out: first card appears, then others spread counter-clockwise
    const delay = 200 + i * 120;
    setTimeout(() => {
      pivot.style.transition = 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease';
      pivot.style.opacity = '1';
      pivot.style.transform = `rotateY(${finalAngle}deg)`;
    }, delay);
  });

  container.appendChild(stage);
  initCarouselParallax(stage, scene);
}

let _parallaxCleanup = null;

function initCarouselParallax(stage, scene) {
  if (_parallaxCleanup) { _parallaxCleanup(); _parallaxCleanup = null; }

  const bY = -30;
  const bX = -18;
  let tX = 0, tY = 0, cX = 0, cY = 0, running = false;

  scene.style.transform = `rotateY(${bY}deg) rotateX(${bX}deg)`;

  function loop() {
    cX += (tX - cX) * 0.07;
    cY += (tY - cY) * 0.07;
    scene.style.transform = `rotateY(${bY + cX}deg) rotateX(${bX + cY}deg)`;
    if (Math.abs(tX - cX) > 0.05 || Math.abs(tY - cY) > 0.05) {
      requestAnimationFrame(loop);
    } else {
      running = false;
    }
  }

  const fn = (e) => {
    if (!document.body.classList.contains('photo-active') || _lbIdx !== -1) return;
    tX = (e.clientX / window.innerWidth * 2 - 1) * 16;
    tY = (e.clientY / window.innerHeight * 2 - 1) * -10;
    if (!running) { running = true; requestAnimationFrame(loop); }
  };
  document.addEventListener('mousemove', fn);
  _parallaxCleanup = () => document.removeEventListener('mousemove', fn);
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

// ==================== HAMBURGER ====================

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');

  function closeMenu() {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
  });

  document.getElementById('mobile-cv-link').addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    showCV();
  });

  document.getElementById('mobile-about-link').addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    showAbout();
  });

  menu.querySelectorAll('a[href^="http"], a[href^="mailto"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
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

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', () => {
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

  handleRoute();
});

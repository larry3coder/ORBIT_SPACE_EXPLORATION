const PLANETS = {
  mercury: {
    name: 'Mercury', color: '#A0A0B0', size: 5,
    desc: 'The smallest and fastest planet, Mercury completes a full orbit around the Sun in just 88 Earth days. Without an atmosphere, its surface swings between −180 °C and 430 °C.',
    distance: '57.9 million km', day: '59 Earth days', year: '88 Earth days', moons: '0',
    img: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia10/pia10398/PIA10398.jpg?w=3000&h=2025&fit=clip&crop=faces%2Cfocalpoint',
    link: 'https://solarsystem.nasa.gov/planets/mercury/overview/'
  },
  venus: {
    name: 'Venus', color: '#DEB887', size: 9,
    desc: 'Often called Earth\'s twin due to its similar size, Venus is actually the hottest planet. Its thick CO₂ atmosphere creates a greenhouse effect that keeps the surface at ~465 °C.',
    distance: '108.2 million km', day: '243 Earth days', year: '225 Earth days', moons: '0',
    img: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:1,cw:2293,ch:1290,q:80,w:2293/RifjtkFLBEFgzkZqWEh69P.jpg',
    link: 'https://solarsystem.nasa.gov/planets/venus/overview/'
  },
  earth: {
    name: 'Earth', color: '#4a90d9', size: 10,
    desc: 'Our home — the only known world to harbour life. Liquid water, a breathable atmosphere, and a protective magnetic field make Earth uniquely suited for complex organisms.',
    distance: '149.6 million km', day: '24 hours', year: '365.25 days', moons: '1',
    img: 'https://placehold.co/1200x600/e2e8f0/1e293b?text=Photograph_of_Earth_taken_from_space_showing_a_ful',
    link: 'https://solarsystem.nasa.gov/planets/earth/overview/'
  },
  mars: {
    name: 'Mars', color: '#CD5C5C', size: 7,
    desc: 'The Red Planet hosts the tallest volcano (Olympus Mons, 21 km) and longest canyon (Valles Marineris) in the solar system. NASA\'s Perseverance rover actively explores Jezero Crater.',
    distance: '227.9 million km', day: '24 h 37 min', year: '687 Earth days', moons: '2',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    link: 'https://solarsystem.nasa.gov/planets/mars/overview/'
  },
  jupiter: {
    name: 'Jupiter', color: '#C88B3A', size: 24,
    desc: 'The largest planet, a gas giant whose Great Red Spot — a storm larger than Earth — has persisted for centuries. Jupiter has 95 known moons, including Ganymede, larger than Mercury.',
    distance: '778.5 million km', day: '9 h 56 min', year: '11.9 Earth years', moons: '95',
    img: 'https://cdn.esahubble.org/archives/images/screen/heic1410a.jpg',
    link: 'https://solarsystem.nasa.gov/planets/jupiter/overview/'
  },
  saturn: {
    name: 'Saturn', color: '#E8D5A0', size: 20,
    desc: 'Famous for its spectacular ring system of ice and rock. Saturn is the least dense planet — it would float on water. Its moon Titan has a thick nitrogen atmosphere and methane lakes.',
    distance: '1.43 billion km', day: '10 h 42 min', year: '29.5 Earth years', moons: '146',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
    link: 'https://solarsystem.nasa.gov/planets/saturn/overview/'
  },
  uranus: {
    name: 'Uranus', color: '#87CEEB', size: 14,
    desc: 'Uranus rotates on its side with an axial tilt of 98°. An "ice giant" with a blue-green tint from methane in its atmosphere, its extreme tilt means each pole experiences 42 years of sunlight.',
    distance: '2.87 billion km', day: '17 h 14 min', year: '84 Earth years', moons: '28',
    img: 'https://placehold.co/1200x600/e2e8f0/1e293b?text=photograph_or_artistic_image_of_the_planet_Uranus_',
    link: 'https://solarsystem.nasa.gov/planets/uranus/overview/'
  },
  neptune: {
    name: 'Neptune', color: '#1E6ECD', size: 13,
    desc: 'The farthest planet, Neptune has winds up to 2,100 km/h — the strongest in the solar system. Despite its frigid distance, it radiates more heat than it receives from the Sun.',
    distance: '4.49 billion km', day: '16 h 6 min', year: '165 Earth years', moons: '16',
    img: 'https://placehold.co/1200x600/e2e8f0/1e293b?text=Image_of_the_planet_Neptune_taken_by_Voyager_2_spa',
    link: 'https://solarsystem.nasa.gov/planets/neptune/overview/'
  }
};

// Solar system orbital
const ORBITAL = [
  { key:'mercury', orbit:70,  speed:0.048 },
  { key:'venus',   orbit:100, speed:0.035 },
  { key:'earth',   orbit:132, speed:0.029 },
  { key:'mars',    orbit:168, speed:0.024 },
  { key:'jupiter', orbit:215, speed:0.013 },
  { key:'saturn',  orbit:265, speed:0.009 },
  { key:'uranus',  orbit:305, speed:0.006 },
  { key:'neptune', orbit:345, speed:0.004 }
];

// ============================================================
// UTILITY
// ============================================================
function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;  
  const hh = document.getElementById('header')?.offsetHeight || 0;
  const top = el.getBoundingClientRect().top + window.scrollY - hh;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ============================================================
// HEADER – scroll effect + active nav
// ============================================================
function initHeader() {
  const header = document.getElementById('header');
  const links  = document.querySelectorAll('.nav-link[data-section]');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);

    // Active link
    const sections = [...document.querySelectorAll('section[id]')];
    const mid = window.scrollY + window.innerHeight * 0.4;
    sections.forEach(s => {
      const link = document.querySelector(`.nav-link[data-section="${s.id}"]`);
      if (!link) return;
      const top = s.offsetTop, bot = top + s.offsetHeight;
      link.classList.toggle('active', mid >= top && mid < bot);
    });
  }, { passive: true });
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
}
function closeMobile() {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburger');
  if (menu) menu.classList.remove('open');
  if (btn)  btn.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeMobile = closeMobile;
window.scrollTo    = scrollTo; // override (also keep native via alias)

// ============================================================
// HERO CANVAS – stars
// ============================================================
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], mouse = { x: 0, y: 0 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    generateStars();
  }

  function generateStars() {
    stars = [];
    for (let i = 0; i < 280; i++) {
      stars.push({
        x: Math.random(), y: Math.random(),
        r: Math.random() * 1.4 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.004 + 0.001,
        phase: Math.random() * Math.PI * 2,
        layer: Math.floor(Math.random() * 3)
      });
    }
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.012;

    const mx = (mouse.x / W - 0.5);
    const my = (mouse.y / H - 0.5);

    stars.forEach(s => {
      const parallax = (s.layer + 1) * 0.5;
      const px = (s.x * W) + mx * 18 * parallax;
      const py = (s.y * H) + my * 12 * parallax;
      const alpha = s.a * (0.65 + 0.35 * Math.sin(t * s.speed * 60 + s.phase));

      ctx.beginPath();
      ctx.arc(px, py, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${180 + s.layer*25},${200 + s.layer*20},255,${alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  canvas.closest('section').addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });

  resize();
  draw();
}

// ============================================================
// SOLAR SYSTEM CANVAS
// ============================================================
let solarAnim, solarAngles = {}, selectedPlanet = null;

function initSolarSystem() {
  const canvas = document.getElementById('solarCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Init angles
  ORBITAL.forEach(p => { solarAngles[p.key] = Math.random() * Math.PI * 2; });

  function getSize() {
    const w = canvas.offsetWidth;
    const h = w < 600 ? Math.round(w * 1.0) : Math.min(580, Math.round(w * 0.55));
    canvas.width  = w;
    canvas.height = h;
    canvas.style.height = h + 'px';
    return { W: w, H: h };
  }

  function draw() {
    const { W, H } = getSize();
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;
    const scale = Math.min(W, H) / 760;

    // Background
    const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.6);
    bg.addColorStop(0, '#060e22');
    bg.addColorStop(1, '#030710');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Ambient stars
    for (let i = 0; i < 80; i++) {
      const sx = (i * 137.508) % W;
      const sy = (i * 97.3) % H;
      ctx.beginPath();
      ctx.arc(sx, sy, 0.6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(200,210,255,0.35)';
      ctx.fill();
    }

    // Sun
    const sunR = 28 * scale;
    const sunGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, sunR * 4);
    sunGlow.addColorStop(0,   'rgba(255,210,80,0.25)');
    sunGlow.addColorStop(0.5, 'rgba(255,150,30,0.06)');
    sunGlow.addColorStop(1,   'transparent');
    ctx.beginPath();
    ctx.arc(cx, cy, sunR * 4, 0, Math.PI * 2);
    ctx.fillStyle = sunGlow;
    ctx.fill();

    const sunG = ctx.createRadialGradient(cx - sunR * 0.3, cy - sunR * 0.3, sunR * 0.1, cx, cy, sunR);
    sunG.addColorStop(0, '#fff7a0');
    sunG.addColorStop(0.4, '#ffcc00');
    sunG.addColorStop(1, '#ff6600');
    ctx.beginPath();
    ctx.arc(cx, cy, sunR, 0, Math.PI * 2);
    ctx.fillStyle = sunG;
    ctx.fill();

    // Label SUN
    ctx.font = `${11 * scale}px 'Space Mono', monospace`;
    ctx.fillStyle = 'rgba(255,220,100,0.6)';
    ctx.textAlign = 'center';
    ctx.fillText('SUN', cx, cy + sunR + 16 * scale);

    // Draw each planet
    ORBITAL.forEach(p => {
      solarAngles[p.key] = (solarAngles[p.key] + p.speed * 0.016) % (Math.PI * 2);
      const orb   = p.orbit * scale;
      const pdata = PLANETS[p.key];
      const r     = pdata.size * scale;
      const px    = cx + Math.cos(solarAngles[p.key]) * orb;
      const py    = cy + Math.sin(solarAngles[p.key]) * orb;

      // Orbit path
      ctx.beginPath();
      ctx.arc(cx, cy, orb, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(140,160,200,0.12)';
      ctx.lineWidth   = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Planet glow
      if (selectedPlanet === p.key) {
        const gl = ctx.createRadialGradient(px, py, 0, px, py, r * 3.5);
        gl.addColorStop(0,   pdata.color + '55');
        gl.addColorStop(1,   'transparent');
        ctx.beginPath();
        ctx.arc(px, py, r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = gl;
        ctx.fill();
      }

      // Saturn ring
      if (p.key === 'saturn') {
        ctx.save();
        ctx.translate(px, py);
        ctx.scale(1, 0.32);
        ctx.beginPath();
        ctx.arc(0, 0, r * 2.4, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(232,213,160,0.45)';
        ctx.lineWidth = r * 0.55;
        ctx.stroke();
        ctx.restore();
      }

      // Planet body
      const pg = ctx.createRadialGradient(px - r * 0.3, py - r * 0.3, r * 0.05, px, py, r);
      pg.addColorStop(0, lighten(pdata.color, 60));
      pg.addColorStop(0.6, pdata.color);
      pg.addColorStop(1, darken(pdata.color, 60));
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fillStyle = pg;
      ctx.fill();

      // Shadow
      const sh = ctx.createRadialGradient(px + r * 0.45, py + r * 0.35, 0, px + r * 0.35, py + r * 0.3, r * 0.9);
      sh.addColorStop(0, 'rgba(0,0,15,0.7)');
      sh.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fillStyle = sh;
      ctx.fill();

      // Label
      ctx.font = `${Math.max(9, 10 * scale)}px 'Space Grotesk', sans-serif`;
      ctx.fillStyle = selectedPlanet === p.key
        ? 'rgba(140,200,255,0.95)'
        : 'rgba(180,190,210,0.6)';
      ctx.textAlign = 'center';
      ctx.fillText(pdata.name, px, py + r + 14 * scale);
    });

    solarAnim = requestAnimationFrame(draw);
  }

  // Click detection
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx   = (e.clientX - rect.left) * (canvas.width  / rect.width);
    const my   = (e.clientY - rect.top)  * (canvas.height / rect.height);
    const W    = canvas.width, H = canvas.height;
    const cx   = W / 2,       cy = H / 2;
    const scale = Math.min(W, H) / 760;

    let hit = null;
    ORBITAL.forEach(p => {
      const orb = p.orbit * scale;
      const pdata = PLANETS[p.key];
      const r   = (pdata.size + 8) * scale;
      const px  = cx + Math.cos(solarAngles[p.key]) * orb;
      const py  = cy + Math.sin(solarAngles[p.key]) * orb;
      const d   = Math.hypot(mx - px, my - py);
      if (d <= r) hit = p.key;
    });

    if (hit) { selectedPlanet = hit; openPlanetPanel(hit); }
    else if (selectedPlanet) { selectedPlanet = null; }
  });

  // Hover cursor
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (canvas.width  / rect.width);
    const my = (e.clientY - rect.top)  * (canvas.height / rect.height);
    const W = canvas.width, H = canvas.height;
    const cx = W/2, cy = H/2;
    const scale = Math.min(W,H)/760;
    let over = false;
    ORBITAL.forEach(p => {
      const orb = p.orbit * scale;
      const r   = (PLANETS[p.key].size + 8) * scale;
      const px  = cx + Math.cos(solarAngles[p.key]) * orb;
      const py  = cy + Math.sin(solarAngles[p.key]) * orb;
      if (Math.hypot(mx-px,my-py) <= r) over = true;
    });
    canvas.style.cursor = over ? 'pointer' : 'default';
  });

  window.addEventListener('resize', () => { getSize(); }, { passive: true });
  draw();
}

function openPlanetPanel(key) {
  const p = PLANETS[key];
  if (!p) return;
  document.getElementById('panelImg').src      = p.img;
  document.getElementById('panelImg').alt      = p.name;
  document.getElementById('panelName').textContent = p.name;
  document.getElementById('panelDesc').textContent = p.desc;
  document.getElementById('pDist').textContent  = p.distance;
  document.getElementById('pDay').textContent   = p.day;
  document.getElementById('pYear').textContent  = p.year;
  document.getElementById('pMoons').textContent = p.moons;
  document.getElementById('panelLink').href     = p.link;
  document.getElementById('planetPanel').classList.add('open');

  document.querySelectorAll('.psel-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.planet === key);
  });
}

function closePlanetPanel() {
  document.getElementById('planetPanel').classList.remove('open');
  selectedPlanet = null;
  document.querySelectorAll('.psel-btn').forEach(b => b.classList.remove('active'));
}
window.closePlanetPanel = closePlanetPanel;

// Planet selector buttons
function initPlanetSelector() {
  document.querySelectorAll('.psel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.planet;
      selectedPlanet = key;
      openPlanetPanel(key);
    });
  });
}

// Color helpers
function lighten(hex, amount) {
  let r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  r = Math.min(255, r+amount); g = Math.min(255, g+amount); b = Math.min(255, b+amount);
  return `rgb(${r},${g},${b})`;
}
function darken(hex, amount) {
  let r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  r = Math.max(0, r-amount); g = Math.max(0, g-amount); b = Math.max(0, b-amount);
  return `rgb(${r},${g},${b})`;
}

// ============================================================
// MISSIONS HORIZONTAL SCROLL
// ============================================================
let missionIndex = 0;
const MISSION_COUNT = 5;

function initMissions() {
  const dots = document.getElementById('mDots');
  if (!dots) return;
  for (let i = 0; i < MISSION_COUNT; i++) {
    const d = document.createElement('div');
    d.className = 'mdot' + (i === 0 ? ' active' : '');
    dots.appendChild(d);
  }
  updateMissions();

  // Drag/swipe
  const track = document.getElementById('missionsTrack');
  if (!track) return;
  let startX = 0, dragging = false;
  track.addEventListener('mousedown', e => { startX = e.clientX; dragging = true; });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    if (e.clientX - startX > 60) { missionScroll(-1); dragging = false; }
    else if (startX - e.clientX > 60) { missionScroll(1); dragging = false; }
  });
  window.addEventListener('mouseup', () => { dragging = false; });

  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) missionScroll(dx > 0 ? -1 : 1);
  }, { passive: true });
}

function missionScroll(dir) {
  missionIndex = Math.max(0, Math.min(MISSION_COUNT - 1, missionIndex + dir));
  updateMissions();
}
window.missionScroll = missionScroll;

function updateMissions() {
  const track = document.getElementById('missionsTrack');
  if (!track) return;
  const card = track.querySelector('.mission-card');
  const cardW = card ? (card.offsetWidth + 24) : 404;
  track.style.transform = `translateX(-${missionIndex * cardW}px)`;
  document.querySelectorAll('.mdot').forEach((d,i) => d.classList.toggle('active', i === missionIndex));
}

// ============================================================
// INTERACTIVE STARFIELD CANVAS
// ============================================================
const NAMED_STARS = [
  { name: 'Sirius',    info: 'Brightest star in the night sky — 8.6 light-years away.' },
  { name: 'Proxima Centauri', info: 'Nearest star to our Sun — 4.24 light-years away.' },
  { name: 'Betelgeuse',info: 'A red supergiant and future supernova candidate in Orion.' },
  { name: 'Vega',      info: 'A bright star in Lyra, 25 light-years from Earth.' },
  { name: 'Polaris',   info: 'The North Star, used for celestial navigation for millennia.' },
  { name: 'Rigel',     info: 'A blue-white supergiant — one of the most luminous stars known.' },
  { name: 'Canopus',   info: 'Second-brightest star; a yellow-white supergiant in Carina.' },
  { name: 'Aldebaran', info: 'A giant orange star — the eye of Taurus, 65 light-years away.' }
];

function initStarfield() {
  const canvas = document.getElementById('starfieldCanvas');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  const tip    = document.getElementById('starTip');
  let W, H, stars = [], mouse = { x: -999, y: -999 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    makeStars();
  }

  function makeStars() {
    stars = [];
    for (let i = 0; i < 1800; i++) {
      const named = i < NAMED_STARS.length;
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: named ? 2.2 : (Math.random() * 1.5 + 0.3),
        a: named ? 0.95 : (Math.random() * 0.7 + 0.2),
        phase: Math.random() * Math.PI * 2,
        freq:  Math.random() * 0.015 + 0.005,
        layer: Math.floor(Math.random() * 3),
        named, info: named ? NAMED_STARS[i] : null
      });
    }
  }

  let t = 0, hoveredStar = null;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.012;

    const mx = (mouse.x / W - 0.5);
    const my = (mouse.y / H - 0.5);

    stars.forEach((s, i) => {
      const parallax = (s.layer + 1) * 0.6;
      const px = s.x + mx * 22 * parallax;
      const py = s.y + my * 14 * parallax;
      const alpha = s.a * (0.6 + 0.4 * Math.sin(t * s.freq * 80 + s.phase));
      const isHovered = hoveredStar === i;

      if (s.named || isHovered) {
        ctx.beginPath();
        ctx.arc(px, py, s.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? 'rgba(140,200,255,0.2)'
          : 'rgba(140,200,255,0.08)';
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(px, py, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.named
        ? `rgba(160,220,255,${alpha})`
        : `rgba(${190+s.layer*20},${200+s.layer*15},255,${alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;

    // Check hover on named stars
    const mx2 = (mouse.x / W - 0.5);
    const my2 = (mouse.y / H - 0.5);
    hoveredStar = null;
    for (let i = 0; i < Math.min(NAMED_STARS.length, stars.length); i++) {
      const s = stars[i];
      const parallax = (s.layer + 1) * 0.6;
      const px = s.x + mx2 * 22 * parallax;
      const py = s.y + my2 * 14 * parallax;
      if (Math.hypot(mouse.x - px, mouse.y - py) < 14) {
        hoveredStar = i;
        canvas.style.cursor = 'pointer';
        tip.textContent  = `${s.info.name} — ${s.info.info}`;
        tip.style.left   = `${e.clientX - rect.left + 14}px`;
        tip.style.top    = `${e.clientY - rect.top  - 10}px`;
        tip.classList.add('show');
        return;
      }
    }
    canvas.style.cursor = 'default';
    tip.classList.remove('show');
  });

  canvas.addEventListener('mouseleave', () => { tip.classList.remove('show'); hoveredStar = null; });

  window.addEventListener('resize', resize, { passive: true });
  resize();
  draw();
}

// ============================================================
// SCROLL REVEAL (Intersection Observer)
// ============================================================
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ============================================================
// GSAP SCROLL ANIMATIONS
// ============================================================
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Section headers
  gsap.utils.toArray('.section-head').forEach(el => {
    gsap.from(el.querySelectorAll('.section-label, .section-title, .section-sub'), {
      scrollTrigger: { trigger: el, start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out'
    });
  });

  // Universe grid
  gsap.utils.toArray('.ugrid-item').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 60, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out'
    });
  });

  // Mission cards stagger
  gsap.from('.mission-card', {
    scrollTrigger: { trigger: '.missions-section', start: 'top 75%' },
    x: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out'
  });

  // Discovery cards stagger
  gsap.utils.toArray('.disc-card').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 50, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out'
    });
  });

  // CTA parallax
  ScrollTrigger.create({
    trigger: '.cta-section',
    start: 'top bottom', end: 'bottom top',
    onUpdate: (self) => {
      const el = document.querySelector('.cta-bg-img');
      if (el) el.style.transform = `translateY(${self.progress * 60 - 30}px) scale(1.15)`;
    }
  });

  // Hero parallax on scroll
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top', end: 'bottom top',
    onUpdate: (self) => {
      const planet = document.getElementById('heroPlanet');
      const content = document.getElementById('heroContent');
      if (planet)  planet.style.transform  = `translateY(calc(-50% + ${self.progress * 80}px))`;
      if (content) content.style.transform = `translateY(${self.progress * 60}px)`;
      if (content) content.style.opacity   = 1 - self.progress * 1.5;
    }
  });

  // Starfield text
  gsap.from('.sf-title, .sf-sub', {
    scrollTrigger: { trigger: '.starfield-section', start: 'top 70%' },
    y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out'
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initHeroCanvas();
  initSolarSystem();
  initPlanetSelector();
  initMissions();
  initStarfield();
  initReveal();
  initGSAP();
});
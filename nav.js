(function() {
  const BASE = '/ucurtains';

  const NAV_CSS = `<style id="navStyles">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Nunito:wght@400;500;600;700&display=swap');
:root{--navy:#1a4a5e;--orange:#e07b3c;--gold:#f0c89a;--cream:#fdf8f2;--warm-white:#fff;--border:#ede9e2;--mid:#5a6a72;--light:#8a9ea8;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Nunito',sans-serif;color:#2d2d2d;background:#fff;}
[id]{scroll-margin-top:90px;}
#mainNav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(255,255,255,0.97);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);padding:0 5vw;display:flex;align-items:center;justify-content:space-between;height:70px;}
.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;}
.nav-logo img{height:44px;width:auto;display:block;}
.nav-logo-text{display:flex;flex-direction:column;}
.nav-logo-name{font-family:'Playfair Display',serif;font-size:1.2rem;color:var(--navy);font-weight:700;line-height:1;}
.nav-logo-sub{font-size:0.6rem;color:var(--orange);letter-spacing:0.12em;text-transform:uppercase;}
#navLinks{display:flex;gap:0;list-style:none;height:70px;margin:0;padding:0;}
.nav-item{position:relative;display:flex;align-items:center;}
.nav-item>a{padding:0 0.9rem;text-decoration:none;color:var(--mid);font-size:0.82rem;font-weight:600;letter-spacing:0.04em;transition:color 0.2s;white-space:nowrap;height:70px;display:flex;align-items:center;gap:0.25rem;}
.nav-item>a:hover,.nav-item>a.active{color:var(--navy);}
.nav-arrow{font-size:0.55rem;transition:transform 0.2s;display:inline-block;}
.nav-item:hover>.nav-arrow,.nav-item:hover>a .nav-arrow{transform:rotate(180deg);}
.nav-dropdown{position:absolute;top:70px;left:0;background:white;border:1px solid var(--border);border-top:3px solid var(--orange);min-width:200px;opacity:0;visibility:hidden;transform:translateY(-6px);transition:all 0.2s;z-index:2000;box-shadow:0 8px 24px rgba(0,0,0,0.09);border-radius:0 0 10px 10px;}
.nav-item:hover .nav-dropdown{opacity:1;visibility:visible;transform:translateY(0);}
.nav-dropdown a{display:block;padding:0.65rem 1.2rem;font-size:0.82rem;color:var(--mid);text-decoration:none;border-bottom:1px solid var(--border);transition:all 0.15s;white-space:nowrap;font-weight:500;}
.nav-dropdown a:last-child{border-bottom:none;}
.nav-dropdown a:hover{background:var(--cream);color:var(--navy);padding-left:1.5rem;}
.nav-dropdown-right{left:auto;right:0;}
.nav-cta-wrap{margin-left:0.75rem;flex-shrink:0;}
.nav-cta{background:var(--orange);color:white!important;padding:0.5rem 1.2rem;border-radius:20px;font-size:0.82rem;font-weight:700;text-decoration:none;transition:background 0.2s;white-space:nowrap;display:inline-block;}
.nav-cta:hover{background:#c96a2a!important;}
#navHamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;background:none;border:none;}
#navHamburger span{width:22px;height:2px;background:var(--navy);display:block;border-radius:2px;}
#mobileNav{display:none;position:fixed;top:70px;left:0;right:0;background:#fff;border-bottom:1px solid var(--border);padding:0.5rem 5vw 1rem;z-index:999;flex-direction:column;max-height:calc(100vh - 70px);overflow-y:auto;}
#mobileNav.open{display:flex;}
.mob-section{border-bottom:1px solid var(--border);}
.mob-title{font-size:0.9rem;font-weight:600;color:var(--navy);padding:0.8rem 0;display:flex;justify-content:space-between;align-items:center;cursor:pointer;user-select:none;}
.mob-title .mob-arr{transition:transform 0.2s;font-size:0.7rem;color:var(--light);}
.mob-title.open .mob-arr{transform:rotate(180deg);}
.mob-sub{display:none;flex-direction:column;padding-bottom:0.5rem;}
.mob-sub.open{display:flex;}
.mob-sub a{font-size:0.85rem;color:var(--mid);text-decoration:none;padding:0.4rem 0 0.4rem 1rem;border-bottom:1px solid var(--border);font-weight:500;}
.mob-sub a:last-child{border-bottom:none;}
.mob-direct{border-bottom:1px solid var(--border);}
.mob-direct a{font-size:0.9rem;color:var(--navy);text-decoration:none;padding:0.8rem 0;display:block;font-weight:600;}
@media(max-width:1100px){.nav-item>a{padding:0 0.6rem;font-size:0.78rem;}}
@media(max-width:900px){#navLinks,#navCta{display:none;}#navHamburger{display:flex;}}
</style>`;

  const NAV_HTML = `
<nav id="mainNav">
  <a href="${BASE}/" class="nav-logo">
    <img src="${BASE}/logo.png" alt="U Curtains" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="nav-logo-text" style="display:none;">
      <span class="nav-logo-name">U Curtains</span>
      <span class="nav-logo-sub">Design Your Curtain</span>
    </div>
  </a>
  <ul id="navLinks">
    <li class="nav-item">
      <a href="${BASE}/curtains.html">Curtains <span class="nav-arrow">▾</span></a>
      <div class="nav-dropdown">
        <a href="${BASE}/curtains.html">Custom-Made Curtains</a>
        <a href="${BASE}/curtains.html#sfold">S-Fold</a>
        <a href="${BASE}/curtains.html#double-pinch">Double Pinch Pleat</a>
        <a href="${BASE}/curtains.html#triple-pinch">Triple Pinch Pleat</a>
        <a href="${BASE}/curtains.html#box-pleat">Box Pleat</a>
        <a href="${BASE}/curtains.html#eyelet">Eyelet</a>
      </div>
    </li>
    <li class="nav-item">
      <a href="${BASE}/sheers.html">Sheers <span class="nav-arrow">▾</span></a>
      <div class="nav-dropdown">
        <a href="${BASE}/sheers.html#linen">Linen Sheers</a>
        <a href="${BASE}/sheers.html#polyester">Polyester Sheers</a>
      </div>
    </li>
    <li class="nav-item">
      <a href="${BASE}/blinds.html">Blinds <span class="nav-arrow">▾</span></a>
      <div class="nav-dropdown">
        <a href="${BASE}/blinds.html#zebra">Zebra Blinds</a>
        <a href="${BASE}/blinds.html#smart">Smart Blinds</a>
        <a href="${BASE}/blinds.html#roman">Roman Blinds</a>
        <a href="${BASE}/blinds.html#roller">Roller Blinds</a>
        <a href="${BASE}/blinds.html#honeycomb">Honeycomb Blinds</a>
        <a href="${BASE}/blinds.html#vertical">Vertical Blinds</a>
        <a href="${BASE}/blinds.html#venetian">Venetian Blinds</a>
      </div>
    </li>
    <li class="nav-item">
      <a href="${BASE}/accessories.html">Accessories <span class="nav-arrow">▾</span></a>
      <div class="nav-dropdown nav-dropdown-right">
        <a href="${BASE}/accessories.html#electric-tracks">Electric Tracks</a>
        <a href="${BASE}/accessories.html#rods">Rods</a>
        <a href="${BASE}/accessories.html#extendable-track">Extendable Track</a>
        <a href="${BASE}/accessories.html#curved-tracks">Curved Tracks</a>
      </div>
    </li>
    <li class="nav-item"><a href="${BASE}/shutters.html">Shutters</a></li>
    <li class="nav-item"><a href="${BASE}/gallery.html">Gallery</a></li>
    <li class="nav-item">
      <a href="${BASE}/support.html">Support <span class="nav-arrow">▾</span></a>
      <div class="nav-dropdown nav-dropdown-right">
        <a href="${BASE}/support.html#measurement">Measurement Guide</a>
        <a href="${BASE}/support.html#warranty">Warranty</a>
        <a href="${BASE}/support.html#faq">FAQ</a>
      </div>
    </li>
    <li class="nav-item"><a href="${BASE}/about.html">About</a></li>
  </ul>
  <div class="nav-cta-wrap" id="navCta"><a href="${BASE}/contact.html" class="nav-cta">Free Quote</a></div>
  <button id="navHamburger" aria-label="Menu"><span></span><span></span><span></span></button>
</nav>
<div id="mobileNav">
  <div class="mob-section">
    <div class="mob-title">Curtains <span class="mob-arr">▾</span></div>
    <div class="mob-sub">
      <a href="${BASE}/curtains.html">Custom-Made Curtains</a>
      <a href="${BASE}/curtains.html#sfold">S-Fold</a>
      <a href="${BASE}/curtains.html#double-pinch">Double Pinch Pleat</a>
      <a href="${BASE}/curtains.html#triple-pinch">Triple Pinch Pleat</a>
      <a href="${BASE}/curtains.html#box-pleat">Box Pleat</a>
      <a href="${BASE}/curtains.html#eyelet">Eyelet</a>
    </div>
  </div>
  <div class="mob-section">
    <div class="mob-title">Sheers <span class="mob-arr">▾</span></div>
    <div class="mob-sub">
      <a href="${BASE}/sheers.html#linen">Linen Sheers</a>
      <a href="${BASE}/sheers.html#polyester">Polyester Sheers</a>
    </div>
  </div>
  <div class="mob-section">
    <div class="mob-title">Blinds <span class="mob-arr">▾</span></div>
    <div class="mob-sub">
      <a href="${BASE}/blinds.html#zebra">Zebra Blinds</a>
      <a href="${BASE}/blinds.html#smart">Smart Blinds</a>
      <a href="${BASE}/blinds.html#roman">Roman Blinds</a>
      <a href="${BASE}/blinds.html#roller">Roller Blinds</a>
      <a href="${BASE}/blinds.html#honeycomb">Honeycomb Blinds</a>
      <a href="${BASE}/blinds.html#vertical">Vertical Blinds</a>
      <a href="${BASE}/blinds.html#venetian">Venetian Blinds</a>
    </div>
  </div>
  <div class="mob-section">
    <div class="mob-title">Accessories <span class="mob-arr">▾</span></div>
    <div class="mob-sub">
      <a href="${BASE}/accessories.html#electric-tracks">Electric Tracks</a>
      <a href="${BASE}/accessories.html#rods">Rods</a>
      <a href="${BASE}/accessories.html#extendable-track">Extendable Track</a>
      <a href="${BASE}/accessories.html#curved-tracks">Curved Tracks</a>
    </div>
  </div>
  <div class="mob-direct"><a href="${BASE}/shutters.html">Shutters</a></div>
  <div class="mob-direct"><a href="${BASE}/gallery.html">Gallery</a></div>
  <div class="mob-section">
    <div class="mob-title">Support <span class="mob-arr">▾</span></div>
    <div class="mob-sub">
      <a href="${BASE}/support.html#measurement">Measurement Guide</a>
      <a href="${BASE}/support.html#warranty">Warranty</a>
      <a href="${BASE}/support.html#faq">FAQ</a>
    </div>
  </div>
  <div class="mob-direct"><a href="${BASE}/about.html">About</a></div>
  <div class="mob-direct"><a href="${BASE}/contact.html">Free Quote</a></div>
</div>`;

  document.head.insertAdjacentHTML('beforeend', NAV_CSS);
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Favicon
  const fav = document.createElement('link');
  fav.rel = 'icon'; fav.type = 'image/png'; fav.href = BASE + '/favicon.png';
  document.head.appendChild(fav);

  // Active link
  const cur = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#navLinks .nav-item > a').forEach(a => {
    if (a.getAttribute('href').split('/').pop().split('#')[0] === cur) a.classList.add('active');
  });

  // Hamburger
  document.getElementById('navHamburger').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('mobileNav').classList.toggle('open');
  });

  // Mobile accordions
  document.querySelectorAll('.mob-title').forEach(t => {
    t.addEventListener('click', function() {
      this.classList.toggle('open');
      this.nextElementSibling.classList.toggle('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    const m = document.getElementById('mobileNav');
    const h = document.getElementById('navHamburger');
    if (m.classList.contains('open') && !m.contains(e.target) && !h.contains(e.target)) m.classList.remove('open');
  });

  // Smooth scroll with offset
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href*="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    const hash = '#' + href.split('#')[1];
    const pathPart = href.split('#')[0].split('/').pop();
    const curPage = window.location.pathname.split('/').pop() || 'index.html';
    if (pathPart === '' || pathPart === curPage) {
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      history.pushState(null, null, hash);
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
      document.getElementById('mobileNav').classList.remove('open');
    }
  });

  window.addEventListener('load', () => {
    if (window.location.hash) {
      setTimeout(() => {
        const t = document.querySelector(window.location.hash);
        if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
      }, 150);
    }
  });
})();

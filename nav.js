(function() {
  const BASE = '/ucurtains';

  const NAV_HTML = `
<nav id="mainNav">
  <a href="${BASE}/" class="nav-logo">U <span>Curtains</span></a>
  <ul class="nav-links">
    <li class="nav-item">
      <a href="${BASE}/curtains.html">Curtains <span class="arrow">▾</span></a>
      <div class="dropdown">
        <a href="${BASE}/curtains.html#sfold">S-Fold</a>
        <a href="${BASE}/curtains.html#double-pinch">Double Pinch Pleat</a>
        <a href="${BASE}/curtains.html#triple-pinch">Triple Pinch Pleat</a>
        <a href="${BASE}/curtains.html#box-pleat">Box Pleat</a>
        <a href="${BASE}/curtains.html#eyelet">Eyelet</a>
      </div>
    </li>
    <li class="nav-item">
      <a href="${BASE}/sheers.html">Sheers <span class="arrow">▾</span></a>
      <div class="dropdown">
        <a href="${BASE}/sheers.html#linen">Linen Sheers</a>
        <a href="${BASE}/sheers.html#polyester">Polyester Sheers</a>
      </div>
    </li>
    <li class="nav-item">
      <a href="${BASE}/blinds.html">Blinds <span class="arrow">▾</span></a>
      <div class="dropdown">
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
      <a href="${BASE}/accessories.html">Accessories <span class="arrow">▾</span></a>
      <div class="dropdown">
        <a href="${BASE}/accessories.html#electric-tracks">Electric Tracks</a>
        <a href="${BASE}/accessories.html#rods">Rods</a>
        <a href="${BASE}/accessories.html#extendable-track">Extendable Track</a>
        <a href="${BASE}/accessories.html#curved-tracks">Curved Tracks</a>
      </div>
    </li>
    <li class="nav-item"><a href="${BASE}/shutters.html">Shutters</a></li>
    <li class="nav-item"><a href="${BASE}/gallery.html">Gallery</a></li>
    <li class="nav-item">
      <a href="${BASE}/support.html">Support <span class="arrow">▾</span></a>
      <div class="dropdown">
        <a href="${BASE}/support.html#measurement">Measurement Guide</a>
        <a href="${BASE}/support.html#warranty">Warranty</a>
        <a href="${BASE}/support.html#faq">FAQ</a>
      </div>
    </li>
    <li class="nav-item"><a href="${BASE}/about.html">About</a></li>
  </ul>
  <div class="nav-cta-wrap"><a href="${BASE}/contact.html" class="nav-cta">Free Quote</a></div>
  <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-section">
    <div class="mobile-section-title">Curtains <span class="arr">▾</span></div>
    <div class="mobile-sub">
      <a href="${BASE}/curtains.html#sfold">S-Fold</a>
      <a href="${BASE}/curtains.html#double-pinch">Double Pinch Pleat</a>
      <a href="${BASE}/curtains.html#triple-pinch">Triple Pinch Pleat</a>
      <a href="${BASE}/curtains.html#box-pleat">Box Pleat</a>
      <a href="${BASE}/curtains.html#eyelet">Eyelet</a>
    </div>
  </div>
  <div class="mobile-section">
    <div class="mobile-section-title">Sheers <span class="arr">▾</span></div>
    <div class="mobile-sub">
      <a href="${BASE}/sheers.html#linen">Linen Sheers</a>
      <a href="${BASE}/sheers.html#polyester">Polyester Sheers</a>
    </div>
  </div>
  <div class="mobile-section">
    <div class="mobile-section-title">Blinds <span class="arr">▾</span></div>
    <div class="mobile-sub">
      <a href="${BASE}/blinds.html#zebra">Zebra Blinds</a>
      <a href="${BASE}/blinds.html#smart">Smart Blinds</a>
      <a href="${BASE}/blinds.html#roman">Roman Blinds</a>
      <a href="${BASE}/blinds.html#roller">Roller Blinds</a>
      <a href="${BASE}/blinds.html#honeycomb">Honeycomb Blinds</a>
      <a href="${BASE}/blinds.html#vertical">Vertical Blinds</a>
      <a href="${BASE}/blinds.html#venetian">Venetian Blinds</a>
    </div>
  </div>
  <div class="mobile-section">
    <div class="mobile-section-title">Accessories <span class="arr">▾</span></div>
    <div class="mobile-sub">
      <a href="${BASE}/accessories.html#electric-tracks">Electric Tracks</a>
      <a href="${BASE}/accessories.html#rods">Rods</a>
      <a href="${BASE}/accessories.html#extendable-track">Extendable Track</a>
      <a href="${BASE}/accessories.html#curved-tracks">Curved Tracks</a>
    </div>
  </div>
  <div class="mobile-direct"><a href="${BASE}/shutters.html">Shutters</a></div>
  <div class="mobile-direct"><a href="${BASE}/gallery.html">Gallery</a></div>
  <div class="mobile-section">
    <div class="mobile-section-title">Support <span class="arr">▾</span></div>
    <div class="mobile-sub">
      <a href="${BASE}/support.html#measurement">Measurement Guide</a>
      <a href="${BASE}/support.html#warranty">Warranty</a>
      <a href="${BASE}/support.html#faq">FAQ</a>
    </div>
  </div>
  <div class="mobile-direct"><a href="${BASE}/about.html">About</a></div>
  <div class="mobile-direct"><a href="${BASE}/contact.html">Free Quote</a></div>
</div>`;

  const NAV_CSS = `
<style id="navStyles">
nav#mainNav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(253,251,248,0.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);padding:0 5vw;display:flex;align-items:center;justify-content:space-between;height:70px;}
.nav-logo{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;color:var(--charcoal);text-decoration:none;}
.nav-logo span{color:var(--accent);}
.nav-links{display:flex;gap:0;list-style:none;height:70px;}
.nav-item{position:relative;display:flex;align-items:center;}
.nav-item>a{padding:0 0.9rem;text-decoration:none;color:var(--mid);font-size:0.82rem;letter-spacing:0.06em;text-transform:uppercase;transition:color 0.2s;white-space:nowrap;height:70px;display:flex;align-items:center;gap:0.3rem;}
.nav-item>a:hover,.nav-item>a.active{color:var(--charcoal);}
.nav-item>a .arrow{font-size:0.6rem;transition:transform 0.2s;display:inline-block;}
.nav-item:hover>a .arrow{transform:rotate(180deg);}
.dropdown{position:absolute;top:70px;left:0;background:white;border:1px solid var(--border);border-top:none;min-width:200px;opacity:0;visibility:hidden;transform:translateY(-8px);transition:all 0.2s;z-index:200;box-shadow:0 8px 24px rgba(0,0,0,0.08);}
.nav-item:nth-last-child(-n+4) .dropdown{left:auto;right:0;}
.nav-item:hover .dropdown{opacity:1;visibility:visible;transform:translateY(0);}
.dropdown a{display:block;padding:0.65rem 1.2rem;font-size:0.82rem;color:var(--mid);text-decoration:none;border-bottom:1px solid var(--border);transition:all 0.15s;white-space:nowrap;}
.dropdown a:last-child{border-bottom:none;}
.dropdown a:hover{background:var(--cream);color:var(--charcoal);padding-left:1.5rem;}
.nav-cta-wrap{margin-left:0.5rem;flex-shrink:0;}
.nav-cta{background:var(--charcoal);color:white!important;padding:0.5rem 1.2rem;border-radius:2px;font-size:0.8rem;text-decoration:none;letter-spacing:0.06em;text-transform:uppercase;transition:background 0.2s;white-space:nowrap;}
.nav-cta:hover{background:var(--accent)!important;}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;}
.hamburger span{width:22px;height:1.5px;background:var(--charcoal);display:block;transition:all 0.3s;}
.mobile-menu{display:none;position:fixed;top:70px;left:0;right:0;background:var(--warm-white);border-bottom:1px solid var(--border);padding:1rem 5vw;z-index:99;flex-direction:column;max-height:calc(100vh - 70px);overflow-y:auto;}
.mobile-menu.open{display:flex;}
.mobile-section{border-bottom:1px solid var(--border);}
.mobile-section-title{font-size:0.9rem;font-weight:500;color:var(--charcoal);padding:0.75rem 0;display:flex;justify-content:space-between;align-items:center;cursor:pointer;user-select:none;}
.mobile-section-title .arr{transition:transform 0.2s;font-size:0.7rem;color:var(--light);}
.mobile-section-title.expanded .arr{transform:rotate(180deg);}
.mobile-sub{display:none;flex-direction:column;padding-bottom:0.5rem;}
.mobile-sub.open{display:flex;}
.mobile-sub a{font-size:0.85rem;color:var(--mid);text-decoration:none;padding:0.4rem 0 0.4rem 1rem;border-bottom:1px solid var(--border);}
.mobile-sub a:last-child{border-bottom:none;}
.mobile-direct{border-bottom:1px solid var(--border);}
.mobile-direct a{font-size:0.9rem;color:var(--charcoal);text-decoration:none;padding:0.75rem 0;display:block;}
@media(max-width:1100px){.nav-item>a{padding:0 0.65rem;font-size:0.78rem;}}
@media(max-width:900px){.nav-links,.nav-cta-wrap{display:none;}.hamburger{display:flex;}}
</style>`;

  // Inject CSS into <head>
  document.head.insertAdjacentHTML('beforeend', NAV_CSS);

  // Inject nav HTML at start of <body>
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Mark active link based on current page
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-item > a').forEach(link => {
    const href = link.getAttribute('href').split('#')[0];
    if (currentPath.endsWith(href.split('/').pop()) ||
        (currentPath.endsWith('/ucurtains/') && href.endsWith('/'))) {
      link.classList.add('active');
    }
  });

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('mobileMenu').classList.toggle('open');
  });

  // Mobile sub-menu toggle
  document.querySelectorAll('.mobile-section-title').forEach(function(title) {
    title.addEventListener('click', function() {
      this.classList.toggle('expanded');
      this.nextElementSibling.classList.toggle('open');
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    if (menu && !menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
    }
  });


  // Fix anchor scroll offset for fixed nav (70px height)
  function scrollWithOffset(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const offset = 90; // 70px nav + 20px breathing room
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // Handle all anchor links on the page
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href*="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;
    const hash = '#' + href.split('#')[1];
    const path = href.split('#')[0];
    // Only intercept if same page or empty path
    const currentPage = window.location.pathname.split('/').pop();
    const linkPage = path.split('/').pop();
    if (path === '' || linkPage === currentPage || path === window.location.pathname) {
      e.preventDefault();
      history.pushState(null, null, hash);
      scrollWithOffset(hash);
      // Close mobile menu if open
      const menu = document.getElementById('mobileMenu');
      if (menu) menu.classList.remove('open');
    }
  });

  // Handle direct page load with hash in URL
  window.addEventListener('load', function() {
    if (window.location.hash) {
      setTimeout(function() {
        scrollWithOffset(window.location.hash);
      }, 100);
    }
  });

})();

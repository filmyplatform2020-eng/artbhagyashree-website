/* ==========================================================================
   ART BHAGYASHREE STUDIO — bhagya_02 Application layer
   Shared header/footer (reference UI), cart, auth, tutorial gating, toasts,
   ticker build, slider build, reveal.

   SECURITY NOTE: client-side cart/auth/gating is a convenience layer for a
   static demo. Production requires server-side payment verification,
   session handling and content entitlement.
   ========================================================================== */

(function () {
  "use strict";

  const LS = {
    cart: "abs_cart",
    user: "abs_user",
    orders: "abs_orders",
    progress: "abs_progress"
  };

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ---------- helpers ---------- */
  function read(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (e) { return fallback; }
  }
  function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  const fmtINR = (n) => "\u20B9" + Number(n).toLocaleString("en-IN");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(msg) {
    let t = $("#toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast"; t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }
  window.ABS = window.ABS || {};
  window.ABS.toast = toast;
  window.ABS.fmt = fmtINR;
  window.ABS.esc = esc;

  /* ---------- Icons ---------- */
  const ICONS = {
    arrow: '<svg viewBox="0 0 16 12" fill="none" aria-hidden="true"><path d="M10.6 1 15 6l-4.4 5M15 6H1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrowLeft: '<svg viewBox="0 0 16 12" fill="none" aria-hidden="true"><path d="M5.4 1 1 6l4.4 5M1 6h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 12c0-2.6-.2-4.4-.5-5.3a2.6 2.6 0 0 0-1.8-1.8C18.8 4.5 12 4.5 12 4.5s-6.8 0-7.7.4a2.6 2.6 0 0 0-1.8 1.8C2.2 7.6 2 9.4 2 12s.2 4.4.5 5.3a2.6 2.6 0 0 0 1.8 1.8c.9.4 7.7.4 7.7.4s6.8 0 7.7-.4a2.6 2.6 0 0 0 1.8-1.8c.3-.9.5-2.7.5-5.3Z"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5Z"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/><path d="M3 4h2l2.6 11.2a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.7L20.5 8H6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 13 4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    level: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 20h16M6 20V9l6-5 6 5v11" stroke-linejoin="round"/></svg>'
  };
  window.ABS.icons = ICONS;

  /* reference-style primary button with sweeping bg shape + double arrow */
  function arrowBtn(label, href, cls) {
    return '<a class="primary-button ' + (cls || "") + '" href="' + href + '">' +
      '<span class="button-bg-color-shape" aria-hidden="true"></span>' +
      '<span class="primary-button-text">' + label + '</span>' +
      '<span class="primary-button-icon"><span class="button-icon-wrapper">' +
        ICONS.arrow + ICONS.arrow +
      '</span></span></a>';
  }
  window.ABS.arrowBtn = arrowBtn;

  /* ---------- cart ---------- */
  function getCart() { return read(LS.cart, []); }
  function setCart(c) { write(LS.cart, c); renderCartCount(); }
  function addToCart(product, qty) {
    const cart = getCart();
    const existing = cart.find((i) => i.id === product.id);
    if (existing) existing.qty += qty || 1;
    else cart.push({ id: product.id, name: product.name, tagline: product.tagline, price: product.price, img: product.img || "", qty: qty || 1 });
    setCart(cart);
    toast("Added to cart — " + product.name);
  }
  function cartCount() { return getCart().reduce((a, i) => a + i.qty, 0); }
  function cartTotal() { return getCart().reduce((a, i) => a + i.qty * i.price, 0); }
  function renderCartCount() {
    const el = $("#cart-count");
    if (el) {
      const n = cartCount();
      el.textContent = n;
      el.style.display = n ? "flex" : "none";
    }
  }

  /* ---------- auth ---------- */
  function getUser() { return read(LS.user, null); }
  function setUser(u) { if (u) write(LS.user, u); else localStorage.removeItem(LS.user); }
  window.ABS.getUser = getUser;
  window.ABS.setUser = setUser;

  window.ABS.cart = {
    get: getCart,
    set: setCart,
    add: addToCart,
    count: cartCount,
    total: cartTotal
  };
  window.ABS.addToCart = addToCart;

  /* ---------- orders / entitlements ---------- */
  function getOrders() { return read(LS.orders, []); }
  function addOrder(order) {
    const orders = getOrders();
    orders.push(order);
    write(LS.orders, orders);
  }
  window.ABS.getOrders = getOrders;
  window.ABS.addOrder = addOrder;

  function purchasedTutorials() {
    const tutIds = TUTORIALS.map((t) => t.id);
    return getOrders()
      .flatMap((o) => o.items || [])
      .filter((i) => tutIds.includes(i.id))
      .map((i) => i.id);
  }
  window.ABS.purchasedTutorials = purchasedTutorials;

  /* ---------- progress (My Learning) ---------- */
  function getProgress() { return read(LS.progress, {}); }
  function setProgress(p) { write(LS.progress, p); }
  window.ABS.getProgress = getProgress;
  window.ABS.setProgress = setProgress;

  function markLesson(tutId, lessonIdx) {
    const p = getProgress();
    p[tutId] = p[tutId] || [];
    if (!p[tutId].includes(lessonIdx)) p[tutId].push(lessonIdx);
    setProgress(p);
  }
  window.ABS.markLesson = markLesson;

  /* ---------- header / footer injection (reference UI) ---------- */
  const MENU = [
    { t: "Home", s: "Home", h: "index.html" },
    { t: "About", s: "About", h: "about.html" },
    { t: "Portfolio", s: "Portfolio", h: "portfolio.html" },
    { t: "Events & Collaborations", s: "Events", h: "events.html" },
    { t: "International", s: "International", h: "international.html" },
    { t: "नवरंग कलावर्ग", s: "कलावर्ग", h: "workshops.html" },
    { t: "Lake Colours", s: "Lake Colours", h: "lake-colours.html" },
    { t: "Contact", s: "Contact", h: "contact.html" }
  ];

  const FOOTER_LINKS = [
    { col: "Studio", links: [
      { t: "About", h: "about.html" },
      { t: "Portfolio", h: "portfolio.html" },
      { t: "Events & Collaborations", h: "events.html" },
      { t: "International", h: "international.html" },
      { t: "Contact", h: "contact.html" }
    ]},
    { col: "Learn", links: [
      { t: "नवरंग कलावर्ग", h: "workshops.html" },
      { t: "Lake Colours", h: "lake-colours.html" },
      { t: "Tutorials", h: "tutorials.html" },
      { t: "My Learning", h: "my-learning.html" }
    ]},
    { col: "Account", links: [
      { t: "Cart", h: "cart.html" },
      { t: "My Account", h: "account.html" },
      { t: "Order Confirmation", h: "confirmation.html" }
    ]}
  ];

  function renderHeader() {
    const host = $("#site-header");
    if (!host) return;
    const user = getUser();
    const path = location.pathname.split("/").pop() || "index.html";
    host.innerHTML =
      '<div class="navbar">' +
        '<div class="container nav-wrapper">' +
          '<a class="nav-logo" href="index.html" aria-label="' + esc(SITE.name) + ' home">' +
            '<span class="site-logo">' + esc(SITE.brand) + ' <span class="brand-script">Studio</span></span>' +
          '</a>' +
          '<nav class="nav-menu" aria-label="Primary">' +
            MENU.map(function (n) {
              var active = (path === n.h) ? " active" : "";
              return '<a class="nav-menu-link' + active + '" href="' + n.h + '">' + esc(n.s || n.t) + '</a>';
            }).join("") +
          '</nav>' +
          '<div class="nav-actions">' +
            '<a class="nav-cart-link" href="cart.html" aria-label="Cart">' + ICONS.cart + '<span class="cart-count" id="cart-count" style="display:none">0</span></a>' +
            arrowBtn(user ? "My Learning" : "Learn Rangoli", user ? "my-learning.html" : "workshops.html") +
            '<button class="menu-trigger" id="menu-trigger" aria-label="Open menu" aria-expanded="false"><span class="trigger-icon-2"></span><span class="trigger-icon-2"></span><span class="trigger-icon-2"></span></button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="menu-wrapper" id="menu-wrapper">' +
        '<div class="menu-content-wrapper" role="dialog" aria-label="Menu">' +
          '<button class="menu-close" id="menu-close" aria-label="Close menu">' + ICONS.close + '</button>' +
          '<div class="menu-head">' +
            '<div class="tag-title"><span class="tag-line"></span><span class="tag-text">Menu</span></div>' +
            '<div class="menu-title" style="margin-top:10px">Explore the Studio</div>' +
          '</div>' +
          '<ul class="menu-items">' +
            MENU.map((n) =>
              '<li class="menu-item-wrapper"><a class="menu-item-link" href="' + n.h + '">' +
                '<span>' + n.t + '</span><span class="menu-item-arrow">' + ICONS.arrow + '</span></a></li>'
            ).join("") +
          '</ul>' +
          '<div class="menu-foot">' +
            '<p>' + esc(SITE.tagline) + '</p>' +
            '<div class="menu-social">' +
              '<a href="' + SITE.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICONS.instagram + '</a>' +
              '<a href="' + SITE.youtube + '" target="_blank" rel="noopener" aria-label="YouTube">' + ICONS.youtube + '</a>' +
              '<a href="mailto:' + SITE.email + '" aria-label="Email">' + ICONS.mail + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    renderCartCount();
  }

  function renderFooter() {
    const host = $("#site-footer");
    if (!host) return;
    host.innerHTML =
      '<div class="footer-section">' +
        '<div class="container">' +
          '<div class="footer-content-wrapper">' +
            '<div class="footer-top-content">' +
              '<div class="footer-title-pg">' +
                '<div class="tag-title"><span class="tag-line"></span><span class="tag-text">Newsletter</span></div>' +
                '<div class="footer-title" style="margin-top:8px">Get the Latest Art Updates</div>' +
                '<p class="footer-pg">Subscribe to receive updates on new artwork, tutorials and studio news.</p>' +
              '</div>' +
              '<form class="footer-form" id="newsletter-form" novalidate>' +
                '<input class="footer-input" type="email" id="newsletter-email" placeholder="Enter your email" aria-label="Email address" required>' +
                '<button class="primary-button" type="submit" aria-label="Subscribe">' +
                  '<span class="button-bg-color-shape" aria-hidden="true"></span>' +
                  '<span class="primary-button-text">Subscribe</span>' +
                  '<span class="primary-button-icon"><span class="button-icon-wrapper">' + ICONS.arrow + '</span></span>' +
                '</button>' +
              '</form>' +
            '</div>' +
            '<div class="footer-bottom-content">' +
              '<div class="footer-logo-paragraph">' +
                '<a class="footer-logo" href="index.html">' +
                  '<span class="site-logo" style="font-size:26px">' + esc(SITE.brand) + ' <span class="brand-script">Studio</span></span>' +
                '</a>' +
                '<p class="footer-logo-pg">' + esc(SITE.tagline) + '. Indian folk art, large-format installations and Rangoli education from ' + esc(SITE.location) + '.</p>' +
              '</div>' +
              '<div class="footer-menu-item-list-wrapper">' +
                FOOTER_LINKS.map((col) =>
                  '<div class="footer-menu-list">' +
                    '<div class="footer-menu-heading">' + col.col + '</div>' +
                    col.links.map((l) => '<a class="footer-menu" href="' + l.h + '"' + (l.ext ? ' target="_blank" rel="noopener"' : "") + '>' + l.t + '</a>').join("") +
                  '</div>'
                ).join("") +
              '</div>' +
            '</div>' +
            '<div class="footer-middle-content">' +
              '<div class="footer-menu-list">' +
                '<div class="footer-menu-heading">Contact Info</div>' +
                '<div class="map-mail"><span style="color:var(--theme-color-01)">' + ICONS.pin + '</span><span class="mail-number" style="color:var(--neutral-03);font-size:14px">' + esc(SITE.location) + '</span></div>' +
                '<div class="map-mail"><span style="color:var(--theme-color-01)">' + ICONS.mail + '</span><span class="mail-number"><a href="mailto:' + SITE.email + '">' + esc(SITE.email) + '</a></span></div>' +
                '<div class="map-mail"><span style="color:var(--theme-color-01)">' + ICONS.phone + '</span><span class="mail-number"><a href="tel:' + SITE.phoneHref + '">' + esc(SITE.phone) + '</a></span></div>' +
              '</div>' +
              '<div class="working-hours">' +
                '<div class="footer-menu-heading">Follow</div>' +
                '<div class="footer-social-icon-list">' +
                  '<a class="single-social-icon" href="' + SITE.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICONS.instagram + '</a>' +
                  '<a class="single-social-icon" href="' + SITE.youtube + '" target="_blank" rel="noopener" aria-label="YouTube">' + ICONS.youtube + '</a>' +
                  '<a class="single-social-icon" href="mailto:' + SITE.email + '" aria-label="Email">' + ICONS.mail + '</a>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div class="footer-bottom-bar">' +
              '<div class="copyright-text">© ' + new Date().getFullYear() + ' ' + esc(SITE.name) + '. All artwork © Bhagyashree Deshpande.</div>' +
              '<div class="copyright-text">Crafted with pride in Pune, India</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ---------- menu behavior ---------- */
  function initMenu() {
    const wrap = $("#menu-wrapper");
    const trigger = $("#menu-trigger");
    const close = $("#menu-close");
    if (!wrap) return;
    const set = (open) => {
      wrap.classList.toggle("open", open);
      if (trigger) { trigger.setAttribute("aria-expanded", String(open)); }
      document.body.style.overflow = open ? "hidden" : "";
    };
    if (trigger) trigger.addEventListener("click", () => set(true));
    if (close) close.addEventListener("click", () => set(false));
    wrap.addEventListener("click", (e) => { if (e.target === wrap) set(false); });
    $$(".menu-item-link", wrap).forEach((a) => a.addEventListener("click", () => set(false)));
  }

  /* ---------- hero ticker build ---------- */
  window.ABS.buildTicker = function (list, targetSel) {
    const target = $(targetSel);
    if (!target) return;
    const imgs = list.map((a) =>
      '<div class="hero-ticker-img"><img src="' + a.img + '" alt="' + esc(a.title) + ' — ' + esc(a.cat) + '" loading="eager"></div>'
    ).join("");
    target.innerHTML =
      '<div class="hero-ticker-track"><div class="hero-ticker-image-list">' + imgs + "</div><div class=\"hero-ticker-image-list\" aria-hidden=\"true\">" + imgs + "</div></div>";
  };

  /* ---------- portfolio slider build ---------- */
  window.ABS.buildSlider = function (slides, targetSel, navSel, arrowL, arrowR) {
    const target = $(targetSel);
    if (!target || !slides.length) return;
    let track = target.querySelector(".pc-track");
    if (!track) { track = document.createElement("div"); track.className = "pc-track"; target.appendChild(track); }
    track.innerHTML = slides.map((s) =>
      '<div class="pc-slide"><a class="collection-card" href="' + (s.href || "portfolio.html") + '">' +
        '<img src="' + s.img + '" alt="' + esc(s.title) + '" loading="lazy">' +
        '<div class="linear-color"></div>' +
        '<div class="permanent-collection-title-date">' +
          '<div class="permanent-collection-title">' + esc(s.title) + '</div>' +
          '<div class="date-area"><span class="on-view">' + esc(s.sub) + '</span></div>' +
        '</div>' +
      '</a></div>'
    ).join("");
    const slidesEl = $$(".pc-slide", target);
    const perView = slidesEl.length ? Math.max(1, Math.floor(target.clientWidth / (slidesEl[0].offsetWidth + 40))) : 1;
    const max = Math.max(0, slidesEl.length - perView);
    let idx = 0;
    const update = () => {
      track.style.transform = "translateX(-" + idx * (slidesEl[0].offsetWidth + 40) + "px)";
      if (navSel) {
        $$(".pc-dot", document).forEach((d, i) => d.classList.toggle("active", i === idx));
      }
    };
    const go = (i) => { idx = Math.max(0, Math.min(max, i)); update(); };
    if (arrowL) $(arrowL)?.addEventListener("click", () => go(idx - 1));
    if (arrowR) $(arrowR)?.addEventListener("click", () => go(idx + 1));
    if (navSel) {
      const dots = slidesEl.map((_, i) => i).filter((i) => i <= max).map((i) =>
        '<button class="pc-dot' + (i === 0 ? " active" : "") + '" data-i="' + i + '" aria-label="Go to slide ' + (i + 1) + '"></button>'
      ).join("");
      $(navSel).innerHTML = dots;
      $$(".pc-dot", document).forEach((d) => d.addEventListener("click", () => go(Number(d.getAttribute("data-i")))));
    }
    window.addEventListener("resize", () => {
      const pv = Math.max(1, Math.floor(target.clientWidth / (slidesEl[0].offsetWidth + 40)));
      const m2 = Math.max(0, slidesEl.length - pv);
      idx = Math.min(idx, m2); update();
    });
    let t = setInterval(() => go(idx + 1 > max ? 0 : idx + 1), 5000);
    target.addEventListener("mouseenter", () => clearInterval(t));
    target.addEventListener("mouseleave", () => { t = setInterval(() => go(idx + 1 > max ? 0 : idx + 1), 5000); });
  };

  /* ---------- testimonial / recognition slider ---------- */
  window.ABS.buildTextSlider = function (slides, targetSel, navSel) {
    const target = $(targetSel);
    if (!target || !slides.length) return;
    let idx = 0;
    const render = () => {
      const s = slides[idx];
      target.innerHTML =
        '<div class="t-quote">" ' + esc(s.text) + ' "</div>' +
        '<div class="t-author"><div class="t-author-name">' + esc(s.name) + '</div>' +
        '<div class="t-author-role">' + esc(s.role) + '</div></div>';
      if (navSel) {
        $(navSel).innerHTML = slides.map((_, i) =>
          '<button class="t-dot' + (i === idx ? " active" : "") + '" data-i="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>'
        ).join("");
        $$(".t-dot", document).forEach((d) => d.addEventListener("click", () => { idx = Number(d.getAttribute("data-i")); render(); }));
      }
    };
    render();
    setInterval(() => { idx = (idx + 1) % slides.length; render(); }, 6000);
  };

  /* ---------- artwork grid (shared) ---------- */
  window.ABS.artworkGrid = function (list, targetSel, opts) {
    opts = opts || {};
    const target = $(targetSel);
    if (!target) return;
    target.innerHTML = list.map((a) =>
      '<a class="showcase-card reveal" data-work="' + esc(a.cat) + '" href="' + (opts.itemHref || "portfolio.html") + '" title="' + esc(a.title) + '">' +
        '<div class="showcase-image-wrapper ' + (opts.variant || "") + '">' +
          '<img src="' + a.img + '" alt="' + esc(a.title) + ' — ' + esc(a.cat) + ' rangoli by Bhagyashree" loading="lazy">' +
        '</div>' +
        '<div class="showcase-card-bottom-content">' +
          '<span class="showcase-card-tag">' + esc(a.cat) + '</span>' +
          '<span class="showcase-card-title">' + esc(a.title) + '</span>' +
        '</div>' +
      '</a>'
    ).join("");
    initReveal();
  };

  /* ---------- tutorial cards (horizontal, reference event-card style) ---------- */
  window.ABS.tutorialCard = function (t) {
    const owned = purchasedTutorials().includes(t.id);
    const btnText = t.status === "coming-soon"
      ? "Coming Soon"
      : (owned ? "Watch Now" : t.priceLabel);
    const statusBadge = t.status === "coming-soon"
      ? '<span class="badge amber">Coming Soon</span>'
      : (owned ? '<span class="badge green">Owned</span>' : '<span class="badge maroon">Paid</span>');
    return (
      '<div class="collection-item">' +
        '<a class="event-card tutorial-card" href="tutorial.html?id=' + esc(t.id) + '">' +
          '<div class="event-image-wrapper">' +
            '<img class="event-image" src="' + t.cover + '" alt="' + esc(t.title) + '" loading="lazy">' +
            '<span class="event-card-tag">' + esc(t.category) + '</span>' +
            (owned ? "" : '<span class="lock-badge" aria-hidden="true">' + ICONS.lock + '</span>') +
          '</div>' +
          '<div class="event-card-right-content">' +
            '<div class="event-card-date">' + statusBadge + ' <span class="badge neutral">' + esc(t.level) + '</span></div>' +
            '<div class="event-card-title">' + esc(t.title) + '</div>' +
            '<div class="event-right-bottom-content">' +
              '<div class="event-time-location-wrapper">' +
                '<div class="event-time-location-card"><span class="event-card-icon">' + ICONS.clock + '</span><span class="event-time-location">' + esc(t.duration) + ' · ' + t.lessons + ' lessons</span></div>' +
                '<div class="event-time-location-card"><span class="event-card-icon">' + ICONS.level + '</span><span class="event-time-location">' + esc(t.level) + '</span></div>' +
              '</div>' +
              '<div class="card-button">' +
                '<span class="button-bg-color-shape" aria-hidden="true"></span>' +
                '<span class="card-button-text">' + btnText + '</span>' +
                '<span class="primary-button-icon"><span class="button-icon-wrapper">' + ICONS.arrow + ICONS.arrow + '</span></span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</a>' +
      '</div>'
    );
  };

  /* ---------- reveal ---------- */
  var REVEAL_SEL = ".reveal, .exhibition-content-wrapper, .permanent-collection-content-wrapper, .showcase-content-wrapper, .about-content-wrapper, .testimonials-content-wrapper, .events-content-wrapper, .cta-content-wrapper, .footer-content-wrapper";
  function initReveal() {
    const els = $$(REVEAL_SEL);
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }
  window.ABS.initReveal = initReveal;

  /* ---------- newsletter (mock) ---------- */
  function initNewsletter() {
    const form = $("#newsletter-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = $("#newsletter-email")?.value.trim();
      if (!email || !/.+@.+\..+/.test(email)) { toast("Please enter a valid email address."); return; }
      form.innerHTML = '<div style="display:flex;align-items:center;grid-column-gap:12px;color:var(--theme-color-01);font-weight:500">' + ICONS.check + ' Thank you! You are subscribed.</div>';
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    renderHeader();
    renderFooter();
    initMenu();
    initNewsletter();
    initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
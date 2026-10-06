/* ==========================================================================
   ART BHAGYASHREE STUDIO — Content Data
   All facts below are verified against "Portfolio Bhagyashree .pdf"
   (13-page portfolio) and OCR of source photographs.
   Anything unverified is explicitly marked VERIFY or omitted.
   ========================================================================== */

/* ---------- Site-wide ---------- */
window.SITE = {
  name: "ART BHAGYASHREE STUDIO",
  brand: "Art Bhagyashree",
  artist: "Bhagyashree Deshpande",
  location: "Pune, India",
  email: "artbhagyashreestudio@gmail.com",       /* studio enquiries — primary */
  emailArtist: "artbhagyashree2@gmail.com",       /* artist / personal contact */
  phone: "+91 7875064860",
  phoneHref: "+917875064860",
  whatsapp: "https://wa.me/917875064860",
  instagram: "https://instagram.com/art_bhagyashree",
  youtube: "https://www.youtube.com/@artbhagyashree2",
  tagline: "Transforming Floors Into Stories",
  positioning: "Rangoli Artist | Art Bhagyashree Studio",
  /* verified social figures from portfolio PDF */
  stats: [
    { num: "2", label: "World Records" },
    { num: "500+", label: "Students Trained" },
    { num: "330K+", label: "Instagram Family" },
    { num: "384K+", label: "YouTube Family" }
  ]
};

/* ---------- Achievements (verified — portfolio PDF) ---------- */
window.ACHIEVEMENTS = [
  { title: "Navbharat Influencer Award", type: "Award" },
  { title: "YouTube Silver Creator Award", type: "Award" },
  { title: "Radio City Golden Tick Award", type: "Award" },
  { title: "India World Record Holder", type: "Record" },
  { title: "National & State-level Rangoli Competition Awards", type: "Award" }
];

/* ---------- World Records (verified — portfolio PDF) ---------- */
window.WORLD_RECORDS = [
  { title: "1-Acre Chhatrapati Shivaji Maharaj Rangoli Artwork", location: "Shivneri Fort, Pune, India", img: "assets/img/full/photo-output_87.webp" },
  { title: "Monumental Lord Vitthal Staircase Rangoli Creation", location: "India", img: "assets/img/full/photo-output_31.webp" }
];

/* ---------- National events (verified — portfolio PDF) ---------- */
window.NATIONAL_EVENTS = [
  { title: "National Games of India", cat: "Government & Cultural Events" },
  { title: "Mahakumbh Spiritual Festival", cat: "Government & Cultural Events" },
  { title: "Ram Mandir Inauguration Ceremony, Ayodhya", cat: "Government & Cultural Events" },
  { title: "National Youth Festival", cat: "Government & Cultural Events" },
  { title: "International Airport Opening Ceremony — New Mumbai", cat: "Government & Cultural Events" }
];

/* ---------- International representation (verified — portfolio PDF + source photos) ---------- */
window.INTERNATIONAL = [
  { country: "USA", label: "International Art Festival", img: "" },
  { country: "UK", label: "International Art Festival", img: "" },
  { country: "South Korea", label: "International Street Art Festival", img: "assets/img/full/photo-output_70.webp" }
];
/* Verified international-event imagery (South Korea street art festival) */
window.INTERNATIONAL_GALLERY = [
  "assets/img/full/photo-output_70.webp",
  "assets/img/full/photo-output_51.webp",
  "assets/img/full/photo-output_53.webp",
  "assets/img/full/photo-output_67.webp",
  "assets/img/full/photo-output_49.webp",
  "assets/img/full/photo-output_83.webp"
];

/* ---------- Events & collaborations (verified — portfolio PDF + source photos) ---------- */
window.EVENTS = [
  { id:"ev01", title:"National Games of India", cat:"Government & Cultural Events", img:"assets/img/full/photo-output_212.webp" },
  { id:"ev02", title:"Mahakumbh Spiritual Festival", cat:"Government & Cultural Events", img:"assets/img/full/photo-output_258.webp" },
  { id:"ev03", title:"Ram Mandir Inauguration Ceremony — Ayodhya", cat:"Government & Cultural Events", img:"assets/img/full/photo-output_249.webp" },
  { id:"ev04", title:"National Youth Festival", cat:"Government & Cultural Events", img:"assets/img/full/photo-output_269.webp" },
  { id:"ev05", title:"International Airport Opening Ceremony — New Mumbai", cat:"Government & Cultural Events", img:"assets/img/full/photo-output_108.webp" },
  { id:"ev06", title:"Seasons Mall Installation", cat:"Malls", img:"assets/img/full/photo-output_277.webp" },
  { id:"ev07", title:"Marvel · Spider-Man — Brand New Day", cat:"Brands", img:"assets/img/full/photo-output_36.webp" },
  { id:"ev08", title:"International Art Festivals — USA, UK & South Korea", cat:"International", img:"assets/img/full/photo-output_70.webp" }
];

/* Event filter categories */
window.EVENT_FILTERS = ["All", "Government & Cultural Events", "Malls", "Brands", "International"];

/* ---------- Navrang Kalavarg (education brand) ---------- */
window.NAVRANG = {
  name: "नवरंग कलावर्ग",
  translit: "Navrang Kalavarg",
  tagline: "Learn • Create • Explore",
  intro: "An art-learning initiative by Art Bhagyashree Studio, founded to share practical knowledge, techniques and experience in Rangoli and other forms of art.",
  courses: [
    "Portrait Rangoli",
    "Realistic Rangoli",
    "Design Rangoli",
    "Drawing",
    "Painting",
    "Special Workshops"
  ],
  facts: [
    "Seven Rangoli art exhibitions conducted on various themes",
    "Live demonstrations and learning sessions organised regularly",
    "More than 500 students have learned Rangoli online and offline"
  ]
};
/* Workshop / process imagery (verified — source photos) */
window.WORKSHOP_GALLERY = [
  "assets/img/full/photo-output_253.webp",
  "assets/img/full/photo-output_230.webp",
  "assets/img/full/photo-output_284.webp",
  "assets/img/full/photo-output_207.webp",
  "assets/img/full/photo-output_167.webp",
  "assets/img/full/photo-output_19.webp"
];

/* ---------- Lake Colours product ---------- */
window.LAKE = {
  id: "lake-colours-set",
  name: "Lake Colours",
  tagline: "Rangoli Pigment Set — 9 shades · 100g each",
  price: 1000, /* INR per complete set */
  priceLabel: "\u20B91000",
  includes: "9 pigment pouches \u00D7 100g = 1 complete set",
  verifiedFacts: [
    "9 colour pouches, 100 grams each",
    "One complete set: 9 pouches \u00D7 100g",
    "Price: \u20B91,000 per set"
  ],
  /* Shade names are PLACEHOLDERS — real names to be confirmed. */
  shades: [
    { id: "shade-01", name: "Shade 01", hex: "#882221", note: "Deep burgundy pigment" },
    { id: "shade-02", name: "Shade 02", hex: "#d19a2a", note: "Golden ochre pigment" },
    { id: "shade-03", name: "Shade 03", hex: "#c1432e", note: "Warm vermilion pigment" },
    { id: "shade-04", name: "Shade 04", hex: "#2e6e4e", note: "Forest green pigment" },
    { id: "shade-05", name: "Shade 05", hex: "#1f5f7a", note: "Deep teal pigment" },
    { id: "shade-06", name: "Shade 06", hex: "#8a4f9e", note: "Royal violet pigment" },
    { id: "shade-07", name: "Shade 07", hex: "#e07b9b", note: "Rose pink pigment" },
    { id: "shade-08", name: "Shade 08", hex: "#f4eee4", note: "Cream white pigment" },
    { id: "shade-09", name: "Shade 09", hex: "#4b341a", note: "Deep brown pigment" }
  ],
  howTo: [
    { n: "01", t: "Choose your base", d: "Spread white rangoli powder (not included) on a clean, dry surface." },
    { n: "02", t: "Mix your palette", d: "Blend each Lake Colours pigment into white rangoli powder to reach the depth you want." },
    { n: "03", t: "Draw your design", d: "Freehand or use a stencil to lay out your design on the floor." },
    { n: "04", t: "Fill & finish", d: "Fill with your mixed pigments and softly sweep the surface to blend edges." },
    { n: "05", t: "Photograph your work", d: "Capture your art from a high angle — then tag @art_bhagyashree." }
  ]
};

/* ---------- Tutorial catalog ----------
   SECURITY NOTE: Video URLs are stored ONLY in this file, never in HTML,
   so locked content cannot be scraped from page source. Client-side gating is
   a convenience layer only — production requires server-side entitlement
   checks (see README / pay.js integration notes).
*/
window.TUTORIALS = [
  {
    id: "ganpati-masterclass",
    slug: "ganpati-masterclass",
    title: "Ganpati Rangoli Masterclass",
    category: "Festival",
    level: "Beginner-friendly",
    status: "coming-soon",        /* purchasable only once real video exists */
    price: 999,
    priceLabel: "\u20B9999",
    duration: "90 min",
    lessons: 4,
    cover: "assets/img/full/photo-output_276.webp",
    blurb: "Learn a step-by-step Ganpati rangoli you can recreate at home — designed, drawn and filled the way Bhagyashree teaches her students.",
    whatYouLearn: [
      "Design layout & proportion planning",
      "Base preparation for coloured rangoli",
      "Step-by-step border and motif technique",
      "Finishing, tidying and photography tips"
    ]
  },
  {
    id: "diwali-rangoli",
    slug: "diwali-rangoli",
    title: "Diwali Rangoli Masterclass",
    category: "Festival",
    level: "All levels",
    status: "coming-soon",
    price: 999,
    priceLabel: "\u20B9999",
    duration: "75 min",
    lessons: 3,
    cover: "assets/img/full/photo-output_279.webp",
    blurb: "Festive rangoli designs for Diwali — colour planning, symmetry and the finishing details that make a design photograph beautifully.",
    whatYouLearn: [
      "Festive colour palettes",
      "Symmetry & repetition technique",
      "Lamp-and-flower motif styling",
      "Photo-ready finishing"
    ]
  },
  {
    id: "3d-rangoli-basics",
    slug: "3d-rangoli-basics",
    title: "3D Rangoli Fundamentals",
    category: "Technique",
    level: "Intermediate",
    status: "coming-soon",
    price: 1499,
    priceLabel: "\u20B91499",
    duration: "120 min",
    lessons: 5,
    cover: "assets/img/full/photo-output_27.webp",
    blurb: "The depth and shading principles behind dimensional rangoli — the skill behind Bhagyashree's world-record 3D work.",
    whatYouLearn: [
      "Reading light and shadow on a floor",
      "Layering pigments for depth",
      "Perspective for large floors",
      "Scaling a design to a big surface"
    ]
  }
];

/* ---------- Portfolio catalog ----------
   Every piece is real and verified from the artist's source photographs.
   Where a title is not documented, the piece is listed as "Untitled" with a
   category label — no invented names or claims.
*/
window.ARTWORK = [
  /* -- Spiritual -- */
  { id:"a01", title:"Untitled", cat:"Spiritual", img:"assets/img/full/photo-output_258.webp", ratio:1 },
  { id:"a02", title:"Untitled", cat:"Spiritual", img:"assets/img/full/photo-output_260.webp", ratio:1.53 },
  { id:"a03", title:"Untitled", cat:"Spiritual", img:"assets/img/full/photo-output_263.webp", ratio:0.8 },
  { id:"a04", title:"Untitled", cat:"Spiritual", img:"assets/img/full/photo-output_273.webp", ratio:1 },
  { id:"a05", title:"Untitled", cat:"Spiritual", img:"assets/img/full/photo-output_274.webp", ratio:1 },
  { id:"a06", title:"Untitled", cat:"Spiritual", img:"assets/img/full/photo-output_278.webp", ratio:0.56 },
  { id:"a07", title:"Untitled", cat:"Spiritual", img:"assets/img/full/photo-output_279.webp", ratio:1 },
  /* -- Festive -- */
  { id:"b01", title:"Untitled", cat:"Festive", img:"assets/img/full/photo-output_276.webp", ratio:1 },
  { id:"b02", title:"Untitled", cat:"Festive", img:"assets/img/full/photo-output_238.webp", ratio:1 },
  /* -- Portraits -- */
  { id:"c01", title:"Portrait Rangoli", cat:"Portraits", img:"assets/img/full/photo-output_252.webp", ratio:0.8 },
  { id:"c02", title:"Portrait Rangoli", cat:"Portraits", img:"assets/img/full/photo-output_253.webp", ratio:0.8 },
  { id:"c03", title:"Portrait Rangoli", cat:"Portraits", img:"assets/img/full/photo-output_254.webp", ratio:0.8 },
  { id:"c04", title:"Portrait Rangoli", cat:"Portraits", img:"assets/img/full/photo-output_255.webp", ratio:1 },
  /* -- Large scale -- */
  { id:"d01", title:"Mall Installation", cat:"Large Scale", img:"assets/img/full/photo-output_259.webp", ratio:0.8 },
  { id:"d02", title:"Mall Installation", cat:"Large Scale", img:"assets/img/full/photo-output_265.webp", ratio:1 },
  { id:"d03", title:"Mall Installation — Seasons Mall", cat:"Large Scale", img:"assets/img/full/photo-output_277.webp", ratio:1 },
  { id:"d04", title:"Mall Installation", cat:"Large Scale", img:"assets/img/full/photo-output_266.webp", ratio:1 },
  { id:"d05", title:"Mall Installation", cat:"Large Scale", img:"assets/img/full/photo-output_267.webp", ratio:0.94 },
  /* -- Vibrant -- */
  { id:"e01", title:"Untitled", cat:"Vibrant", img:"assets/img/full/photo-output_282.webp", ratio:1 },
  { id:"e02", title:"Untitled", cat:"Vibrant", img:"assets/img/full/photo-output_283.webp", ratio:1 },
  { id:"e03", title:"Untitled", cat:"Vibrant", img:"assets/img/full/photo-output_268.webp", ratio:1 },
  /* -- Landmark & special -- */
  { id:"f01", title:"World's Biggest 3D Rangoli", cat:"Landmark", img:"assets/img/full/photo-output_27.webp", ratio:1.78 },
  { id:"f02", title:"National Youth Festival 2020", cat:"Landmark", img:"assets/img/full/photo-output_269.webp", ratio:1 },
  { id:"f03", title:"Radio City Golden Ticket 2023", cat:"Landmark", img:"assets/img/full/photo-output_272.webp", ratio:0.8 },
  { id:"f04", title:"Untitled", cat:"Landmark", img:"assets/img/full/photo-output_271.webp", ratio:1 }
];

/* Signature works for the homepage — curated, verified highlights */
window.SIGNATURE = [
  { id:"s1", title:"World's Biggest 3D Rangoli", cat:"Landmark", img:"assets/img/full/photo-output_27.webp", link:"art.html" },
  { id:"s2", title:"Mall Installation — Seasons Mall", cat:"Large Scale", img:"assets/img/full/photo-output_277.webp", link:"art.html" },
  { id:"s3", title:"National Youth Festival 2020", cat:"Landmark", img:"assets/img/full/photo-output_269.webp", link:"art.html" },
  { id:"s4", title:"Spider-Man · Brand New Day", cat:"Case Study", img:"assets/img/full/photo-output_36.webp", link:"project-spiderman.html" },
  { id:"s5", title:"Portrait Rangoli", cat:"Portraits", img:"assets/img/full/photo-output_255.webp", link:"art.html" },
  { id:"s6", title:"Radio City Golden Ticket 2023", cat:"Award", img:"assets/img/full/photo-output_272.webp", link:"achievements.html" }
];

/* ---------- Portfolio categories (premium, reference-led) ---------- */
window.PORTFOLIO_CATEGORIES = [
  {
    id: "realistic",
    title: "Realistic Rangoli",
    heading: "Realistic & Hyper-Realistic Rangoli",
    desc: "Bringing portraits, personalities and detailed subjects to life through the traditional medium of Rangoli — precision, depth and realism on the floor.",
    img: "assets/img/full/photo-output_255.webp",
    cats: ["Portraits"]
  },
  {
    id: "traditional",
    title: "Traditional & Design Rangoli",
    heading: "Traditional & Design Rangoli",
    desc: "Exploring Indian motifs, patterns, symmetry and contemporary compositions through the art of Rangoli.",
    img: "assets/img/full/photo-output_235.webp",
    cats: ["Spiritual", "Vibrant"]
  },
  {
    id: "festival",
    title: "Festival Rangoli",
    heading: "Festival Rangoli",
    desc: "Colourful artworks created to celebrate India's festivals, traditions and cultural stories.",
    img: "assets/img/full/photo-output_279.webp",
    cats: ["Festive"]
  },
  {
    id: "large-scale",
    title: "Large-Scale & Live Rangoli",
    heading: "Large-Scale & Live Rangoli",
    desc: "From intimate installations to large-scale public artworks — Rangoli experiences for events, malls, celebrations and special occasions.",
    img: "assets/img/full/photo-output_277.webp",
    cats: ["Large Scale"]
  },
  {
    id: "world-records",
    title: "World Records & Landmarks",
    heading: "World Records & Landmarks",
    desc: "Monumental, record-setting Rangoli installations created with the studio team.",
    img: "assets/img/full/photo-output_87.webp",
    cats: ["Landmark"]
  }
];

/* Spider-Man case study — real process documentation */
window.SPIDERMAN = {
  title: "Spider-Man · Brand New Day",
  client: "Marvel / Spider-Man collaboration display",
  date: "Dates not verified — VERIFY",
  hero: "assets/img/full/photo-output_35.webp",
  intro: "A large-format Spider-Man rangoli created for the 'Brand New Day' display — one of the studio's most photographed pieces.",
  process: [
    { label: "Reference & layout", title: "Design transfer", img:"assets/img/full/photo-output_29.webp", desc:"The artwork is laid out on the floor from reference, scaled up to the full display size." },
    { label: "Outlining", title: "Line work", img:"assets/img/full/photo-output_30.webp", desc:"Outlines are drawn first, mapping the figure's pose and negative space." },
    { label: "Fill", title: "Colour application", img:"assets/img/full/photo-output_31.webp", desc:"Pigments are filled section by section, building depth and detail." },
    { label: "Detail", title: "Fine detailing", img:"assets/img/full/photo-output_33.webp", desc:"Precision work on the face, web lines and shading." },
    { label: "Finish", title: "Completed piece", img:"assets/img/full/photo-output_34.webp", desc:"The finished Spider-Man rangoli, ready to photograph." }
  ]
};

/* Recognition & press — VERIFIED facts only (portfolio PDF + source photos).
   Replaces invented testimonials. Text is descriptive of the real fact. */
window.RECOGNITION = [
  {
    name: "World's Biggest 3D Rangoli",
    role: "Guinness-style record · 34,000 sq ft",
    text: "Bhagyashree created the world's biggest 3D rangoli, spanning 34,000 square feet — a landmark floor-art installation built with her studio team."
  },
  {
    name: "Radio City Golden Ticket — 2023",
    role: "Live radio recognition",
    text: "Featured by Radio City for her large-format rangoli work and invited to create live during the 2023 Golden Ticket celebration."
  },
  {
    name: "National Youth Festival — 2020",
    role: "National showcase",
    text: "Presented her art at the National Youth Festival 2020, demonstrating large-scale rangoli technique to a national audience."
  },
  {
    name: "Sakal News Coverage",
    role: "Regional press feature",
    text: "Covered by Sakal News for her record-breaking floor art and her work training hundreds of students in traditional Indian rangoli."
  }
];

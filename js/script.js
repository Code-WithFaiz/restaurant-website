// ============================================
// MENU DATA — edit freely, prices are illustrative
// ============================================
const MENU = {
  starters: [
    { name: "Tandoori Mushroom", desc: "Char-grilled mushrooms, mint chutney", price: "₹280" },
    { name: "Amritsari Fish", desc: "Carom-spiced fried fish, lime", price: "₹340" },
    { name: "Seekh Kebab", desc: "Minced lamb, charred onions", price: "₹360" }
  ],
  mains: [
    { name: "Butter Chicken", desc: "Tomato-cashew gravy, slow butter finish", price: "₹460" },
    { name: "Lamb Rogan Josh", desc: "Kashmiri chilies, yogurt, whole spices", price: "₹520" },
    { name: "Paneer Lababdar", desc: "Cottage cheese, rich tomato gravy", price: "₹400" },
    { name: "Dal Ember", desc: "24-hour slow-cooked black lentils", price: "₹320" }
  ],
  desserts: [
    { name: "Saffron Kulfi", desc: "Pistachio, cardamom, rose", price: "₹220" },
    { name: "Gulab Jamun", desc: "Warm, served with rabri", price: "₹200" }
  ],
  drinks: [
    { name: "Masala Chai", desc: "House blend, slow-brewed", price: "₹120" },
    { name: "Rose Lassi", desc: "Yogurt, rose water, pistachio", price: "₹180" },
    { name: "House Red", desc: "By the glass", price: "₹450" }
  ]
};

function renderMenu(category) {
  const list = document.getElementById("menuList");
  if (!list) return;
  list.innerHTML = MENU[category].map(item => `
    <div class="menu-item reveal in-view">
      <div>
        <div class="menu-item-name">${item.name}</div>
        <div class="menu-item-desc">${item.desc}</div>
      </div>
      <div class="menu-item-price">${item.price}</div>
    </div>
  `).join("");
}

function initMenuTabs() {
  const tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderMenu(tab.dataset.cat);
    });
  });
  renderMenu("starters");
}

// ============================================
// GALLERY — real photos added
// ============================================
const GALLERY = [
  { file: "restaurant_table.png", label: "Table setting" },
  { file: "big_pic_of_tables_gallery_1.png", label: "Dining hall" },
  { file: "big_pic_of_tables_gallery_2.png", label: "Evening ambiance" },
  { file: "big_pic_of_tables_gallery_3.png", label: "Private seating" },
  { file: "chicken_biryani.png", label: "Chicken Biryani" },
  { file: "butter_nan_roti.png", label: "Butter Naan" },
  { file: "panier_tikka.png", label: "Paneer Tikka" },
  { file: "pannier_butter_masal.png", label: "Paneer Butter Masala" },
  { file: "full_meal.png", label: "Full course spread" },
  { file: "sheaf_in_restaurant.png", label: "In the kitchen" }
];

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = GALLERY.map(item => `
    <div class="gallery-item reveal">
      <img src="assets/images/${item.file}" alt="${item.label}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius);">
    </div>
  `).join("");
}
// ============================================
// RESERVATION FORM (front-end only — connect to a backend/email service later)
// ============================================
function initReserveForm() {
  const form = document.getElementById("reserveForm");
  const note = document.getElementById("formNote");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("rName").value.trim();
    const date = document.getElementById("rDate").value;
    if (!name || !date) return;
    note.textContent = `Thanks, ${name} — request noted for ${date}. We'll confirm by phone.`;
    form.reset();
  });
}

// ============================================
// NAV
// ============================================
function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
  document.querySelectorAll(".section-title, .body-text, .gallery-item, .reserve-form")
    .forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initMenuTabs();
  renderGallery();
  initReserveForm();
  initNav();
  initReveal();
});

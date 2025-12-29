/* ======================================================
   EduCore Main JavaScript
   Handles UI Rendering - Details - Forms - WhatsApp
   ====================================================== */

/* ---------- Constants ---------- */
const WHATSAPP_NUMBER = "201124908798";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ---------- Elements ---------- */
const cardsContainer = document.getElementById("cards");
const detailsModal = document.getElementById("detailsModal");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModal");

/* ---------- Render Scholarships Cards ---------- */
function renderScholarships(list) {
  if (!cardsContainer) return;

  cardsContainer.innerHTML = "";

  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "scholarship-card";

    card.innerHTML = `
      <div class="card-image">
        <img src="${item.image}" alt="${item.title}">
        <span class="flag">
          <img src="${item.flag}" alt="${item.country}">
        </span>
      </div>

      <div class="card-body">
        <h3>${item.title}</h3>
        <p class="country">${item.country}</p>
        <p class="degree">${item.degree}</p>
        <p class="funded">${item.funded}</p>

        <button class="details-btn" onclick="openDetails('${item.id}')">
          عرض التفاصيل
        </button>
      </div>
    `;

    cardsContainer.appendChild(card);
  });
}

/* ---------- Open Details Modal ---------- */
function openDetails(id) {
  const scholarship = scholarshipsData.find((s) => s.id === id);
  if (!scholarship) return;

  detailsModal.style.display = "flex";
  document.body.style.overflow = "hidden";

  modalContent.innerHTML = `
    <div class="details-header">
      <img src="${scholarship.image}" class="details-image">
      <h2>${scholarship.title}</h2>
      <p>${scholarship.country} • ${scholarship.degree}</p>
    </div>

    <div class="details-section">
      <h3>وصف المنحة</h3>
      <p>${scholarship.description}</p>
    </div>

    <div class="details-section">
      <h3>المميزات</h3>
      <ul>
        ${scholarship.benefits.map(b => `<li>${b}</li>`).join("")}
      </ul>
    </div>

    <div class="details-section">
      <h3>الشروط</h3>
      <ul>
        ${scholarship.requirements.map(r => `<li>${r}</li>`).join("")}
      </ul>
    </div>

    <div class="details-section form-section">
      <h3>التقديم على المنحة</h3>

      <form id="applyForm">
        <input type="text" id="name" placeholder="الاسم الكامل" required>
        <input type="tel" id="phone" placeholder="رقم واتساب" required>
        <input type="text" value="${scholarship.country}" readonly>
        <input type="text" value="${scholarship.title}" readonly>

        <button type="submit">إرسال الطلب</button>
      </form>
    </div>
  `;

  const form = document.getElementById("applyForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    sendWhatsApp(scholarship.title, scholarship.country);
  });
}

/* ---------- Send WhatsApp ---------- */
function sendWhatsApp(scholarshipName, country) {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  const message = `
مرحبًا، أود التقديم على منحة:

📌 الاسم: ${name}
📱 واتساب: ${phone}
🌍 الدولة: ${country}
🎓 المنحة: ${scholarshipName}
  `;

  const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ---------- Close Modal ---------- */
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    detailsModal.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === detailsModal) {
    detailsModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

/* ---------- Filters ---------- */
function applyFilters() {
  const search = document.getElementById("search").value.toLowerCase();
  const country = document.getElementById("filterCountry").value;

  const filtered = scholarshipsData.filter((s) => {
    const matchSearch = s.title.toLowerCase().includes(search);
    const matchCountry = country === "all" || s.country === country;
    return matchSearch && matchCountry;
  });

  renderScholarships(filtered);
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderScholarships(scholarshipsData);

  const searchInput = document.getElementById("search");
  const countrySelect = document.getElementById("filterCountry");

  if (searchInput) searchInput.addEventListener("input", applyFilters);
  if (countrySelect) countrySelect.addEventListener("change", applyFilters);
});

/* ======================================================
   End of main.js
   ====================================================== */


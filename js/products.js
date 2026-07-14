const products = [
  "iPhone X",
  "iPhone XS",
  "iPhone XS Max",
  "iPhone XR",
  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone 12",
  "iPhone 12 Mini",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 13",
  "iPhone 13 Mini",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",
  "iPhone 17",
  "iPhone 17 Air",
  "iPhone 17 Pro",
  "iPhone 17 Pro Max"
];

const grid = document.querySelector(".products-grid");

products.forEach(phone => {
  grid.innerHTML += `
    <div class="card">
      <img src="https://placehold.co/300x300/111111/ffffff?text=${encodeURIComponent(phone)}" alt="${phone}">
      <h3>${phone}</h3>
    </div>
  `;
});

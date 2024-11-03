// Select elements
const priceFilterToggle = document.getElementById("priceFilterToggle");
const priceRangeContainer = document.getElementById("priceRangeContainer");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const categorySelect = document.getElementById("categorySelect");
const products = document.querySelectorAll(".col-4");

// Function to filter products based on category and price
function filterProducts() {
  const selectedCategory = categorySelect.value;
  const maxPrice = priceFilterToggle.checked ? +priceRange.value : Infinity;

  products.forEach((product) => {
    const category = product.dataset.category;
    const productPrice = +product.dataset.price;

    const isCategoryMatch =
      selectedCategory === "all" || category === selectedCategory;
    const isPriceMatch = productPrice <= maxPrice;

    product.style.display = isCategoryMatch && isPriceMatch ? "block" : "none";
  });
}

// Event listeners for category, price filter toggle, and price range input
categorySelect.addEventListener("change", () => {
  priceFilterToggle.checked = false;
  priceRangeContainer.style.display = "none";
  filterProducts();
});

priceFilterToggle.addEventListener("change", () => {
  priceRangeContainer.style.display = priceFilterToggle.checked
    ? "flex"
    : "none";
  filterProducts();
});

priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  filterProducts();
});

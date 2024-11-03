// Function to update the total price in the header
function updateHeaderTotalPrice() {
  const headerTotalPriceElement = document.getElementById("header-total-price");
  let totalPrice = 0;

  // Iterate through local storage to calculate total price
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.endsWith("_price")) {
      const price = parseFloat(localStorage.getItem(key));
      const quantity = parseInt(
        localStorage.getItem(key.replace("_price", "_quantity"))
      );
      if (!isNaN(price) && !isNaN(quantity)) {
        totalPrice += price * quantity;
      }
    }
  }

  headerTotalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}
// Add event listener to the "Add to Cart" button
document
  .querySelector(".ad-to-cart-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const productImage = document.getElementById("product-img").src;
    const productName = document.querySelector("h1").innerText;
    const productPrice = parseFloat(
      document.getElementById("product-price").innerText.replace("$", "")
    );
    const selectedSize = document.getElementById("sizeSelect").value;
    const quantity = parseInt(document.getElementById("quantityInput").value);

    // Check if a size is selected
    if (selectedSize === "Select Size") {
      alert("Please select a size.");
      return;
    }

    // Create a unique key
    const baseKey = `cart_${productName}_${productPrice}`;

    // Store product details in local storage
    localStorage.setItem(`${baseKey}_image`, productImage);
    localStorage.setItem(`${baseKey}_name`, productName);
    localStorage.setItem(`${baseKey}_price`, productPrice);

    // Update quantity
    const existingQuantity = localStorage.getItem(`${baseKey}_quantity`);
    const newQuantity = existingQuantity
      ? parseInt(existingQuantity) + quantity
      : quantity;
    localStorage.setItem(`${baseKey}_quantity`, newQuantity);

    // Update total price in the header
    updateHeaderTotalPrice();
  });

// Call the function to set the initial total price in the header
updateHeaderTotalPrice();

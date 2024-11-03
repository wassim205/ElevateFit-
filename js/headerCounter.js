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
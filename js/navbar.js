document.getElementById("burger-menu").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const burgerMenuLogo = document.getElementById("burger-menu");
  const totalActive = document.getElementById("header-total-price");
  const CartLogo = document.getElementById("cartLogo");
  mobileMenu.classList.toggle("active");
  burgerMenuLogo.classList.toggle("opacity");
  totalActive.classList.toggle("active");
  CartLogo.classList.toggle("active");
});

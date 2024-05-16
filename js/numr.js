function updateCartCount() {
  const cartCountDiv = document.getElementById("cart-count");
  if (!cartCountDiv) return; 
  const products = JSON.parse(localStorage.getItem("products")) || [];
  cartCountDiv.textContent = products.length.toString(); 
}

updateCartCount();

document.addEventListener("cartUpdated", updateCartCount);

function triggerCartUpdateEvent() {
  document.dispatchEvent(new Event("cartUpdated"));
}

window.addEventListener("storage", function(event) {
  if (event.key === "products") {
      triggerCartUpdateEvent(); 
  }
});


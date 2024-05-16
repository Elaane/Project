document.addEventListener("click", function(event) {
  if (event.target.closest(".add-X")) {
      const button = event.target.closest(".add-X");
      const product = {
          name: button.getAttribute("data-name"),
          price: parseFloat(button.getAttribute("data-price"))
      };

      let products = JSON.parse(localStorage.getItem("products")) || [];
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
      
      triggerCartUpdateEvent();
  }
});

document.querySelectorAll('.add-ring').forEach(button => {
  button.addEventListener('click', () => {
      
      const product = {
          name: button.getAttribute('data-name'),
          price: parseFloat(button.getAttribute('data-price'))
      };
      
      addProductToLocalStorage(product);
  });
});


function addProductToLocalStorage(product) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  if (products && Array.isArray(products)) {
      products.push(product);
  } else {
      products = [product];
  }

  localStorage.setItem("products", JSON.stringify(products));
}

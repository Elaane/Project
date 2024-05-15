let korgDiv = document.getElementById("korg");

function vissaProdukter() {
  korgDiv.innerHTML = ""; 
  
  let products = JSON.parse(localStorage.getItem("products"));

  if (products && Array.isArray(products) && products.length > 0) {
    products.forEach((product, index) => {
      korgDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="korg-item" data-index="${index}">
          <div class="korg-text">Namn: ${product.name} Pris: ${product.price}</div>
          <button class="delete-btn">Delete</button>
        </div>`
      );
    });
  
  } else {
    korgDiv.insertAdjacentHTML("beforeend", `<div>Varukorgen är tom.</div>`);
  }
}

function taBortProdukt(event) {
  const productIndex = parseInt(event.target.parentElement.getAttribute('data-index'));
  let products = JSON.parse(localStorage.getItem("products"));

  if (products && Array.isArray(products)) {
    products.splice(productIndex, 1); 
    localStorage.setItem("products", JSON.stringify(products)); 

    event.target.parentElement.remove();
    vissaProdukter();
  }
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    taBortProdukt(event); 
  }
});

vissaProdukter();


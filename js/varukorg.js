let korgDiv = document.getElementById("korg");
let totalCostDiv = document.getElementById("total-cost");

function vissaProdukter() {
  korgDiv.innerHTML = ""; 
  
  let products = JSON.parse(localStorage.getItem("products"));
  let totalCost=0;

  if (products && Array.isArray(products) && products.length > 0) {
    products.forEach((product, index) => {
      korgDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="korg-item" data-index="${index}">
          <div class="korg-text"> ${product.name} - ${product.price} SEK</div>
          <button class="delete-btn"><img src = "bilder/cross.png" class="x" alt= "X"/></button>
        </div>`
      );
      totalCost += product.price;
    });
    
  } else {
    korgDiv.insertAdjacentHTML("beforeend", `<div>Varukorgen är tom.</div>`);
  }
  updateTotalCost(totalCost); 
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

function updateTotalCost(totalCost) {
  totalCostDiv.textContent = `SUMMAN: ${totalCost} SEK`;
}

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("x")) {
    taBortProdukt(event); 
  }
});

vissaProdukter();


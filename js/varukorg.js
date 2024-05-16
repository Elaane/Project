

function vissaProdukter() {
  let korgDiv = document.getElementById("korg");
  let totalKostDiv = document.getElementById("total-kost");

  if (!korgDiv || !totalKostDiv) return; 

  korgDiv.innerHTML = ""; 

  let products = JSON.parse(localStorage.getItem("products")) || [];
  let totalKost = 0;

  if (products.length > 0) {
      products.forEach((product, index) => {
          korgDiv.insertAdjacentHTML(
              "beforeend",
              `<div class="korg-item" data-index="${index}">
                  <div class="korg-text">${product.name} - ${product.price} SEK</div>
                  <button class="delete-btn"><img src="bilder/cross.png" class="tunna" alt="X"/></button>
              </div>`
          );
          totalKost += parseFloat(product.price);
      });
  } else {
      korgDiv.insertAdjacentHTML("beforeend", `<div>Varukorgen är tom.</div>`);
  }

  totalKostDiv.textContent = `SUMMAN: ${totalKost} SEK`;
}

function taBortProdukt(event) {
  const productIndex = parseInt(event.target.closest(".korg-item").getAttribute("data-index"));
  let products = JSON.parse(localStorage.getItem("products"));

  if (products && Array.isArray(products)) {
      products.splice(productIndex, 1);
      localStorage.setItem("products", JSON.stringify(products));
      vissaProdukter(); 
      triggerCartUpdateEvent(); 
  }
}

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("x")) {
      taBortProdukt(event); 
  }
});

vissaProdukter();

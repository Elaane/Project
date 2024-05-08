let korgDiv = document.getElementById("korg")

let products = JSON.parse(localStorage.getItem("products"))

console.log(products)

if (Array.isArray(products)) {
  products.forEach((product) => {
    korgDiv.insertAdjacentHTML(
      "beforeend",
      `<div>Namn: ${product.name} Pris: ${product.price}</div>`
    )
  })
} else {
  korgDiv.insertAdjacentHTML("beforeend", `<div>Varukorgen är tom.</div>`)
}
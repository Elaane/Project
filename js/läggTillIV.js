document.getElementById("läggTill").addEventListener("click", () => {
    addProductToLocalStorage({ name: "CLAW STONE HEART RING", price: 4795,

     })
     addProductToLocalStorage({ name: "CLAW PEARL RING", price: 4795,

     })
  })
  
 
  function addProductToLocalStorage(product) {
 
    let products = JSON.parse(localStorage.getItem("products"))
  

    if (products && Array.isArray(products)) {
    
      products.push(product)
    } else {
   
      products = [product]
    }
  
    localStorage.setItem("products", JSON.stringify(products))
}
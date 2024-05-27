document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var name = document.getElementById("namn").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("meddelande").value;
  

    document.getElementById("bekraftelse").style.display = "block";
    document.getElementById("bekraftelse").textContent = "Tack för ditt meddelande, " + name + "! Vi återkommer snart.";
  
    setTimeout(function() {
        document.getElementById("contact-form").reset(); 
        document.getElementById("bekraftelse").style.display = "none"; 
      }, 3000); 
});
  

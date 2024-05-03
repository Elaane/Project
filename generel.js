
const images = document.querySelectorAll(".Bilder");

const scaleFactor = 1.2;

images.forEach(image => {
  const startHeight = image.height;
  const startWidth = image.width;
  image.style.transition = "transform 0.5s ease";

  const text = image.nextElementSibling;
  const kost = text.nextElementSibling;
  const påse = image.parentElement.querySelector(".påse img");

  text.style.opacity = 0;
  kost.style.opacity = 0;
  påse.style.opacity = 0;

image.addEventListener("mouseover",() => {
image.style.transform = `scale(${scaleFactor})`;
text.style.opacity = 1; 
kost.style.opacity = 1;  
påse.style.opacity = 1;
image.classList.add("glow");
});

image.addEventListener("mouseout",() => {
    image.style.transform = "scale(1)";
    text.style.opacity = 0; 
    kost.style.opacity = 0;
    påse.style.opacity = 0;
    image.classList.remove("glow");
});
});
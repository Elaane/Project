image = document.getElementById("punkt");

text.style.opacity = 0;

image.addEventListener("mouseover",() => {
    text.style.opacity = 1;
});

image.addEventListener("mouseout",() => {
    text.style.opacity = 0;
});
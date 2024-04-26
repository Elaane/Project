const image = document.getElementById("ring1");

const startHeight = image.height;
const startWidth = image.width;

const scaleFactor = 1.1;

image.addEventlistener("mouseover", () => {
image.style.height = "${startHeight * scaleFactor}px";
image.style.width = "${startWidth * scaleFactor}px";   
image.style.borderColor = "white";
});

image.addEventlistener("mouseout", () =>{
    image.style.height = "${startHeight}";
    image.style.width = "${startWidth}";
    image.style.borderColor = "";
});
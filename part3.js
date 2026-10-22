//t5
let mouseBox = document.querySelector("#mouseBox");

mouseBox.addEventListener("mouseover", function() {
    mouseBox.style.backgroundColor = "#ffb3de";
});

mouseBox.addEventListener("mouseout", function() {
    mouseBox.style.backgroundColor = "#b3deff";
});



//t6
let textInput = document.querySelector("#textInput");
let output = document.querySelector("#output");

textInput.addEventListener("keyup", function() {
    output.textContent = textInput.value;
});
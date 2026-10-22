//t2
let changeTextButton = document.querySelector("#changeText");
let message = document.querySelector("#message");

if (changeTextButton) {
    changeTextButton.addEventListener("click", function() {
        message.textContent = "The text has been changed!";
    });
}



//t3
let box = document.querySelector("#box");
let boxText = document.querySelector("#boxText");

let colorButton = document.querySelector("#changeColor");
let sizeButton = document.querySelector("#changeSize");

colorButton.addEventListener("click", function() {
    box.style.backgroundColor = "#ffb3de";
});

sizeButton.addEventListener("click", function() {
    boxText.style.fontSize = "24px";
});
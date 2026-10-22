//t2
let changeTextButton = document.querySelector("#changeText");
let message = document.querySelector("#message");

if (changeTextButton) {
    changeTextButton.addEventListener("click", function() {
        message.textContent = "The text has been changed!";
    });
}
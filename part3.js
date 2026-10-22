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



//t7
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

document.querySelector("#add").addEventListener("click", function() {
    result.textContent = "Result: " + (Number(num1.value) + Number(num2.value));
});

document.querySelector("#subtract").addEventListener("click", function() {
    result.textContent = "Result: " + (Number(num1.value) - Number(num2.value));
});

document.querySelector("#multiply").addEventListener("click", function() {
    result.textContent = "Result: " + (Number(num1.value) * Number(num2.value));
});

document.querySelector("#divide").addEventListener("click", function() {
    if (Number(num2.value) === 0) {
        result.textContent = "Cannot divide by zero";
    } else {
        result.textContent = "Result: " + (Number(num1.value) / Number(num2.value));
    }
});
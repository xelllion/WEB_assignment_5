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



//t4
let itemList = document.querySelector("#itemList");
let addButton = document.querySelector("#addItem");
let removeButton = document.querySelector("#removeItem");

let itemNumber = 1;

addButton.addEventListener("click", function() {
    let item = document.createElement("li");
    item.textContent = "Item " + itemNumber;
    itemList.appendChild(item);
    itemNumber++;
});

removeButton.addEventListener("click", function() {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
    }
});
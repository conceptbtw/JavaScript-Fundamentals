const button = document.querySelector("#btn");
const messageElement = document.querySelector("#message");
button.addEventListener("click", function() {
    messageElement.textContent = "I was pressed!";
});
button.addEventListener("mouseover", function() {
    messageElement.textContent = "Mouse on me!";
});
button.addEventListener("mouseout", function() {
    messageElement.textContent = "Mouse is not on me!";
});

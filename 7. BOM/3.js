function changeToBlue() {
    document.body.style.backgroundColor = "blue";
}

function changeToPink() {
    document.body.style.backgroundColor = "pink";
}

function changeToBrown() {
    document.body.style.backgroundColor = "#654321";
}

function changeToWhite() {
    document.body.style.backgroundColor = "white";
}

function changeToYellow() {
    document.body.style.backgroundColor = "yellow";
}

document.getElementById("button1").addEventListener("click", changeToBlue);
document.getElementById("button2").addEventListener("dblclick", changeToPink);
document.getElementById("button3").addEventListener("mousedown", changeToBrown);
document.getElementById("button3").addEventListener("mouseup", changeToWhite);
document.getElementById("link").addEventListener("mouseover", changeToYellow);
document.getElementById("link").addEventListener("mouseout", changeToWhite);

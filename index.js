const elementBox = document.getElementById("box");

const elementBoxStyle = document.getElementById("box").style;

function turnRed() {
    elementBoxStyle.backgroundColor = "red";
}

function turnWhite() {
    elementBoxStyle.backgroundColor = "white";
}

function turnBlue() {
    elementBoxStyle.backgroundColor = "blue";
}

function turnYellow () {
    elementBoxStyle.backgroundColor = "yellow";
}

function turnGreen () {
    elementBoxStyle.backgroundColor = "green";
}

function turnOrange () {
    elementBoxStyle.backgroundColor = "orange";
}

function keyPressed () {
    switch (event.which) {
        case 82:
            turnRed();
            break;

        case 66:
            turnBlue();
            break;

        case 71:
            turnGreen();
            break;

        case 89:
            turnYellow();
            break;

        case 79:
            turnOrange();
    }
}

elementBox.addEventListener("mousedown", turnRed);

elementBox.addEventListener("mouseup", turnYellow);

elementBox.addEventListener("dblclick", turnGreen);

elementBox.addEventListener("mouseover", turnBlue);

elementBox.addEventListener("mouseout", turnWhite); 

document.addEventListener("keydown", keyPressed);

window.addEventListener("scroll", turnOrange, true);
// Не работает, т.к. код устарел
let tree = document.getElementById("tree");
tree.onclick = function (evt) {
    let target = evt.target || evt.srcElement;

    // Раскрыть-закрыть вложенные элементы списка
    let node = target.getElementsByTagName("ul")[0];
    if (!node) return; // Нет вложенных элементов
    node.style.display = node.style.display ? "" : "none";
}

let btns = document.querySelectorAll(".btn");
let box = document.querySelector(".box");

function MoveDown() {
    let coordY = 50;
    let time = setInterval(frame, 10);
    function frame() {
        if (coordY == 350) {
            clearInterval(time);
        } else {
            coordY += 5;
            box.style.top = coordY + "px";
        }
    }
}

function MoveUp() {
    let coordY = 350;
    let time = setInterval(frame, 10);
    function frame() {
        if (coordY == 50) {
            clearInterval(time);
        } else {
            coordY -= 5;
            box.style.top = coordY + "px";
        }
    }
}

function MoveRight() {
    let coordX = 50
    let time = setInterval(frame, 10);
    function frame() {
        if (coordX == 350) {
            clearInterval(time);
        } else {
            coordX += 5;
            box.style.left = coordX + "px";
        }
    }
}

function MoveLeft() {
    let coordX = 350
    let time = setInterval(frame, 10);
    function frame() {
        if (coordX == 50) {
            clearInterval(time);
        } else {
            coordX -= 5;
            box.style.left = coordX + "px";
        }
    }
}

btns[0].addEventListener("click", MoveDown);
btns[1].addEventListener("click", MoveUp);
btns[2].addEventListener("click", MoveLeft);
btns[3].addEventListener("click", MoveRight);
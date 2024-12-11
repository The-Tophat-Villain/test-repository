alert("Используйте клавиши стрелок для перемещения Реда (красной птицы).");

function ChangeImg(obj, source) {
    obj.src = "./assets/img/" + source + ".png";
}

function RotateImg(obj) {
    obj.style.transform = getRandomInRange(0, 1) == 0 ? `rotate(${getRandomInRange(0, 45)}deg)` : `rotate(-${getRandomInRange(0, 45)}deg)`;
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let record = 0;
let enemies = document.querySelectorAll(".enemy");
let musicStarted = false;
let secondEnemy = false;
let thirdEnemy = false;
let fourthEnemy = false;
let fifthEnemy = false;
let sixthEnemy = false;
let seventhEnemy = false;

function MoveRect(e) {
    // Запуск музыки и крика Реда
    if (!musicStarted) {
        musicStarted = true;
        document.getElementById("angry_music").volume = 0.25;
        document.getElementById("angry_music").play();
        document.getElementById("red_scream").play();
    }

    // Получение стиля птицы
    let bird = document.getElementById("bird");
    let csBird = window.getComputedStyle(bird);
    let leftBird = parseInt(csBird.marginLeft);
    let topBird = parseInt(csBird.marginTop);

    // Управление
    switch (e.keyCode) {
        case 37:
            if (leftBird > 0) {
                bird.style.marginLeft = leftBird - 20 + "px";
                record -= 10;
            }
            ChangeImg(document.querySelector("#bird img"), "red_left");
            break;
        case 38:
            if (topBird > 0) {
                bird.style.marginTop = topBird - 20 + "px";
                record -= 10;
            }
            ChangeImg(document.querySelector("#bird img"), "red_back");
            break;
        case 39:
            if (leftBird < document.documentElement.clientWidth - 180) {
                bird.style.marginLeft = leftBird + 20 + "px";
                record -= 10;
            }
            ChangeImg(document.querySelector("#bird img"), "red_right");
            break;
        case 40:
            if (topBird < document.documentElement.clientHeight - 180) {
                bird.style.marginTop = topBird + 20 + "px";
                record -= 10;
            }
            ChangeImg(document.querySelector("#bird img"), "red_front");
            break;
    }

    // 
    for (let enemy of enemies) {

        if (enemy == enemies[1] && !secondEnemy) continue;
        if (enemy == enemies[2] && !thirdEnemy) continue;
        if (enemy == enemies[3] && !fourthEnemy) continue;
        if (enemy == enemies[4] && !fifthEnemy) continue;
        if (enemy == enemies[5] && !sixthEnemy) continue;
        if (enemy == enemies[6] && !seventhEnemy) continue;

        let leftEnemy = parseInt(getComputedStyle(enemy).marginLeft);
        let topEnemy = parseInt(getComputedStyle(enemy).marginTop);
        let insidePig = leftBird > leftEnemy - 180 && leftBird < leftEnemy + 200 && topBird > topEnemy - 120 && topBird < topEnemy + 180 && (enemy == enemies[0] || enemy == enemies[1]);
        let insideTNT = leftBird > leftEnemy - 120 && leftBird < leftEnemy + 170 && topBird > topEnemy - 120 && topBird < topEnemy + 140 && (enemy == enemies[2] || enemy == enemies[3] || enemy == enemies[4] || enemy == enemies[5] || enemy == enemies[6]);

        if (insidePig || insideTNT) {
            // Перемещение врага от птицы
            // x = Птица
            // o = Враг
            // - = Пустота
            if (leftBird < document.documentElement.clientWidth / 2 && topBird < document.documentElement.clientHeight / 2) { // Птица слева сверху
                if (getRandomInRange(0, 1) == 1) {
                    /*
                    x-
                    oo
                    */
                    enemy.style.marginLeft = getRandomInRange(0, document.documentElement.clientWidth / 2) + "px";
                    enemy.style.marginTop = getRandomInRange(document.documentElement.clientHeight / 2, document.documentElement.clientHeight - 240) + "px";
                } else {
                    /*
                    xo
                    --
                    */
                    enemy.style.marginLeft = getRandomInRange(document.documentElement.clientWidth / 2, document.documentElement.clientWidth - 240) + "px";
                    enemy.style.marginTop = getRandomInRange(0, document.documentElement.clientHeight / 2) + "px";
                }
            } else if (leftBird >= document.documentElement.clientWidth / 2 && topBird < document.documentElement.clientHeight / 2) { // Птица справа сверху
                if (getRandomInRange(0, 1) == 1) {
                    /*
                    -x
                    oo
                    */
                    enemy.style.marginLeft = getRandomInRange(0, document.documentElement.clientWidth - 240) + "px";
                    enemy.style.marginTop = getRandomInRange(document.documentElement.clientHeight / 2, document.documentElement.clientHeight - 240) + "px";
                } else {
                    /*
                    ox
                    --
                    */
                    enemy.style.marginLeft = getRandomInRange(0, document.documentElement.clientWidth / 2) + "px";
                    enemy.style.marginTop = getRandomInRange(0, document.documentElement.clientHeight / 2) + "px";
                }
            } else if (leftBird < document.documentElement.clientWidth / 2 && topBird >= document.documentElement.clientHeight / 2) { // Птица слева снизу
                if (getRandomInRange(0, 1) == 1) {
                    /*
                    oo
                    x-
                    */
                    enemy.style.marginLeft = getRandomInRange(0, document.documentElement.clientWidth - 240) + "px";
                    enemy.style.marginTop = getRandomInRange(0, document.documentElement.clientHeight / 2) + "px";
                } else {
                    /*
                    --
                    xo
                    */
                    enemy.style.marginLeft = getRandomInRange(document.documentElement.clientWidth / 2, document.documentElement.clientWidth - 240) + "px";
                    enemy.style.marginTop = getRandomInRange(document.documentElement.clientHeight / 2, document.documentElement.clientHeight - 240) + "px";
                }
            } else if (leftBird >= document.documentElement.clientWidth / 2 && topBird >= document.documentElement.clientHeight / 2) { // Птица справа снизу
                if (getRandomInRange(0, 1) == 1) {
                    /*
                    oo
                    -x
                    */
                    enemy.style.marginLeft = getRandomInRange(0, document.documentElement.clientWidth - 240) + "px";
                    enemy.style.marginTop = getRandomInRange(0, document.documentElement.clientHeight / 2) + "px";
                } else {
                    /*
                    --
                    ox
                    */
                    enemy.style.marginLeft = getRandomInRange(document.documentElement.clientWidth / 2, document.documentElement.clientWidth - 240) + "px";
                    enemy.style.marginTop = getRandomInRange(0, document.documentElement.clientHeight / 2) + "px";
                }
            }

            RotateImg(enemy);

            if (enemy == enemies[0] || enemy == enemies[1]) {

                if (enemy.getElementsByTagName("img")[0].getAttribute("src") == "./assets/img/pig_and_egg.png") {
                    switch (getRandomInRange(0, 5)) {
                        case 0:
                            enemy.getElementsByTagName("img")[0].src = "./assets/img/KingPig.png";
                            break;
                        case 1:
                            enemy.getElementsByTagName("img")[0].src = "./assets/img/Scaredy_pig.png";
                            break;
                        case 2:
                            enemy.getElementsByTagName("img")[0].src = "./assets/img/Pig.png";
                            break;
                        case 3:
                            enemy.getElementsByTagName("img")[0].src = "./assets/img/CorporalPig.png";
                            break;
                        case 4:
                            enemy.getElementsByTagName("img")[0].src = "./assets/img/ForemanPig.png";
                            break;
                        case 5:
                            enemy.getElementsByTagName("img")[0].src = "./assets/img/Scaredhelmetpig.png";
                            break;
                    }
                    switch (getRandomInRange(0, 2)) {
                        case 0:
                            document.getElementById("egg_bonus").src = "./assets/audio/Bird Next Military A1.mp3";
                            break;
                        case 1:
                            document.getElementById("egg_bonus").src = "./assets/audio/Bird Next Military A2.mp3";
                            break;
                        case 2:
                            document.getElementById("egg_bonus").src = "./assets/audio/Bird Next Military A3.mp3";
                            break;
                    }
                    document.getElementById("egg_bonus").play();
                    record += 2500;
                }

                switch (getRandomInRange(0, 6)) {
                    case 0:
                        enemy.getElementsByTagName("img")[0].src = "./assets/img/pig_and_egg.png";
                        break;
                    case 1:
                        enemy.getElementsByTagName("img")[0].src = "./assets/img/Scaredy_pig.png";
                        break;
                    case 2:
                        enemy.getElementsByTagName("img")[0].src = "./assets/img/Pig.png";
                        break;
                    case 3:
                        enemy.getElementsByTagName("img")[0].src = "./assets/img/CorporalPig.png";
                        break;
                    case 4:
                        enemy.getElementsByTagName("img")[0].src = "./assets/img/ForemanPig.png";
                        break;
                    case 5:
                        enemy.getElementsByTagName("img")[0].src = "./assets/img/KingPig.png";
                        break;
                    case 6:
                        enemy.getElementsByTagName("img")[0].src = "./assets/img/Scaredhelmetpig.png";
                        break;
                }
                switch (getRandomInRange(0, 12)) {
                    case 0:
                        document.getElementById("pig_scream").src = "./assets/audio/Pigglette_death01.mp3";
                        break;
                    case 1:
                        document.getElementById("pig_scream").src = "./assets/audio/Pigglette_death02.mp3";
                        break;
                    case 2:
                        document.getElementById("pig_scream").src = "./assets/audio/Pigglette_death03.mp3";
                        break;
                    case 3:
                        document.getElementById("pig_scream").src = "./assets/audio/Pigglette_death04.mp3";
                        break;
                    case 4:
                        document.getElementById("pig_scream").src = "./assets/audio/Piglette Destroyed.mp3";
                        break;
                    case 5:
                        document.getElementById("pig_scream").src = "./assets/audio/Piglette Damage A1.mp3";
                        break;
                    case 6:
                        document.getElementById("pig_scream").src = "./assets/audio/Piglette Damage A2.mp3";
                        break;
                    case 7:
                        document.getElementById("pig_scream").src = "./assets/audio/Piglette Damage A3.mp3";
                        break;
                    case 8:
                        document.getElementById("pig_scream").src = "./assets/audio/Piglette Damage A4.mp3";
                        break;
                    case 9:
                        document.getElementById("pig_scream").src = "./assets/audio/Piglette Damage A5.mp3";
                        break;
                    case 10:
                        document.getElementById("pig_scream").src = "./assets/audio/Piglette Damage A6.mp3";
                        break;
                    case 11:
                        document.getElementById("pig_scream").src = "./assets/audio/Piglette Damage A7.mp3";
                        break;
                    case 12:
                        document.getElementById("pig_scream").src = "./assets/audio/Piglette Damage A8.mp3";
                        break;
                }

                document.getElementById("pig_scream").play();
                record += 5000;

            } else if (enemy == enemies[2] || enemy == enemies[3] || enemy == enemies[4] || enemy == enemies[5] || enemy == enemies[6]) {
                switch (getRandomInRange(0, 3)) {
                    case 0:
                        document.getElementById("red_ouch").src = "./assets/audio/Bird 01 Collision A1.mp3";
                        break;
                    case 1:
                        document.getElementById("red_ouch").src = "./assets/audio/Bird 01 Collision A2.mp3";
                        break;
                    case 2:
                        document.getElementById("red_ouch").src = "./assets/audio/Bird 01 Collision A3.mp3";
                        break;
                    case 3:
                        document.getElementById("red_ouch").src = "./assets/audio/Bird 01 Collision A4.mp3";
                        break;
                }
                document.getElementById("tnt_explode").play();
                document.getElementById("red_ouch").play();
                record -= 50000;

                if (getRandomInRange(0, 1) == 1) {
                    switch (getRandomInRange(0, 3)) {
                        case 0:
                            document.getElementById("pig_laugh").src = "./assets/audio/PigLaugh01.mp3";
                            break;
                        case 1:
                            document.getElementById("pig_laugh").src = "./assets/audio/PigLaugh02.mp3";
                            break;
                        case 2:
                            document.getElementById("pig_laugh").src = "./assets/audio/PigLaugh03.mp3";
                            break;
                        case 3:
                            document.getElementById("pig_laugh").src = "./assets/audio/PigLaugh04.mp3";
                            break;
                    }
                    document.getElementById("pig_laugh").play();
                    let laughingEnemy = enemies[getRandomInRange(0, 1)];
                    switch (laughingEnemy.getElementsByTagName("img")[0].getAttribute("src")) {
                        case "./assets/img/pig_and_egg.png":
                            laughingEnemy.getElementsByTagName("img")[0].src = "./assets/img/Mition_Failled.png";
                            break;
                        case "./assets/img/Scaredy_pig.png":
                            laughingEnemy.getElementsByTagName("img")[0].src = "./assets/img/Mition_Failled.png";
                            break;
                        case "./assets/img/Pig.png":
                            laughingEnemy.getElementsByTagName("img")[0].src = "./assets/img/Mition_Failled.png";
                            break;
                        case "./assets/img/CorporalPig.png":
                            laughingEnemy.getElementsByTagName("img")[0].src = "./assets/img/Helmet_Piggy.png";
                            break;
                        case "./assets/img/Scaredhelmetpig.png":
                            laughingEnemy.getElementsByTagName("img")[0].src = "./assets/img/Helmet_Piggy.png";
                            break;
                        case "./assets/img/ForemanPig.png":
                            laughingEnemy.getElementsByTagName("img")[0].src = "./assets/img/Moustashe_Pig.png";
                            break;
                        case "./assets/img/KingPig.png":
                            laughingEnemy.getElementsByTagName("img")[0].src = "./assets/img/King_Failled.png";
                            break;
                        default:
                            break;
                    }
                }
            }

            if (!secondEnemy && record >= 50000) {
                secondEnemy = true;
                enemies[1].style.display = "block";
                document.getElementById("pig_oink").play();
            }
            if (!thirdEnemy && record >= 125000) {
                thirdEnemy = true;
                enemies[2].style.display = "block";
            }
            if (!fourthEnemy && record >= 200000) {
                fourthEnemy = true;
                enemies[3].style.display = "block";
            }
            if (!fifthEnemy && record >= 300000) {
                fifthEnemy = true;
                enemies[4].style.display = "block";
            }
            if (!sixthEnemy && record >= 400000) {
                sixthEnemy = true;
                enemies[5].style.display = "block";
            }
            if (!seventhEnemy && record >= 500000) {
                seventhEnemy = true;
                enemies[6].style.display = "block";
            }
        }
    }

    if (record < 0) record = 0;
    document.querySelector("h1").innerHTML = "Score<br>" + record;
}

addEventListener("keydown", MoveRect);

for (let enemy of enemies) {
    enemy.style.marginLeft = getRandomInRange(250, document.documentElement.clientWidth - 240) + "px";
    enemy.style.marginTop = getRandomInRange(0, document.documentElement.clientHeight - 240) + "px";
    RotateImg(enemy);
}

function ChangeMusicVolume() {
    let input = document.querySelector("#music_volume input");
    document.getElementById("angry_music").volume = parseInt(input.value) / 100;
    document.documentElement.style.setProperty("--volume-num", `"${input.value}"`);
}
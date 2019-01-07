// Je declare les elements de ma premiere interfaces
let eltHome = document.getElementById("screen-home");
let eltBtnGo = document.getElementById("btn-go");
// Je declare les elements de ma Deuxieme interfaces
let eltPlay = document.getElementById("screen-play");
let eltScore = document.getElementsByClassName("score");
let eltTimeLeft = document.getElementById("time-left");
let eltLife1 = document.getElementById("life1");
let eltLife2 = document.getElementById("life2");
let eltLife3 = document.getElementById("life3");
// Je declare les elements de ma Troisieme interfaces
let eltEndGame = document.getElementById("screen-end-game");
let eltClassement = document.getElementById("classement");
let eltClassementJoueur = document.getElementById("classement-joueur");
let eltBtnRegisterScore = document.getElementById("register-score");
let eltBtnNewGame = document.getElementById("new-game");
// Je declare les elements de ma Quatrieme interfaces
let seconde1;
let seconde2;
let seconde3;
let seconde4;
let seconde5;
let seconde6;
let seconde7;
let seconde8;
let seconde9;
let seconde10;
let seconde11;
let seconde12;
let seconde13;
let seconde14;
let seconde15;
let seconde16;
let seconde17;
let seconde18;
let seconde19;
let seconde20;
let seconde21;
let levelUp = 0;
var level1 = false;
var level2 = false;
var level3 = false;
var level4 = false;
var level5 = false;
var score = 0;
var timeLeft = 4;
let classement = 0;
//je creer les 10 premier joueur du classement
let joueur1 = document.createElement("h3");
joueur1.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur1);

let joueur2 = document.createElement("h3");
joueur2.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur2);

let joueur3 = document.createElement("h3");
joueur3.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur3);

let joueur4 = document.createElement("h3");
joueur4.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur4);

let joueur5 = document.createElement("h3");
joueur5.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur5);

let joueur6 = document.createElement("h3");
joueur6.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur6);

let joueur7 = document.createElement("h3");
joueur7.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur7);

let joueur8 = document.createElement("h3");
joueur8.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur8);

let joueur9 = document.createElement("h3");
joueur9.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur9);

let joueur10 = document.createElement("h3");
joueur10.textContent = "Joueur " + score;
eltClassementJoueur.appendChild(joueur10);
eltClassement.textContent = "Votre classement " + classement;
eltScore[0].textContent = score;
eltScore[1].textContent = "Votre score " + score;
eltEndGame.hidden = true;
eltPlay.hidden = true;
let letterGenerator = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let wordGenerator = ["BUG", "DEBUG", "HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "GIT", "GITHUB", "ANGULAR", "UX", "DESIGN", "OPENSOURCE", "WORLDWIDEWEB", "DEVELOPER", "FRONT-END", "BACK-END", "FULL-STACK", "RGPD", "PHP", "MYSQL", "APPLE", "GOOGLE", "FACEBOOK", "TWITTER", "LINUX", "PHOTOSHOP"];
let eltWordToPress = document.getElementById("word-to-press")
eltWordToPress.textContent = "";
let eltWordToWrite = document.getElementById("word-to-write")
let eltAnimation = document.getElementById("animation-press");
eltWordToWrite.value = "";
eltBtnGo.addEventListener("click", function() {
    level();
    eltHome.hidden = true;
    eltPlay.hidden = false;
    $(window).scrollTop(0);
    eltWordToWrite.focus();

}, false);

let life = 3;

function lose() {
    if (timeLeft <= 0 && life === 1) {
        eltLife3.classList.add("lost-life");
        delayedAlert(eltLife3);
        life--;
        eltEndGame.hidden = false;
        eltPlay.hidden = true;
    }
    if (timeLeft <= 0 && life === 2) {
        eltLife2.classList.add("lost-life");
        delayedAlert(eltLife2);
        life--;
    }
    if (timeLeft <= 0 && life === 3) {
        eltLife1.classList.add("lost-life");
        delayedAlert(eltLife1);
        life--;
    }
}

function delayedAlert(life) {
    let eltLife = life;
    window.setTimeout(function() {
        loseLife(eltLife)
    }, 500);
}

function loseLife(life) {
    life.hidden = true;
}

function loseKey() {
    if (life === 1) {
        eltLife3.classList.add("lost-life");
        delayedAlert(eltLife3);
        life--;
        eltEndGame.hidden = false;
        eltPlay.hidden = true;
    }
    if (life === 2) {
        eltLife2.classList.add("lost-life");
        delayedAlert(eltLife2);
        life--;
    }
    if (life === 3) {
        eltLife1.classList.add("lost-life");
        delayedAlert(eltLife1);
        life--;
    }
    eltAnimation.classList.add("letter-wrong");
    seconde20 = window.setTimeout(function() {
        eltAnimation.classList.remove("letter-wrong");
    }, 500);
}

function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
window.addEventListener("keypress", function(event) {
    if (levelUp < 5 && eltPlay.hidden === false) {
        if (eltWordToPress.textContent === event.key.toUpperCase()) {
            score++;
            eltAnimation.classList.add("letter-win");
            seconde21 = window.setTimeout(function() {
                eltAnimation.classList.remove("letter-win");
                level();
            }, 500);
            eltWordToWrite.value = "";
            eltScore[0].textContent = score;
            eltScore[1].textContent = "Votre score " + score;
        } else {
            loseKey()
        }
    }
    if (levelUp >= 5 && event.key == "Enter" && eltPlay.hidden === false) {
        if (eltWordToWrite.value.toUpperCase() === eltWordToPress.textContent) {
            score++;
            eltWordToWrite.value = "";
            eltAnimation.classList.add("letter-win");
            seconde21 = window.setTimeout(function() {
                eltAnimation.classList.remove("letter-win");
                level();
            }, 500);
            eltScore[0].textContent = score;
            eltScore[1].textContent = "Votre score " + score;
        } else {
            loseKey()
        }
    }
}, false);


function level() {
    window.clearTimeout(seconde1);
    window.clearTimeout(seconde2);
    window.clearTimeout(seconde3);
    window.clearTimeout(seconde4);
    window.clearTimeout(seconde5);
    window.clearTimeout(seconde6);
    window.clearTimeout(seconde7);
    window.clearTimeout(seconde8);
    window.clearTimeout(seconde9);
    window.clearTimeout(seconde10);
    window.clearTimeout(seconde11);
    window.clearTimeout(seconde12);
    window.clearTimeout(seconde13);
    window.clearTimeout(seconde14);
    window.clearTimeout(seconde15);
    window.clearTimeout(seconde16);
    window.clearTimeout(seconde17);
    window.clearTimeout(seconde18);
    window.clearTimeout(seconde19);
    window.clearTimeout(seconde20);
    window.clearTimeout(seconde21);
    if (score === 0 && level1 === false) {
        level1 = true;
        levelUp = 1;
        messageNiveau();
    } else if (score === 10 && level2 === false) {
        level2 = true;
        timeLeft = 5;
        levelUp = 2;
        messageNiveau();
    } else if (score === 20 && level3 === false) {
        level3 = true;
        timeLeft = 5;
        levelUp = 3;
        messageNiveau();
    } else if (score === 30 && level4 === false) {
        level4 = true;
        timeLeft = 5;
        levelUp = 4;
        messageNiveau();
    } else if (score === 40 && level5 === false) {
        level5 = true;
        timeLeft = 5;
        levelUp = 5;
        messageNiveau();
    } else {
        nextStep(levelUp);
    }
        openKeyboard();
}

function messageNiveau() {
    window.clearTimeout(seconde1);
    window.clearTimeout(seconde2);
    window.clearTimeout(seconde3);
    window.clearTimeout(seconde4);
    window.clearTimeout(seconde5);
    window.clearTimeout(seconde6);
    window.clearTimeout(seconde7);
    window.clearTimeout(seconde8);
    window.clearTimeout(seconde9);
    window.clearTimeout(seconde10);
    window.clearTimeout(seconde11);
    window.clearTimeout(seconde12);
    window.clearTimeout(seconde13);
    window.clearTimeout(seconde14);
    window.clearTimeout(seconde15);
    window.clearTimeout(seconde16);
    window.clearTimeout(seconde17);
    window.clearTimeout(seconde18);
    window.clearTimeout(seconde19);
    window.clearTimeout(seconde20);
    window.clearTimeout(seconde21);
    if (levelUp < 5) {
        eltWordToPress.style.fontSize = "20px";
        eltWordToPress.textContent = " Niveau " + levelUp;
        seconde1 = window.setTimeout(function() {
            eltWordToPress.style.fontSize = "40px";
            eltWordToPress.textContent = " 3";
        }, 1000);
        seconde2 = window.setTimeout(function() {
            eltWordToPress.textContent = " 2";
        }, 2000);
        seconde3 = window.setTimeout(function() {
            eltWordToPress.textContent = " 1";
        }, 3000);
        seconde4 = window.setTimeout(function() {
            eltWordToPress.textContent = " GO";
        }, 4000);
        seconde5 = window.setTimeout(function() {
            nextStep();
        }, 5000);
    } else {
        eltWordToPress.style.fontSize = "20px";
        eltWordToPress.textContent = "Words now ! " + "NIVEAU " + levelUp;
        seconde1 = window.setTimeout(function() {
            eltWordToPress.style.fontSize = "40px";
            eltWordToPress.textContent = " 3";
        }, 2000);
        seconde2 = window.setTimeout(function() {
            eltWordToPress.textContent = " 2";
        }, 3000);
        seconde3 = window.setTimeout(function() {
            eltWordToPress.textContent = " 1";
        }, 4000);
        seconde4 = window.setTimeout(function() {
            eltWordToPress.textContent = " GO";
        }, 5000);
        seconde5 = window.setTimeout(function() {
            eltWordToPress.style.fontSize = "100%";
            nextStep();
        }, 6000);
    }
}

function nextStep() {
    window.clearTimeout(seconde1);
    window.clearTimeout(seconde2);
    window.clearTimeout(seconde3);
    window.clearTimeout(seconde4);
    window.clearTimeout(seconde5);
    window.clearTimeout(seconde6);
    window.clearTimeout(seconde7);
    window.clearTimeout(seconde8);
    window.clearTimeout(seconde9);
    window.clearTimeout(seconde10);
    window.clearTimeout(seconde11);
    window.clearTimeout(seconde12);
    window.clearTimeout(seconde13);
    window.clearTimeout(seconde14);
    window.clearTimeout(seconde15);
    window.clearTimeout(seconde16);
    window.clearTimeout(seconde17);
    window.clearTimeout(seconde18);
    window.clearTimeout(seconde19);
    window.clearTimeout(seconde20);
    window.clearTimeout(seconde21);
    if (levelUp < 5) {
        eltWordToPress.textContent = letterGenerator[getRandomInt2(0, letterGenerator.length)];
    } else {
        eltWordToPress.textContent = wordGenerator[getRandomInt2(0, wordGenerator.length)];
    }
    nextLevel();
}

function nextLevel() {
    window.clearTimeout(seconde1);
    window.clearTimeout(seconde2);
    window.clearTimeout(seconde3);
    window.clearTimeout(seconde4);
    window.clearTimeout(seconde5);
    window.clearTimeout(seconde6);
    window.clearTimeout(seconde7);
    window.clearTimeout(seconde8);
    window.clearTimeout(seconde9);
    window.clearTimeout(seconde10);
    window.clearTimeout(seconde11);
    window.clearTimeout(seconde12);
    window.clearTimeout(seconde13);
    window.clearTimeout(seconde14);
    window.clearTimeout(seconde15);
    window.clearTimeout(seconde16);
    window.clearTimeout(seconde17);
    window.clearTimeout(seconde18);
    window.clearTimeout(seconde19);
    window.clearTimeout(seconde20);
    window.clearTimeout(seconde21);
    if (levelUp === 1) {
        timeLeft = 4;
        progressBar();
        seconde6 = window.setTimeout(function() {
            timeLeft--;
        }, 1500);
        seconde7 = window.setTimeout(function() {
            timeLeft--;
        }, 2500);
        seconde8 = window.setTimeout(function() {
            timeLeft--;
        }, 3500);
        seconde9 = window.setTimeout(function() {
            timeLeft--;
            if (timeLeft <= 0) {
                lose();
            }
            level();
        }, 4500);
    }
    if (levelUp === 2) {
        timeLeft = 3;
        progressBar()
        seconde10 = window.setTimeout(function() {
            timeLeft--;
        }, 1500);
        seconde11 = window.setTimeout(function() {
            timeLeft--;
        }, 2500);
        seconde12 = window.setTimeout(function() {
            timeLeft--;
            if (timeLeft <= 0) {
                lose();
            }
            level();
        }, 3500);
    }
    if (levelUp === 3) {
        timeLeft = 2;
        progressBar();
        seconde13 = window.setTimeout(function() {
            timeLeft--;
        }, 1500);
        seconde14 = window.setTimeout(function() {
            timeLeft--;
            if (timeLeft <= 0) {
                lose();
            }
            level();
        }, 2500);
    }
    if (levelUp === 4) {
        timeLeft = 1.5;
        progressBar();
        seconde15 = window.setTimeout(function() {
            timeLeft--;
            if (timeLeft <= 0) {
                lose();
            }
            level();

        }, 1500);
    }
    if (levelUp === 5) {
        eltWordToWrite.classList.remove("d-sm-none")
        timeLeft = 5;
        progressBar();
        seconde6 = window.setTimeout(function() {
            timeLeft--;
        }, 1500);
        seconde7 = window.setTimeout(function() {
            timeLeft--;
        }, 2500);
        seconde8 = window.setTimeout(function() {
            timeLeft--;
        }, 3500);
        seconde9 = window.setTimeout(function() {
            timeLeft--;
        }, 4500);
        seconde10 = window.setTimeout(function() {
            timeLeft--;
            if (timeLeft <= 0) {
                lose();
            }
            level();
        }, 5500);
    }
    if (levelUp < 5) {
        eltWordToPress.textContent = letterGenerator[getRandomInt2(0, letterGenerator.length)];
    } else {
        eltWordToPress.textContent = wordGenerator[getRandomInt2(0, wordGenerator.length)];
    }
    openKeyboard();
}

function progressBar() {
    window.clearTimeout(seconde1);
    window.clearTimeout(seconde2);
    window.clearTimeout(seconde3);
    window.clearTimeout(seconde4);
    window.clearTimeout(seconde5);
    window.clearTimeout(seconde6);
    window.clearTimeout(seconde7);
    window.clearTimeout(seconde8);
    window.clearTimeout(seconde9);
    window.clearTimeout(seconde10);
    window.clearTimeout(seconde11);
    window.clearTimeout(seconde12);
    window.clearTimeout(seconde13);
    window.clearTimeout(seconde14);
    window.clearTimeout(seconde15);
    window.clearTimeout(seconde16);
    window.clearTimeout(seconde21);
    if (eltTimeLeft.classList.contains("progress-5")) {
        eltTimeLeft.classList.remove("progress-5");
    } else if (eltTimeLeft.classList.contains("progress-4")) {
        eltTimeLeft.classList.remove("progress-4");
    } else if (eltTimeLeft.classList.contains("progress-3")) {
        eltTimeLeft.classList.remove("progress-3");
    } else if (eltTimeLeft.classList.contains("progress-2")) {
        eltTimeLeft.classList.remove("progress-2");
    } else if (eltTimeLeft.classList.contains("progress-1")) {
        eltTimeLeft.classList.remove("progress-1");
    }
    void eltTimeLeft.offsetWidth;
    if (levelUp === 1) {
        eltTimeLeft.classList.add("progress-4");
    } else if (levelUp === 2) {
        eltTimeLeft.classList.add("progress-3");
    } else if (levelUp === 3) {
        eltTimeLeft.classList.add("progress-2");
    } else if (levelUp === 4) {
        eltTimeLeft.classList.add("progress-1");
    } else if (levelUp === 5) {
        eltTimeLeft.classList.add("progress-5");
    }
}
var openKeyBoard = document.getElementById("openKeyBoard")
openKeyBoard.addEventListener("click", function(e) {
    $(window).scrollTop(0);
    eltWordToWrite.focus();
}, false);

function openKeyboard() {
    openKeyBoard.click();
}

function nextStep2() {
    eltPlay.hidden = false;
    eltEndGame.hidden = true;
    eltScore[1].textContent = "Votre score " + score;
}
eltBtnNewGame.addEventListener("click", function() {
    score = 0;
    levelUp = 0;
    level1 = false;
    level2 = false;
    level3 = false;
    level4 = false;
    level5 = false;
    life = 3;
    eltLife1.classList.remove("lost-life");
    eltLife2.classList.remove("lost-life");
    eltLife3.classList.remove("lost-life");
    eltLife1.hidden = false;
    eltLife2.hidden = false;
    eltLife3.hidden = false;
    level();
    eltEndGame.hidden = true;
}, false)
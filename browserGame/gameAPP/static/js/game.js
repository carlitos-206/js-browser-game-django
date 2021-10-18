function showGame() {
    var game = document.getElementById("the-game");
    if (game.style.display === "none") {
        game.style.display = "block";
    } else {
        game.style.display = "none";
    }
};
function hideStartBtn() {
    var StartBtn = document.getElementById("game-btn");
    if (StartBtn.style.display === "block") {
        StartBtn.style.display = "none";
    } else {
        StartBtn.style.display = "block";
    }
};
var killCount = 0;
function kill_1() {
    var killBtn = document.getElementById("kill-1")
    if (killBtn.style.display === "block") {
        killBtn.style.display = "none";
        killCount ++;
    } else {
        killBtn.style.display = "block";
    }
};
function kill_2() {
    var killBtn = document.getElementById("kill-2")
    if (killBtn.style.display === "block") {
        killBtn.style.display = "none";
        killCount ++;
    } else {
        killBtn.style.display = "block";
    }
};
function kill_3() {
    var killBtn = document.getElementById("kill-3")
    if (killBtn.style.display === "block") {
        killBtn.style.display = "none";
        killCount ++;
    } else {
        killBtn.style.display = "block";
    }
};
function kill_4() {
    var killBtn = document.getElementById("kill-4")
    if (killBtn.style.display === "block") {
        killBtn.style.display = "none";
        killCount ++;
    } else {
        killBtn.style.display = "block";
    }
};
function kill_5() {
    var killBtn = document.getElementById("kill-5")
    if (killBtn.style.display === "block") {
        killBtn.style.display = "none";
        killCount ++;
    } else {
        killBtn.style.display = "block";
    }
};
function kill_6() {
    var killBtn = document.getElementById("kill-6")
    if (killBtn.style.display === "block") {
        killBtn.style.display = "none";
        killCount ++;
    } else {
        killBtn.style.display = "block";
    }
};
function kill_7() {
    var killBtn = document.getElementById("kill-7")
    if (killBtn.style.display === "block") {
        killBtn.style.display = "none";
        killCount ++;
    } else {
        killBtn.style.display = "block";
    };
};
function gameOver() {
    var timeLeft = 10;
    var timerId = setInterval(countdown, 10000);
    var killGame = document.getElementById("the-game")
    function endGame(){
        if (killGame.style.display === "none"){
            killGame.style.display = "none";
            console.log("game ends here won")
        } else {
            console.log("game ends here lost")
            killGame.style.display = "none"
        }
    }
    function countdown() {
        console.log("time left:"+timeLeft)
        if (timeLeft == 0 || killCount !==7) {
            clearTimeout(timerId);
            timeLeft--;
            console.log("time left"+timeLeft)
            alert("YOU LOOSE!!!!");
            return endGame();
        } else { 
            clearTimeout(timerId);
            timeLeft--;
            console.log("time left"+timeLeft)
            alert("YOU WON!!!!");
            return endGame();
        }
    }
};

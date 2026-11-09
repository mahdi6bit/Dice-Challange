// PROCESSES PLAYER1***
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let diceImage1 = "./Assets/dice" + randomNumber1 + ".png";
let player1 = document.querySelectorAll("img")[0].setAttribute("src", diceImage1);

// PROCESSES PLAYER2***
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let diceImage2 = "./Assets/dice" + randomNumber2 + ".png";
let player2 = document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

function winnerProcesses(){
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "بازیکن شماره 1 برنده شد!";
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").textContent = "بازیکن شماره 2 برنده شد!"
    }
    else{
        document.querySelector("h1").textContent = "بازی مساوی شد!"
    }
}

winnerProcesses();
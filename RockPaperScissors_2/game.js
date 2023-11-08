let header = document.getElementById('header');
let gameEnd = false;
let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;

function selectChoice(userChoice) {
    document.getElementById('footerId').style.marginTop = '-130px';
    const compChoice = getComputerChoice();
    fillCompImage(compChoice);
    fillUserImage(userChoice);
    compareResults(userChoice, compChoice);
    document.getElementById('btnRow').className = "hide";
    ticker();
    setScore();
}

function compareResults(userChoice, compChoice){
    switch (userChoice.toLowerCase()) {
        case "rock" : {
            if (compChoice === "rock") {
                header.innerText = 'DRAW'
            } else if (compChoice === "scissors") {
                header.innerText = 'WINNER!'
                playerScore ++;
            } else {
                header.innerText = 'YOU LOSE'
                computerScore ++;
            }
            break;
        }
        case "paper" : {
            if (compChoice === "rock") {
                header.innerText = 'WINNER!'
                playerScore ++;
            } else if (compChoice === "scissors") {
                header.innerText = 'YOU LOSE'
                computerScore ++;
            } else {
                header.innerText = 'DRAW'
            }
            break;
        }
        case "scissors" : {
            if (compChoice === "rock") {
                header.innerText = 'YOU LOSE'
                computerScore ++;
            } else if (compChoice === "scissors") {
                header.innerText = 'DRAW'
            } else {
                header.innerText = 'WINNER!'
                playerScore ++;
            }
            break;

        }
    }
}

const ticker = () => {
    setTimeout(clearScreen, 5000);
}

function getComputerChoice(){
    let arrOfOptions  = ["rock","paper","scissors"];
    return arrOfOptions[Math.floor(Math.random() * arrOfOptions.length)];
}

function fillCompImage(compChoice){
    switch (compChoice.toLowerCase()){
        case 'scissors' :document.getElementById('compChoice').src = "../images/scissors.jpg"; break;
        case 'paper' : document.getElementById('compChoice').src =  "../images/paper.jpg"; break;
        case 'rock' : document.getElementById('compChoice').src =  "../images/rock.jpg"; break;
    }
}

function fillUserImage(userChoice){
    switch (userChoice.toLowerCase()){
        case 'scissors' :document.getElementById('userChoice').src = "../images/scissors.jpg"; break;
        case 'paper' : document.getElementById('userChoice').src =  "../images/paper.jpg"; break;
        case 'rock' : document.getElementById('userChoice').src =  "../images/rock.jpg"; break;
    }
}

const clearScreen = () =>{
    clearTimeout(ticker);
    gameEnd = true;
    document.getElementById('mBody').className = "hide";
    document.getElementById('footerId').style.marginTop = '-130px';
    addGameOverScreen();
}

const reset = function (){
    if(!gameEnd){
        alert('Game has not ended yet!');
        return;
    }
    document.getElementById('footerId').style.marginTop = '5px';
    roundNumber ++;
    gameEnd = false;
    resetUI();
}

function resetUI(){
    header.innerText = 'Rock Paper Scissors Round: ' + roundNumber;
    document.getElementById('gameOverScreenOverlay').className = "hide";
    document.getElementById('mBody').className = "mainBody";
    document.getElementById('btnRow').className = "btnOptions";
    document.getElementById('userChoice').src = "../images/questionM.png";
    document.getElementById('compChoice').src =  "../images/questionM.png";
}

function addGameOverScreen(){
    document.getElementById('gameOverScreenOverlay').className = "gameOverScreen";
}

function setScore(){
    document.getElementById('pScore').innerText = 'Player: ' + playerScore;
    document.getElementById('cScore').innerText = 'Computer: ' + computerScore;
}
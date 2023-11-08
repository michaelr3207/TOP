console.log('test');

function getComputerChoice(){

    let arrOfOptions  = ["Rock","Paper","Scissors"];
    return arrOfOptions[Math.floor(Math.random() * arrOfOptions.length)];
}


function playRound(compChoice, plyChoice){
    console.log("The computers choice is: " + compChoice);
    console.log("\n\nThe players choice is: " + plyChoice);
    let playerWon = false;

    switch (plyChoice.toLowerCase()){
        case "rock" :
        {
            if (compChoice === "Rock") {
                console.log("Draw");
            } else if (compChoice === "Scissors") {
                console.log("You Win");
                playerWon = true;
            } else {
                console.log("You Lose!");
            }
            break;
        }

        case "paper" :
        {
            if (compChoice === "Rock") {
                console.log("You Win");
                playerWon = true;

            } else if (compChoice === "Scissors") {
                console.log("You Lose");
            } else {
                console.log("Draw");
            }
            break;
        }

        case "scissors" :
        {
            if (compChoice === "Rock") {
                console.log("You Lose");
            } else if (compChoice === "Scissors") {
                console.log("Draw");
            } else {
                console.log("You win!");
                playerWon = true;

            }
            break;

        }
    }
    return playerWon;
}

const playerSelection = "Rock";



function game(){
    let score = 0;
    let count = 1;

    while(count < 6){
       let compChoice = getComputerChoice();
        if(playRound(compChoice, playerSelection)){
            score ++;
        }
        count ++;
        console.log("Current Score: " + score);
    }
    console.log("\n\nYou won " + score + " rounds out of 5..");
}

game();

console.log("testststst");
function createSquares(){

    let squares = 16;
    const container = document.querySelector("#container");
    container.style.display = "block";

    for(let i = 0; i < squares; i ++){
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.style.display = "flex";
        for(let j = 0; j < squares; j ++){
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.addEventListener("mouseover", changeColor);
            newRow.appendChild(newSquare);
        }
        container.appendChild(newRow);
    }
}


function getUserInput(){
    const input = document.querySelector('input').value;
    if(input > 100){
        return 100;
    }
    return input;
}
function changeColor(e){
    e.target.style.background = 'black';
}
createSquares();

function createNewSquares(userEnteredVal){


    let squares = userEnteredVal;
    const container = document.querySelector("#container");
    container.innerHTML = '';
    container.style.display = "block";

    for(let i = 0; i < squares; i ++){
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.style.display = "flex";
        for(let j = 0; j < squares; j ++){
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.addEventListener("mouseover", changeColor);
            newRow.appendChild(newSquare);
        }
        container.appendChild(newRow);
    }
}

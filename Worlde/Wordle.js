let currentOutput = document.getElementById('iOutput');
let previousQuestionsIndexes = [];

const objects = [
    { id: 0, word: "thailand", clue: "City in Asia", img1: "../images/tieTwo.jpg", img2: "../images/landHouse.jpg"},
    { id: 1, word: "Ireland", clue: "Small Island", img1: "../images/3leaf.jpg", img2: "../images/cider.png"},
    { id: 2, word: "England", clue: "The QUeens", img1: "../images/queen.jpg", img2: "../images/eng.png"},
    { id: 3, word: "africa", clue: "Big continent", img1: "../images/uvu.jpg", img2: "../images/africa.jpg"},
]

let random = randomNumber(objects.length);

function fillCurrentWord(random){
    const currentWord = objects[random].word;
    currentOutput.innerHTML = '';
    let currentUserOutput = createEmptyWord();
    // console.log(currentUserOutput)
    currentOutput.innerHTML = currentUserOutput;
    currentOutput.style.fontSize = '100px';
}

function nextQuestion(){
    if(currentOutput.innerHTML === objects[random].word){
        previousQuestionsIndexes.push(random);
        random = randomNumber(objects.length);
        do{
            random = randomNumber(objects.length);
            console.log('new random LOOP: ' + random);
        }
        while(checkArrayForDoubleIndex(random));
        generateImage();
    }
    else{
        alert('Not finished yet!');
    }
}

function checkArrayForDoubleIndex(newRandom){
    for(let items = 0; items < previousQuestionsIndexes.length; items ++){
        if(previousQuestionsIndexes[items] === random){
            return true;
        }
    }
    return false;
}
function randomNumber(maxRange){
    return Math.floor(Math.random() * maxRange);
}

function generateImage(){
    let imageBox1 = document.getElementById("img1").src = objects[random].img1;
    let imageBox2 = document.getElementById("img2").src = objects[random].img2;
    fillCurrentWord(random);
}

function takeUserInput(){
    let currentInput = document.getElementById('input').value;
    document.getElementById('input').value = '';
    if(checkWordForLetter(currentInput)){
        fillWordWithUserGuess(currentInput)
    }
    else{
        alert('wrong gyess');
    }
}

function checkWordForLetter(letter){
    for(let items = 0; items < objects[random].word.length; items ++){
        if(objects[random].word.charAt(items) === letter){
            return true;
        }
    }
    return false;
}

function fillWordWithUserGuess(letter){
    let currentWord = currentOutput.innerHTML;
    for(let items = 0; items < objects[random].word.length; items ++){
        if(objects[random].word.charAt(items) === letter){
            currentOutput.innerHTML = setCharAt(currentWord, items, letter);
            currentWord = currentOutput.innerHTML;
        }
    }
    // if (currentOutput.innerHTML === objects[random].word){
    //     alert('duccess');
    // }

}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function createEmptyWord(){
    let currentWord = '';
    for(let item = 0; item < objects[random].word.length; item ++){
        currentWord += '_';
    }
    return currentWord;
}

generateImage();
// fillCurrentWord();
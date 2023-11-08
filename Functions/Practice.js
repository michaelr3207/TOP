
function returnCap(word){
    let char = word.charAt(0).toUpperCase();
    word = word.substring(1);
    return char.toUpperCase() + word;
}

function returnLast(word){
    return word.charAt(word.length-1);
}

console.log(returnCap('lol'));
console.log(returnLast('cheese'));
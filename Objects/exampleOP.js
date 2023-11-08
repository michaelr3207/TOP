const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

function getTheTitles(){
    let arrOfTitles = [];
    books.forEach((book) => {
        arrOfTitles.push(book.title);
    })
    console.log(arrOfTitles);
}

function getTheTitles2(){
    let arrOfTitles = [];
    for(let book of books){
        arrOfTitles.push(book.title);
    }
    console.log(arrOfTitles);
    console.log(arrOfTitles);
}

const getTheTitles3 = function (array) {
    return array.map((book) => book.title);
};

getTheTitles();
const arr = getTheTitles3();
console.log(arr);
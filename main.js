// var myHeading = document.querySelector('h1');

// myHeading.textContent = 'Hello world';


let movie = {
    title: 'olympus',
    year: 2010,
    part: 1,
    price: 2000,
    type: 'intelligence'
}

function showProperties(obj){
    for(let key in obj){
        console.log(key);
    }

}

showProperties(movie);
































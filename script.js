var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

var favoriteThings = [
  'Fast cars',
  'Muscles',
  'Sleeveless t-shirts',
  'Revving my engine',
  'Living my life a quarter mile at a time',
  'Staring people down'
]


// Random quote of the day generator
function randomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
};

randomQuote();


// Part 1
//DOM's personal website title is a bit wordy. Select the 
//#main-title ID element and change the textContent of the title to something shorter.
document.getElementById('main-title').textContent = 'DOM Toretto' ;

// Part 2

//Select the body and change the background-color 
//to a new color of your choice.
document.body.style.backgroundColor = 'lightblue';


// Part 3
//Select all .special-title class elements and change their font-size to 2rem. 
//Remember you might have to iterate through the list of elements!

var foSize = document.querySelectorAll('.special-title') ;
for(i = 0 ; i < foSize.length ; i++){
  foSize[i].style.fontSize = '2rem'
}

// Part 4
//Let's add to DOM's Past Races list. Create a new <li> element, 
//change the new <li> text to the name of a city, and append it to the Past Races list.
var sideBar = document.querySelectorAll('.side-bar')[1];
var ulList = document.querySelectorAll('ul')[1];
var newList = document.createElement('li');
var addCity = document.createTextNode('Riyadh');

newList.appendChild(addCity);
ulList.appendChild(newList);
document.body.appendChild(ulList);

// Part 5
/*
Create a new .blog-post corresponding to the new city added in Part 6. 
You will have to create a new <div> with class of .blog-post, a new <h2> with text, 
and a new <p> with some text. Think about what order you want to 
create the elements, and what order you want to append them in.
*/
var nDiv = document.createElement('div')
nDiv.classList.add('blog-post')
nDiv.classList.add('purple');
var h2 = document.createElement('h2');
var p = document.createElement('p');
var cityMem = document.createTextNode('Time to Drifting and running');
document.querySelector('.main').appendChild(nDiv);
p.appendChild(cityMem);
h2.appendChild(addCity);
nDiv.appendChild(h2);
nDiv.appendChild(p);

// Part 6

//Dom's list of favorite things is empty! Lets change that. Iterate through then 
//favoriteThings array. For every 
//favorite thing, create an li element and append it to the ul with an id of 
//favorite-things.

var list = document.querySelector('#favorite-things');


for (var i = 0; i < favoriteThings.length; i++) {
    var favThings = favoriteThings[i];
    var liList = document.createElement('li');
    var liText = document.createTextNode(favThings);
    liList.appendChild(liText);

    list.appendChild(liList);

}

// Part 7
//When you reload the page, the script.js file loads a random DOM quote.
// Let's play with the included function:


var submitButton = document.querySelector('#quote-title');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    randomQuote();


})

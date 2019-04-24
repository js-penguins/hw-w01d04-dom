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
  //  document.body.appendChild('Welcome to my homepage');
document.title = "psge"
// Part 2
document.body.style.background = 'cgray'
// Part 3
var font = document.querySelectorAll('.special-title');
for ( var i = 0 ; i <font.length ; i ++ ){
  font[i].style.fontSize = '2rem' ;
}
// Part 4


var divClass = document.querySelectorAll('.side-bar')[1];
var ulList = document.querySelectorAll('ul')[1];
var newFavList = document.createElement('li');
var newCity = document.createTextNode('Riyadh');

ulList.appendChild(newFavList);
newFavList.appendChild(newCity);
divClass.appendChild(ulList);
this.document.body.appendChild(ulList);

// Part 5
var newDiv = document.createElement('div');
newDiv.classList.add('blog-post');
newDiv.classList.add('purple');
document.querySelector('.main').appendChild(newDiv);

var newH2 = document.createElement('h2');
newDiv.appendChild(newH2);
var textH2 = document.createTextNode('Riyadh');
newH2.appendChild(textH2);

var newp = document.createElement('p');
newDiv.appendChild(newp);
var textP = document.createTextNode('Capital of Saudi Arabia');
newp.appendChild(textP); 


// Part 6
/*
var favoriteThings = [
 'Fast cars',
 'Muscles',
 'Sleeveless t-shirts',
 'Revving my engine',
 'Living my life a quarter mile at a time',
 'Staring people down'
]
*/
var takeId = document.querySelector('#favorite-things');
for(var i=0; i<favoriteThings.length; i++){
 var takeFavourit = favoriteThings[i];
 var newLI = document.createElement('li');
 var textNewLI = document.createTextNode(takeFavourit);
 newLI.appendChild(textNewLI);
 takeId.appendChild(newLI);
}

// Part 7
var methodQuote = document.querySelector('#quote-of-the-day');
methodQuote.addEventListener('click', function(event){
event.preventDefault();

console.log(randomQuote());
console.log('click');

});

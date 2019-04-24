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


 var mainTitle = document.querySelector('#main-title').textContent.replace('Hi! My name is DOM Toretto.');


// Part 2
document.body.style.backgroundColor = '#af4b64';


// Part 3
var fontSize = document.querySelectorAll('.special-title')
for (var i=0 ; i < fontSize.length; i++)
fontSize[i].style.fontSize = '2rem';


// Part 4

var addDiv = document.querySelectorAll('.side-bar')[1];
var addUl = document.querySelectorAll('ul')[1];
var newLi = document.createElement('li');
var newLiCity = document.createTextNode('Hial');

newLi.appendChild(newLiCity);
addUl.appendChild(newLi);
addDiv.appendChild(addUl);
this.document.body.appendChild(addUl);

// // Part 5


var newDiv = document.createElement('div');
newDiv.classList.add('blog-post');
newDiv.classList.add('purple');

console.log(newDiv);

var newH1 = document.createElement('h1');
var pText = document.createElement('p');
var cityNew = document.createTextNode('end game');

pText.appendChild(cityNew);
newH1.appendChild(newLiCity);
newDiv.appendChild(newH1);
newDiv.appendChild(pText);

document.querySelector('.main').appendChild(newDiv);


// // Part 6

// var favoriteThings = document.querySelector('#favorite-things');
// favoriteThings.forEach()

//   favoriteThings.map(function(){
//     return 
//   })
//   favoriteThings.appendChild(newLi);



// Part 7
var quoteTitle = document.querySelector('#quote-title');
quoteTitle.addEventListener('click', function(even){
  event.preventDefault();

  console.log('click');
  randomQuote();

})
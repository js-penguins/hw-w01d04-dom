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
var shortTitle = document.querySelector('#main-title');
 shortTitle.textContent = 'Welcome all, I am DOM';

// Part 2
var newBody = document.querySelector('body');
newBody.style.backgroundColor = 'dark gray';

// Part 3
var newFSize=document.querySelectorAll('.special-title');
for(i = 0 ; i < newFSize.length ; i++){
  newFSize[i].style.fontSize ='2rem'
}

// Part 4
var SL = document.querySelectorAll('.side-bar');
var Ul = document.querySelectorAll('ul');
var NL = document.createElement('li');
var AC = document.createTextNode('jeddah');
NL.appendChild(AC);
UL.appendChild(NL);
SL.appendChild(UL);
document.body.appendChild(SL);


// Part 5
var newDiv = document.createElement('div')
newDiv.classList.add('blog-post')
newDiv.classList.add('red');
var h2 = document.createElement('h2');
var p = document.createElement('p');
var city1 = document.createTextNode('Drive ir die');
document.querySelector('.main').appendChild(newDiv);
p.appendChild(city1);
h2.appendChild(p);
newDiv.appendChild(h2);
newDiv.appendChild(h2);

// Part 6
var FTList = document.querySelector('#favorite-things');
for (var i = 0; i < favoriteThings.length; i++) {
    var FT = favoriteThings[i];
    var Listli = document.createElement('li');
    var Textli = document.createTextNode(FT);
    Listli.appendChild(Textli);
    FTList.appendChild(Listli);

// Part 7
function randomQuote() 
var randomIndex = Math.floor(Math.random()* quotes.length)
document.querySelector('#quote-of-the-day').textContent= '"' +quotes[randomIndex] + '"';
};

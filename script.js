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
updateTitle('I am DOM Toretto');

function updateTitle (newT){
  var newTitle = newT;
  document.querySelector('#main-title').textContent = newTitle;
  
}


// Part 2
changeBackground('cyan');

function changeBackground(color){
  var background = color;
  document.body.style.backgroundColor = background;
  
}
// Part 3
updateFontSize('special-title', '2rem');

function updateFontSize(className, size) {
  var x = document.getElementsByClassName(className);
  for (var i = 0; i < x.length; i++) {
    x[i].style.fontSize = size;
    console.log(x[i].style.fontSize)
  }
}





// Part 4

var list = document.getElementsByTagName('ul');
var newCityElement = document.createElement('li');
var newCityElementText = document.createTextNode('Jeddah');
newCityElement.appendChild(newCityElementText);
list[1].appendChild(newCityElement);

// Part 5


// Part 6


// Part 7

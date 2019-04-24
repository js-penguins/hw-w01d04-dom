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

 document.body.appendChild('Welcome to my homepage');
document.title = "psge"
// Part 2
function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('#a1edff'); });

// Part 3
function js_style() {

  document.getElementById("special-title").style.fontSize = "2rem";
}

//  Part 4

  

// Part 5
var ndiv = document.createElement('div');
var newH2 = document.createElement('h2');
var text2 = document.createTextNode('New York');
	ndiv.classList.add('blog-post');
	ndiv.classList.add('purple');
	document.querySelector('.main').appendChild(ndiv);
	ndiv.appendChild(div2);
	div2.appendChild(text2);
	

// Part 6


// Part 7
function randomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
};
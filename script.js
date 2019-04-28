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
console.log(randomQuote);


// Part 1

 document.body.appendChild('Welcome to my homepage');
document.title = "psge"
// Part 2
function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('#a1edff'); });

// Part 3
function jStyle() {

  document.getElementById("special-title").style.fontSize = "2rem";
}

//  Part 4

var dClass = document.querySelectorAll('.side-bar')[1];
var ulList = document.querySelectorAll('ul')[1];
var nFList = document.createElement('li');
var nCity = document.createTextNode('New York');
nFList.appendChild(nCity);
ulList.appendChild(nFavList);
dClass.appendChild(ulList);
this.document.body.appendChild(ulList);
var selList = document.querySelector('#city');
	addToList(newList,newCity,selList);
console.log(nCity);

// Part 5
var ndiv = document.createElement('div');
var newH2 = document.createElement('h2');
var Ntext = document.createTextNode('New York');
var listt = document.querySelector('#favorite-things'); 
	ndiv.cList.add('blog-post');
	ndiv.cList.add('purple');
	document.querySelector('.main').appendChild(ndiv);
	ndiv.appendChild(div2);
  div2.appendChild(Ntext);
  



// Part 6
var fList = document.querySelector('#favorite-things')
favorite-hings.forEach(function(i){
  var nItem = document.createElement('li');
  var txts = document.createTextNode(i);
  fList.appendChild(nItem)
  nItem.appendChild(txts)
	console.log(fList);


// Part 7
function randomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
  console.log(event);
};
})
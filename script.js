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
document.getElementById("main-title").innerHTML = "Hi, I'm DOM!";


// Part 2
var body=document.querySelector('body');
body.style.backgroundColor='red';
// Part 3
var special=document.querySelectorAll('.special-title');
special.forEach(function(title){
title.style.fontSize="2rem";
})
// Part 4
 
var newCity=document.createElement("li");
var city=document.createTextNode("Riyadh");


newCity.appendChild(city);
document.querySelector('#list').appendChild(newCity);


// Part 5
var div=document.createElement('div');
div.className='.blog-post';


var h2=document.createElement('h2');
var th2=document.createTextNode('About');

h2.appendChild(th2);
div.appendChild(h2);

var p=document.createElement('p');
var text=document.createTextNode('Hello my name is Abdulaziz');
p.appendChild(text);
div.appendChild(p);

// Part 6

favoriteThings.forEach(function(thing){
  var li=document.createElement('li');
  var name=document.createTextNode(thing);
  li.appendChild(name);
  document.querySelector('#favorite-things').appendChild(li);
});

// Part 7
var click=document.querySelector('#quote-title');

click.addEventListener('click',function(event){
  event.preventDefault();
    randomQuote();
})
function randomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
};
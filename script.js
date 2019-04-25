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

document.querySelector(`#main-title`).innerHTML = "Khalid's Blog";

// Part 2

document.body.style.backgroundColor = "#fffff5";

// Part 3

  var fonz = document.querySelector("#dom-adventures");
  var fonz1 = document.querySelector("#quote-title");
  fonz.style.fontSize = "2rem";
  fonz1.style.fontSize = "2rem";

// Part 4

  var ul = document.getElementById("race-cities");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Riyadh"));
  ul.appendChild(li);


// Part 5
(function test(){
var divSelect = document.querySelector("#main");
var newDiv = document.createElement('div');
var newHead = document.createElement('h2');
var newPrograph = document.createElement('p1');
var newHeadText = document.createTextNode('hello world!');
var newPrographText = document.createTextNode('hello world! im her bro');

newDiv.setAttribute("class", "blog-post purple");

newHead.appendChild(newHeadText);
newPrograph.appendChild(newPrographText);
document.querySelector("#main").appendChild(newDiv);
document.querySelectorAll(".blog-post purple").appendChild(newDiv);
document.querySelectorAll(".blog-post purple").appendChild(newDiv);
})();
// still working on fixing class of li to apply css style

// Part 6
var aceessDiv = document.querySelectorAll('.side-bar');
var newListSelect = document.querySelector('#favorite-things');
var newLists = document.createElement('li');
var newListText = document.createTextNode('Dont have one in mind, im too busy doing HW');
newLists.setAttribute("id", 'favorite-things');

newListSelect.appendChild(newLists);
newLists.appendChild(newListText);
// still working on accessing div and selecting class name of ul and li then apply css style

// Part 7

window.onload = function () {
  var div = document.getElementById("quote-title");
  div.addEventListener(div);

}
function randomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
};

//still not finish with it 
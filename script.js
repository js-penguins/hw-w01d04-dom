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
randomQuote();


// Part 1
document.querySelector('#main-title').textContent = "Hello there";

// Part 2
document.body.style.backgroundColor = "white";

// Part 3s
var list = document.querySelectorAll('.special-title');
console.log(list);
for(i=0;i<list.length;i++)
{
  list[i].style.fontsize = "2 rem";
}
// Part 4
var newList = document.createElement('li');
var myText = document.createTextNode("Riyadh");
var myList = document.querySelectorAll('ul');
console.log(myList);
newList.appendChild(myText);
myList[1].appendChild(newList);


// Part 5
var newDiv = document.createElement('div');
var newMain = document.querySelector('.main');
newDiv.className = ".blog-post";
var newH2 = document.createElement('h2');
var newP = document.createElement('p');
newH2.textContent = "Riyadh";
newP.textContent = "is ther anyone there";
newMain.appendChild(newDiv);
newDiv.appendChild(newH2);
newDiv.appendChild(newP);

// Part 6
var existingUl = document.querySelector('#favorite-things');
for(i = 0;i<5;i++)
{
  var newListing = document.createElement('li');
  var newTexting = document.createTextNode(favoriteThings[i]);
  //newListing.id = 'favorite-things';
  newListing.appendChild(newTexting);
  existingUl.appendChild(newListing);
}

// Part 7
window.onload = function(){
  var button = document.querySelector('#quote-title');
  button.addEventListener('click',function(event){
  event.preventDefault();
  randomQuote();



  });



}

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

document.title = 'DOM forever';

// Part 2
document.body.style.color = 'darkblue';

// Part 3

var fontS = document.querySelectorAll('.special-title') ;
for(i = 0 ; i < fontS.length ; i++){
  fontS[i].style.fontSize = '2rem'
}
// Part 4

var divClass = document.querySelectorAll('.side-bar')[1];
var un = document.querySelectorAll('ul')[1];
var node = document.createElement("li");  
var TextNode = document.createTextNode("Riyadh");
un.appendChild(node);        
node.appendChild(TextNode);                              
divClass.appendChild(un);
this.document.body.appendChild(un);

// Part 5

var ndiv = document.createElement('div');
ndiv.classList.add('.blog-post');
var head = document.createElement('h1')
var nline = document.createElement('p')
var ce = document.createTextNode('end game');

nline.appendChild(ce);
head.appendChild(newCity);
ndiv.appendChild(head);
ndiv.appendChild(nline);

document.querySelector('.main').appendChild(ndiv);

// Part 6

var neli = document.querySelector('#favorite-things')

for (i=0;i<favThings.length;i++)
   {
     var one = favThings[i];
     var first  = document.createElement('li');
     var firstText = document.createTextNode(fav);
     first.appendChild(firstText);
     neli.appendChild(first);
   }


// Part 7


var submitButton = document.querySelector('#quote-title');

submitButton.addEventListener('click', function(event) {
     randomQuote();
     event.preventDefault();
})
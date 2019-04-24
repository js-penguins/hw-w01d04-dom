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

// console.log('JS is connected');
// Part 1
var txtCont = document.querySelector('#main-title');
// console.log(txtCont);
function TxtChanger(txt){
      txt.innerHTML = 'Welcome to my homepage';
      // console.log(txt.innerHTML)
      
}
TxtChanger(txtCont);

// Part 2
var bdChanger = document.querySelector('body');
function bodyChanger(BodyBac){
  BodyBac.style.backgroundColor = 'red' ;
  
}
bodyChanger(bdChanger);
// Part 3
var spTitle = document.querySelectorAll('.special-title');
 console.log(spTitle);

 spTitle.forEach(function(i)
 {
    i.style.fontSize = '2rem';
 })

// Part 4

var selList = document.querySelector('#city');
console.log(selList)
var newList = document.createElement('li');
var newCity = document.createTextNode('Riyadh');

function addToList(NL,NC,SL){
  NL.appendChild(NC);
  SL.appendChild(NL);
}
addToList(newList,newCity,selList);
// Part 5
var dEle = document.createElement('div');
dEle.className = 'blog-post';
var hEle = document.createElement('h2');
var newTextH = document.createTextNode('Riyadh');
var pEle = document.createElement('p');
var newTextP = document.createTextNode(' I BECAME THE WORLD CHAMP');

function addToBlog(newP,pE,newTH,hE,dE){
              pE.appendChild(newP);
              hE.appendChild(newTH);
              //
              hE.appendChild(pE);
              dE.appendChild(hE);
}
console.log(addToBlog(newTextP,pEle,newTextH,hEle,dEle))
// Part 6


// Part 7

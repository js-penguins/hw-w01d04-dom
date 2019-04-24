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
console.log(dEle);
dEle.className = 'blog-post purple';
console.log(dEle);
var hEle = document.createElement('h1');
console.log(hEle);
var newTextH = document.createTextNode('Riyadh');
var pEle = document.createElement('p');
var newTextP = document.createTextNode(' I BECAME THE WORLD CHAMP');
var mMain = document.querySelector('.main');

function addToBlog(newP,pE,newTH,hE,dE,mm){
            //appending the text to the elements
              pE.appendChild(newP);
              hE.appendChild(newTH);
              
             
              //appending the elements to each other
              dE.appendChild(hE);
              dE.appendChild(pE);
              mm.appendChild(dE);
}
addToBlog(newTextP,pEle,newTextH,hEle,dEle,mMain)

// Part 6
var favList = document.querySelector('#favorite-things')
console.log(favList);
favoriteThings.forEach(function(i){
      
      
      var newItem = document.createElement('li');
      var txts = document.createTextNode(i);
      favList.appendChild(newItem)
      newItem.appendChild(txts)
      
    
      // console.log(newItem);

})

// Part 7
var getQu = document.querySelector('#quote-title');
console.log(getQu)
getQu.addEventListener('click', function() {
  randomQuote();
})
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


// // Part 1
 
  
  document.title = "Hi";


// // Part 2
document.body.style.background= "skyblue";


// // Part 3
function cangeSize(){
  var change = document.getElementsByClassName("special-title")
  change.forEche(function(Change1){
    document.Change1.style.fontSize= "2em"
      
  }
  
  
)


// // Part 4
 
   var addlis= document.querySelectorAll("side-bar")[1]
   var Uli= document.querySelectorAll("ul")[1]
   var li1= document.createElement("li")
   var licity= document.createTextNode("Jeddah")


   li1.appendChild("licity")
   Uli.appendChild("li1")
   addlis.appendChild("Uli")





// // Part 5
var Ndiv = document.createElement('div');
Ndiv.classList.add('blog-post');
Ndiv.classList.add('purple');
var Header1 = document.createElement('h1');
var p1 = document.createElement('p');
var pText = document.createTextNode(':$');

p1.appendChild(pText);
Header1.appendChild(licity);
Ndiv.appendChild(Header1);
Ndiv.appendChild(p1);

document.querySelector('.main').appendChild(Ndiv);


// // Part 6
var listt = document.querySelector('#favorite-things');  
   
  
   console.log(listt);
   for (i=0;i<favoriteThings.length;i++)
   {
     var te = favoriteThings[i];
   var li1 = document.createElement('li');  
   var li1text = document.createTextNode(te); 
   li1.appendChild(li1text); 
    
   listt.appendChild(li1)

// // Part 7

var Bsubmit =document.querySelector('.special-title');  
Bsubmit.addEventListener('click', function (event) {  
      randomQuote()  ;
    event.preventDefault()})
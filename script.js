


var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];



// Random quote of the day generator
function randomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
};

randomQuote();


// Part 1
document.title = "dom"

// Part 2
document.body.style.backgroundColor = "#c7d2ff"

// Part 3
var font = document.querySelectorAll('.special-title');
for (var i = 0; i < font.length; i++) {
  font[i].style.fontSize = '2rem';
}


// Part 4
var divClass = document.querySelectorAll('.side-bar')[1];
var ulList = document.querySelectorAll('ul')[1];
var newFavList = document.createElement('li');
var newCity = document.createTextNode('Riyadh');

newFavList.appendChild(newCity);
ulList.appendChild(newFavList);
divClass.appendChild(ulList);
this.document.body.appendChild(ulList);


// Part 5
var newDiv = document.createElement('div');
newDiv.classList.add('blog-post');
newDiv.classList.add('purple');
console.log(newDiv);

var newHeader = document.createElement('h1');
var pText = document.createElement('p');
var rCity = document.createTextNode('wonderful city');

pText.appendChild(rCity)
newHeader.appendChild(newCity);
newDiv.appendChild(newHeader);
newDiv.appendChild(pText);

document.querySelector('.main').appendChild(newDiv);




// Part 6

// var listt = document.querySelector('#favorite-things'); 
  
//    for (i=0;i<listt.length===0)
//    {
//      var newFavList = favoriteThings[i];
//    var li1 = document.createElement('li'); 
    
    
//    var li1text = document.createTextNode(newFavList); 
//    li1.appendChild(li1text); 
    
//    listt.appendChild(li1);   
//    }

//    var favoriteThings = [
//     'Fast cars',
//     'Muscles',
//     'Sleeveless t-shirts',
//     'Revving my engine',
//     'Living my life a quarter mile at a time',
//     'Staring people down'
//   ]

  var listt = document.querySelector('#favorite-things');
  var favoriteThings = [
    'Fast cars',
    'Muscles',
    'Sleeveless t-shirts',
    'Revving my engine',
    'Living my life a quarter mile at a time',
    'Staring people down'
  ]
  for (var i = 0; i < favoriteThings.length; i++) {
    var newFavList = favoriteThings[i];
    var li1 = document.createElement('li');
    var li1Text = document.createTextNode(newFavList);
    li1.appendChild(li1Text);
    listt.appendChild(li1);
  }


// Part 7
var submitButton = document.querySelector('#quote-title');
submitButton.addEventListener('click', function(event) {


     randomQuote();

     event.preventDefault();
    console.log(event)
})
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


// helper function to quickly create elements with text and css class
// can pass it a single style or an array with css styles
// (String:String:List of Strings) -> HTML element
function elementFactory(tag, text, css) {
  var element = document.createElement(tag);
  var innerHTML = document.createTextNode(text);

  element.appendChild(innerHTML);
  if(css !== '') {
    if(typeof css === 'string') {
      element.classList.add(css);
    } else {
      css.forEach(function(style) {
        element.classList.add(style);
      })
    }
  }
 
  return element;
}

console.log(elementFactory('span', 'it works!', ['lol', 'this-is-awesome']));

// Part 1
document.querySelector('#main-title').innerHTML = "Dom Toretto's Homepage";

// Part 2
document.body.style.backgroundColor = 'lightgreen';

// Part 3
var specialTitles = document.querySelectorAll('.special-title');
specialTitles.forEach(function (title) {
  title.style.fontSize = '2rem';
})

// Part 4
document.querySelector('#past-races').appendChild(elementFactory('li', 'Riyadh', ''));

// Part 5
var riyadhDiv = elementFactory('div', '', ['blog-post', 'purple']);
var riyadhH2 = elementFactory('h1', 'Riyadh','');
var riyadhP = elementFactory('p', "RACED IN A SANDSTORM WHILE LISTENING TO DARUDE'S SANDSTORM", '');
riyadhDiv.appendChild(riyadhH2);
riyadhDiv.appendChild(riyadhP);

document.querySelector('.main').appendChild(riyadhDiv);

// Part 6
favoriteThings.forEach(function(thing) {
  document.querySelector('#favorite-things').appendChild(elementFactory('li',thing,''));
})

// Part 7
document.querySelector('#quote-title').addEventListener('click', function(event) {
  randomQuote();
})

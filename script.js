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
function changeText() {
  var titleText = document.querySelector('#main-title');
  titleText.innerHTML = 'DOM Toretto';
  console.log(titleText);
}
changeText();

// Part 2
function changColor() {
  var bodyElement = document.querySelector(".main");
  bodyElement.style.backgroundColor = 'pink';
}
changColor();

// Part 3
function changFont() {
  var titleElement = document.querySelectorAll('.special-title');
  for (var i = 0; i < titleElement.length; i++) {
    titleElement[i].style.fontSize = '1.5rem';//2rem was looking unsuitable :) 
  }
}
changFont();
// Part 4
function addCityList(){
  var citylist=document.getElementsByTagName('ul');
  //onsole.log(citylist);
  for (var i=0;i<citylist.length;i++){
    if(citylist[i].id !== 'favorite-things'){
      var cityaddnew = document.createElement("li");
     cityaddnew.appendChild(document.createTextNode("Riyadh"));
     citylist[i].appendChild(cityaddnew);
    }
  }
}
addCityList();
// Part 5
function addPost(){
  var titlePost = document.createElement("h1");
  titlePost.appendChild(document.createTextNode("Riyadh"));
  var contentPost = document.createElement("p");
  contentPost.appendChild(document.createTextNode("I DROVE MY CAR AROUND A PARKING GARAGE"));
  var newDiv = document.createElement("div"); 
  newDiv.className="blog-post purple"; 
  console.log(contentPost);
  console.log(titlePost);
  newDiv.appendChild(titlePost);
  newDiv.appendChild(contentPost);
  var attachPost= document.querySelector(".main");
  attachPost.appendChild(newDiv);
}
addPost();
// Part 6
function addList(){
 // var favThing=['Diving','Swimming','Learning','Skiting'];
  var listItem,postItem;
  for (var i=0; i<favoriteThings.length;i++){
    listItem=document.createElement('li');
    listItem.appendChild(document.createTextNode(favoriteThings[i]));
    postItem=document.getElementById('favorite-things');
    postItem.appendChild(listItem);
  }
}
addList();
// Part7
function changeQuet(){
  var ele=document.querySelector('#quote-title');
  console.log(ele);
  ele.addEventListener('click',function(event){
    event.preventDefault();
    randomQuote();});
  }
  
  changeQuet();

# DOM Manipulation

Can you really *manipulate* The DOM though?

![Dom Toretto](https://media.giphy.com/media/XDb8RW95ZVLLW/giphy.gif)

Yea I didn't think so... Thankfully we're not talking about *that* Dom.

Tonight we're going to be practicing DOM manipulation and event handling using vanilla javascript

## Learning Objectives
- DOM Manipulation
- Event Handlers

## Setup
You're provided a basic website with included `index.html`, `style.css`, and `script.js`. All of your work will go in `script.js` - you shouldn't have to edit `index.html` or `style.css`. Please create individual functions for each solution. Don't forget to **call** the function once you're finished.

## Resources 

This [DOM Gist](https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86) has a helpful section on DOM querying and creation

### Accessing DOM Elements (Querying)

#### Part 1
DOM's personal website title is a bit wordy. Select the `#main-title` ID element and change the **textContent** of the title to something shorter.

document.getElementById("main-title ").textContent = "New Title";

#### Part 2
Select the `body` and change the background-color to a new color of your choice.

document.body.style.backgroundColor = "red";

#### Part 3
Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the list of elements! 

var x = document.getElementsByClassName("special-title ");

var i;

for (i = 0; i < x.length; i++) {

x[i].style. font-size = "2rem ";

}

### Creating New DOM Elements

#### Part 4
Let's add to DOM's **Past Races** list. Create a new `<li>` element, change the new `<li>` text to the name of a city, and append it to the **Past Races** list.

var node = document.createElement("LI");

node. setAttribute('id', 'newCityId'); node.textContent ="London";

document.getElementById("Past Races").appendChild(node);

#### Part 5
Create a new `.blog-post` corresponding to the new city added in **Part 6**. You will have to create a new `<div>` with class of `.blog-post`, a new `<h2>` with text, and a new `<p>` with some text. Think about what order you want to create the elements, and what order you want to append them in.

var div = document.createElement('div');

div.setAttribute('class', 'blog-post');

var header = document.createElement("h2");

header. innerHTML = "Blog Header";

var p = document.createElement("p");

p. innerHTML = "Welcome";

div.appendChild(header);

header.appendChild(p);

document.getElementById("newCityId").appendChild(div);

#### Part 6 
Dom's list of favorite things is empty! Lets change that. Iterate through then favoriteThings array. For every favorite thing, create an li element and append it to the ul with an id of favorite-things.

Var favoriteThings = document.getElementById("favoriteThings ");

var i;

for (i = 0; i < favoriteThings.length; i++ ) {

var LI = document.createElement("li"), // create a new li

div.setAttribute(id, 'favoriteThings'+i);

newContent = document.createTextNode("favorite things" + i);

LI.appendChild(newContent);

favoriteThings[i].appendChild(newLI);

}

### Events!

#### Part 7
When you reload the page, the `script.js` file loads a random DOM quote. Let's play with the included function:

```javascript
function randomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
};
```

Select the `#quote-title` ID element and add a **click** event handler. That event handler should use the function `randomQuote` whenever `#quote-title` is clicked.

document.querySelector("#quote-title").addEventListener('click', randomQuote ());

## Homework Submission:

## Submission 

Homework is due at 2:00AM! Please follow the usual steps for submission that can be found [here](https://github.com/js-penguins/homework-submission)







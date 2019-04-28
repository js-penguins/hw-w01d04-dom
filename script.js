#### Part 1



DOM's personal website title is a bit wordy. Select the `#main-title` ID element and change the **textContent** of the title to something shorter.







document.getElementById("main-title ").textContent = "New Title";







#### Part 2



Select the `body` and change the background-color to a new color of your choice.







document.body.style.backgroundColor = "red";







#### Part 3



Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the list of elements!  



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

@@ -55,6 +111,7 @@ function randomQuote() {







Select the `#quote-title` ID element and add a **click** event handler. That event handler should use the function `randomQuote` whenever `#quote-title` is clicked.







document.querySelector("#quote-title").addEventListener('click', randomQuote ());




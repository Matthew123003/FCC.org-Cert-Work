/*

What is innerHTML?

innerHTML is a property of DOM (Document Object Model) elements in JavaScript that allows
 you to get or set the HTML content inside an element. It provides a way to manipulate the 
 contents of an element dynamically, enabling you to add, remove, or replace HTML elements
  and content.
How innerHTML Works

    Getting Content: When you access the innerHTML property, it returns the HTML content inside
     the element as a string.
    Setting Content: When you set the innerHTML property, it parses the string you assign to it
     and replaces the current HTML content of the element with the new content.

Example: Getting innerHTML

Suppose you have the following HTML:

html

<div id="myDiv">Hello, World!</div>

You can get the innerHTML of this div element as follows:

*/

// GETTING INNERHTML **************************************************************************************************

// Select the element by its ID
const myDiv01 = document.getElementById('myDiv');

// Get the innerHTML of the element
const content = myDiv01.innerHTML;

// Log the content to the console
console.log(content); // Output: "Hello, World!"

// SETTING INNERHTML **************************************************************************************************

// Select the element by its ID
const myDiv02 = document.getElementById('myDiv');

// Set the innerHTML of the element
myDiv02.innerHTML = '<p>This is a paragraph</p>';

// Log the new content to the console
console.log(myDiv.innerHTML); // Output: "<p>This is a paragraph</p>"




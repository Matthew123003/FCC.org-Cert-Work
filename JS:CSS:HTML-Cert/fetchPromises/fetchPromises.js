const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

/*The Fetch API is a built-in JavaScript interface to make network requests to a server. It has a fetch() method you can use to make GET, POST, PUT, or PATCH requests. In this project, you'll make a GET request to a URL for a JSON file with information about authors on freeCodeCamp News.

Here is how you can make a GET request with the fetch() method:
Example Code

fetch("url-goes-here") */


fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
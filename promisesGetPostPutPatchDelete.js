
  // GETTING INFO FROM THE HTML DOM AND SETTING IT TO JS VARIABLES
  const authorContainer = document.getElementById('author-container');
  const loadMoreBtn = document.getElementById('load-more-btn');

  // ADD EVENT LISTENER
  loadMoreBtn.addEventListener('click', fetchMoreAuthors);


  //GET REQUEST

  fetch('https://example.com/api/resource')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  // POST REQUEST

  fetch('https://example.com/api/resource', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      key1: 'value1',
      key2: 'value2'
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  // PUT REQUEST

  fetch('https://example.com/api/resource/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      key1: 'updatedValue1',
      key2: 'updatedValue2'
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  
  // DELETE REQUEST

  fetch('https://example.com/api/resource/1', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  
  // PATCH REQUEST

  fetch('https://example.com/api/resource/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      key1: 'updatedValue1'
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


  /*The Fetch API is a built-in JavaScript interface to make network requests to a server. It has a fetch() method 
you can use to make GET, POST, PUT, or PATCH requests. In this project, you'll make a GET request to a URL for
 a JSON file with information about authors on freeCodeCamp News.

Here is how you can make a GET request with the fetch() method:
Example Code

fetch("url-goes-here") */

/* The fetch() method returns a Promise, which is a placeholder object that will either be fulfilled if
 your request is successful, or rejected if your request is unsuccessful.

If the Promise is fulfilled, it resolves to a Response object, and you can use the .then() method to access the Response.

Here's how you can chain .then() to the fetch() method:
Example Code

fetch("sample-url-goes-here")
  .then((res) => res)

Chain the .then() method to your fetch call. Inside the .then() method, add a callback function with
 res as a parameter, then log the res to the console so you can see the Response object. Open your
  console and expand the Response object to see what it contains. 
  


The .catch() method is another asynchronous JavaScript method you can use to handle errors. This is useful 
in case the Promise gets rejected.

Chain .catch() to the last .then(). Pass in a callback function with err as the parameter. Inside the 
callback, use console.error() to log possible errors to the console with the text There was an error: ${err}.
 Since you're using err in the text, don't forget to use a template literal string with backticks (``) instead
  of single or double quotes.

Note: Now you can terminate your code with a semicolon. You couldn't do that in the previous steps because you'll
 signal to JavaScript to stop parsing your code, which will affect the fetch() syntax.

 Inside the template literal, create a div element with the id set to the index from the .forEach() array method.
  Remember to use template interpolation to do this.
  
  */
  
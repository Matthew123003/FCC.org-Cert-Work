// GETTING INFO FROM THE HTML DOM AND SETTING IT TO JS VARIABLES
const authorContainer = document.getElementById('author-container'); // Retrieves the DOM element with the ID 'author-container' and assigns it to the variable 'authorContainer'
const loadMoreBtn = document.getElementById('load-more-btn'); // Retrieves the DOM element with the ID 'load-more-btn' and assigns it to the variable 'loadMoreBtn'

// ADD EVENT LISTENER
loadMoreBtn.addEventListener('click', fetchMoreAuthors); // Adds a click event listener to the 'loadMoreBtn' element that triggers the 'fetchMoreAuthors' function when clicked

// GET REQUEST (READ)
fetch('https://example.com/api/resource') // Sends a GET request to the specified URL
  .then(response => { // Processes the response object from the server
    if (!response.ok) { // Checks if the response status indicates an error (not in the 200-299 range)
      throw new Error('Network response was not ok'); // Throws an error if the response is not OK
    }
    return response.json(); // Converts the response body to JSON format and returns it as a promise
  })
  .then(data => { // Processes the JSON data from the previous promise
    console.log(data); // Logs the JSON data to the console
  })
  .catch(error => { // Catches any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error); // Logs the error to the console
  });

fetch('https://example.com/api/resource') // Sends a GET request to the specified URL
  .then(response => response.json()) // Converts the response body to JSON format
  .then(data => console.log(data)) // Logs the JSON data to the console
  .catch(error => console.error('Error:', error)); // Handles and logs any errors during the fetch operation

/*
fetch('https://example.com/api/resource'): Sends a GET request to the specified URL.
.then(response => response.json()): Converts the response from the server into JSON format. response.json() returns a promise.
.then(data => console.log(data)): Handles the JSON data from the previous promise and logs it to the console.
.catch(error => console.error('Error:', error)): Catches and logs any errors that occur during the fetch.
*/

// POST REQUEST (CREATE)
fetch('https://example.com/api/resource', {
  method: 'POST', // Specifies that this is a POST request
  headers: {
    'Content-Type': 'application/json' // Indicates that the request body is in JSON format
  },
  body: JSON.stringify({ // Converts the data to be sent into a JSON string
    key1: 'value1',
    key2: 'value2'
  })
})
  .then(response => { // Processes the response object from the server
    if (!response.ok) { // Checks if the response status indicates an error
      throw new Error('Network response was not ok'); // Throws an error if the response is not OK
    }
    return response.json(); // Converts the response body to JSON format and returns it as a promise
  })
  .then(data => { // Processes the JSON data from the previous promise
    console.log(data); // Logs the JSON data to the console
  })
  .catch(error => { // Catches any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error); // Logs the error to the console
  });

fetch('https://example.com/api/resource', {
  method: 'POST', // Specifies that this is a POST request
  headers: {
    'Content-Type': 'application/json' // Indicates that the request body is in JSON format
  },
  body: JSON.stringify({ // Converts the data to be sent into a JSON string
    key1: 'value1',
    key2: 'value2'
  })
})
  .then(response => response.json()) // Converts the response body to JSON format
  .then(data => console.log(data)) // Logs the JSON data to the console
  .catch(error => console.error('Error:', error)); // Handles and logs any errors during the fetch operation

/*
method: 'POST': Specifies the HTTP method for the request.
headers: { 'Content-Type': 'application/json' }: Sets the content type of the request body to JSON.
body: JSON.stringify({ key1: 'value1', key2: 'value2' }): Converts the JavaScript object to a JSON string to be sent as the request body.
.then(response => response.json()): Parses the JSON response from the server.
.then(data => console.log(data)): Logs the parsed data to the console.
.catch(error => console.error('Error:', error)): Logs any errors that occur.
*/

// PUT REQUEST (UPDATE)
fetch('https://example.com/api/resource/1', {
  method: 'PUT', // Specifies that this is a PUT request
  headers: {
    'Content-Type': 'application/json' // Indicates that the request body is in JSON format
  },
  body: JSON.stringify({ // Converts the updated data into a JSON string
    key1: 'updatedValue1',
    key2: 'updatedValue2'
  })
})
  .then(response => { // Processes the response object from the server
    if (!response.ok) { // Checks if the response status indicates an error
      throw new Error('Network response was not ok'); // Throws an error if the response is not OK
    }
    return response.json(); // Converts the response body to JSON format and returns it as a promise
  })
  .then(data => { // Processes the JSON data from the previous promise
    console.log(data); // Logs the JSON data to the console
  })
  .catch(error => { // Catches any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error); // Logs the error to the console
  });

fetch('https://example.com/api/resource/1', {
  method: 'PUT', // Specifies that this is a PUT request
  headers: {
    'Content-Type': 'application/json' // Indicates that the request body is in JSON format
  },
  body: JSON.stringify({ // Converts the updated data into a JSON string
    key1: 'new value',
    key2: 'another new value'
  })
})
  .then(response => response.json()) // Converts the response body to JSON format
  .then(data => console.log(data)) // Logs the JSON data to the console
  .catch(error => console.error('Error:', error)); // Handles and logs any errors during the fetch operation

/*
method: 'PUT': Specifies the HTTP method for the request, used to update existing resources.
body: JSON.stringify({ key1: 'new value', key2: 'another new value' }): Converts the updated data into JSON format for the request body.
*/

// DELETE REQUEST (DELETE)
fetch('https://example.com/api/resource/1', {
  method: 'DELETE', // Specifies that this is a DELETE request
  headers: {
    'Content-Type': 'application/json' // Indicates that the request body is in JSON format (usually optional for DELETE requests)
  }
})
  .then(response => { // Processes the response object from the server
    if (!response.ok) { // Checks if the response status indicates an error
      throw new Error('Network response was not ok'); // Throws an error if the response is not OK
    }
    return response.json(); // Converts the response body to JSON format and returns it as a promise
  })
  .then(data => { // Processes the JSON data from the previous promise
    console.log(data); // Logs the JSON data to the console
  })
  .catch(error => { // Catches any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error); // Logs the error to the console
  });

fetch('https://example.com/api/resource/1', {
  method: 'DELETE' // Specifies that this is a DELETE request
})
  .then(response => { // Processes the response object from the server
    if (response.ok) { // Checks if the response status indicates a successful request
      console.log('Resource deleted successfully'); // Logs a success message if the request was successful
    } else {
      console.error('Failed to delete resource'); // Logs an error message if the request failed
    }
  })
  .catch(error => console.error('Error:', error)); // Handles and logs any errors during the fetch operation

/*
method: 'DELETE': Specifies the HTTP method for the request, used to delete resources.
response.ok: Checks if the response status indicates a successful request.
*/

// PATCH REQUEST (PARTIALLY UPDATE)
fetch('https://example.com/api/resource/1', {
  method: 'PATCH', // Specifies that this is a PATCH request
  headers: {
    'Content-Type': 'application/json' // Indicates that the request body is in JSON format
  },
  body: JSON.stringify({ // Converts the partial data update into a JSON string
    key1: 'updatedValue1'
  })
})
  .then(response => { // Processes the response object from the server
    if (!response.ok) { // Checks if the response status indicates an error
      throw new Error('Network response was not ok'); // Throws an error if the response is not OK
    }
    return response.json(); // Converts the response body to JSON format and returns it as a promise
  })
  .then(data => { // Processes the JSON data from the previous promise
    console.log(data); // Logs the JSON data to the console
  })
  .catch(error => { // Catches any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error); // Logs the error to the console
  });

fetch('https://example.com/api/resource/1', {
  method: 'PATCH', // Specifies that this is a PATCH request
  headers: {
    'Content-Type': 'application/json' // Indicates that the request body is in JSON format
  },
  body: JSON.stringify({ // Converts the partial data update into a JSON string
    key1: 'updated value'
  })
})
  .then(response => response.json()) // Converts the response body to JSON format
  .then(data => console.log(data)) // Logs the JSON data to the console
  .catch(error => console.error('Error:', error)); // Handles and logs any errors during the fetch operation

/*
method: 'PATCH': Specifies the HTTP method for the request, used to partially update resources.
body: JSON.stringify({ key1: 'updated value' }): Converts partial update data into JSON format for the request body.
*/

// OPTIONS REQUEST (GETS OPTIONS AVAILABLE FOR PAGE OR API)
fetch('https://example.com/api/resource', {
  method: 'OPTIONS' // Specifies that this is an OPTIONS request
})
  .then(response => response.headers.get('Allow')) // Retrieves the 'Allow' header from the response
  .then(methods => console.log('Supported methods:', methods)) // Logs the allowed HTTP methods to the console
  .catch(error => console.error('Error:', error)); // Handles and logs any errors during the fetch operation

fetch('https://example.com/api/resource', {
  method: 'OPTIONS' // Specifies that this is an OPTIONS request
})
  .then(response => response.headers.get('Allow')) // Retrieves the 'Allow' header from the response
  .then(methods => console.log('Supported methods:', methods)) // Logs the allowed HTTP methods to the console
  .catch(error => console.error('Error:', error)); // Handles and logs any errors during the fetch operation

/*
method: 'OPTIONS': Specifies the HTTP method for the request, used to get information about allowed methods.
response.headers.get('Allow'): Retrieves the Allow header, which contains a comma-separated list of supported HTTP methods.
*/

// HEAD REQUEST (GET HEADERS)
fetch('https://example.com/api/resource', {
  method: 'HEAD' // Specifies that this is a HEAD request
})
  .then(response => { // Processes the response object from the server
    console.log('Headers:', response.headers); // Logs the headers from the response
  })
  .catch(error => console.error('Error:', error)); // Handles and logs any errors during the fetch operation

fetch('https://example.com/api/resource', {
  method: 'HEAD' // Specifies that this is a HEAD request
})
  .then(response => { // Processes the response object from the server
    console.log('Headers:', response.headers); // Logs the headers from the response
  })
  .catch(error => console.error('Error:', error)); // Handles and logs any errors during the fetch operation

/*
method: 'HEAD': Specifies the HTTP method for the request, used to get headers without a body.
response.headers: Provides access to the headers of the response.
*/

/*

Notes:

  fetch(url, options): The fetch function sends the request. 'url' is the endpoint, and 'options' is an object containing configuration like method, headers, and body.
  response.json(): Parses the JSON body of the response.
  response.ok: Boolean indicating if the response status is in the range 200-299.
  response.headers: Provides access to the response headers.
  .catch(error => console.error('Error:', error)): Handles and logs any errors during the fetch operation.

*/

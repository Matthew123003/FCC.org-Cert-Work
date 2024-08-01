// GET REQUEST (READ) ****************************************************************************************************

function getData() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest(); // Initializes a new XMLHttpRequest instance for making HTTP requests
  
  // Configure it: GET-request for the URL
  xhr.open('GET', 'https://example.com/api/resource', true); // Configures the request to use the GET method and specifies the URL
  
  // Set up the callback function that will be called when the request status changes
  xhr.onreadystatechange = function() { // Sets up a function to handle changes in request status
    // Check if the request is complete
    if (xhr.readyState === XMLHttpRequest.DONE) { // Checks if the request has completed (readyState is DONE)
      // Check if the status code is OK (200)
      if (xhr.status === 200) { // Checks if the HTTP status code is 200 (OK)
        // Parse the JSON response
        const data = JSON.parse(xhr.responseText); // Parses the response text as JSON
        // Log the data to the console
        console.log(data); // Logs the parsed data to the console
      } else {
        // Handle any errors that occurred during the request
        console.error('There was a problem with the request:', xhr.statusText); // Logs an error message if the status code is not OK
      }
    }
  };
  
  // Send the request
  xhr.send(); // Sends the request to the server
}

// Call the getData function to execute the GET request
getData(); // Executes the getData function

// POST REQUEST (CREATE) ****************************************************************************************************

function postData() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest(); // Initializes a new XMLHttpRequest instance for making HTTP requests
  
  // Configure it: POST-request for the URL
  xhr.open('POST', 'https://example.com/api/resource', true); // Configures the request to use the POST method and specifies the URL
  
  // Set the request headers to indicate JSON content
  xhr.setRequestHeader('Content-Type', 'application/json'); // Sets the Content-Type header to indicate the request body is JSON
  
  // Set up the callback function that will be called when the request status changes
  xhr.onreadystatechange = function() { // Sets up a function to handle changes in request status
    // Check if the request is complete
    if (xhr.readyState === XMLHttpRequest.DONE) { // Checks if the request has completed (readyState is DONE)
      // Check if the status code is OK (200)
      if (xhr.status === 200) { // Checks if the HTTP status code is 200 (OK)
        // Parse the JSON response
        const data = JSON.parse(xhr.responseText); // Parses the response text as JSON
        // Log the data to the console
        console.log(data); // Logs the parsed data to the console
      } else {
        // Handle any errors that occurred during the request
        console.error('There was a problem with the request:', xhr.statusText); // Logs an error message if the status code is not OK
      }
    }
  };
  
  // Prepare the data to be sent
  const data = JSON.stringify({
    key1: 'value1', // Creates a JSON object with key-value pairs
    key2: 'value2'
  });
  
  // Send the request with the data
  xhr.send(data); // Sends the request to the server with the JSON data as the request body
}

// Call the postData function to execute the POST request
postData(); // Executes the postData function

// PUT REQUEST (UPDATE) ****************************************************************************************************

function putData() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest(); // Initializes a new XMLHttpRequest instance for making HTTP requests
  
  // Configure it: PUT-request for the URL
  xhr.open('PUT', 'https://example.com/api/resource/1', true); // Configures the request to use the PUT method and specifies the URL
  
  // Set the request headers to indicate JSON content
  xhr.setRequestHeader('Content-Type', 'application/json'); // Sets the Content-Type header to indicate the request body is JSON
  
  // Set up the callback function that will be called when the request status changes
  xhr.onreadystatechange = function() { // Sets up a function to handle changes in request status
    // Check if the request is complete
    if (xhr.readyState === XMLHttpRequest.DONE) { // Checks if the request has completed (readyState is DONE)
      // Check if the status code is OK (200)
      if (xhr.status === 200) { // Checks if the HTTP status code is 200 (OK)
        // Parse the JSON response
        const data = JSON.parse(xhr.responseText); // Parses the response text as JSON
        // Log the data to the console
        console.log(data); // Logs the parsed data to the console
      } else {
        // Handle any errors that occurred during the request
        console.error('There was a problem with the request:', xhr.statusText); // Logs an error message if the status code is not OK
      }
    }
  };
  
  // Prepare the updated data to be sent
  const data = JSON.stringify({
    key1: 'updatedValue1', // Creates a JSON object with updated key-value pairs
    key2: 'updatedValue2'
  });
  
  // Send the request with the data
  xhr.send(data); // Sends the request to the server with the JSON data as the request body
}

// Call the putData function to execute the PUT request
putData(); // Executes the putData function

// PATCH REQUEST (PARTIALLY UPDATE) ****************************************************************************************************

function patchData() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest(); // Initializes a new XMLHttpRequest instance for making HTTP requests
  
  // Configure it: PATCH-request for the URL
  xhr.open('PATCH', 'https://example.com/api/resource/1', true); // Configures the request to use the PATCH method and specifies the URL
  
  // Set the request headers to indicate JSON content
  xhr.setRequestHeader('Content-Type', 'application/json'); // Sets the Content-Type header to indicate the request body is JSON
  
  // Set up the callback function that will be called when the request status changes
  xhr.onreadystatechange = function() { // Sets up a function to handle changes in request status
    // Check if the request is complete
    if (xhr.readyState === XMLHttpRequest.DONE) { // Checks if the request has completed (readyState is DONE)
      // Check if the status code is OK (200)
      if (xhr.status === 200) { // Checks if the HTTP status code is 200 (OK)
        // Parse the JSON response
        const data = JSON.parse(xhr.responseText); // Parses the response text as JSON
        // Log the data to the console
        console.log(data); // Logs the parsed data to the console
      } else {
        // Handle any errors that occurred during the request
        console.error('There was a problem with the request:', xhr.statusText); // Logs an error message if the status code is not OK
      }
    }
  };
  
  // Prepare the partial data update to be sent
  const data = JSON.stringify({
    key1: 'updatedValue1' // Creates a JSON object with partial update key-value pairs
  });
  
  // Send the request with the data
  xhr.send(data); // Sends the request to the server with the JSON data as the request body
}

// Call the patchData function to execute the PATCH request
patchData(); // Executes the patchData function

// DELETE REQUEST (DELETE/REMOVE) *****************************************************************************************

function deleteData() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest(); // Initializes a new XMLHttpRequest instance for making HTTP requests
  
  // Configure it: DELETE-request for the URL
  xhr.open('DELETE', 'https://example.com/api/resource/1', true); // Configures the request to use the DELETE method and specifies the URL
  
  // Set the request headers to indicate JSON content (optional for DELETE)
  xhr.setRequestHeader('Content-Type', 'application/json'); // Sets the Content-Type header to indicate the request body is JSON (optional for DELETE)
  
  // Set up the callback function that will be called when the request status changes
  xhr.onreadystatechange = function() { // Sets up a function to handle changes in request status
    // Check if the request is complete
    if (xhr.readyState === XMLHttpRequest.DONE) { // Checks if the request has completed (readyState is DONE)
      // Check if the status code is OK (200)
      if (xhr.status === 200) { // Checks if the HTTP status code is 200 (OK)
        // Log a success message
        console.log('Resource deleted successfully'); // Logs a success message if the status code is OK
      } else {
        // Handle any errors that occurred during the request
        console.error('There was a problem with the request:', xhr.statusText); // Logs an error message if the status code is not OK
      }
    }
  };
  
  // Send the request
  xhr.send(); // Sends the request to the server
}

// Call the deleteData function to execute the DELETE request
deleteData(); // Executes the deleteData function

// HEAD REQUEST (HEADERS ONLY) ****************************************************************************************************

function headRequest() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest(); // Initializes a new XMLHttpRequest instance for making HTTP requests
  
  // Configure it: HEAD-request for the URL
  xhr.open('HEAD', 'https://example.com/api/resource', true); // Configures the request to use the HEAD method and specifies the URL
  
  // Set up the callback function that will be called when the request status changes
  xhr.onreadystatechange = function() { // Sets up a function to handle changes in request status
    // Check if the request is complete
    if (xhr.readyState === XMLHttpRequest.DONE) { // Checks if the request has completed (readyState is DONE)
      // Check if the status code is OK (200)
      if (xhr.status === 200) { // Checks if the HTTP status code is 200 (OK)
        // Log the headers from the response
        console.log(xhr.getAllResponseHeaders()); // Logs all response headers to the console
      } else {
        // Handle any errors that occurred during the request
        console.error('There was a problem with the request:', xhr.statusText); // Logs an error message if the status code is not OK
      }
    }
  };
  
  // Send the request
  xhr.send(); // Sends the request to the server
}

// Call the headRequest function to execute the HEAD request
headRequest(); // Executes the headRequest function

// OPTIONS REQUEST (OPTIONS RETURN LIKE IN POSTMAN TO SEE WHAT REQUESTS YOU ARE ALLOWED TO MAKE) ****************************************************************************************************

function optionsRequest() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest(); // Initializes a new XMLHttpRequest instance for making HTTP requests
  
  // Configure it: OPTIONS-request for the URL
  xhr.open('OPTIONS', 'https://example.com/api/resource', true); // Configures the request to use the OPTIONS method and specifies the URL
  
  // Set up the callback function that will be called when the request status changes
  xhr.onreadystatechange = function() { // Sets up a function to handle changes in request status
    // Check if the request is complete
    if (xhr.readyState === XMLHttpRequest.DONE) { // Checks if the request has completed (readyState is DONE)
      // Check if the status code is OK (200)
      if (xhr.status === 200) { // Checks if the HTTP status code is 200 (OK)
        // Log the allowed HTTP methods from the response headers
        console.log(xhr.getResponseHeader('Allow')); // Logs the allowed HTTP methods from the 'Allow' header to the console
      } else {
        // Handle any errors that occurred during the request
        console.error('There was a problem with the request:', xhr.statusText); // Logs an error message if the status code is not OK
      }
    }
  };
  
  // Send the request
  xhr.send(); // Sends the request to the server
}

// Call the optionsRequest function to execute the OPTIONS request
optionsRequest(); // Executes the optionsRequest function

 
  
 /*
 
Notes:

    XMLHttpRequest(): Creates a new XMLHttpRequest object for making HTTP requests.
    xhr.open(method, url, async): Initializes a request with the specified HTTP method, URL, and whether the request should be asynchronous (true).
    xhr.setRequestHeader(header, value): Sets the value of an HTTP request header.
    xhr.onreadystatechange: An event handler that is called whenever the readyState property of the XMLHttpRequest object changes.
    xhr.readyState: The current state of the request. XMLHttpRequest.DONE indicates the request is complete.
    xhr.status: The HTTP status code of the response.
    xhr.responseText: The response data as a string.
    JSON.parse(): Parses a JSON string and returns the corresponding JavaScript object.
    xhr.send(body): Sends the request with an optional body containing data. 

 */

// GET REQUEST (READ) ****************************************************************************************************

function getData() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure it: GET-request for the URL
    xhr.open('GET', 'https://example.com/api/resource', true);
    
    // Set up the callback function that will be called when the request status changes
    xhr.onreadystatechange = function() {
      // Check if the request is complete
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Check if the status code is OK (200)
        if (xhr.status === 200) {
          // Parse the JSON response
          const data = JSON.parse(xhr.responseText);
          // Log the data to the console
          console.log(data);
        } else {
          // Handle any errors that occurred during the request
          console.error('There was a problem with the request:', xhr.statusText);
        }
      }
    };
    
    // Send the request
    xhr.send();
  }
  
  // Call the getData function to execute the GET request
  getData();

  
// POST REQUEST (CREATE) ****************************************************************************************************

function postData() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure it: POST-request for the URL
    xhr.open('POST', 'https://example.com/api/resource', true);
    
    // Set the request headers to indicate JSON content
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    // Set up the callback function that will be called when the request status changes
    xhr.onreadystatechange = function() {
      // Check if the request is complete
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Check if the status code is OK (200)
        if (xhr.status === 200) {
          // Parse the JSON response
          const data = JSON.parse(xhr.responseText);
          // Log the data to the console
          console.log(data);
        } else {
          // Handle any errors that occurred during the request
          console.error('There was a problem with the request:', xhr.statusText);
        }
      }
    };
    
    // Prepare the data to be sent
    const data = JSON.stringify({
      key1: 'value1',
      key2: 'value2'
    });
    
    // Send the request with the data
    xhr.send(data);
  }
  
  // Call the postData function to execute the POST request
  postData();

  
// PUT REQUEST (UPDATE) ****************************************************************************************************

function putData() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure it: PUT-request for the URL
    xhr.open('PUT', 'https://example.com/api/resource/1', true);
    
    // Set the request headers to indicate JSON content
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    // Set up the callback function that will be called when the request status changes
    xhr.onreadystatechange = function() {
      // Check if the request is complete
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Check if the status code is OK (200)
        if (xhr.status === 200) {
          // Parse the JSON response
          const data = JSON.parse(xhr.responseText);
          // Log the data to the console
          console.log(data);
        } else {
          // Handle any errors that occurred during the request
          console.error('There was a problem with the request:', xhr.statusText);
        }
      }
    };
    
    // Prepare the updated data to be sent
    const data = JSON.stringify({
      key1: 'updatedValue1',
      key2: 'updatedValue2'
    });
    
    // Send the request with the data
    xhr.send(data);
  }
  
  // Call the putData function to execute the PUT request
  putData();

  
// PATCH REQUEST (PARTIALLY UPDATE) ****************************************************************************************************


function patchData() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure it: PATCH-request for the URL
    xhr.open('PATCH', 'https://example.com/api/resource/1', true);
    
    // Set the request headers to indicate JSON content
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    // Set up the callback function that will be called when the request status changes
    xhr.onreadystatechange = function() {
      // Check if the request is complete
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Check if the status code is OK (200)
        if (xhr.status === 200) {
          // Parse the JSON response
          const data = JSON.parse(xhr.responseText);
          // Log the data to the console
          console.log(data);
        } else {
          // Handle any errors that occurred during the request
          console.error('There was a problem with the request:', xhr.statusText);
        }
      }
    };
    
    // Prepare the partial data update to be sent
    const data = JSON.stringify({
      key1: 'updatedValue1'
    });
    
    // Send the request with the data
    xhr.send(data);
  }
  
  // Call the patchData function to execute the PATCH request
  patchData();

  

// DELETE REQUEST (DELETE/REMOVE) *****************************************************************************************


function deleteData() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure it: DELETE-request for the URL
    xhr.open('DELETE', 'https://example.com/api/resource/1', true);
    
    // Set the request headers to indicate JSON content (optional for DELETE)
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    // Set up the callback function that will be called when the request status changes
    xhr.onreadystatechange = function() {
      // Check if the request is complete
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Check if the status code is OK (200)
        if (xhr.status === 200) {
          // Log a success message
          console.log('Resource deleted successfully');
        } else {
          // Handle any errors that occurred during the request
          console.error('There was a problem with the request:', xhr.statusText);
        }
      }
    };
    
    // Send the request
    xhr.send();
  }
  
  // Call the deleteData function to execute the DELETE request
  deleteData();

  

// HEAD REQUEST (HEADERS ONLY) ****************************************************************************************************

 
 function headRequest() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure it: HEAD-request for the URL
    xhr.open('HEAD', 'https://example.com/api/resource', true);
    
    // Set up the callback function that will be called when the request status changes
    xhr.onreadystatechange = function() {
      // Check if the request is complete
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Check if the status code is OK (200)
        if (xhr.status === 200) {
          // Log the headers from the response
          console.log(xhr.getAllResponseHeaders());
        } else {
          // Handle any errors that occurred during the request
          console.error('There was a problem with the request:', xhr.statusText);
        }
      }
    };
    
    // Send the request
    xhr.send();
  }
  
  // Call the headRequest function to execute the HEAD request
  headRequest();

  
// OPTIONS REQUEST (OPTIONS RETURN LIKE IN POSTMAN TO SEE WHAT REQUESTS YOU ARE ALLOWED TO MAKE) ****************************************************************************************************

function optionsRequest() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure it: OPTIONS-request for the URL
    xhr.open('OPTIONS', 'https://example.com/api/resource', true);
    
    // Set up the callback function that will be called when the request status changes
    xhr.onreadystatechange = function() {
      // Check if the request is complete
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Check if the status code is OK (200)
        if (xhr.status === 200) {
          // Log the allowed HTTP methods from the response headers
          console.log(xhr.getResponseHeader('Allow'));
        } else {
          // Handle any errors that occurred during the request
          console.error('There was a problem with the request:', xhr.statusText);
        }
      }
    };
    
    // Send the request
    xhr.send();
  }
  
  // Call the optionsRequest function to execute the OPTIONS request
  optionsRequest();
 
  
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

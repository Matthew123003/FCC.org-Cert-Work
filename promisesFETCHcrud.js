
// GETTING INFO FROM THE HTML DOM AND SETTING IT TO JS VARIABLES
  const authorContainer = document.getElementById('author-container');
  const loadMoreBtn = document.getElementById('load-more-btn');

// ADD EVENT LISTENER
  loadMoreBtn.addEventListener('click', fetchMoreAuthors);


//GET REQUEST (READ)

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


  fetch('https://example.com/api/resource') // Specify the URL of the resource you want to retrieve.
  .then(response => response.json()) // Convert the response to JSON format.
  .then(data => console.log(data)) // Log the retrieved data to the console.
  .catch(error => console.error('Error:', error)); // Handle any errors that occur during the fetch operation.

  /*
  
fetch('https://example.com/api/resource'): Sends a GET request to the specified URL.
.then(response => response.json()): Converts the response from the server into JSON format. response.json() returns a promise.
.then(data => console.log(data)): Handles the JSON data from the previous promise and logs it to the console.
.catch(error => console.error('Error:', error)): Catches and logs any errors that occur during the fetch.
  
  */

// POST REQUEST (CREATE)

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


  fetch('https://example.com/api/resource', {
    method: 'POST', // Specify that this is a POST request.
    headers: {
      'Content-Type': 'application/json' // Indicate that the request body is in JSON format.
    },
    body: JSON.stringify({ // Convert the data to be sent into a JSON string.
      key1: 'value1',
      key2: 'value2'
    })
  })
    .then(response => response.json()) // Convert the response to JSON format.
    .then(data => console.log(data)) // Log the server's response to the console.
    .catch(error => console.error('Error:', error)); // Handle any errors that occur during the fetch operation.

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


  fetch('https://example.com/api/resource/1', {
    method: 'PUT', // Specify that this is a PUT request.
    headers: {
      'Content-Type': 'application/json' // Indicate that the request body is in JSON format.
    },
    body: JSON.stringify({ // Convert the updated data into a JSON string.
      key1: 'new value',
      key2: 'another new value'
    })
  })
    .then(response => response.json()) // Convert the response to JSON format.
    .then(data => console.log(data)) // Log the server's response to the console.
    .catch(error => console.error('Error:', error)); // Handle any errors that occur during the fetch operation.
/*

method: 'PUT': Specifies the HTTP method for the request, used to update existing resources.
body: JSON.stringify({ key1: 'new value', key2: 'another new value' }): Converts the updated data into JSON format for the request body.

*/

  
// DELETE REQUEST (DELETE)

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



  fetch('https://example.com/api/resource/1', {
    method: 'DELETE' // Specify that this is a DELETE request.
  })
    .then(response => {
      if (response.ok) { // Check if the response status is OK (status code 200-299).
        console.log('Resource deleted successfully'); // Log success message if the request was successful.
      } else {
        console.error('Failed to delete resource'); // Log error message if the request failed.
      }
    })
    .catch(error => console.error('Error:', error)); // Handle any errors that occur during the fetch operation.
  
/*

method: 'DELETE': Specifies the HTTP method for the request, used to delete resources.
response.ok: Checks if the response status indicates a successful request.

*/
  
// PATCH REQUEST (PARTIALLY UPDATE)

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


  fetch('https://example.com/api/resource/1', {
    method: 'PATCH', // Specify that this is a PATCH request.
    headers: {
      'Content-Type': 'application/json' // Indicate that the request body is in JSON format.
    },
    body: JSON.stringify({ // Convert the partial data update into a JSON string.
      key1: 'updated value'
    })
  })
    .then(response => response.json()) // Convert the response to JSON format.
    .then(data => console.log(data)) // Log the server's response to the console.
    .catch(error => console.error('Error:', error)); // Handle any errors that occur during the fetch operation.

  /*

method: 'PATCH': Specifies the HTTP method for the request, used to partially update resources.
body: JSON.stringify({ key1: 'updated value' }): Converts partial update data into JSON format for the request body.

  */

// OPTIONS REQUEST (GETS OPTIONS AVAILABLE FOR PAGE OR API)

  fetch('https://example.com/api/resource', {
    method: 'OPTIONS'
  })
    .then(response => response.headers.get('Allow'))
    .then(methods => console.log('Supported methods:', methods))
    .catch(error => console.error('Error:', error));


    fetch('https://example.com/api/resource', {
      method: 'OPTIONS' // Specify that this is an OPTIONS request.
    })
      .then(response => response.headers.get('Allow')) // Retrieve the 'Allow' header from the response.
      .then(methods => console.log('Supported methods:', methods)) // Log the allowed HTTP methods to the console.
      .catch(error => console.error('Error:', error)); // Handle any errors that occur during the fetch operation.

/*

method: 'OPTIONS': Specifies the HTTP method for the request, used to get information about allowed methods.
response.headers.get('Allow'): Retrieves the Allow header, which contains a comma-separated list of supported HTTP methods.

*/
  
// HEAD REQUEST (GET HEADERS)

fetch('https://example.com/api/resource', {
  method: 'HEAD'
})
  .then(response => {
    console.log('Headers:', response.headers);
  })
  .catch(error => console.error('Error:', error));


  fetch('https://example.com/api/resource', {
    method: 'HEAD' // Specify that this is a HEAD request.
  })
    .then(response => {
      console.log('Headers:', response.headers); // Log the headers from the response.
    })
    .catch(error => console.error('Error:', error)); // Handle any errors that occur during the fetch operation.

    
  /* 

method: 'HEAD': Specifies the HTTP method for the request, used to get headers without a body.
response.headers: Provides access to the headers of the response.

  */


/*

Notes:

    fetch(url, options): The fetch function sends the request. url is the endpoint, and options is an object containing configuration like method, headers, and body.
    response.json(): Parses the JSON body of the response.
    response.ok: Boolean indicating if the response status is in the range 200-299.
    response.headers: Provides access to the response headers.
    .catch(error => console.error('Error:', error)): Handles and logs any errors during the fetch operation.

*/

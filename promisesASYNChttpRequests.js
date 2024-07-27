// GET REQUEST (READ) ****************************************************************************************************

async function getData() {
    try {
      const response = await fetch('https://example.com/api/resource');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  getData();


  async function getData() {
    try {
      // Send a GET request to the specified URL.
      const response = await fetch('https://example.com/api/resource');
      
      // Check if the response is not OK (status code not in the range 200-299).
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Convert the response to JSON format.
      const data = await response.json();
      
      // Log the retrieved data to the console.
      console.log(data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the getData function to execute the GET request.
  getData();
  

// POST REQUEST (CREATE) ****************************************************************************************************

async function postData() {
    try {
      const response = await fetch('https://example.com/api/resource', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'value1',
          key2: 'value2'
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  postData();


  async function postData() {
    try {
      // Send a POST request to the specified URL with the specified options.
      const response = await fetch('https://example.com/api/resource', {
        method: 'POST', // Specify that this is a POST request.
        headers: {
          'Content-Type': 'application/json' // Indicate that the request body is in JSON format.
        },
        body: JSON.stringify({ // Convert the data to be sent into a JSON string.
          key1: 'value1',
          key2: 'value2'
        })
      });
      
      // Check if the response is not OK (status code not in the range 200-299).
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Convert the response to JSON format.
      const data = await response.json();
      
      // Log the server's response to the console.
      console.log(data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the postData function to execute the POST request.
  postData();
  

  
// PUT REQUEST (UPDATE) ****************************************************************************************************

async function putData() {
    try {
      const response = await fetch('https://example.com/api/resource/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'updatedValue1',
          key2: 'updatedValue2'
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  putData();


  async function putData() {
    try {
      // Send a PUT request to the specified URL with the specified options.
      const response = await fetch('https://example.com/api/resource/1', {
        method: 'PUT', // Specify that this is a PUT request.
        headers: {
          'Content-Type': 'application/json' // Indicate that the request body is in JSON format.
        },
        body: JSON.stringify({ // Convert the updated data into a JSON string.
          key1: 'updatedValue1',
          key2: 'updatedValue2'
        })
      });
      
      // Check if the response is not OK (status code not in the range 200-299).
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Convert the response to JSON format.
      const data = await response.json();
      
      // Log the server's response to the console.
      console.log(data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the putData function to execute the PUT request.
  putData();
   

// PATCH REQUEST (PARTIALLY UPDATE) ****************************************************************************************************

async function patchData() {
    try {
      const response = await fetch('https://example.com/api/resource/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'updatedValue1'
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  patchData();


  async function patchData() {
    try {
      // Send a PATCH request to the specified URL with the specified options.
      const response = await fetch('https://example.com/api/resource/1', {
        method: 'PATCH', // Specify that this is a PATCH request.
        headers: {
          'Content-Type': 'application/json' // Indicate that the request body is in JSON format.
        },
        body: JSON.stringify({ // Convert the partial data update into a JSON string.
          key1: 'updatedValue1'
        })
      });
      
      // Check if the response is not OK (status code not in the range 200-299).
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Convert the response to JSON format.
      const data = await response.json();
      
      // Log the server's response to the console.
      console.log(data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the patchData function to execute the PATCH request.
  patchData();
   


// DELETE REQUEST (DELETE/REMOVE) ****************************************************************************************************

async function deleteData() {
    try {
      const response = await fetch('https://example.com/api/resource/1', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  deleteData();


  async function deleteData() {
    try {
      // Send a DELETE request to the specified URL with the specified options.
      const response = await fetch('https://example.com/api/resource/1', {
        method: 'DELETE', // Specify that this is a DELETE request.
        headers: {
          'Content-Type': 'application/json' // Indicate that the request body is in JSON format (optional for DELETE).
        }
      });
      
      // Check if the response is not OK (status code not in the range 200-299).
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Log a success message.
      console.log('Resource deleted successfully');
    } catch (error) {
      // Handle any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the deleteData function to execute the DELETE request.
  deleteData();
   

  
// HEAD REQUEST (HEADERS ONLY) ****************************************************************************************************

async function headRequest() {
    try {
      const response = await fetch('https://example.com/api/resource', {
        method: 'HEAD'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response.headers);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  headRequest();


  async function headRequest() {
    try {
      // Send a HEAD request to the specified URL.
      const response = await fetch('https://example.com/api/resource', {
        method: 'HEAD' // Specify that this is a HEAD request.
      });
      
      // Check if the response is not OK (status code not in the range 200-299).
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Log the headers from the response.
      console.log(response.headers);
    } catch (error) {
      // Handle any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the headRequest function to execute the HEAD request.
  headRequest();
   

// OPTIONS REQUEST (OPTIONS RETURN LIKE IN POSTMAN TO SEE WHAT REQUESTS YOU ARE ALLOWED TO MAKE) ****************************************************************************************************

async function optionsRequest() {
    try {
      const response = await fetch('https://example.com/api/resource', {
        method: 'OPTIONS'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response.headers);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  optionsRequest();


  async function optionsRequest() {
    try {
      // Send an OPTIONS request to the specified URL.
      const response = await fetch('https://example.com/api/resource', {
        method: 'OPTIONS' // Specify that this is an OPTIONS request.
      });
      
      // Check if the response is not OK (status code not in the range 200-299).
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Log the allowed HTTP methods from the response headers.
      console.log(response.headers.get('Allow'));
    } catch (error) {
      // Handle any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the optionsRequest function to execute the OPTIONS request.
  optionsRequest();
 
  

/*

Notes:

    async function: Declares an asynchronous function that allows the use of await within it.
    await fetch(url, options): Sends an HTTP request and waits for the response.
    response.ok: Checks if the response status code indicates success (200-299).
    response.json(): Parses the JSON body of the response.
    response.headers: Provides access to the response headers.
    try...catch: Handles any errors that occur during the execution of the asynchronous code.

*/



// GET REQUEST (READ) ****************************************************************************************************

async function getData() { // Declare an asynchronous function named getData.
  try { // Begin a try block to handle potential errors.
      const response = await fetch('https://example.com/api/resource'); // Send a GET request to the specified URL and wait for the response.
      if (!response.ok) { // Check if the response status code is not in the range 200-299.
          throw new Error('Network response was not ok'); // If not OK, throw an error with a descriptive message.
      }
      const data = await response.json(); // Convert the response body to JSON format and wait for the result.
      console.log(data); // Log the JSON data to the console.
  } catch (error) { // Catch any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error); // Log the error message to the console.
  }
}

getData(); // Call the getData function to execute the GET request.


// POST REQUEST (CREATE) ****************************************************************************************************

async function postData() { // Declare an asynchronous function named postData.
  try { // Begin a try block to handle potential errors.
      const response = await fetch('https://example.com/api/resource', { // Send a POST request to the specified URL with options.
          method: 'POST', // Specify that this is a POST request.
          headers: {
              'Content-Type': 'application/json' // Indicate that the request body is in JSON format.
          },
          body: JSON.stringify({ // Convert the data to be sent into a JSON string.
              key1: 'value1',
              key2: 'value2'
          })
      });
      if (!response.ok) { // Check if the response status code is not in the range 200-299.
          throw new Error('Network response was not ok'); // If not OK, throw an error with a descriptive message.
      }
      const data = await response.json(); // Convert the response body to JSON format and wait for the result.
      console.log(data); // Log the JSON data to the console.
  } catch (error) { // Catch any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error); // Log the error message to the console.
  }
}

postData(); // Call the postData function to execute the POST request.


// PUT REQUEST (UPDATE) ****************************************************************************************************

async function putData() { // Declare an asynchronous function named putData.
  try { // Begin a try block to handle potential errors.
      const response = await fetch('https://example.com/api/resource/1', { // Send a PUT request to the specified URL with options.
          method: 'PUT', // Specify that this is a PUT request.
          headers: {
              'Content-Type': 'application/json' // Indicate that the request body is in JSON format.
          },
          body: JSON.stringify({ // Convert the updated data into a JSON string.
              key1: 'updatedValue1',
              key2: 'updatedValue2'
          })
      });
      if (!response.ok) { // Check if the response status code is not in the range 200-299.
          throw new Error('Network response was not ok'); // If not OK, throw an error with a descriptive message.
      }
      const data = await response.json(); // Convert the response body to JSON format and wait for the result.
      console.log(data); // Log the JSON data to the console.
  } catch (error) { // Catch any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error); // Log the error message to the console.
  }
}

putData(); // Call the putData function to execute the PUT request.


// PATCH REQUEST (PARTIALLY UPDATE) ****************************************************************************************************

async function patchData() { // Declare an asynchronous function named patchData.
  try { // Begin a try block to handle potential errors.
      const response = await fetch('https://example.com/api/resource/1', { // Send a PATCH request to the specified URL with options.
          method: 'PATCH', // Specify that this is a PATCH request.
          headers: {
              'Content-Type': 'application/json' // Indicate that the request body is in JSON format.
          },
          body: JSON.stringify({ // Convert the partial data update into a JSON string.
              key1: 'updatedValue1'
          })
      });
      if (!response.ok) { // Check if the response status code is not in the range 200-299.
          throw new Error('Network response was not ok'); // If not OK, throw an error with a descriptive message.
      }
      const data = await response.json(); // Convert the response body to JSON format and wait for the result.
      console.log(data); // Log the JSON data to the console.
  } catch (error) { // Catch any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error); // Log the error message to the console.
  }
}

patchData(); // Call the patchData function to execute the PATCH request.


// DELETE REQUEST (DELETE/REMOVE) ****************************************************************************************************

async function deleteData() { // Declare an asynchronous function named deleteData.
  try { // Begin a try block to handle potential errors.
      const response = await fetch('https://example.com/api/resource/1', { // Send a DELETE request to the specified URL with options.
          method: 'DELETE', // Specify that this is a DELETE request.
          headers: {
              'Content-Type': 'application/json' // Indicate that the request body is in JSON format (optional for DELETE).
          }
      });
      if (!response.ok) { // Check if the response status code is not in the range 200-299.
          throw new Error('Network response was not ok'); // If not OK, throw an error with a descriptive message.
      }
      console.log('Resource deleted successfully'); // Log a success message to the console.
  } catch (error) { // Catch any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error); // Log the error message to the console.
  }
}

deleteData(); // Call the deleteData function to execute the DELETE request.


// HEAD REQUEST (HEADERS ONLY) ****************************************************************************************************

async function headRequest() { // Declare an asynchronous function named headRequest.
  try { // Begin a try block to handle potential errors.
      const response = await fetch('https://example.com/api/resource', { // Send a HEAD request to the specified URL.
          method: 'HEAD' // Specify that this is a HEAD request.
      });
      if (!response.ok) { // Check if the response status code is not in the range 200-299.
          throw new Error('Network response was not ok'); // If not OK, throw an error with a descriptive message.
      }
      console.log(response.headers); // Log the headers from the response to the console.
  } catch (error) { // Catch any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error); // Log the error message to the console.
  }
}

headRequest(); // Call the headRequest function to execute the HEAD request.


// OPTIONS REQUEST (OPTIONS RETURN LIKE IN POSTMAN TO SEE WHAT REQUESTS YOU ARE ALLOWED TO MAKE) ****************************************************************************************************

async function optionsRequest() { // Declare an asynchronous function named optionsRequest.
  try { // Begin a try block to handle potential errors.
      const response = await fetch('https://example.com/api/resource', { // Send an OPTIONS request to the specified URL.
          method: 'OPTIONS' // Specify that this is an OPTIONS request.
      });
      if (!response.ok) { // Check if the response status code is not in the range 200-299.
          throw new Error('Network response was not ok'); // If not OK, throw an error with a descriptive message.
      }
      console.log(response.headers.get('Allow')); // Log the allowed HTTP methods from the response headers to the console.
  } catch (error) { // Catch any errors that occur during the fetch operation.
      console.error('There was a problem with the fetch operation:', error); // Log the error message to the console.
  }
}

optionsRequest(); // Call the optionsRequest function to execute the OPTIONS request.


 
  

/*

Notes:

    async function: Declares an asynchronous function that allows the use of await within it.
    await fetch(url, options): Sends an HTTP request and waits for the response.
    response.ok: Checks if the response status code indicates success (200-299).
    response.json(): Parses the JSON body of the response.
    response.headers: Provides access to the response headers.
    try...catch: Handles any errors that occur during the execution of the asynchronous code.

*/



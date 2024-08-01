// GET REQUEST (READ Retrieve data from a server.) **********************************************************************************************************

async function getData() {
  try {
    // Make a GET request to the specified URL using axios
    const response = await axios.get('https://example.com/api/resource'); // 'await' pauses execution until the request is complete
    
    // Log the response data to the console
    console.log(response.data); // 'response.data' contains the data returned from the server
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('There was a problem with the GET request:', error); // Log any error that occurs during the request
  }
}

// Call the getData function to execute the GET request
getData(); // Initiates the request and handles the response or error


// POST REQUEST (CREATE Send new data to a server.) ******************************************************************************************************

async function postData() {
  try {
    // Make a POST request to the specified URL with the provided data
    const response = await axios.post('https://example.com/api/resource', { // Sends data in the request body
      key1: 'value1',
      key2: 'value2'
    });
    
    // Log the response data to the console
    console.log(response.data); // 'response.data' contains the server's response to the POST request
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('There was a problem with the POST request:', error); // Logs errors that occur during the POST request
  }
}

// Call the postData function to execute the POST request
postData(); // Executes the function to send the request and handle the response


// PUT REQUEST (UPDATE Update existing data on a server.) *********************************************************************************************************

async function putData() {
  try {
    // Make a PUT request to the specified URL with the provided data
    const response = await axios.put('https://example.com/api/resource/1', { // Sends updated data to the server
      key1: 'updatedValue1',
      key2: 'updatedValue2'
    });
    
    // Log the response data to the console
    console.log(response.data); // Logs the data returned from the server after the PUT request
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('There was a problem with the PUT request:', error); // Handles and logs errors during the PUT request
  }
}

// Call the putData function to execute the PUT request
putData(); // Calls the function to perform the PUT request and handle the result


// PATCH REQUEST (PARTIALLY UPDATE Partially update existing data on a server.) **********************************************************************************************

async function patchData() {
  try {
    // Make a PATCH request to the specified URL with the provided data
    const response = await axios.patch('https://example.com/api/resource/1', { // Sends partial data to update
      key1: 'updatedValue1'
    });
    
    // Log the response data to the console
    console.log(response.data); // 'response.data' contains the result of the PATCH request
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('There was a problem with the PATCH request:', error); // Logs errors that occur during the PATCH request
  }
}

// Call the patchData function to execute the PATCH request
patchData(); // Initiates the PATCH request and processes the response


// DELETE REQUEST (DELETE/REMOVE Delete data from a server.) ************************************************************************************************

async function deleteData() {
  try {
    // Make a DELETE request to the specified URL
    const response = await axios.delete('https://example.com/api/resource/1'); // Sends a request to delete the resource
    
    // Log a success message to the console
    console.log('Resource deleted successfully'); // Confirmation message after successful deletion
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('There was a problem with the DELETE request:', error); // Logs errors encountered during the DELETE request
  }
}

// Call the deleteData function to execute the DELETE request
deleteData(); // Executes the DELETE request and handles the result


// HEAD REQUEST (HEADERS ONLY Retrieve only the headers of a resource (no body).) **************************************************************************************************

async function headRequest() {
  try {
    // Make a HEAD request to the specified URL
    const response = await axios.head('https://example.com/api/resource'); // Requests only the headers, not the body
    
    // Log the headers from the response to the console
    console.log(response.headers); // 'response.headers' contains the headers returned by the server
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('There was a problem with the HEAD request:', error); // Logs errors encountered during the HEAD request
  }
}

// Call the headRequest function to execute the HEAD request
headRequest(); // Initiates the HEAD request and processes the headers


// OPTIONS REQUEST (Retrieve the supported HTTP methods for a resource.) *********************************

async function optionsRequest() {
  try {
    // Make an OPTIONS request to the specified URL
    const response = await axios.options('https://example.com/api/resource'); // Requests information about allowed methods
    
    // Log the allowed HTTP methods from the response headers to the console
    console.log(response.headers['allow']); // 'allow' header contains the methods supported by the server
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('There was a problem with the OPTIONS request:', error); // Logs errors encountered during the OPTIONS request
  }
}

// Call the optionsRequest function to execute the OPTIONS request
optionsRequest(); // Executes the OPTIONS request and handles the result


/*

Notes:

  axios.get(url): Makes a GET request to the specified URL.
  axios.post(url, data): Makes a POST request to the specified URL with the provided data.
  axios.put(url, data): Makes a PUT request to the specified URL with the provided data.
  axios.patch(url, data): Makes a PATCH request to the specified URL with the provided data.
  axios.delete(url): Makes a DELETE request to the specified URL.
  axios.head(url): Makes a HEAD request to the specified URL.
  axios.options(url): Makes an OPTIONS request to the specified URL.
  response.data: The data from the response.
  response.headers: The headers from the response.
  try...catch: Error handling structure to manage any errors that occur during the request.

*/

// services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Change this to your Spring Boot backend URL

export const fetchData = async () => {
try {
  const response = await axios.get(`${API_URL}/your-endpoint`); // Sends a GET request to the specified endpoint
  return response.data; // Returns the data from the response
} catch (error) {
  console.error('Error fetching data:', error); // Logs any error encountered during the request
  throw error; // Rethrows the error to be handled by the calling code
}
};

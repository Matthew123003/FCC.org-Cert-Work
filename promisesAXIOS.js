// GET REQUEST (READ Retrieve data from a server.) **********************************************************************************************************

async function getData() {
    try {
      // Make a GET request to the specified URL
      const response = await axios.get('https://example.com/api/resource');
      
      // Log the response data to the console
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('There was a problem with the GET request:', error);
    }
  }
  
  // Call the getData function to execute the GET request
  getData();

  
// POST REQUEST (CREATE Send new data to a server.) ******************************************************************************************************

async function postData() {
    try {
      // Make a POST request to the specified URL with the provided data
      const response = await axios.post('https://example.com/api/resource', {
        key1: 'value1',
        key2: 'value2'
      });
      
      // Log the response data to the console
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('There was a problem with the POST request:', error);
    }
  }
  
  // Call the postData function to execute the POST request
  postData();

  

// PUT REQUEST (UPDATE Update existing data on a server.) *********************************************************************************************************

async function putData() {
    try {
      // Make a PUT request to the specified URL with the provided data
      const response = await axios.put('https://example.com/api/resource/1', {
        key1: 'updatedValue1',
        key2: 'updatedValue2'
      });
      
      // Log the response data to the console
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('There was a problem with the PUT request:', error);
    }
  }
  
  // Call the putData function to execute the PUT request
  putData();

  

// PATCH REQUEST (PARTIALLY UPDATE Partially update existing data on a server.) **********************************************************************************************

async function patchData() {
    try {
      // Make a PATCH request to the specified URL with the provided data
      const response = await axios.patch('https://example.com/api/resource/1', {
        key1: 'updatedValue1'
      });
      
      // Log the response data to the console
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('There was a problem with the PATCH request:', error);
    }
  }
  
  // Call the patchData function to execute the PATCH request
  patchData();

  

// DELETE REQUEST (DELETE/REMOVE Delete data from a server.) ************************************************************************************************

async function deleteData() {
    try {
      // Make a DELETE request to the specified URL
      const response = await axios.delete('https://example.com/api/resource/1');
      
      // Log a success message to the console
      console.log('Resource deleted successfully');
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('There was a problem with the DELETE request:', error);
    }
  }
  
  // Call the deleteData function to execute the DELETE request
  deleteData();

  

// HEAD REQUEST (HEADERS ONLY Retrieve only the headers of a resource (no body).) **************************************************************************************************

async function headRequest() {
    try {
      // Make a HEAD request to the specified URL
      const response = await axios.head('https://example.com/api/resource');
      
      // Log the headers from the response to the console
      console.log(response.headers);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('There was a problem with the HEAD request:', error);
    }
  }
  
  // Call the headRequest function to execute the HEAD request
  headRequest();

  

// OPTIONS REQUEST (Retrieve the supported HTTP methods for a resource.) *********************************

async function optionsRequest() {
    try {
      // Make an OPTIONS request to the specified URL
      const response = await axios.options('https://example.com/api/resource');
      
      // Log the allowed HTTP methods from the response headers to the console
      console.log(response.headers['allow']);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('There was a problem with the OPTIONS request:', error);
    }
  }
  
  // Call the optionsRequest function to execute the OPTIONS request
  optionsRequest();


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

// GET REQUEST (READ)
$.ajax({
  url: 'https://example.com/api/resource', // URL of the resource to retrieve
  method: 'GET', // HTTP method for the request
  success: function(data) { // Callback function executed if the request is successful
    console.log(data); // Log the retrieved data
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

$.ajax({
  url: 'https://example.com/api/resource', // URL of the resource to retrieve
  method: 'GET', // HTTP method for the request
  success: function(data) { // Callback function executed if the request is successful
    console.log(data); // Log the retrieved data
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

/*
$.ajax({
url: 'https://example.com/api/resource': The endpoint URL for the GET request.
method: 'GET': Specifies that this is a GET request, used to retrieve data.
success: function(data): Callback function executed on successful response, logging the data.
error: function(xhr, status, error): Callback function executed on error, logging the error.
*/

// POST REQUEST (CREATE)
$.ajax({
  url: 'https://example.com/api/resource', // URL of the resource where you want to send data
  method: 'POST', // HTTP method for sending data
  contentType: 'application/json', // Specify that data is in JSON format
  data: JSON.stringify({ // Data to be sent in the request body, converted to a JSON string
    key1: 'value1',
    key2: 'value2'
  }),
  success: function(data) { // Callback function executed if the request is successful
    console.log(data); // Log the response from the server
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

$.ajax({
  url: 'https://example.com/api/resource', // URL of the resource where you want to send data
  method: 'POST', // HTTP method for sending data
  contentType: 'application/json', // Specify that data is in JSON format
  data: JSON.stringify({ // Data to be sent in the request body, converted to a JSON string
    key1: 'value1',
    key2: 'value2'
  }),
  success: function(data) { // Callback function executed if the request is successful
    console.log(data); // Log the response from the server
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

/*
$.ajax({
url: 'https://example.com/api/resource': The endpoint URL for the POST request.
method: 'POST': Specifies that this is a POST request, used to send data.
contentType: 'application/json': Indicates that the data being sent is in JSON format.
data: JSON.stringify({ key1: 'value1', key2: 'value2' }): Converts the data object into a JSON string for the request body.
success: function(data): Callback function executed on successful response, logging the data.
error: function(xhr, status, error): Callback function executed on error, logging the error.
*/

// PUT REQUEST (UPDATE)
$.ajax({
  url: 'https://example.com/api/resource/1', // URL of the resource to update, including the ID of the item
  method: 'PUT', // HTTP method for updating data
  contentType: 'application/json', // Specify that data is in JSON format
  data: JSON.stringify({ // Data to be sent in the request body, converted to a JSON string
    key1: 'new value',
    key2: 'another new value'
  }),
  success: function(data) { // Callback function executed if the request is successful
    console.log(data); // Log the response from the server
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

$.ajax({
  url: 'https://example.com/api/resource/1', // URL of the resource to update, including the ID of the item
  method: 'PUT', // HTTP method for updating data
  contentType: 'application/json', // Specify that data is in JSON format
  data: JSON.stringify({ // Data to be sent in the request body, converted to a JSON string
    key1: 'new value',
    key2: 'another new value'
  }),
  success: function(data) { // Callback function executed if the request is successful
    console.log(data); // Log the response from the server
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

/*
$.ajax({
url: 'https://example.com/api/resource/1': The endpoint URL for the PUT request, including the resource ID.
method: 'PUT': Specifies that this is a PUT request, used to update existing data.
contentType: 'application/json': Indicates that the data being sent is in JSON format.
data: JSON.stringify({ key1: 'new value', key2: 'another new value' }): Converts the updated data into a JSON string for the request body.
success: function(data): Callback function executed on successful response, logging the data.
error: function(xhr, status, error): Callback function executed on error, logging the error.
*/

// PATCH REQUEST (PARTIALLY UPDATE)
$.ajax({
  url: 'https://example.com/api/resource/1', // URL of the resource to update, including the ID of the item
  method: 'PATCH', // HTTP method for partially updating data
  contentType: 'application/json', // Specify that data is in JSON format
  data: JSON.stringify({ // Data to be sent in the request body, converted to a JSON string
    key1: 'updated value'
  }),
  success: function(data) { // Callback function executed if the request is successful
    console.log(data); // Log the response from the server
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

$.ajax({
  url: 'https://example.com/api/resource/1', // URL of the resource to update, including the ID of the item
  method: 'PATCH', // HTTP method for partially updating data
  contentType: 'application/json', // Specify that data is in JSON format
  data: JSON.stringify({ // Data to be sent in the request body, converted to a JSON string
    key1: 'updated value'
  }),
  success: function(data) { // Callback function executed if the request is successful
    console.log(data); // Log the response from the server
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

/*
$.ajax({
url: 'https://example.com/api/resource/1': The endpoint URL for the PATCH request, including the resource ID.
method: 'PATCH': Specifies that this is a PATCH request, used to partially update existing data.
contentType: 'application/json': Indicates that the data being sent is in JSON format.
data: JSON.stringify({ key1: 'updated value' }): Converts the partial update data into a JSON string for the request body.
success: function(data): Callback function executed on successful response, logging the data.
error: function(xhr, status, error): Callback function executed on error, logging the error.
*/

// DELETE REQUEST (DELETE)
$.ajax({
  url: 'https://example.com/api/resource/1', // URL of the resource to delete, including the ID of the item
  method: 'DELETE', // HTTP method for deleting data
  success: function(data) { // Callback function executed if the request is successful
    console.log('Resource deleted successfully'); // Log a success message
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Failed to delete resource:', error); // Log the error
  }
});

$.ajax({
  url: 'https://example.com/api/resource/1', // URL of the resource to delete, including the ID of the item
  method: 'DELETE', // HTTP method for deleting data
  success: function(data) { // Callback function executed if the request is successful
    console.log('Resource deleted successfully'); // Log a success message
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Failed to delete resource:', error); // Log the error
  }
});

/*
$.ajax({
url: 'https://example.com/api/resource/1': The endpoint URL for the DELETE request, including the resource ID.
method: 'DELETE': Specifies that this is a DELETE request, used to delete existing data.
success: function(data): Callback function executed on successful response, logging a success message.
error: function(xhr, status, error): Callback function executed on error, logging the error.
*/

// OPTIONS REQUEST
$.ajax({
  url: 'https://example.com/api/resource', // URL of the resource to check
  method: 'OPTIONS', // HTTP method for retrieving allowed methods
  success: function(data, status, xhr) { // Callback function executed if the request is successful
    console.log('Allowed methods:', xhr.getResponseHeader('Allow')); // Log allowed HTTP methods from the 'Allow' header
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

$.ajax({
  url: 'https://example.com/api/resource', // URL of the resource to check
  method: 'OPTIONS', // HTTP method for retrieving allowed methods
  success: function(data, status, xhr) { // Callback function executed if the request is successful
    console.log('Allowed methods:', xhr.getResponseHeader('Allow')); // Log allowed HTTP methods from the 'Allow' header
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

/*
$.ajax({
url: 'https://example.com/api/resource': The endpoint URL for the OPTIONS request.
method: 'OPTIONS': Specifies that this is an OPTIONS request, used to get information about allowed methods.
success: function(data, status, xhr): Callback function executed on successful response, logging allowed HTTP methods from the 'Allow' header.
error: function(xhr, status, error): Callback function executed on error, logging the error.
*/

// HEAD REQUEST
$.ajax({
  url: 'https://example.com/api/resource', // URL of the resource to check
  method: 'HEAD', // HTTP method for retrieving headers only
  success: function(data, status, xhr) { // Callback function executed if the request is successful
    console.log('Headers:', xhr.getAllResponseHeaders()); // Log all response headers
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

$.ajax({
  url: 'https://example.com/api/resource', // URL of the resource to check
  method: 'HEAD', // HTTP method for retrieving headers only
  success: function(data, status, xhr) { // Callback function executed if the request is successful
    console.log('Headers:', xhr.getAllResponseHeaders()); // Log all response headers
  },
  error: function(xhr, status, error) { // Callback function executed if the request fails
    console.error('Error:', error); // Log the error
  }
});

/*
$.ajax({
url: 'https://example.com/api/resource': The endpoint URL for the HEAD request.
method: 'HEAD': Specifies that this is a HEAD request, used to get headers without a body.
success: function(data, status, xhr): Callback function executed on successful response, logging all response headers.
error: function(xhr, status, error): Callback function executed on error, logging the error.
*/

/*
Notes:
url: Specifies the endpoint for the request.
method: Defines the HTTP method to be used (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD).
contentType: Specifies the media type of the data being sent to the server (relevant for POST, PUT, and PATCH requests).
data: Contains the data sent to the server in the request body (relevant for POST, PUT, and PATCH requests).
success: Callback function executed if the request is successful, handling the response.
error: Callback function executed if the request fails, handling the error.
xhr.getResponseHeader('Allow'): Retrieves the 'Allow' header from the response, indicating the allowed HTTP methods.
xhr.getAllResponseHeaders(): Retrieves all response headers from the server.
*/

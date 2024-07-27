// GET REQUEST (READ)

$.ajax({
    url: 'https://example.com/api/resource',
    method: 'GET',
    success: function(data) {
      console.log(data);
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
    }
  });

  $.ajax({
    url: 'https://example.com/api/resource', // URL of the resource you want to retrieve
    method: 'GET', // HTTP method for the request
    success: function(data) {
      // Callback function to handle successful response
      console.log(data); // Log the retrieved data
    },
    error: function(xhr, status, error) {
      // Callback function to handle errors
      console.error('Error:', error); // Log the error
    }
  });
  

// POST REQUEST (CREATE)

$.ajax({
    url: 'https://example.com/api/resource',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      key1: 'value1',
      key2: 'value2'
    }),
    success: function(data) {
      console.log(data);
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
    }
  });

  $.ajax({
    url: 'https://example.com/api/resource', // URL of the resource where you want to send data
    method: 'POST', // HTTP method for sending data
    contentType: 'application/json', // Specify that data is in JSON format
    data: JSON.stringify({ // Data to be sent in the request body
      key1: 'value1',
      key2: 'value2'
    }),
    success: function(data) {
      // Callback function to handle successful response
      console.log(data); // Log the response from the server
    },
    error: function(xhr, status, error) {
      // Callback function to handle errors
      console.error('Error:', error); // Log the error
    }
  });
  

// PUT REQUEST (UPDATE)

$.ajax({
    url: 'https://example.com/api/resource/1',
    method: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify({
      key1: 'new value',
      key2: 'another new value'
    }),
    success: function(data) {
      console.log(data);
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
    }
  });

  $.ajax({
    url: 'https://example.com/api/resource/1', // URL of the resource to update, including the ID of the item
    method: 'PUT', // HTTP method for updating data
    contentType: 'application/json', // Specify that data is in JSON format
    data: JSON.stringify({ // Data to be sent in the request body
      key1: 'new value',
      key2: 'another new value'
    }),
    success: function(data) {
      // Callback function to handle successful response
      console.log(data); // Log the response from the server
    },
    error: function(xhr, status, error) {
      // Callback function to handle errors
      console.error('Error:', error); // Log the error
    }
  });
  

// PATCH REQUEST (PARTIALLY UPDATE)

$.ajax({
    url: 'https://example.com/api/resource/1',
    method: 'PATCH',
    contentType: 'application/json',
    data: JSON.stringify({
      key1: 'updated value'
    }),
    success: function(data) {
      console.log(data);
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
    }
  });

  $.ajax({
    url: 'https://example.com/api/resource/1', // URL of the resource to update, including the ID of the item
    method: 'PATCH', // HTTP method for partially updating data
    contentType: 'application/json', // Specify that data is in JSON format
    data: JSON.stringify({ // Data to be sent in the request body
      key1: 'updated value'
    }),
    success: function(data) {
      // Callback function to handle successful response
      console.log(data); // Log the response from the server
    },
    error: function(xhr, status, error) {
      // Callback function to handle errors
      console.error('Error:', error); // Log the error
    }
  });
  

// DELETE REQUEST (DELETE)

$.ajax({
    url: 'https://example.com/api/resource/1',
    method: 'DELETE',
    success: function(data) {
      console.log('Resource deleted successfully');
    },
    error: function(xhr, status, error) {
      console.error('Failed to delete resource:', error);
    }
  });

  $.ajax({
    url: 'https://example.com/api/resource/1', // URL of the resource to delete, including the ID of the item
    method: 'DELETE', // HTTP method for deleting data
    success: function(data) {
      // Callback function to handle successful response
      console.log('Resource deleted successfully'); // Log a success message
    },
    error: function(xhr, status, error) {
      // Callback function to handle errors
      console.error('Failed to delete resource:', error); // Log the error
    }
  });
  

// OPTIONS REQUEST

$.ajax({
    url: 'https://example.com/api/resource',
    method: 'OPTIONS',
    success: function(data, status, xhr) {
      console.log('Allowed methods:', xhr.getResponseHeader('Allow'));
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
    }
  });

  $.ajax({
    url: 'https://example.com/api/resource', // URL of the resource to check
    method: 'OPTIONS', // HTTP method for retrieving allowed methods
    success: function(data, status, xhr) {
      // Callback function to handle successful response
      console.log('Allowed methods:', xhr.getResponseHeader('Allow')); // Log allowed HTTP methods
    },
    error: function(xhr, status, error) {
      // Callback function to handle errors
      console.error('Error:', error); // Log the error
    }
  });
  

// HEAD REQUEST

$.ajax({
    url: 'https://example.com/api/resource',
    method: 'HEAD',
    success: function(data, status, xhr) {
      console.log('Headers:', xhr.getAllResponseHeaders());
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
    }
  });

  $.ajax({
    url: 'https://example.com/api/resource', // URL of the resource to check
    method: 'HEAD', // HTTP method for retrieving headers only
    success: function(data, status, xhr) {
      // Callback function to handle successful response
      console.log('Headers:', xhr.getAllResponseHeaders()); // Log all response headers
    },
    error: function(xhr, status, error) {
      // Callback function to handle errors
      console.error('Error:', error); // Log the error
    }
  });


/* 

Notes:

    url: Specifies the endpoint for the request.
    method: Defines the HTTP method to be used (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD).
    contentType: Specifies the media type of the data being sent to the server.
    data: Contains the data sent to the server in the request body, typically used with POST, PUT, and PATCH methods.
    success: Callback function executed if the request is successful.
    error: Callback function executed if the request fails.
    xhr.getResponseHeader('Allow'): Retrieves the Allow header from the response, which indicates the allowed HTTP methods.

*/


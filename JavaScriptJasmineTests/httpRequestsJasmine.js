// Function to perform a GET request
export const getData = () => {
    // The fetch function makes an HTTP request to the given URL ("/api/data").
    return fetch("/api/data")
        // Once the request completes, .then() is used to process the response.
        .then((response) => 
            // Convert the response to JSON format (most APIs return JSON data).
            response.json()
        );
};

// Function to perform a POST request, sending data to the server
export const postData = (data) => {
    // The fetch function is used again, but this time with a second argument that specifies method, headers, and body.
    return fetch("/api/data", {
        method: "POST",  // Specifies that this is a POST request.
        headers: {
            "Content-Type": "application/json",  // This tells the server that the body data is in JSON format.
        },
        // body contains the data we want to send. JSON.stringify converts a JavaScript object to a JSON string.
        body: JSON.stringify(data),
    })
    // Once the POST request completes, we process the response as JSON.
    .then((response) => response.json());
};

// Function to perform a PUT request to update existing data
export const updateData = (id, data) => {
    // The fetch function is making a PUT request to update data at "/api/data/{id}".
    return fetch(`/api/data/${id}`, { // The id is included in the URL to specify which resource to update.
        method: "PUT",  // Specifies that this is a PUT request.
        headers: {
            "Content-Type": "application/json",  // Indicating that we are sending JSON data.
        },
        body: JSON.stringify(data),  // The data to update, converted to a JSON string.
    })
    .then((response) => response.json());  // Parse the response as JSON.
};

// Function to perform a DELETE request to remove data
export const deleteData = (id) => {
    // The fetch function makes a DELETE request to remove data at "/api/data/{id}".
    return fetch(`/api/data/${id}`, {
        method: "DELETE",  // Specifies that this is a DELETE request.
    })
    // Check if the request was successful (response.ok is true for successful requests).
    .then((response) => response.ok);
};

// Function to perform a PATCH request to partially update data
export const patchData = (id, data) => {
    return fetch(`/api/data/${id}`, {
        method: "PATCH",  // PATCH is used for partial updates.
        headers: {
            "Content-Type": "application/json",  // JSON format for the request body.
        },
        body: JSON.stringify(data),  // Data to be updated, as a JSON string.
    })
    .then((response) => response.json());  // Process the response as JSON.
};

// Function to perform a HEAD request to retrieve headers without a body
export const headData = () => {
    return fetch("/api/data", {
        method: "HEAD",  // HEAD method only retrieves headers, not the body.
    })
    .then((response) => response.headers);  // Retrieve headers from the response.
};

// Function to perform an OPTIONS request to determine allowed HTTP methods
export const optionsData = () => {
    return fetch("/api/data", {
        method: "OPTIONS",  // OPTIONS method asks the server which HTTP methods are allowed.
    })
    .then((response) => response.headers);  // Retrieve headers containing the allowed methods.
};

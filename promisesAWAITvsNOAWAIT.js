/* Let's start by understanding the concept of `async` and `await` in JavaScript and then we'll go through detailed breakdowns and syntax examples of API calls using both `await` and traditional Promise-based methods.

### Understanding `async` and `await`

- **`async`**: This keyword is used to declare an asynchronous function, which means that the function will return a Promise.
- **`await`**: This keyword is used to pause the execution of an `async` function until the Promise is resolved. It can only be used inside an `async` function.

Using `async` and `await` makes asynchronous code look more like synchronous code, which can make it easier to read and understand.

### Why Use `await`?

- **Readability**: It makes the code more readable and easier to understand by removing the need for chaining `.then()` calls.
- **Error Handling**: It allows using `try...catch` blocks to handle errors, making error handling more straightforward.

### Example: API Call Using `await`

Here is an example of making an API call using `async` and `await`:

*/


async function fetchData() {
  try {
    // The execution pauses here until the Promise is resolved
    const response = await fetch('https://api.example.com/data');
    
    // Check if the response is ok (status code in the range 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parsing the JSON data
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

fetchData();

/*

#### Breakdown:

1. **Declaring the Function**:

*/
   
   async function fetchData() {
/*
   - The `async` keyword indicates that this function contains asynchronous operations.
*/

/*
2. **Pausing Execution**:
*/
   
   const response = await fetch('https://api.example.com/data');
/*
   - The `await` keyword pauses the execution of `fetchData` until the Promise returned by `fetch` is resolved.
*/
/*
3. **Error Handling**:
*/
   
   if (!response.ok) {
     throw new Error('Network response was not ok');
   }
/*
   - This checks if the response was successful and throws an error if not.
*/
/*
4. **Parsing JSON**:
*/
   
   const data = await response.json();
/*
   - Again, `await` pauses the execution until the Promise returned by `response.json()` is resolved.
*/
/*
5. **Handling Errors**:
*/
   
   } catch (error) {
     console.error('There was a problem with the fetch operation:', error);
   }
/*
   - Errors are caught and handled in the `catch` block.
*/
/*
### Example: API Call Without `await` (Using Promises)

Here is an example of making an API call using Promises without `await`:
*/


// Example using Promises
function fetchData() {
  fetch('https://api.example.com/data')
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
}

fetchData();

/*
#### Breakdown:

1. **Making the API Call**:
*/
   
   fetch('https://api.example.com/data')
/*
   - `fetch` returns a Promise.
*/
/*
2. **Handling the Response**:
*/
   
   .then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   })
/*
   - The first `.then` handles the response, checking if it's ok and parsing the JSON.
*/
/*
3. **Using the Data**:
*/

   .then(data => {
     console.log(data);
   })
/*
   - The second `.then` uses the parsed data.
*/
/*
4. **Handling Errors**:
*/
   
   .catch(error => {
     console.error('There was a problem with the fetch operation:', error);
   });
/*
   - Errors are caught and handled in the `.catch` block.
*/
/*
### Comparison

- **Readability**: The `async`/`await` version is often easier to read and understand, as it looks more like 
synchronous code.
- **Error Handling**: Using `try...catch` with `async`/`await` can make error handling more straightforward 
compared to chaining `.catch`.
- **Execution Flow**: With `async`/`await`, the code execution is paused until the awaited Promise is resolved, 
making the flow easier to follow.

### Conclusion

Using `async` and `await` simplifies working with asynchronous code in JavaScript by making it look synchronous, improving 
readability, and making error handling easier. However, traditional Promise-based methods can still be used and might be
 preferred in some cases where chaining multiple asynchronous operations is necessary. Both approaches ultimately achieve
  the same goal of handling asynchronous operations.
  */


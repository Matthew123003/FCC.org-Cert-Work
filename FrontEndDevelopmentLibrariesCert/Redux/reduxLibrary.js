/***************************************************************************************************************************/
//CREATE REDUX STORE

const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  const store = Redux.createStore(reducer);


/*
In Redux, there is a single state object that's responsible for the entire state of your application.
 This means if you had a React app with ten components, and each component had its own local state, 
 the entire state of your app would be defined by a single state object housed in the Redux store
 This also means that any time any piece of your app wants to update state, it must do so through 
 the Redux store. The unidirectional data flow makes it easier to track state management in your app.
 The Redux store is an object which holds and manages application state. There is a method called 
 createStore() on the Redux object, which you use to create the Redux store. This method takes a 
 reducer function as a required argument. The reducer function is covered in a later challenge, and
  is already defined for you in the code editor. It simply takes state as an argument and returns state.
*/

/***************************************************************************************************************************/
// GET STATE FROM REDUX STORE

const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  const currentState = store.getState();
/*
The Redux store object provides several methods that allow you to interact with it. For example, you can
 retrieve the current state held in the Redux store object with the getState() method.
*/

/***************************************************************************************************************************/
// DEFINE REDUX ACTION

const action = {
    type: 'LOGIN' // Declare an object action with a type property set to 'LOGIN'
  };
  
/*
Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are 
triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event
 that has occurred. The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux
  action also carries some data. For example, the action carries a username after a user logs in. While the data is 
  optional, actions must carry a type property that specifies the 'type' of action that occurred.

Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store.
The store then conducts the business of updating state based on the action that occurred.

Writing a Redux action is as simple as declaring an object with a type property. Declare an object action and give
 it a property type set to the string 'LOGIN'.
*/

/***************************************************************************************************************************/
// DEFINE ACTION CREATOR

const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  
  const actionCreator = () => {
      action
  }

/*
After creating an action, the next step is sending the action to the Redux store so it can update its state.
 In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function 
 that returns an action. In other words, action creators create objects that represent action events.
*/

/***************************************************************************************************************************/
// DISPATCH ACTION EVENT

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction());
  store.dispatch({ type: 'LOGIN' });

/*
dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() and passing 
the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the type of action that
 has occurred. Then the method dispatches an action object to the Redux store. Based on the previous 
 challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
*/

/***************************************************************************************************************************/
// HANDLE ACTION IN THE STORE

const defaultState = { // Define the default initial state object
    login: false // Initial state property 'login' set to false
  };
  
  const reducer = (state = defaultState, action) => { // Reducer function that takes current state and an action
    // Change code below this line
    if (action.type === 'LOGIN') { // Check if the action type is 'LOGIN'
      return { // Return a new state object
        ...state, // Spread the existing state properties
        login: true // Set the 'login' property to true
      };
    } else { // If the action type is not 'LOGIN'
      return state; // Return the current state unchanged
    }
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer); // Create a Redux store with the reducer function
  
  const loginAction = () => { // Define an action creator function
    return { // Return an action object
      type: 'LOGIN' // Action type set to 'LOGIN'
    };
  };
  

/*
After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job
 of a reducer function. Reducers in Redux are responsible for the state modifications that take place in response to 
 actions. A reducer takes state and action as arguments, and it always returns a new state. It is important to see that
  this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any 
  hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.

Another key principle in Redux is that state is read-only. In other words, the reducer function must always return
 a new copy of state and never modify state directly. Redux does not enforce state immutability, however, you are 
 responsible for enforcing it in the code of your reducer functions. You'll practice this in later challenges.
*/

/***************************************************************************************************************************/
// USE SWITCH STATEMENT TO HANDLE MULTIPLE ACTIONS

const defaultState = { // Define the default initial state object
    authenticated: false // Initial state property 'authenticated' set to false
  };
  
  const authReducer = (state = defaultState, action) => { // Reducer function that takes current state and an action
    // Change code below this line
    switch(action.type) { // Switch statement to handle different action types
      case 'LOGIN': // Case for 'LOGIN' action type
        return { // Return a new state object
          authenticated: true // Set the 'authenticated' property to true
        };
      case 'LOGOUT': // Case for 'LOGOUT' action type
        return { // Return a new state object
          authenticated: false // Set the 'authenticated' property to false
        };
      default: // Default case if the action type does not match any cases
        return state; // Return the current state unchanged
    }
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer); // Create a Redux store with the authReducer function
  
  const loginUser = () => { // Define an action creator function for login
    return { // Return an action object
      type: 'LOGIN' // Action type set to 'LOGIN'
    }
  };
  
  const logoutUser = () => { // Define an action creator function for logout
    return { // Return an action object
      type: 'LOGOUT' // Action type set to 'LOGOUT'
    }
  };
  

/*
You can tell the Redux store how to handle multiple action types. Say you are managing user authentication in your
 Redux store. You want to have a state representation for when users are logged in and when they are logged out. You 
 represent this with a single state object with the property authenticated. You also need action creators that create
  actions corresponding to user login and user logout, along with the action objects themselves.
*/

/***************************************************************************************************************************/
// USE CONST FOR ACTION TYPES

const LOGIN = 'LOGIN'; // Define a constant for the 'LOGIN' action type
const LOGOUT = 'LOGOUT'; // Define a constant for the 'LOGOUT' action type

const defaultState = { // Define the default initial state object
  authenticated: false // Initial state property 'authenticated' set to false
};

const authReducer = (state = defaultState, action) => { // Reducer function that takes current state and an action

  switch (action.type) { // Switch statement to handle different action types
    case LOGIN: // Case for 'LOGIN' action type
      return { // Return a new state object
        authenticated: true // Set the 'authenticated' property to true
      }
    case LOGOUT: // Case for 'LOGOUT' action type
      return { // Return a new state object
        authenticated: false // Set the 'authenticated' property to false
      }
    default: // Default case if the action type does not match any cases
      return state; // Return the current state unchanged
  }

};

const store = Redux.createStore(authReducer); // Create a Redux store with the authReducer function

const loginUser = () => { // Define an action creator function for login
  return { // Return an action object
    type: LOGIN // Action type set to 'LOGIN'
  }
};

const logoutUser = () => { // Define an action creator function for logout
  return { // Return an action object
    type: LOGOUT // Action type set to 'LOGOUT'
  }
};


/***************************************************************************************************************************/
//REGISTER A STORE LISTENER

const ADD = 'ADD'; // Define action type 'ADD'

const reducer = (state = 0, action) => { // Reducer function that handles state changes
  switch(action.type) { // Switch statement to handle different action types
    case ADD: // Case for 'ADD' action type
      return state + 1; // Increment state by 1
    default: // Default case if action type does not match any cases
      return state; // Return current state unchanged
  }
};

const store = Redux.createStore(reducer); // Create a Redux store with the reducer function

// Global count variable:
let count = 0; // Initialize global variable count to 0

// Change code below this line
const incrementCount = () => { // Define a callback function to increment count
  count += 1; // Increment the global variable count by 1
};

store.subscribe(incrementCount); // Pass the incrementCount function to store.subscribe()
// Change code above this line

store.dispatch({type: ADD}); // Dispatch an 'ADD' action
console.log(count); // Log the current value of count

store.dispatch({type: ADD}); // Dispatch another 'ADD' action
console.log(count); // Log the current value of count

store.dispatch({type: ADD}); // Dispatch another 'ADD' action
console.log(count); // Log the current value of count

/*
Another method you have access to on the Redux store object is store.subscribe(). This allows you to subscribe
 listener functions to the store, which are called whenever an action is dispatched against the store. One simple
  use for this method is to subscribe a function to your store that simply logs a message every time an action is
   received and the store is updated.
*/

/***************************************************************************************************************************/
// COMBINE MULTIPLE REDUCERS

const INCREMENT = 'INCREMENT'; // Define a constant for the action type INCREMENT
const DECREMENT = 'DECREMENT'; // Define a constant for the action type DECREMENT

// Reducer function to handle state changes for the counter
const counterReducer = (state = 0, action) => { 
  switch(action.type) { // Switch statement to handle different action types
    case INCREMENT: // If the action type is INCREMENT
      return state + 1; // Increment the state by 1 and return the new state
    case DECREMENT: // If the action type is DECREMENT
      return state - 1; // Decrement the state by 1 and return the new state
    default: // Default case when action type does not match any cases
      return state; // Return the current state unchanged
  }
};

const LOGIN = 'LOGIN'; // Define a constant for the action type LOGIN
const LOGOUT = 'LOGOUT'; // Define a constant for the action type LOGOUT

// Reducer function to handle state changes for authentication
const authReducer = (state = {authenticated: false}, action) => { 
  switch(action.type) { // Switch statement to handle different action types
    case LOGIN: // If the action type is LOGIN
      return { 
        authenticated: true // Set the authenticated state to true
      };
    case LOGOUT: // If the action type is LOGOUT
      return {
        authenticated: false // Set the authenticated state to false
      };
    default: // Default case when action type does not match any cases
      return state; // Return the current state unchanged
  }
};

// Combine the reducers into a root reducer
const rootReducer = Redux.combineReducers({
  count: counterReducer, // Assign counterReducer to the 'count' key in the combined reducer
  auth: authReducer // Assign authReducer to the 'auth' key in the combined reducer
});

const store = Redux.createStore(rootReducer); // Create a Redux store using the rootReducer

// Testing the store and reducers
store.dispatch({ type: INCREMENT }); // Dispatch an INCREMENT action
console.log(store.getState()); // Log the updated state, which should be { count: 1, auth: { authenticated: false } }

store.dispatch({ type: LOGIN }); // Dispatch a LOGIN action
console.log(store.getState()); // Log the updated state, which should be { count: 1, auth: { authenticated: true } }

store.dispatch({ type: DECREMENT }); // Dispatch a DECREMENT action
console.log(store.getState()); // Log the updated state, which should be { count: 0, auth: { authenticated: true } }

store.dispatch({ type: LOGOUT }); // Dispatch a LOGOUT action
console.log(store.getState()); // Log the updated state, which should be { count: 0, auth: { authenticated: false } }



/***************************************************************************************************************************/
// SEND ACTION DATA TO THE STORE

const ADD_NOTE = 'ADD_NOTE'; // Define a constant for the action type

// Reducer function to handle note-related actions
const notesReducer = (state = 'Initial State', action) => { 
  switch(action.type) { // Switch statement to handle different action types
    // Change code below this line
    case ADD_NOTE: // If the action type is 'ADD_NOTE'
      return action.text; // Return the text property from the action as the new state
    // Change code above this line
    default: // Default case when action type does not match any cases
      return state; // Return the current state unchanged
  }
};

// Action creator function to create an action to add a note
const addNoteText = (note) => { 
  // Change code below this line
  return { // Return an action object
    type: ADD_NOTE, // The action type is 'ADD_NOTE'
    text: note // The text property is set to the passed in note
  };
  // Change code above this line
};

const store = Redux.createStore(notesReducer); // Create a Redux store using the notesReducer

console.log(store.getState()); // Log the initial state of the store
store.dispatch(addNoteText('Hello!')); // Dispatch an action to add a note with the text 'Hello!'
console.log(store.getState()); // Log the updated state of the store


/***************************************************************************************************************************/
// USE MIDDLEWARE TO HANDLE ASYNCHROUS ACTIONS

const REQUESTING_DATA = 'REQUESTING_DATA'; // Define a constant for the action type when requesting data
const RECEIVED_DATA = 'RECEIVED_DATA'; // Define a constant for the action type when data is received

// Action creator for requesting data
const requestingData = () => {
  return {
    type: REQUESTING_DATA // Return an action object with type REQUESTING_DATA
  };
};

// Action creator for received data
const receivedData = (data) => {
  return {
    type: RECEIVED_DATA, // Return an action object with type RECEIVED_DATA
    users: data.users // Include the data's users array in the action object
  };
};

// Async action creator to handle async operations
const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());

    // Simulate an async operation with a timeout
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice'] // Data to be received after the timeout
      };

      // Dispatch received data action here with the data
      dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState = {
  fetching: false, // Initial state for fetching status
  users: [] // Initial state for users list
};

// Reducer to handle async data actions
const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA: // Handle requesting data action
      return {
        fetching: true, // Set fetching to true
        users: [] // Clear users list
      };
    case RECEIVED_DATA: // Handle received data action
      return {
        fetching: false, // Set fetching to false
        users: action.users // Update users list with received data
      };
    default: // Default case
      return state; // Return current state
  }
};

// Create Redux store with thunk middleware
const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

// Test the async action
store.dispatch(handleAsync());
store.subscribe(() => console.log(store.getState())); // Subscribe to store changes and log the state

/*
So far these challenges have avoided discussing asynchronous actions, but they are an unavoidable part of web development.
 At some point you'll need to call asynchronous endpoints in your Redux app, so how do you handle these types of requests?
  Redux provides middleware designed specifically for this purpose, called Redux Thunk middleware. Here's a brief description 
  how to use this with Redux.

To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware(). This statement is then provided 
as a second optional parameter to the createStore() function. Take a look at the code at the bottom of the editor to see 
this. Then, to create an asynchronous action, you return a function in the action creator that takes dispatch as an argument.
 Within this function, you can dispatch actions and perform asynchronous requests.

In this example, an asynchronous request is simulated with a setTimeout() call. It's common to dispatch an action before 
initiating any asynchronous behavior so that your application state knows that some data is being requested (this state 
could display a loading icon, for instance). Then, once you receive the data, you dispatch another action which carries 
the data as a payload along with information that the action is completed.

Remember that you're passing dispatch as a parameter to this special action creator. This is what you'll use to dispatch
 your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.
*/

/***************************************************************************************************************************/
// WRITE A COUNTER WITH REDUX

const INCREMENT = 'INCREMENT'; // Define a constant for the increment action type to avoid typos and make code easier to maintain
const DECREMENT = 'DECREMENT'; // Define a constant for the decrement action type to avoid typos and make code easier to maintain

// Define the counter reducer which will handle increment and decrement actions
const counterReducer = (state = 0, action) => { // Initialize the reducer with default state as 0 and define how state changes based on actions
  switch(action.type) { // Switch over the action type to determine how to update the state
    case INCREMENT: // If the action type is INCREMENT
      return state + 1; // Increment the state by 1
    case DECREMENT: // If the action type is DECREMENT
      return state - 1; // Decrement the state by 1
    default: // If the action type is not recognized
      return state; // Return the current state unchanged
  }
}; // End of the reducer function

// Define an action creator for incrementing
const incAction = () => { 
  return { type: INCREMENT }; // Return an action object with the type set to INCREMENT
}; // End of increment action creator function

// Define an action creator for decrementing
const decAction = () => { 
  return { type: DECREMENT }; // Return an action object with the type set to DECREMENT
}; // End of decrement action creator function

// Define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer); // Create a Redux store using the counterReducer to manage state updates


/***************************************************************************************************************************/
// NEVER MUTATE STATE

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

// Define the reducer to handle actions and update state
const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Create a new array with the existing todos and the new todo item
      return [
        ...state, // Spread the existing items in the state array
        action.todo // Append the new todo item from the action
      ];
    default:
      return state; // Return the current state if the action type is not matched
  }
};

// Define the action creator to add a new to-do item
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo // Attach the new todo item to the action object
  }
}

// Create the Redux store with the reducer
const store = Redux.createStore(immutableReducer);

/*
These final challenges describe several methods of enforcing the key principle of state immutability in Redux.
 Immutable state means that you never modify state directly, instead, you return a new copy of state.

If you took a snapshot of the state of a Redux app over time, you would see something like state 1, state 2, 
state 3,state 4, ... and so on where each state may be similar to the last, but each is a distinct piece of 
data. This immutability, in fact, is what provides such features as time-travel debugging that you may have 
heard about.

Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the
 programmer. Fortunately, JavaScript (especially ES6) provides several useful tools you can use to enforce the
  immutability of your state, whether it is a string, number, array, or object. Note that strings and numbers
   are primitive values and are immutable by nature. In other words, 3 is always 3. You cannot change the value
    of the number 3. An array or object, however, is mutable. In practice, your state will probably consist of
     an array or object, as these are useful data structures for representing many types of information.
*/

/***************************************************************************************************************************/
// USE SPREAD OPERATOR ON ARRAYS

const immutableReducer = (state = ['Do not mutate state!'], action) => {
    // Reducer function with default state initialized to an array with one item
    
    switch(action.type) {
      case 'ADD_TO_DO':
        // Case for handling 'ADD_TO_DO' action type
        
        // Return a new array with the existing state items and the new to-do item appended
        return [...state, action.todo]; // Using the spread operator to copy existing state and add the new to-do item
        
      default:
        // Default case to return the current state if action type doesn't match
        return state;
    }
  };
  
  const addToDo = (todo) => {
    // Action creator for creating an 'ADD_TO_DO' action
    
    return {
      type: 'ADD_TO_DO', // Specifies the action type
      todo // Includes the new to-do item to be added to the state
    }
  }
  
  const store = Redux.createStore(immutableReducer); 
  // Create the Redux store with the immutableReducer to manage the state
  

/***************************************************************************************************************************/
// REMOVE AN ITEM FROM AN ARRAY

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // Don't mutate state here; create a new array with the item at action.index removed
        return state.filter((_, index) => index !== action.index);
        // Use filter to create a new array excluding the item at action.index
        
      default:
        return state; // Return the current state if action type doesn't match
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM', // Action type to be handled by the reducer
      index // Index of the item to be removed
    }
  }
  
  const store = Redux.createStore(immutableReducer); 
  // Create the Redux store with the immutableReducer
  

/***************************************************************************************************************************/
// COPY AN OBJECT WITH OBJECT.ASSIGN



/***************************************************************************************************************************/

/***************************************************************************************************************************/

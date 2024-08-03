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



/***************************************************************************************************************************/
// COMBINE MULTIPLE REDUCERS

/***************************************************************************************************************************/
// SEND ACTION DATA TO THE STORE

/***************************************************************************************************************************/
// USE MIDDLEWARE TO HANDLE ASYNCHROUS ACTIONS

/***************************************************************************************************************************/
// WRITE A COUNTER WITH REDUX

/***************************************************************************************************************************/
// NEVER MUTATE STATE

/***************************************************************************************************************************/
// USE SPREAD OPERATOR ON ARRAYS

/***************************************************************************************************************************/
// REMOVE AN ITEM FROM AN ARRAY

/***************************************************************************************************************************/
// COPY AN OBJECT WITH OBJECT.ASSIGN

/***************************************************************************************************************************/

/***************************************************************************************************************************/

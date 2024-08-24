/***************************************************************************************************************************/
// GETTING STARTED WITH REACT AND REDUX

class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props) {
      super(props); // Call the parent class constructor
      this.state = {
        input: '', // Initialize input state property to an empty string
        messages: [] // Initialize messages state property to an empty array
      };
    }
    // Change code above this line
  
    render() {
      return <div />;
    }
  };
  
/***************************************************************************************************************************/
// MANAGE STATE LOCALLY FIRST

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '', // Initialize input state property to an empty string
        messages: [] // Initialize messages state property to an empty array
      };
  
      // Bind the methods to the class
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
  
    // Method to handle changes to the input field
    handleChange(event) {
      // Update the input state property with the current value of the input element
      this.setState({ input: event.target.value });
    }
  
    // Method to handle message submission
    submitMessage() {
      // Add the current input message to the messages array and clear the input field
      this.setState((prevState) => ({
        messages: [...prevState.messages, prevState.input], // Append new message to messages array
        input: '' // Clear the input field
      }));
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          {/* Render an input element */}
          <input
            type="text"
            value={this.state.input} // Controlled input field
            onChange={this.handleChange} // Event handler for input changes
          />
          {/* Render a button element */}
          <button onClick={this.submitMessage}>Submit</button>
          {/* Render a ul element to display the messages */}
          <ul>
            {this.state.messages.map((message, index) => (
              <li key={index}>{message}</li> // Render each message in a list item
            ))}
          </ul>
        </div>
      );
    }
  }
  
/***************************************************************************************************************************/
// EXTRACT STATE LOGIC TO REDUX

// Define ADD, addMessage(), messageReducer(), and store here:
// Step 1: Define the action type
const ADD = 'ADD';

// Step 2: Define the action creator
const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

// Step 3: Define the reducer
const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

// Step 4: Create the Redux store
const store = Redux.createStore(messageReducer);

/***************************************************************************************************************************/
// USE PROVIDER TO CONNECT REDUX TO REACT

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
    render() {
    // Render the Provider and pass the store to it
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    );
  }
  // Change code above this line
};
/***************************************************************************************************************************/
// MAP STATE TO PROPS

const state = [];

// Change code below this line
const mapStateToProps = (state) => {
  return {
    messages: state
  };
};
/***************************************************************************************************************************/
// MAP DISPATCH TO PROPS

const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

/***************************************************************************************************************************/
// CONNECT REDUX TO REACT


/***************************************************************************************************************************/
// CONNECT REDUX TO MESSAGES APP


/***************************************************************************************************************************/
// EXTRACT LOCAL STATE INTO REDUX


/***************************************************************************************************************************/
// MOVING FORWARD FROM HERE


/***************************************************************************************************************************/
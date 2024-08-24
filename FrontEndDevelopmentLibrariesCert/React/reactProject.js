// const JSX = <h1>Hello JSX!</h1>;

const JSX = <div>
<h1></h1>
<p></p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
</div>;

/******************************************************************************/

const JSX1 = (
    <div>
    {/* Comment line in React*/}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );


/******************************************************************************/

  const JSX2 = (
    <div id="challenge-node">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line
  
  {/*DO NOT FORGET THIS IS HOW TO RENDER TO THE REACT DOM */}
  ReactDOM.render(JSX2, document.getElementById("challenge-node"));
  {/*DO NOT FORGET THIS IS HOW TO RENDER TO THE REACT DOM */}


/******************************************************************************/

  const JSX3 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );


/******************************************************************************/

  const JSX4 = (
    <div>
      <h2>Welcome to React!</h2> <br /> {/* Notice the self closing brackets on the br and the hr element tags */}
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );

/******************************************************************************/

  const MyComponent02 = function() {
    // Change code below this line
    return(
      <div>"String of text"</div>
    )
    // Change code above this line
  }

/******************************************************************************/

  class MyComponent1 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
        return(
          <div>
          <h1>
          Hello React!
          </h1>
          </div>
        )
  
  
      // Change code above this line
    }
  };

/******************************************************************************/

  const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
            <ChildComponent />
          { /* Change code above this line */ }
        </div>
      );
    }
  };

/******************************************************************************/

  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits1 = () => {
    return (
      <div>
        { /* Change code below this line */ }
          <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
            <Fruits />
          { /* Change code above this line */ }
        </div>
      );
    }
  };

/******************************************************************************/

  class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
            <Citrus />
            <NonCitrus />
          { /* Change code above this line */ }
        </div>
      );
    }
  };

/******************************************************************************/
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
            <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };

/******************************************************************************/

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
            <Fruits />
            <Vegetables />
          {/* Change code above this line */}
        </div>
      );
    }
  };
  
  // Change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

  {/* PROPS stands for PROPERTIES */}
  class MyComponent1 extends React.Component{
    constructor(props){
      super(props)
    }
    render() {
      return(
      <div>
      <h1>My First React Component!</h1>
      </div>
      );
    }
  }
  
  ReactDOM.render(<MyComponent1 />, document.getElementById('challenge-node'));

/******************************************************************************/

  const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date} </p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date = {Date()}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

/******************************************************************************/

  const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(", ")}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks={["walk dog", "workout"]} />
          <h2>Tomorrow</h2>
          <List tasks={["buy groceries", "clean house", "study"]} />
          { /* Change code above this line */ }
        </div>
      );
    }
  };

/******************************************************************************/

  const ShoppingCart = (props) => { // Shopping Cart is the function name, props is parameter function ShoppingCart(props){};
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps = {items:0}

  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity:0
  }
  
  class ShoppingCart01 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity={10}/>
      { /* Change code above this line */ }
    }
  };

/******************************************************************************/

  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = {quantity: PropTypes.number.isRequired}
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart02 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

/******************************************************************************/

  class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name = "Matt"/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };

/******************************************************************************/

   class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  
  const Camper = (props) => {
    return <p>{props.name}</p>
  };
  
  Camper.defaultProps = { name: 'CamperBot' };
  
  Camper.propTypes = {name: PropTypes.string.isRequired}

/******************************************************************************/

  class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
      this.state = {
          firstName: 'Matt'
      }
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.firstName}</h1>
        </div>
      );
    }
  };

/******************************************************************************/

    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: 'freeCodeCamp'
        }
      }
      render() {
        return (
          <div>
            { /* Change code below this line */ }
              <h1>{this.state.name}</h1>
            { /* Change code above this line */ }
          </div>
        );
      }
    };

/******************************************************************************/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
      const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
          <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};

/******************************************************************************/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
        this.setState({
            name: 'React Rocks!'
        });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

/******************************************************************************/

class MyComponent extends React.Component { // Define a class component called MyComponent that extends React.Component
  constructor(props) { // Define the constructor method for initializing state and props
    super(props); // Call the constructor of the parent class (React.Component)
    this.state = { // Initialize the state object
      text: "Hello" // Set the initial state with a key 'text' and value 'Hello'
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this); // Bind the handleClick method to 'this' to ensure it has the correct context
    // Change code above this line
  }
  handleClick() { // Define a method to handle click events
    this.setState({ // Use setState to update the component's state
      text: "You clicked!" // Change the value of 'text' in the state to 'You clicked!'
    });
  }
  render() { // Define the render method to describe what the UI should look like
    return ( // Return the JSX to render
      <div> // Create a div element
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button> // Create a button element with an onClick event handler that calls handleClick
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1> // Create an h1 element that displays the current state of 'text'
      </div>
    );
  }
};


/***************************************************************************************************************************/

class MyComponent extends React.Component { // Define a class component called MyComponent that extends React.Component
  constructor(props) { // Define the constructor method for initializing state and props
    super(props); // Call the constructor of the parent class (React.Component)
    this.state = { // Initialize the state object
      visibility: false // Set the initial state with a key 'visibility' and value 'false'
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this); // Bind the toggleVisibility method to 'this' to ensure it has the correct context
    // Change code above this line
  }

  // Change code below this line
  toggleVisibility() { // Define a method to toggle the visibility state
    this.setState(state => ({ visibility: !state.visibility })); // Use setState with an anonymous function to toggle the visibility property
  }
  // Change code above this line
  
  render() { // Define the render method to describe what the UI should look like
    if (this.state.visibility) { // Check if visibility state is true
      return ( // Return the JSX to render if visibility is true
        <div> // Create a div element
          <button onClick={this.toggleVisibility}>Click Me</button> // Create a button element with an onClick event handler that calls toggleVisibility
          <h1>Now you see me!</h1> // Conditionally render an h1 element if visibility is true
        </div>
      );
    } else { // If visibility is false
      return ( // Return the JSX to render if visibility is false
        <div> // Create a div element
          <button onClick={this.toggleVisibility}>Click Me</button> // Create a button element with an onClick event handler that calls toggleVisibility
        </div>
      );
    }
  }
}


/***************************************************************************************************************************/
// CREATE A COUNTER WITH REACT

class Counter extends React.Component { // Define a new React component class named Counter
  constructor(props) { // Constructor method for initializing the component
    super(props); // Call the parent class (React.Component) constructor with props
    this.state = { // Initialize the component's state
      count: 0 // Set the initial value of count to 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this); // Bind the increment method to the current instance
    this.decrement = this.decrement.bind(this); // Bind the decrement method to the current instance
    this.reset = this.reset.bind(this); // Bind the reset method to the current instance
    // Change code above this line
  }
  // Change code below this line
  increment() { // Method to increment the count
    this.setState(prevState => ({ // Update the state using the previous state
      count: prevState.count + 1 // Increase the count by 1
    }));
  }

  decrement() { // Method to decrement the count
    this.setState(prevState => ({ // Update the state using the previous state
      count: prevState.count - 1 // Decrease the count by 1
    }));
  }

  reset() { // Method to reset the count
    this.setState({ // Update the state
      count: 0 // Set the count to 0
    });
  }
  // Change code above this line
  render() { // Render method to define what the component should display
    return ( // Return the JSX to render
      <div> {/* Container for the buttons and display */}
        <button className='inc' onClick={this.increment}>Increment!</button> {/* Button to increment the count */}
        <button className='dec' onClick={this.decrement}>Decrement!</button> {/* Button to decrement the count */}
        <button className='reset' onClick={this.reset}>Reset</button> {/* Button to reset the count */}
        <h1>Current Count: {this.state.count}</h1> {/* Display the current count */}
      </div>
    );
  }
};

// BUILT SIMPLE INCREMENT AND DECREMENT USING ON CLICK AND OTHER REACT PROPS
/***************************************************************************************************************************/
// CREATE A CONTROLLED INPUT

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
   handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
           { /* Add the input element */}
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
/***************************************************************************************************************************/
// CREATE A CONTROLLED FORM

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
      event.preventDefault();
    
    // Set the submit state to the current input value
    this.setState({
      submit: this.state.input
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
            {/* Input element with value and onChange attributes */}
          <input 
            type='text' 
            value={this.state.input} 
            onChange={this.handleChange} 
          />
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
/***************************************************************************************************************************/
// PASS STATE AS PROPS TO CHILD COMPONENT

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar name={this.state.name} />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {this.props.name} </h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
/***************************************************************************************************************************/
// PASS A CALLBACK AS PROPS
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
          {/* Render GetInput and pass input and handleChange props */}
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        {/* Render RenderInput and pass input prop */}
        <RenderInput
          input={this.state.inputValue}
        />
        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

/***************************************************************************************************************************/
// USE LIFECYCLE METHOD COMPONENTWILLMOUNT

/***************************************************************************************************************************/
// USE LIFECYCLE METHOD COMPENENTDIDMOUNT

/***************************************************************************************************************************/
// ADD EVENT LISTENERS

/***************************************************************************************************************************/
// OPTIMIZE RERENDERS WITH SHOULD COMPONENET UPDATE

/***************************************************************************************************************************/
// INLINE STYLES

/***************************************************************************************************************************/
// ADD INLINE STYLES IN REACT

/***************************************************************************************************************************/
// USE JS IN REACT RENDER METHOD

/***************************************************************************************************************************/
// RENDER WITH IF-ELSE CONDITION

/***************************************************************************************************************************/
// USE && FOR PRECISE CONDITIONAL

/***************************************************************************************************************************/
// TERNARY EXPRESSION FOR RENDERING

/***************************************************************************************************************************/
// RENDER CONDITIONALLY FROM PROPS

/***************************************************************************************************************************/
// RENDER INLINE CSS FROM COMPONENT STATE

/***************************************************************************************************************************/
// USE ARRAY.MAP() TO DYNAMICALLY RENDER ELEMENTS

/***************************************************************************************************************************/
// GIVE SIBLING ELEMENTS UNIQUE KEY ATTRIBUTE

/***************************************************************************************************************************/
// USE ARRAY.FILTER() TO DYNAMICALLY FILTER ARRAY

/***************************************************************************************************************************/
// RENDER REACT ON THE SERVER WITH RENDERTOSTRING()

/***************************************************************************************************************************/







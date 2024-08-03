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


/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/

/***************************************************************************************************************************/







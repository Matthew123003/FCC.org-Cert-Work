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
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
      console.log('MyComponent is about to mount');
    // Change code above this line
  }
  render() {
    return <div />
  }
};

/***************************************************************************************************************************/
// USE LIFECYCLE METHOD COMPENENTDIDMOUNT
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers !== null ? this.state.activeUsers : 'Loading...'} </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

/***************************************************************************************************************************/
// ADD EVENT LISTENERS
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

/***************************************************************************************************************************/
// OPTIMIZE RERENDERS WITH SHOULD COMPONENET UPDATE
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return nextProps.value % 2 === 0;;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

/***************************************************************************************************************************/
// INLINE STYLES
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};

/***************************************************************************************************************************/
// ADD INLINE STYLES IN REACT
const styles = {
  color: 'purple',
  fontSize: 40,
  border: '2px solid purple'
};

// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};

/***************************************************************************************************************************/
// USE JS IN REACT RENDER METHOD
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}
            {answer}
          {/* Change code above this line */}
        </p>
      </div>
    );
  }
}

/***************************************************************************************************************************/
// RENDER WITH IF-ELSE CONDITION
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
    // Change code above this line
  }
}

/***************************************************************************************************************************/
// USE && FOR PRECISE CONDITIONAL
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
    // Change code above this line
  }
}


/***************************************************************************************************************************/
// TERNARY EXPRESSION FOR RENDERING
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      input: '',
      userAge: ''
    };
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}
          {
          this.state.userAge === '' ? buttonOne :
          this.state.userAge >= 18 ? buttonTwo : 
          buttonThree
        }
        {/* Change code above this line */}
      </div>
    );
  }
}

/***************************************************************************************************************************/
// RENDER CONDITIONALLY FROM PROPS
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState.counter +1
      }
    });
  }
  render() {
    const expression = Math.random() >= 0.5; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}

/***************************************************************************************************************************/
// RENDER INLINE CSS FROM COMPONENT STATE
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line
      if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    }
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

/***************************************************************************************************************************/
// USE ARRAY.MAP() TO DYNAMICALLY RENDER ELEMENTS
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    };
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item, index) => (
      <li key={index}>{item.trim()}</li>
    )); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

/***************************************************************************************************************************/
// GIVE SIBLING ELEMENTS UNIQUE KEY ATTRIBUTE
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((framework) => (
    <li key={framework}>{framework}</li>
  ));
 // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

/***************************************************************************************************************************/
// USE ARRAY.FILTER() TO DYNAMICALLY FILTER ARRAY
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // Change this line
    const renderOnline = usersOnline.map((user, index) => (
      <li key={index}>{user.username}</li>
    )); // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

/***************************************************************************************************************************/
// RENDER REACT ON THE SERVER WITH RENDERTOSTRING()
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
const appString = ReactDOMServer.renderToString(<App />);

console.log(appString);

/***************************************************************************************************************************/







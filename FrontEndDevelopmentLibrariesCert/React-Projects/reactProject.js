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

const JSX1 = (
    <div>
    {/* Comment line in React*/}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );


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

  const JSX3 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );

  const JSX4 = (
    <div>
      <h2>Welcome to React!</h2> <br /> {/* Notice the self closing brackets on the br and the hr element tags */}
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );

  const MyComponent = function() {
    // Change code below this line
    return(
      <div>"String of text"</div>
    )
    // Change code above this line
  }

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




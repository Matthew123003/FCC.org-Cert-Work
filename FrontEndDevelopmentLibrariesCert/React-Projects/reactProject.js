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
  
  ReactDOM.render(JSX2, document.getElementById("challenge-node"));

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

  


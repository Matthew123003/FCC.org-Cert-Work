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




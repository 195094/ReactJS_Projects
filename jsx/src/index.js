//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create a React component
const App = function () {
  const buttonText = "Click Me!";
  const labelText = "Enter Name:";
  return (
    <div>
      <label class="label" for="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', borderColor: 'red'}}>
        {buttonText}
      </button>
    </div>
  );
};
//Take the React-component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
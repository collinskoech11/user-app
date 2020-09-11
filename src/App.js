import React from 'react';
import './App.css';
import './script.js';

function App(){
  const sayHello = () =>{
    console.log('sasa');
  }
  return(
    <div>
      <h1>Hello React</h1>
      <button onClick={sayHello()}>Helo</button>
    </div>
  );
}
export default App;
import React, { useLayoutEffect, useRef } from 'react';
import './App.css';

//  useEffectLayout is similar to use effect but the difference is :
//  the callback (function)run after rendering but before painting to screen
//  That means that react will wait your code 
//  to finish running before updating the UI for the end user


function App() {

  const myBtn = useRef(null);

  useLayoutEffect(()=>{
    const rect = myBtn.current.getBoundingClientRect();
    console.log(rect.height);
  })

  return (
    <div className="App">
      <button ref={myBtn}></button>        
    </div>
  );
}

export default App;

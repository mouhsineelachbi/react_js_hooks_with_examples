import React, { useRef } from 'react';
import './App.css';

// useRef => allow you to create mutable objects that keep the same reference between renders

function App() {
  const myBtn = useRef(null);
  const clickIt = ()=> myBtn.current.click();
  return (
      <button ref={myBtn}>{myBtn.current}</button>            
  );
}

export default App;

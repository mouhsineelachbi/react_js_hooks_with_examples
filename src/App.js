import React, { useReducer } from 'react';
import './App.css';

//  useReducer is very similar to useState, It's just go about It in a different way using a redux pattern
//  instead of updating the state directly, you dispatch actions that go to a reducer function
//  and that reducer function determines how to computer the next state

//  Last is the reducer function that take two params
//  the 1st one is that state
//  the 2nd one is the action

function reset(initialState){
  return { count: initialState };
}

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count+1 };
    case 'decrement':
      return { count: state.count-1 };
    case 'reset':
      return reset(action.payload);
    default:
      throw new Error();
  }

}

function App() {
  //  useReducer will return 2 values :
  //  the 1st one is the state that you want to show to the UI
  //  the 2nd value is a function that dispatch an action
  //  An action is just an object that has a type:string and a payload:any e.g action = {type: increment, payload: 2}
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState, reset); // initialCount is the initial state
  return (
    <div className="App">
      count: { state.count } <br></br>
      <button onClick={ ()=> dispatch({ type: 'decrement'})}>Decrement</button>
      <button onClick={ ()=> dispatch({ type: 'reset', payload: initialState})}> Reset </button>
      <button onClick={ ()=> dispatch({ type: 'increment'})}>Increment</button>      
    </div>
  );
}

export default App;

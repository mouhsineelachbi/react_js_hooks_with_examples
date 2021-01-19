import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  useEffect(()=>{ // => run when component mounted or a dependent state changed
    console.log("useEffect is ran");
    return ()=>{ console.log("Component destroyed !") } // when component is destroyed
  }, [count]) // => Array of dependecies

  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>Photon</button>
      <Btn></Btn>
            
    </div>
  );
}


export class Btn extends React.Component {

  constructor(props) {
    super(props);
  };

  componentDidMount () {
    console.log("Component Mounted");
    // Initialized
  };

  componentDidUpdate () {
    console.log("Component updated");
    // State updated
  };

  componentWillUnmount () {
    console.log("Component destroyed");
    // Destroyed
  };
  render() {
    return (
      <div className="toHide">
      </div>
    );
  }
}

export default App;

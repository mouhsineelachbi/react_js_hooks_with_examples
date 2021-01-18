import React, { useState } from 'react';
import './App.css';


// Function based Component
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count+1)}>Click me</button><br>
      </br>
      Funtion Based { count } <br></br>
      <Btn></Btn>
      
      
    </div>
  );
}

// Class based Component
class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="Btn">
        <button onClick={()=> this.setState({ count: this.state.count+1 })}>Click me</button>
        <br></br>
        Class based { this.state.count }
      </div>
    );
  }
}


export default App;

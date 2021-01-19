import React, { useMemo, useState } from 'react';
import './App.css';

//  useMemo optimize computation cost for improve performace => only used for expensive caculations
//  instead of computing in each rendering we can memorize the value

function App() {

  const [count, setCount] = useState(60);

  const expensiveCount = useMemo(()=>{
    return count ** 2;
  }, [count])  // Dependencies to determine when this computation should be run 
          //  e.g in this case when the value of count changes this code will be rerun and recalculate the expensiveCount value

  return (
    <div className="App">
      Count : { count }
      <br></br>
      Computed value ** 2 : { expensiveCount } 
      <br></br>
      <button onClick={()=>{let rand = Math.floor(Math.random()*100);setCount(rand)}}>Calculate</button>
    </div>
  );
}

export default App;

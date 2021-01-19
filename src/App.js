import React, { useCallback, useState } from 'react';
import './App.css';

//  useCallback is used to memorize an entier function

function App() {
  const [count, setCount] = useState(60);

  const memoizedCallback  = useCallback(() => {
    alert(`Count ${count}`);
  }, [count]) // Dependency array variables to re-render the children component
  return (
    <div className="App">
      <button onClick={()=>setCount(10)}>Change</button>
      <SomeChild handler={memoizedCallback} />
    </div>
  );
}

function SomeChild (handler) {
  return (
    <>
    </>
  )
}

export default App;

import React, { useDebugValue, useState, useEffect } from 'react';
import './App.css';

//  useDebugValues is useful when building a custom hook
//  and used to debug in react dev tools

function fetchFromDatabase(userId) {
  return {displayName: "Mouhsine"}
}


function useDisplayName () { // <= this is our custom hook
  const [displayName, setDisplayName] = useState();

  useEffect(()=>{
    // just an example of fetching data not real
    const userId = 'kdkdk'
    const data = fetchFromDatabase(userId);
    setDisplayName(data.displayName);
  },[])

  useDebugValue(displayName ?? 'loading...')

  return displayName;
}

function App() {

  const displayName = useDisplayName();

  return (
    <div className="App">
      <button>{ displayName }</button>            
    </div>
  );
}

export default App;

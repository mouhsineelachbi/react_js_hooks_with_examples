import React, { useContext } from 'react';
import './App.css';


// work with context api => machanizme to share or scope values through all the entier component tree

const moods = {
  happy: '😃',
  sad: '😥'
};

//  Create a context to share that mood object
const moodContext = React.createContext(moods);

function App() {
  return (
    <div className="App">
      <moodContext.Provider value = {moods.happy}>
        <MoodEmoji />
      </moodContext.Provider>
            
    </div>
  );
}

function MoodEmoji() {
  // useContext allows us to access or consume the current value from the context provider
  //  when value is changed in the provider the value here will be updated automatically
  const mood = useContext(moodContext);
  return (
    <p> { mood } </p>
  );
/*
  // Or we can use the consumer rather than using the hook useContext
  return( <moodContext.consumer>
            { ({mood}) => <p>{mood}</p>}
          </moodContext.consumer>
         )
*/  
}

export default App;

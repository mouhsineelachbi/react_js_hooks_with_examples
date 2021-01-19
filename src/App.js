import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import './App.css';

//  useImperativeHandle is used to customize the instance value that is exposed
//  to parent component when using Ref
//  means to you can access DOM element and forward It to be accessed
//  by the consumers of the component library

function App () {
  const ref = useRef(null);

  return <CoolButton ref={ref}></CoolButton>
}



function CoolButton(props, ref) {

  const myBtn = useRef(null);

  //  to change the ref behaviour
  //  e.g the click will be changed
  //  to give a message in the console
  //  and then click
  useImperativeHandle(ref, () => {
    click: () => {
      // console.log('Clicking Button!');
      myBtn.current.click();
    };
  });
  
  return (
    <div>
      <button ref={ myBtn }>Btn</button>
      {/*
        you can access a DOM element by using useRef hook
        then you wrape the component to make that ref available
        when someone uses this component
      */}

    </div>
  );
}

CoolButton = forwardRef(CoolButton);

export default App;

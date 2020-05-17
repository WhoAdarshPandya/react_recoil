import React from 'react';
import Display from './components/Display';
import Increment from './components/Increment';
import Decrement from './components/Decrement';

function App() {
  return (
    <div className="App">
      <p>demo for react recoil</p>
      <Display/>
      <Increment/>
      <Decrement/>
    </div>
  );
}

export default App;

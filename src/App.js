import React from 'react';
import Signup from './components/signup';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Signup />
        <Home />  
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';

import './App.css';
import Navbar from  './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Navbar />
        <Route path='/home' component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/about' component={About} />


      </BrowserRouter>
        {/* <Signup /> */}
        {/* <Home />   */}
      {/* </header> */}
      </header>
    </div>
  );
}

export default App;

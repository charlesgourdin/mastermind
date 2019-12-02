import React from 'react';
import './App.css';
import Game from './components/Game';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/game" component={Game} />
      </BrowserRouter>
    </div>
  );
}

export default App;

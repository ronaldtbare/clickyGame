import React from 'react';
import Card from './components/card'
import './App.css';

function App() {
  let score = 0;
  let highscore = 0;
  let message = "Start Picking";
  return (
    <div className="App">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h2>Clicky Game!</h2>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <h4>{message}</h4>
            </li>
            <li class="nav-item">
              <h4 className="scores">"Score: {score} | High Score: {highscore}</h4>
            </li>
          </ul>
        </div>
      </nav>

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Clicky Game!</h1>
          <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>

      <div class="picwrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> 
    </div>
  );
}

export default App;

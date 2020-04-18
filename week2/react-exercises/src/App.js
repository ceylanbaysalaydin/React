import React from 'react';
import './App.css';
import Friend from './Friend';
import DogGallery from './DogGallery';
import RandomJoke from './RandomJoke';
function App() {
  return (
    <div className="App">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Joke from './Joke';
import Button from './Button';

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [buttonCount, setButtonCount] = useState(0);
  const getRandomJoke = () => {
    setLoading(true);
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('Something went wrong!');
        }
      })
      .then((data) => {
        setJoke(data);
      })
      .catch((e) => setError(true))
      .finally(() => setLoading(false));
  };
  const increaseButtonCount = () => {
    setButtonCount(buttonCount + 1);
  };
  useEffect(getRandomJoke, [buttonCount]);
  return (
    <div>
      <h1>Exercise 3 - Get Random Joke</h1>
      <Button title="random joke" onClick={increaseButtonCount} />
      {isLoading && <p>Loading...</p>}
      {hasError && <p> Something went wrong! </p>}
      {!isLoading && !hasError && <Joke joke={joke} />}
    </div>
  );
}

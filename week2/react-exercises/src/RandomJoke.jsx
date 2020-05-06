import React, { useState } from 'react';
import Joke from './Joke';
import Button from './Button';

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const getRandomJoke = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (res.ok) {
        const data = await res.json();
        setJoke(data);
      } else {
        throw Error('Something went wrong!');
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Exercise 3 - Get Random Joke</h1>
      <Button title="random joke" onClick={getRandomJoke} />
      {isLoading && <p>Loading...</p>}
      {hasError && <p> Something went wrong! </p>}
      {!isLoading && !hasError && <Joke joke={joke} />}
    </div>
  );
}

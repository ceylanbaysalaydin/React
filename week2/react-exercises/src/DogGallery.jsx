import React, { useState, useEffect } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const getDogPhoto = () => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('Something went wrong while fetching!');
        }
      })
      .then((data) => {
        setDogPhotos((previousState) => [...previousState, data.message]);
      })
      .catch((e) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1> Exercise 2 - Dog Photo Gallery </h1>
      {dogPhotos.length === 0 && <h2>Get your first dog by clicking the button!</h2>}
      {dogPhotos.map((imgUrL, index) => (
        <div key={index}>
          <DogPhoto url={imgUrL} />
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {hasError && <p> Something went wrong! </p>}
      <Button onClick={getDogPhoto} title="dog photo"></Button>
    </div>
  );
}

import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const getDogPhoto = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      if (res.ok) {
        const data = await res.json();
        setDogPhotos((previousState) => [...previousState, data.message]);
      } else {
        throw Error('Something went wrong while fetching!');
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1> Exercise 2 - Dog Photo Gallery </h1>
      {dogPhotos.length === 0 ? (
        <h2>Get your first dog by clicking the button!</h2>
      ) : (
        dogPhotos.map((imgUrL, index) => (
          <div key={index}>
            <DogPhoto url={imgUrL} />
          </div>
        ))
      )}

      {isLoading && <p>Loading...</p>}
      {hasError && <p> Something went wrong! </p>}
      <Button onClick={getDogPhoto} title="dog photo"></Button>
    </div>
  );
}

import React from 'react';

export default function DogPhoto({ url }) {
  return <img src={url} alt="dog-image" height="250" width="400"></img>;
}

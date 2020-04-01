import React from 'react';
import Hobby from './Hobby';

function HobbyList() {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

  return (
    <ul>
      {hobbies.map(hobby => (
        <Hobby hobby={hobby} />
      ))}
    </ul>
  );
}

export default HobbyList;

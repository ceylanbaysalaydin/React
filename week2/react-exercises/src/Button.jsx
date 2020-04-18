import React from 'react';
export default function Button({ onClick, title }) {
  return (
    <div>
      <button style={{ margin: '20px' }} onClick={onClick}>
        Get a {title}
      </button>
    </div>
  );
}

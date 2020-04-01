import React from 'react';

function Guarantee({ img, title, description }) {
  return (
    <div className="col-md-4">
      <img src={img} alt={title + ' icon'} />
      <h6> {title} </h6>
      <p>{description}</p>
    </div>
  );
}

export default Guarantee;

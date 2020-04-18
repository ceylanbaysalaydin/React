import React from 'react';

export default function FriendProfile({ friend }) {
  const { name, location, email, phone } = friend;
  const {
    street: { number, name: streetName },
    city,
    state,
    country,
    postcode,
  } = location;
  return (
    <div>
      <ul>
        <li>
          Full Name : {name.title} {name.first} {name.last}
        </li>
        <li>
          Address : {number} {streetName} Street, {city} {state} {postcode}, {country}
        </li>
        <li> Email: {email}</li>
        <li> Phone: {phone}</li>
      </ul>
    </div>
  );
}

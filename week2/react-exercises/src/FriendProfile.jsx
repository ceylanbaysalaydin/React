import React from 'react';

export default function FriendProfile({
  friend: {
    name,
    location: {
      street: { number, name: streetName },
      city,
      state,
      country,
      postcode,
    },
    email,
    phone,
  },
}) {
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

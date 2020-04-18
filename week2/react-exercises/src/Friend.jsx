import React, { useState, useEffect } from 'react';
import FriendProfile from './FriendProfile';
import Button from './Button';

function Friend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const getFriend = () => {
    setLoading(true);
    fetch('https://www.randomuser.me/api?results=1')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('Something went wrong while fetching!');
        }
      })
      .then((data) => {
        setFriend(data.results[0]);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };
  useEffect(getFriend, []);
  const isFriendReady = Object.keys(friend).length !== 0 ? true : false;

  return (
    <div>
      <h1>Exercise 1 - Get Random Friend</h1>
      <Button onClick={getFriend} title="friend" />
      {isLoading && <p>Loading...</p>}
      {isFriendReady && <FriendProfile friend={friend} />}
      {hasError && <p> There has been an error </p>}
    </div>
  );
}

export default Friend;

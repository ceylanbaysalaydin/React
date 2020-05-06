import React, { useState } from 'react';
import FriendProfile from './FriendProfile';
import Button from './Button';

function Friend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const getFriend = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://www.randomuser.me/api?results=1');
      if (res.ok) {
        const data = await res.json();
        setFriend(data.results[0]);
      } else {
        throw Error('Something went wrong while fetching!');
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
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

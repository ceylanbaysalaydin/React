import React from 'react';
import './App.css';
import HobbyList from './HobbyList';
import Guarantee from './Guarantee';
import deliveryIcon from './f-delivery.png';
import coinIcon from './coin.png';
import chatIcon from './chat.png';

function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="row">
        <Guarantee
          img={deliveryIcon}
          title="Free shipping"
          description="Some description about free shipping"
        />
        <Guarantee
          img={coinIcon}
          title="100% Money back"
          description="Some description about returning product"
        />
        <Guarantee
          img={chatIcon}
          title="Online support 24/7"
          description="Some description about online support"
        />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HobbyList from './HobbyList';
import Guarantee from './Guarantee';
import icon1 from './f-delivery.png';
import icon2 from './coin.png';
import icon3 from './chat.png';

function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="row">
        <Guarantee
          img={icon1}
          title="Free shipping"
          description="Some description about free shipping"
        />
        <Guarantee
          img={icon2}
          title="100% Money back"
          description="Some description about returning product"
        />
        <Guarantee
          img={icon3}
          title="Online support 24/7"
          description="Some description about online support"
        />
      </div>
    </div>
  );
}

export default App;

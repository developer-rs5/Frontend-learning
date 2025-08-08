import React, { useState, useRef } from 'react';
import "./App.css";

const App = () => {
  const data = [
    { card1: "meow", card2: "meow", card3: "meow" },
    { card1: "meow2", card2: "meow3", card3: "meow3" },
    { card1: "meodffw", card2: "mefffow", card3: "meossw" }
  ];

  const index = useRef(0); 

  const [cardData, setCardData] = useState(data[0]);

  function slideLeft() {
    if (index.current === 0) return;
    index.current -= 1;
    setCardData(data[index.current]);
  }

  function slideRight() {
    if (index.current === data.length - 1) return;
    index.current += 1;
    setCardData(data[index.current]);
  }

  return (
    <div className='main'>
      <div className="cards">
        <div className="card"><h1>{cardData.card1}</h1></div>
        <div className="card"><h1>{cardData.card2}</h1></div>
        <div className="card"><h1>{cardData.card3}</h1></div>
      </div>
      <div className="cards">
        <div className="card"><h1>{cardData.card1}</h1></div>
        <div className="card"><h1>{cardData.card2}</h1></div>
        <div className="card"><h1>{cardData.card3}</h1></div>
      </div>
      <div className="cards">
        <div className="card"><h1>{cardData.card1}</h1></div>
        <div className="card"><h1>{cardData.card2}</h1></div>
        <div className="card"><h1>{cardData.card3}</h1></div>
      </div>
      <button onClick={slideLeft}>Slide left</button>
      <button onClick={slideRight}>Slide right</button>
    </div>
  );
};

export default App;

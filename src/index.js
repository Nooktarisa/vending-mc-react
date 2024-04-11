import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Machine from "./Machine";
import InputCoin from "./InputCoin";

function App() {
  const initialCoin = 0;
  const [coin, setCoin] = useState(0);
  const onCoinChanged = total => {
    setCoin(total);
  };

  const onResetCoin = (newCoin) => {
    if (newCoin < initialCoin) newCoin = initialCoin;
    setCoin(newCoin);
  };

  return (
    <div>
      <Machine coin={coin} onResetCoin={onResetCoin}/>
      <InputCoin coin={coin} onCoinChanged={onCoinChanged}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
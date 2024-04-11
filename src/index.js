import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Machine from "./Machine";
import InputCoin from "./InputCoin";
import { Col, Row } from "antd";

function App() {
  const [coin, setCoin] = useState(0);
  const onCoinChanged = total => {
    setCoin(total);
  };
  const onPrice = price => {
    setCoin(coin - price);
  };
  return (
    <div>
      <Row>
        <Col span={8}>
          <Machine coin={coin} onPrice={onPrice} />
        </Col>
        <Col span={16}>
          <InputCoin coin={coin} onCoinChanged={onCoinChanged} />
        </Col>
      </Row>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
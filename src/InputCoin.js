import React, { useState, useEffect } from "react";
import { Row, Button } from 'antd';

function InputCoin({ coin, onCoinChanged }) {
  const [total, setTotal] = useState(coin);

  useEffect(() => {
    setTotal(coin);
  }, [coin]);

  const onItemClick = value => {
    const newTotal = total + value;
    setTotal(newTotal);
    onCoinChanged(newTotal);
  };
  const onCancel = () => {
    const newTotal = 0;
    setTotal(newTotal);
    onCoinChanged(newTotal);
  };
  return (
    <div className="App">
      <div className="balance">Balance: ${coin}</div>
      <div className="add-balance">
        <Button onClick={() => { onItemClick(5); }}>Add $5</Button>
        <Button onClick={() => { onItemClick(10); }}>Add $10</Button>
        <Button onClick={() => { onItemClick(10); }}>Add $15</Button>

        <Row style={{ marginTop: 16 }} justify="center">
          <Button className="button-style-cancel" type="primary" danger onClick={onCancel}>Cancel</Button>
        </Row>
      </div>
    </div>
  );
}

export default InputCoin;

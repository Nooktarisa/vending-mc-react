import React, { useState, useEffect } from "react";
import { Col, Row, Divider, Button } from 'antd';

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
    <div>
      <Divider orientation="left">Input Coin</Divider>
      <Row className="row-style">
        <Col span={2}><Button className="button-style" type="primary" onClick={() => onItemClick(5)}>+ 5 bath</Button></Col>
        <Col span={2}><Button className="button-style" type="primary" onClick={() => onItemClick(10)}>+ 10 bath</Button></Col>
      </Row>
      <Row className="row-style">
        <Col span={2}><Button className="button-style" type="primary" onClick={() => onItemClick(15)}>+ 15 bath</Button></Col>
        <Col span={2}><Button className="button-style" type="primary" onClick={() => onItemClick(20)}>+ 20 bath</Button></Col>
      </Row>
      <Row className="row-style">
        <Col span={2}><Button className="button-style" type="primary" onClick={() => onItemClick(25)}>+ 25 bath</Button></Col>
        <Col span={2}><Button className="button-style" type="primary" onClick={() => onItemClick(30)}>+ 30 bath</Button></Col>
      </Row>

      <Row className="row-style">
        <div className="total-style">Input Coin : {total}</div>
      </Row>

      <Row className="row-style">
        <Button className="button-style-cancel" type="primary" danger onClick={onCancel}>Cancel</Button>
      </Row>
    </div>
  );
}

export default InputCoin;

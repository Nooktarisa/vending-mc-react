import React from "react";
import { Row, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addCredit } from './actions';
import { resetCoin } from './actions';

const InputCoin = () => {
  const dispatch = useDispatch();
  const coin = useSelector(state => state.coin || 0);

  const handleAddCredit = (amount) => {
    dispatch(addCredit(amount));
  };

  const onCancel = () => {
    dispatch(resetCoin());
  };
  return (
    <div className="App">
      <div className="balance">Balance: ${coin}</div>
      <div className="add-balance">
        <Button onClick={() => { handleAddCredit(5); }}>Add $5</Button>
        <Button onClick={() => { handleAddCredit(10); }}>Add $10</Button>
        <Button onClick={() => { handleAddCredit(10); }}>Add $15</Button>

        <Row style={{ marginTop: 16 }} justify="center">
          <Button className="button-style-cancel" type="primary" danger onClick={onCancel}>Cancel</Button>
        </Row>
      </div>
    </div>
  );
}

export default InputCoin;

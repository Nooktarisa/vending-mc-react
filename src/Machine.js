import React, { useState } from "react";
import { Row, Col, Card, Button } from "antd";
import { products } from "./data";

const emptySlotImgUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrXJ2lhd_CLrStSEV7-Yt8yG7Flv7bSM9Bp5rvsc2k0-Iz__wPZ_VhEh87OL4Ezu_jjA&usqp=CAU";

function Machine({ coin, onResetCoin }) {
  const [productList] = useState(products);

  const handlePurchase = (price) => {
    if (coin >= price) {
      alert('Product purchased successfully!');
      const newCoin = coin - price;
      onResetCoin(newCoin);
    } else {
      alert('Insufficient balance to purchase this product.');
    }
  };

  return (
    <div className="App">
      <h1>Vending Machine</h1>
      <Row gutter={[16, 16]}>
        {productList.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6} style={{ paddingLeft: 20, paddingRight: 200 }}>
            <Card
              hoverable
              style={{ width: 300, marginBottom: 16 }}
              cover={<img alt="example" src={product.productImageUrl || emptySlotImgUrl} />}
              title={product.name} extra={`$${product.price}`}>
              <p>Quantity: {product.quantity}</p>
              <Button
                type="primary"
                onClick={() => { handlePurchase(product.price);}}
                disabled={product.quantity === 0 || coin < product.price}
              >
                Purchase
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Machine;

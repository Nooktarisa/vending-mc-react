import React, { useState } from "react";
import { List, Avatar } from "antd"; // Import List and Avatar from Ant Design
import { products } from "./data";
import { BoldOutlined } from "@ant-design/icons";
function Machine({ coin, onPrice }) {
  const [productList] = useState(products);

  const emptySlotImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrXJ2lhd_CLrStSEV7-Yt8yG7Flv7bSM9Bp5rvsc2k0-Iz__wPZ_VhEh87OL4Ezu_jjA&usqp=CAU";

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={productList}
      footer={
        <div>
          <b>Vending Machine</b> DEMO
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.id}
          extra={
            <img
              width={272}
              alt="logo"
              src={item.productImageUrl || emptySlotImgUrl}
            />
          }
        >
          <List.Item.Meta className="available"
            avatar={<Avatar size="large" src={item.productImageUrl || emptySlotImgUrl} />}
            title={
              <span style={{
                color: item.price > coin ? 'black' : 'white',
                backgroundColor: item.price > coin ? 'transparent' : 'green',
              }}>{item.name}</span>
            }
            description={<span style={{
              color: item.price > coin ? 'black' : 'white',
              backgroundColor: item.price > coin ? 'transparent' : 'red',
              fontWeight: 'bold',
            }}>{item.price} Bath</span>}
          />
          NAME: {item.name}, PRICE: {item.price} Bath
        </List.Item>
      )}
    />
  );
}
export default Machine;

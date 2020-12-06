import React from "react";
import {
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
  Right,
} from "native-base";

const ItemReceipt = ({ item }) => {
  console.log("#################################3");
  console.log(item);
  return (
    <ListItem thumbnail key={item.id}>
      <Body>
        <Text>{item.name}</Text>
      </Body>
      <Right>
        <Text style={{ textAlign: "center" }}>{item.qty} </Text>
      </Right>
      <Right>
        <Text style={{ textAlign: "center" }}>{item.price} SAR</Text>
      </Right>
    </ListItem>
    // <Card key={item.barcode}>
    //   <CardItem>
    //     <Left>
    //       <Body>
    //         <Text note>Quantity :{item.quantity}</Text>
    //         <Text>Name:{item.product.name}</Text>

    //         <Text note>Price :{item.product.price}</Text>
    //       </Body>
    //     </Left>
    //   </CardItem>
    // </Card>
  );
};

export default ItemReceipt;

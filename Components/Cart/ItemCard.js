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
} from "native-base";
import { deleteItemFromCart } from "../../redux/actions";
import { Right, Button, Icon } from "native-base";
import { connect } from "react-redux";

const ItemCard = ({ item, deleteItemFromCart }) => {
  return (
    <Card key={item.barcode}>
      <CardItem>
        <Left>
          <Body>
            <Text>Name:{item.product.name}</Text>
            <Text note>Quantity :{item.quantity}</Text>
          </Body>
        </Left>
        <Right>
          <Button transparent onPress={() => deleteItemFromCart(item)}>
            <Icon name="trash" />
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

const mapDispatchToProps = {
  deleteItemFromCart,
};
//export default ItemCard;
export default connect(null, mapDispatchToProps)(ItemCard);

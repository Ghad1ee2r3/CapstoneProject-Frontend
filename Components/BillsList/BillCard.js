import React from "react";
import {
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
} from "native-base";

const BillCard = ({ bill, navigation }) => {
  return (
    <ListItem
      button
      onPress={() => navigation.navigate("BillDetail", { bill: bill })}
    >
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text note>ID :{bill.id}</Text>
                <Text note>Total:{bill.total}</Text>
                <Text note>Tax:{bill.tax}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default BillCard;

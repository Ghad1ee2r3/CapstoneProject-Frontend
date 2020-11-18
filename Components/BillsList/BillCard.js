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
    //   button
    //   onPress={() => navigation.navigate("BillDetail", { bill })}
    >
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text note>Date :{bill.created_date}</Text>
                <Text note>Total:{bill.total}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default BillCard;

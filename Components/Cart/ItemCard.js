import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Container } from "native-base";
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

const ItemCard = ({ item }) => {
  return (
    <Card transparent style={{ flex: 0 }}>
      <CardItem header>
        <Left>
          <Body>
            <View style={styles.rect1}>
              <Image
                source={require("../../assets/images/Gradient_ospoIDs.png")}
                style={styles.image1}
              ></Image>
              <Text style={styles.nameOfProduct1}>
               
                {item.product.name}
              </Text>
              <Text note style={styles.price}>
                {item.price} SAR
              </Text>
              <Text note style={styles.qty1}>
                {item.quantity}
              </Text>
            </View>

          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};
const styles = StyleSheet.create({
  rect1: {
    width: 390,
    height: 93,
    backgroundColor: "rgba(255,255,255,0.11)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.11)",
    flexDirection: "row",
    marginLeft: -20,
  },
  image1: {
    width: 82,
    height: 92,
    borderRadius: 11,
    opacity: 0.79,
    borderWidth: 1,
    borderColor: "rgba(219,215,215,1)",
  },
  nameOfProduct1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 5,
  },
  price: {
    marginTop: 60,
    marginLeft: -129,
  },
  qty1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 35,
    marginLeft: -70,
  },
});

export default ItemCard;

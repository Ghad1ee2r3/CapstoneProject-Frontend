import React from "react";
import { List, Text, Left, Body, Content, Card, CardItem } from "native-base";
import { StyleSheet, View, Image } from "react-native";

const BillDetail = ({ route }) => {
  const { bill } = route.params;
  // let totaltax = bill.total * 0.15;
  // totaltax = totaltax + parseInt(bill.total);
  const orderItems = bill.items.map((item) => (

    <>
      <Card transparent style={{ flex: 0 }}>
        <CardItem header>
          <Left>
            <Body>
              <View style={styles.rect1}>
                <Text style={styles.nameOfProduct1}>{item.name}</Text>
                <Text note style={styles.price}>
                  {item.price} SAR
                </Text>
                <Text note style={styles.qty1}>
                  {item.qty}
                </Text>
              </View>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </>

  ));

  return (
    <View style={styles.container}>
      <Text style={styles.orderNumber11}>Order number : {bill.id}</Text>
      <Text style={styles.date}>Date : {bill.date}</Text>
      <Text style={styles.supermart}>store</Text>
      <Card transparent style={{ flex: 0 }}>
        <CardItem header>
          <Left>
            <Body>
              <List>{orderItems}</List>
              <CardItem>
                <Body>
                  <Text footer style={styles.subtotal1}>
                    Subtotal
                  </Text>
                  <Text footer style={styles.loremIpsum2}>
                    {bill.total}
                  </Text>
                  <Text footer style={styles.tax1}>
                    Tax
                  </Text>
                  <Text foote style={styles.tax2}>
                    (15%)
                  </Text>
                  <Text footer>Total</Text>
                  <Text footer style={styles.loremIpsum3}>
                    {totaltax}
                  </Text>
                </Body>
              </CardItem>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1fb2cc",
    width: 440,
    height: 790,
  },
  pageName1: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 34,
    marginLeft: 35,
  },
  orderNumber11: {
    fontFamily: "roboto-regular",
    color: "rgba(247,244,244,1)",
    marginTop: 4,
    marginLeft: 28,
  },
  date: {
    fontFamily: "roboto-regular",
    color: "rgba(251,248,248,1)",
    marginTop: 28,
    marginLeft: 30,
  },
  supermart: {
    fontFamily: "roboto-700",
    color: "rgba(247,244,244,1)",
    marginTop: 23,
    marginLeft: 30,
  },
  group1: {
    width: 300,
    height: 90,
    opacity: 0.87,
    justifyContent: "center",
  },
  rect1: {
    width: 340,
    height: 93,
    backgroundColor: "rgba(255,255,255,0.11)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.11)",
    flexDirection: "row",
    marginLeft: -30,
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
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  qty1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 35,
    marginLeft: -70,
  },
  image1Row: {
    height: 92,
    flexDirection: "row",
    flex: 1,
  },
  group2: {
    width: 360,
    height: 129,
    marginTop: 327,
  },
  tax1: {
    color: "rgba(138,138,138,1)",
    fontSize: 16,
  },
  loremIpsum2: {
    color: "rgba(138,138,138,1)",
    fontSize: 17,
    marginTop: -20,
    marginLeft: 260,
  },
  total1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 19,
    marginTop: 64,
    marginLeft: 27,
  },
  loremIpsum3: {
    fontSize: 16,
    marginTop: -25,
    marginLeft: 262,
  },
  price: {
    marginTop: 60,
    marginLeft: -80,
  },
  tax2: {
    color: "rgba(138,138,138,1)",
    fontSize: 17,
    marginTop: -25,
    marginLeft: 260,
  },
  subtotal1: {
    fontFamily: "roboto-regular",
    color: "rgba(138,138,138,1)",
    fontSize: 16,
  },
});

export default BillDetail;

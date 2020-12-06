import React from "react";
import {
  List,
  Text,
  Left,
  Body,
  Content,
  Card,
  CardItem,
  ListItem,
  Right,
} from "native-base";

import { Image, StyleSheet, View } from "react-native";

const BillDetail = ({ route }) => {
  const { bill } = route.params;
  // let totaltax = bill.total * 0.15;
  // totaltax = totaltax + parseInt(bill.total);
  const orderItems = bill.items.map((item) => (
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
  ));

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingTop: 17,
          paddingHorizontal: 25,
          backgroundColor: "#1eb2cc",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#fff", fontWeight: "700", marginVertical: 4 }}>
            Bill Number:
          </Text>
          <Text style={{ color: "#fff", fontWeight: "700", marginVertical: 4 }}>
            Store:
          </Text>
          <Text style={{ color: "#fff", fontWeight: "700", marginVertical: 4 }}>
            Bill Date:
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ color: "#fff", marginVertical: 4 }}>{bill.id}</Text>
          <Text style={{ color: "#fff", marginVertical: 4 }}>
            {bill.store.name}
          </Text>
          <Text style={{ color: "#fff", marginVertical: 4 }}>{bill.date}</Text>
        </View>
      </View>
      <View style={{ flex: 4 }}>
        <List style={{ marginRight: 12 }}>
          <ListItem
            thumbnail
            style={{ borderBottomWidth: 1, borderColor: "#ccc" }}
          >
            <Body>
              <Text style={{ fontWeight: "700" }}>PRODUCT NAME</Text>
            </Body>
            <Right>
              <Text style={{ fontWeight: "700", textAlign: "center" }}>
                QTY
              </Text>
            </Right>
            <Right>
              <Text style={{ fontWeight: "700", textAlign: "center" }}>
                PRICE
              </Text>
            </Right>
          </ListItem>
          {orderItems}
        </List>
      </View>
      <View style={{ flex: 1, borderTopColor: "#ccc", borderTopWidth: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 20,
            justifyContent: "flex-end",
          }}
        >
          <View style={{ flex: 2 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "700" }}>Total:</Text>
            <Text style={{ fontWeight: "700" }}>Tax:</Text>
            {/* <Text style={{ fontWeight: "700" }}>Bill Date:</Text> */}
          </View>
          <View style={{ flex: 1 }}>
            <Text>{bill.total} SAR</Text>
            <Text>{bill.tax} SAR</Text>
            {/* <Text>{bills[bills.length - 1].date.slice(0, 10)}</Text> */}
          </View>
        </View>
      </View>
    </View>

    // <Content>
    //   <Card transparent style={{ flex: 0 }}>
    //     <CardItem header>
    //       <Left>
    //         <Body>
    //           <Text
    //             style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
    //           >
    //             Bill ID:{bill.id}
    //           </Text>

    //           <List>{orderItems}</List>
    //           <CardItem>
    //             <Body>
    //               <Text
    //                 style={{
    //                   color: "black",
    //                   fontSize: 20,
    //                   fontWeight: "bold",
    //                 }}
    //               >
    //                 summury
    //               </Text>
    //               <Text footer>tax: 15%</Text>
    //               <Text footer>Total: {bill.total}</Text>

    //               {/* <Text footer>Total after tax: {totaltax}</Text> */}
    //             </Body>
    //           </CardItem>
    //         </Body>
    //       </Left>
    //     </CardItem>
    //   </Card>
    // </Content>
  );
};

export default BillDetail;

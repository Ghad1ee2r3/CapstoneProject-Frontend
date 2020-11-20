import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Content,
  Container,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  View,
  Input,
} from "native-base";
import { Image, ImageBackground, StyleSheet } from "react-native";

//when connect with backend will add ( products)
const Store = ({ route, navigation, stores }) => {
  const { barcode } = route.params;
  console.log("--------------------");
  console.log(barcode);
  console.log("--------------------");

  console.log("---------stores-----------");
  console.log(stores);
  console.log("--------------------");

  //get store Which has the same entrance barcode
  const storeobj = stores.find((item) => item.uuid === barcode);
  console.log(storeobj.name);

  return (
    <Container>
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text> are you in {storeobj?.name}?</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <View>
          <Button
            onPress={() =>
              navigation.navigate("ProductDetail", { barcode: storeobj.uuid })
            }
          >
            <Text>Yes</Text>
          </Button>
          <Button onPress={() => navigation.navigate("ScanCamera")}>
            <Text>No</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = ({ stores }) => ({
  stores,
});

export default connect(mapStateToProps)(Store);

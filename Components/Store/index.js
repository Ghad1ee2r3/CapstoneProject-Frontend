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

const Store = ({ route, navigation, stores }) => {
  const storeBarcode = route.params.storeBarcode;
  console.log(
    "-------------store component storeBarcode-------******************"
  );
  console.log(storeBarcode);
  console.log("--------------------******************");

  console.log("---------stores_component_-----------");
  console.log(stores);
  console.log("--------------------");

  //get store Which has the same entrance barcode
  const storeobj = stores.find((item) => item.uuid === storeBarcode);

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
            onPress={
              () =>
                navigation.replace("ScanProduct", {
                  storeBarcode: storeBarcode,
                }) // storeobj.uuid
            }
          >
            <Text>Yes</Text>
          </Button>
          <Button onPress={() => navigation.replace("ScanCamera")}>
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

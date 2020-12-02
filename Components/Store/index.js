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
import { Dimensions, Image, ImageBackground, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import store from "../../assets/store.png";
const Store = ({ route, navigation, stores }) => {
  const storeBarcode = route.params.storeBarcode;
  var myWidth = Dimensions.get('window').width;

  //get store Which has the same entrance barcode
  const storeobj = stores.find((item) => item.uuid === storeBarcode);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "white", width: "100%", alignContent: "center", justifyContent: "center", alignSelf: "center" }}>
        <Image style={{ height: "80%", width: (myWidth * 0.9) }} source={store} />
      </View>
      <View style={{ flex: 1, alignContent: "center", alignSelf: "center", paddingTop: 20 }}>
        <Text style={{ fontSize: 30, textAlign: "center" }}> Are You In</Text>
        <Text style={{ fontSize: 30, textAlign: "center", color: "#5BC0BE" }}>{storeobj?.name} ?</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignContent: "center", justifyContent: "center", alignItems: "center", }}>
        <View style={{ flex: 1, alignItems: "center", marginHorizontal: 10 }}>
          <Button info full rounded onPress={() => navigation.replace("ScanCamera")}>
            <Text>No</Text>
          </Button>
        </View>

        <View style={{ flex: 1, alignItems: "center", marginHorizontal: 10 }}>
          <Button success full rounded onPress={
            () =>
              navigation.replace("ScanProduct", {
                storeBarcode: storeBarcode,
              }) // storeobj.uuid
          }>
            <Text>Yes</Text>
          </Button>
        </View>
      </View>
    </View>
    // <Container>
    //   <Content>
    //     <Card>
    //       <CardItem header>
    //         <Left>
    //           <Body>
    //             <Text> are you in {storeobj?.name}?</Text>
    //           </Body>
    //         </Left>
    //       </CardItem>
    //     </Card>
    //     <View>
    //       <Button
    //         onPress={
    //           () =>
    //             navigation.replace("ScanProduct", {
    //               storeBarcode: storeBarcode,
    //             }) // storeobj.uuid
    //         }
    //       >
    //         <Text>Yes</Text>
    //       </Button>
    //       <Button onPress={() => navigation.replace("StoreScanCamera")}>
    //         <Text>No</Text>
    //       </Button>
    //     </View>
    //   </Content>
    // </Container>
  );
};

const mapStateToProps = ({ stores }) => ({
  stores,
});

export default connect(mapStateToProps)(Store);

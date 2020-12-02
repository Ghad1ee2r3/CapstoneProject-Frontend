import React from "react";
import { connect } from "react-redux";
import {
  Text,
  Left,
  Body,
  Content,
  Card,
  CardItem,
  Container,
  Button,
  View,
} from "native-base";

import checkoutImg from "../../assets/checkout.jpg"
import { Dimensions, Image } from "react-native";


const CheckoutPage = ({ cart, navigation }) => {
  var myWidth = Dimensions.get('window').width;

  const handlePay = () => {
    navigation.replace("Payment");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#C0D6DF" }}>
      <View style={{
        flex: 2, justifyContent: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

        borderBottomRightRadius: 25, borderBottomLeftRadius: 25
      }}>
        <Image style={{ height: "80%", width: (myWidth * 1) }} source={checkoutImg} />
      </View>
      <View style={{
        flex: 1, backgroundColor: "#C0D6DF",
        // borderTopRightRadius: 25, borderTopLeftRadius: 25,
      }}>
        <View style={{ flex: 1, flexDirection: "row", margin: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "700" }}>Total Before Tax:</Text>
            <Text style={{ fontWeight: "700" }}>Tax:</Text>
            <Text style={{ fontWeight: "700" }}>Total After Tax:</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>{cart.subtotal}</Text>
            <Text style={{ textAlign: "center" }}>{cart.tax}</Text>
            <Text style={{ textAlign: "center" }}>{cart.total}</Text>
          </View>
        </View>
        <View style={{ flex: 1, marginHorizontal:25 }}>
          <Button full rounded style={{backgroundColor:"#6B717E"}} onPress={() => handlePay()}>
            <Text>Go To Payment</Text>
          </Button>
        </View>
      </View>
    </View>
    // <Container>
    //   <Content>
    //     <Card style={{ flex: 0 }}>
    //       <CardItem header>
    //         <Left>
    //           <Body>
    //             <Text>Total Before Tax: {cart.subtotal}</Text>
    //             <Text>Tax: {cart.tax}</Text>
    //             <Text>Total After Tax: {cart.total}</Text>
    //           </Body>
    //         </Left>
    //       </CardItem>

    //       <CardItem>
    //         <Left>
    //           <Body>
    //             <Text>Takes you to the payment page</Text>
    //             <Button onPress={() => handlePay()}>
    //               <Text>Pay Now</Text>
    //             </Button>
    //           </Body>
    //         </Left>
    //       </CardItem>
    //     </Card>
    //   </Content>
    // </Container>
  );
};
const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(mapStateToProps)(CheckoutPage);

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

import { addItemToCart } from "../../redux/actions";

//when connect with backend will add ( products)
const ProductDetail = ({ route, navigation, addItemToCart }) => {
  //let items = cart.items;
  const { barcode } = route.params;
  let products = [
    {
      image:
        "https://cdn.discordapp.com/attachments/772347432763523097/775650698125377546/h4-page-bg-img.jpg",
      name: "p1",
      price: "50",
      description: "description product",
      barcode: barcode,
    },
  ];

  //get product Which has the same entrance barcode
  const product = products.find((item) => item.barcode === barcode);
  const [quantity, setQuantity] = useState(1);

  const [item, setItem] = useState({
    product: product,
    quantity: 0,
  });

  const handlePress = () => {
    //  if
    const newItem = { ...item, quantity: +quantity };
    addItemToCart(newItem);
  };

  return (
    <Container>
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Image
                  source={{
                    uri: product?.image,
                  }}
                  style={{ height: 400, width: 400, flex: 1 }}
                />

                <Text>{product?.name}</Text>
                <Text note>Price:{product?.price} SAR</Text>
                <Text note>Description :{product?.description}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <View>
          <Text>Quantity:</Text>
          <Input
            border
            keyboardType="numeric"
            placeholder="1"
            onChangeText={setQuantity}
            value={quantity}
          />
          <Button onPress={() => handlePress()}>
            <Text>Add to cart</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

// const mapStateToProps = ({ cart }) => ({
//   // products,
//   cart,
// });
const mapDispatchToProps = {
  addItemToCart,
};
// when connect with backend
//export default connect(mapStateToProps ,mapDispatchToProps)(ProductDetail);
export default connect(null, mapDispatchToProps)(ProductDetail);

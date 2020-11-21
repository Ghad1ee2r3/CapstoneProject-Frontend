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

import { addItemToCart, fetchProduct } from "../../redux/actions";

const ProductDetail = ({
  route,
  navigation,
  addItemToCart,
  cart,
  product,
  getProduct,
}) => {
  let items = cart.items;
  
  const { productBarcode } = route.params;
  const [counter, setCounter] = useState(1);
  const { storeBarcode } = route.params.storeBarcode;

  // const x = storeBarcode.storeBarcode
  getProduct(productBarcode, storeBarcode);
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  console.log("----------product----------");
  console.log(product);
  console.log("--------------------");

  // let products = [
  //   {
  //     image:
  //       "https://cdn.discordapp.com/attachments/772347432763523097/775650698125377546/h4-page-bg-img.jpg",
  //     name: "p1",
  //     price: "50",
  //     description: "description product",
  //     barcode: barcode,
  //   },
  // ];

  //get product Which has the same entrance barcode
  // const product = products.find((item) => item.barcode === productBarcode);
  const [quantity, setQuantity] = useState(1);

  const [item, setItem] = useState({
    product: product,
    quantity: 0,
  });

  const handlePress = () => {
    // in case add more than 5 item in first time
    if (counter < 5 && quantity < 5) {
      const newItem = { ...item, quantity: +quantity };
      addItemToCart(newItem);
      setCounter(counter + parseInt(quantity));
      console.log("---------------qyt-----------");
      console.log(quantity);
      console.log("---------------counter-----------");
      console.log(counter);
    } else {
      alert(`You can not add more than 5 item !`);
    }
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

const mapStateToProps = ({ cart, product }) => ({
  product,
  cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (productBarcode, storeBarcode) =>
      dispatch(fetchProduct(productBarcode, storeBarcode)),
    addItemToCart,
  };
};

// const mapDispatchToProps = {
//   addItemToCart,
// };
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

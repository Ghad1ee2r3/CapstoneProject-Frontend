import React, { useEffect, useState } from "react";
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
  product,
  cart,
  getProduct,
}) => {
  const productBarcode = route.params.productBarcode;
  const storeBarcode = route.params.storeBarcode;
  const [counter, setCounter] = useState(0);
  let listOfQuantityItems = cart.items.map((item) => +item.quantity);

  const totalNumberOfItems = listOfQuantityItems.reduce((a, b) => a + b, 0);

  useEffect(() => {
    getProduct(productBarcode, storeBarcode);
  }, []);

  const [quantity, setQuantity] = useState(1);

  const [item, setItem] = useState({
    product: product,
    quantity: 0,
    storeBarcode: storeBarcode,
  });

  const handlePress = () => {
    // in case add more than 5 item in first time
    if (counter < 5 && quantity < 5 && totalNumberOfItems < 5) {
      const newItem = { ...item, quantity: +quantity, product: product };
      addItemToCart(newItem);
      setItem(newItem);
      setCounter(counter + parseInt(quantity));
      alert(`Product added successfully `);
      navigation.replace("ScanProduct", {
        storeBarcode: storeBarcode,
      })
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
            value={`${quantity}`}
          />
          <Button onPress={() => handlePress()}>
            <Text>Add to cart</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = ({ product, cart }) => ({
  product,
  cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (productBarcode, storeBarcode) =>
      dispatch(fetchProduct(productBarcode, storeBarcode)),
    addItemToCart: (item) => dispatch(addItemToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

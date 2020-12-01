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
                  }} style={styles.image1}
                />

                <Text style={styles.name}>{product?.name}</Text>
                <Text note style={styles.price}>
                  {product?.price} SAR
                </Text>
                <Text note style={styles.des}>
                  {product?.description}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <View>
          <Input
            border
            keyboardType="numeric"
            placeholder="1"
            onChangeText={setQuantity}
            value={quantity}
            note
            style={styles.qty}

          />
          <Button style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.add}>Add to cart</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  image1: {
    height: 400,
    width: 370,
    flex: 1,

    borderRadius: 11,
    opacity: 0.79,
    borderWidth: 2,
    borderColor: "rgba(219,215,215,1)",
  },
  name: {
    color: "rgba(31,178,204,1)",
    fontSize: 30,
    marginLeft: 130,
  },
  price: {
    color: "rgba(31,178,204,1)",
    fontSize: 16,
    marginLeft: 140,
  },
  des: {
    fontSize: 16,
    marginLeft: 70,
  },
  rect: {
    flex: 1,
  },
  rect_imageStyle: {},
  logo: {
    width: 102,
    height: 300,
    alignSelf: "center",
  },
  button: {
    height: 59,
    width: 300,
    backgroundColor: "rgba(31,178,204,1)",

    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    flex: 1,
    marginLeft: 65,
    marginTop: -55,
  },
  add: {
    marginLeft: 80,
  },
  qty: {
    width: 30,
    color: "rgba(31,178,204,1)",
    marginTop: 60,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "rgba(219,215,215,1)",
  },
});

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

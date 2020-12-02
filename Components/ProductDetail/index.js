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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 2, padding: 20 }}>
        <Image
          source={{
            uri: product?.image,
          }}
          style={{ resizeMode: "contain", flex: 1, }}
        />
      </View>
      <View style={{
        flex: 1, flexDirection: "row", backgroundColor: "#e4e8f0",
        borderTopRightRadius: 50, borderTopLeftRadius: 50
      }}>
        <View style={{ flex: 2, paddingLeft: 25 }}>
          <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>{product?.name}</Text>
          </View>
          <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: "300" }}>{product?.description}</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
          <Text style={{ textAlign: 'center', fontWeight: "300" }}>Price</Text>
          <Text style={{ textAlign: 'center', fontWeight: "700" }}>{product?.price} SAR</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#e4e8f0" }}>
        <View style={{
          flex: 1, flexDirection: "row",
          marginVertical: 15,
          backgroundColor: "white", marginHorizontal: 20,
          borderRadius: 150, borderColor: "#33333350", borderWidth: 0.5
        }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>-</Text>
          </View>
          <View style={{ flex: 4 }}>
            <Input
              border
              keyboardType="numeric"
              placeholder="1"
              onChangeText={setQuantity}
              value={`${quantity}`}
              style={{ textAlign: "center" }}
            />
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>+</Text>
          </View>
        </View>
        <View style={{ flex: 1, marginHorizontal: 20, }}>
          <Button full rounded success onPress={() => handlePress()} >
            <Text>Add to cart</Text>
          </Button>
        </View>
      </View>
    </View>
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

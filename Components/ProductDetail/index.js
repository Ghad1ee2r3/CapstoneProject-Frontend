import React from "react";
import { connect } from "react-redux";
import { List, Content, Thumbnail, Image } from "native-base";
import { ImageBackground, View } from "react-native";

// Style
import styles from "./styles";

const ProductDetail = ({ navigation, products, addItemToCart }) => {
  // barcodeScan=""
  // get product Which has the same entrance barcode
  const product = products.find((item) => item.barcode === barcodeScan);
  const [qty, setQty] = useState(1);

  const [item, setItem] = useState({
    product: product,
    qty: 0,
  });

  const handlePress = () => {
    const newItem = { ...item, qty: +qty };
    setItem(newItem);
    addItemToCart(newItem);
  };

  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Left>
              <Body>
                <Image
                  source={{
                    uri: product.image,
                  }}
                  style={{ height: 400, width: 400, flex: 1 }}
                />

                <Text>{product.name}</Text>
                <Text note>Price:{product.price} SAR</Text>
                <Text note>Description :{product.description}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <View>
          <Input keyboardType="numeric" onChangeText={setQty} value={qty} />
          <Button full onPress={() => handlePress()}>
            <Text>Add to cart</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});
const mapDispatchToProps = {
  addItemToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

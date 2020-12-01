import React from "react";
import {
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Button,
  Body,
  ListItem,
} from "native-base";

const ProductNotfound = ({ route, navigation }) => {
  const { storeBarcode } = route.params;
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>product not found , please try scan other product </Text>
              <Button
                onPress={() =>
                  navigation.navigate("ScanProduct", {
                    storeBarcode: storeBarcode,
                  })
                }
              >
                <Text>Scan again</Text>
              </Button>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </Content>
  );
};

export default ProductNotfound;

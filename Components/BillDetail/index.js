// import React from "react";
// import {
//   List,
//   Text,
//   Left,
//   Right,
//   Body,
//   Content,
//   Card,
//   CardItem,
//   Container,
//   Thumbnail,
// } from "native-base";
// import { ImageBackground, View } from "react-native";

// import { Image, StyleSheet } from "react-native";

// const BillDetail = ({ route }) => {
//   const { bill } = route.params;
//   let totaltax = bill.total * 0.15;
//   totaltax = totaltax + parseInt(bill.total);

//   const orderItems = bill.items.map((item) => (
//     <>
//       <Card transparent style={{ flex: 0 }}>
//         <CardItem header>
//           <Left>
//             <Thumbnail source={{ uri: item.image }} />
//             <Body>
//               <Text>{item.name}</Text>
//               <Text note>Total:{item.price} SAR</Text>
//             </Body>
//           </Left>
//         </CardItem>
//       </Card>
//     </>
//   ));

//   return (
//     <Content>
//       <Card transparent style={{ flex: 0 }}>
//         <CardItem header>
//           <Left>
//             <Body>
//               <Text
//                 style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
//               >
//                 bill ID:{bill.id}
//               </Text>

//               <Text>Date: {bill.created_date}</Text>

//               <List>{orderItems}</List>
//               <CardItem>
//                 <Body>
//                   <Text
//                     style={{
//                       color: "black",
//                       fontSize: 20,
//                       fontWeight: "bold",
//                     }}
//                   >
//                     summury
//                   </Text>
//                   <Text footer>Total: {bill.total}</Text>
//                   <Text footer>tax: 15%</Text>
//                   <Text footer>Total after tax: {totaltax}</Text>
//                 </Body>
//               </CardItem>
//             </Body>
//           </Left>
//         </CardItem>
//       </Card>
//     </Content>
//   );
// };

// export default orderItems;

import React, { useEffect, useState } from "react";
import { WebView } from 'react-native-webview';

import {
    View,
    Text,
} from "native-base";

import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchPaymentLink } from "../../redux/actions";

const Payment = ({ getPaymentLink, route, bills, paymentLink }) => {

    // const orderNumber = route.params.orderNumber;
    const orderNumber = bills[(bills.length) - 1].number
    const [link, setLink] = useState('')
    useEffect(() => {
        getPaymentLink(orderNumber)
    }, [])
    console.log('---------now we are here');
    console.log(paymentLink.url);
    console.log('---------there should be alink');

    return (
        <WebView source={{ uri: `${paymentLink.url}` }} style={{ marginTop: 0 }} />
    );
}

const mapStateToProps = ({ paymentLink, bills }) => ({
    paymentLink, bills
});

const mapDispatchToProps = (dispatch) => {
    return {
        getPaymentLink: (orderNumber) => dispatch(fetchPaymentLink(orderNumber)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Payment);
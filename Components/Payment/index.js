import React, { useEffect, useState } from "react";
import { WebView } from 'react-native-webview';

import {
    View,
    Text,
} from "native-base";

import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchPaymentLink } from "../../redux/actions";

const Payment = ({ navigation, getPaymentLink, route, bills, paymentLink }) => {

    // const orderNumber = route.params.orderNumber;
    const orderNumber = bills[(bills.length) - 1].number
    const [link, setLink] = useState('')

    useEffect(() => {
        setLink(getPaymentLink(orderNumber))
    }, [])
    const handleWebViewNavigationStateChange = (newNavState) => {
        let url = newNavState.url;
        console.log(url);
        if (!url) return;

        if (url.includes('thankyou')) {
            webref.stopLoading();
            console.log("------------------");
            console.log("I STOPED!");
            console.log("------------------");
            navigation.navigate("Profile")
            // maybe close this view?
        }
    }


    return (
        <WebView source={{ uri: `${paymentLink.url}` }} style={{ marginTop: 0 }}
            ref={r => (webref = r)}
            onNavigationStateChange={handleWebViewNavigationStateChange.bind(this)}
        />
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
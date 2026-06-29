import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../BackButton/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentMethodCard from "../PaymentMethodCard/PaymentMethodCard";
import PaymentList from "../PaymentList/PaymentList";

const PaymentScreen = () => {
  return (
    <View style={{ paddingTop: vs(50), paddingHorizontal: s(16) }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(37),
        }}
      >
        <BackButton />
        <Text style={{ color: "#181C2E", fontSize: s(17), marginStart: s(12) }}>
          Payment
        </Text>
      </View>
      <PaymentList />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../BackButton/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentMethodCard from "../PaymentMethodCard/PaymentMethodCard";
import PaymentList from "../PaymentList/PaymentList";
import BankCardBox from "../BankCardBox/BankCardBox";
import AddButton from "../AddButton/AddButton";

const PaymentScreen = () => {
  return (
    <View style={{ paddingTop: vs(50) }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(37),
          paddingHorizontal: s(16),
        }}
      >
        <BackButton />
        <Text style={{ color: "#181C2E", fontSize: s(17), marginStart: s(12) }}>
          Payment
        </Text>
      </View>
      <PaymentList />
      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
        <AddButton/>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});

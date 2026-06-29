import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  CashIcon,
  MasterCardIcon,
  VisaIcon,
  PayPalIcon,
} from "../../../../assets/icons";
import PaymentMethodCard from "../PaymentMethodCard/PaymentMethodCard";
import { s } from "react-native-size-matters";

const paymentMethods = [
  { label: "Cash", icon: <CashIcon /> },
  { label: "Visa", icon: <VisaIcon /> },
  { label: "MasterCard", icon: <MasterCardIcon /> },
  { label: "PayPal", icon: <PayPalIcon /> },
];


const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("Visa");
  return (
    <View>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PaymentMethodCard
            title={item.label}
            icon={item.icon}
            onPress={() => setSelectedMethod(item.label)}
            isSelected={selectedMethod === item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: s(15),
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});

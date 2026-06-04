import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "./components/TopTabs/TopTabs";

const HomeScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(16) }}>
      <Text
        style={{
          fontSize: s(20),
          fontWeight: "semibold",
          color: "#1D150F",
          marginBottom: vs(6),
        }}
      >
        Meditations
      </Text>
      <Text style={{ color: "#2C2016", fontSize: s(14), marginBottom: vs(16) }}>
        Lorem Ipsum is simply dummy text
      </Text>
      <TopTabs />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

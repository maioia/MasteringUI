import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";

const AddButton = () => {
  return (
    <TouchableOpacity
      style={{
        borderColor: "#F0F5FA",
        borderWidth: s(1),
        backgroundColor: "#fff",
        borderRadius: s(10),
        paddingVertical: s(22),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: s(20),
      }}
    >
      <Feather name="plus" size={24} color="#FF7622" />
      <Text style={{ color: "#FF7622", fontSize: s(14), fontWeight: 700 }}>
        ADD NEW
      </Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});

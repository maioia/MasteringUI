import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const GoldScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold Screen</Text>
      <Button
        title="Go to Purple Screen"
        onPress={() => navigation.navigate("PurpleScreen")}
      />
    </View>
  );
};

export default GoldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 30 },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./src/screens/IntroScreen";
import HomeScreenSun from "./src/screens/components/HomeScreenSun/HomeScreenSun";
import ContactScreen from "./src/screens/components/ContactScreen/ContactScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ContactScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sunImg: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

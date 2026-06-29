import { StyleSheet, Text, View } from "react-native";
import PaymentScreen from "./src/screens/components/PaymentScreen/PaymentScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <PaymentScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

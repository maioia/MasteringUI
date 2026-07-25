import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/Navigation/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

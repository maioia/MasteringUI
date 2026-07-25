import { createStackNavigator } from "@react-navigation/stack";
import TomatoScreen from "../navigationsScreens/TomatoScreen";
import GoldScreen from "../navigationsScreens/GoldScreen";
import PurpleScreen from "../navigationsScreens/PurpleScreen";
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="tomatoScreen"
    >
      <Stack.Screen name="GoldScreen" component={GoldScreen} />
      <Stack.Screen name="tomatoScreen" component={TomatoScreen} />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: "Purple" }}
        name="PurpleScreen"
        component={PurpleScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;

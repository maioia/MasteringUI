import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PurpleScreen from "../navigationsScreens/PurpleScreen";
import TomatoScreen from "../navigationsScreens/TomatoScreen";
import GoldScreen from "../navigationsScreens/GoldScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" }
      }}
    >
      <Tab.Screen
        options={{
          title: "tomato",
          tabBarIcon: ({color}) => <AntDesign name="home" size={18} color={color} />,
        }}
        name="TomatoScreen"
        component={TomatoScreen}
      />
      <Tab.Screen
        options={{
          title: "purple",
          tabBarIcon: ({color}) => (
            <AntDesign name="profile" size={18} color={color} />
          ),
        }}
        name="PurpleScreen"
        component={PurpleScreen}
      />
      <Tab.Screen
        options={{
          title: "gold",
          tabBarIcon: ({color}) => <Feather name="settings" size={18} color={color} />,
        }}
        name="GoldScreen"
        component={GoldScreen}
      />
    </Tab.Navigator>
  );
}

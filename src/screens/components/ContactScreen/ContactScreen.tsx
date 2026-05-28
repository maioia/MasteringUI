import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import BackButton from "../BackButton/BackButton";
import { s, vs } from "react-native-size-matters";
import SocialSection from "../SocialSection/SocialSection";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const ContactScreen = () => {
  return (
    <View style={{ paddingHorizontal: s(17), marginTop: vs(50) }}>
      <View style={styles.container}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.screenTitle}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection
          icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />}
          title="whatApp"
        />
        <SocialSection
          icon={<AntDesign name="x" size={24} color="#178AD9" />}
          title="X"
        />
        <SocialSection
          icon={<Ionicons name="logo-instagram" size={24} color="#178AD9" />}
          title="Instagram"
        />
        <SocialSection
          icon={<Fontisto name="snapchat" size={24} color="#178AD9" />}
          title="Snapchat"
        />
        <SocialSection
          icon={<FontAwesome5 name="tiktok" size={24} color="#178AD9" />}
          title="Tiktok"
        />
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },
  socialTitle: { fontSize: s(16), fontWeight: "bold" },
  screenTitle: {
    fontWeight: 600,
    fontSize: s(30),
    paddingBottom: s(22),
    paddingTop: vs(20),
    marginTop: vs(20),
    marginStart: 19,
  },
});

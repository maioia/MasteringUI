import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://img.magnific.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740&q=80",
        }}
        style={styles.avatarStyle}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatarStyle: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
  },
});

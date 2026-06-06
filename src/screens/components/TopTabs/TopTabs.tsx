import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const tabsArr = ["Live", "Recorded"];
const ActiveBG = "#75563B";
const ActiveText = "#fff";
const InactiveText = "#2C2016";
const TopTabs = () => {
  const [activeTabs, setActiveTabs] = useState("Live");
  return (
    <View style={styles.container}>
      {tabsArr.map((tabName) => {
        const isActive = activeTabs === tabName;
        return (
          <TouchableOpacity
            style={[
              styles.tabButtons,
              isActive && { backgroundColor: ActiveBG },
            ]}
            onPress={() => {
              setActiveTabs(tabName);
            }}
            key={tabName}
          >
            <Text style={isActive ? styles.ActiveText : styles.InactiveText}>
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    height: vs(48),
    flexDirection: "row",
    alignItems: "center",
    padding: s(4),
  },
  tabButtons: {
    height: vs(32),
    flex: 1,
    borderRadius: s(8),
    justifyContent: "center",
    alignItems: "center",
  },
  ActiveText: {
    color: "#fff",
    fontSize: s(14),
    fontWeight: "semibold",
  },
  InactiveText: { fontSize: s(14), color: "#2C2016" },
});

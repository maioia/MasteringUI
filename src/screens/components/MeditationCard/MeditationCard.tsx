import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import VideoIcon from "../../../../assets/icons";

const phoneWidth = Dimensions.get("window").width;
const cardWidth = (phoneWidth - s(16) * 3) / 2;

interface MeditationCardProps {
  imageURL: string;
  title: string;
  date: string;
}

const MeditationCard: FC<MeditationCardProps> = ({ imageURL, title, date }) => {
  return (
    <ImageBackground
      source={{
        uri: imageURL,
      }}
      style={styles.imgContainer}
      imageStyle={styles.imag}
    >
      <View style={styles.overlay}>
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>Live</Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <VideoIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imgContainer: {
    height: s(161),
    width: cardWidth,
    borderRadius: s(12),
    overflow: "hidden",
  },
  imag: { width: "100%", height: "100%", resizeMode: "cover", opacity: 0.7 },
  cardContent: { position: "absolute", left: s(10), bottom: s(10) },
  title: { color: "#fff", fontSize: s(12), fontWeight: "semibold" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  dateText: { fontSize: s(12), color: "#fff", marginStart: s(7) },
  liveBadge: {
    backgroundColor: "#E41111",
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    position: "absolute",
    top: vs(6),
    right: s(10),
    alignItems: "center",
    justifyContent: "center",
  },
  liveText: {
    fontWeight: "semibold",
    color: "#fff",
    fontSize: s(12),
  },
});

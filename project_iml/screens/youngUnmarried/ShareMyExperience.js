import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const FeedBack = () => {
  return (
    <View style={styles.feedBackView}>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        // source={require("../assets/group-51.png")}
      />
      <Text style={styles.timeText}>19:02</Text>
      <View style={styles.rectangleView} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        // source={require("../assets/ellipse-2037.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        // source={require("../assets/ellipse-2037.png")}
      />
      <View style={styles.rectangleView1} />
      <Text style={styles.chickenHellText}>Write Review......</Text>
      <Text style={styles.order564963}>@DeborahC</Text>
      <Text style={styles.yourReceivedTheOrder}>
        Rate your experience with me
      </Text>
      <View style={styles.applyButtonView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.buttonText}>submit</Text>
      </View>
      <View style={styles.unsplashpUhxoSapPFAView} />
      <View style={styles.component2View}>
        <Image
          style={styles.ellipseIcon2}
          resizeMode="cover"
        //   source={require("../assets/ellipse-109.png")}
        />
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
        //   source={require("../assets/subtract1.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    position: "absolute",
    top: 17,
    right: 35.4,
    width: 73.6,
    height: 13,
  },
  timeText: {
    position: "absolute",
    top: 15,
    left: 35,
    fontSize: 18,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    bottom: 16,
    left: 139,
    borderRadius: 50,
    backgroundColor: "#000",
    width: 151,
    height: 5,
  },
  ellipseIcon: {
    position: "absolute",
    top: 440,
    left: 334,
    width: 16,
    height: 16,
    display: "none",
  },
  ellipseIcon1: {
    position: "absolute",
    top: 341,
    left: 334,
    width: 16,
    height: 16,
    display: "none",
  },
  rectangleView1: {
    position: "absolute",
    top: 327,
    left: 35,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 358,
    height: 179,
  },
  chickenHellText: {
    position: "absolute",
    top: 351,
    right: 262,
    fontSize: 14,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: "Red Hat Display",
    color: "rgba(26, 7, 0, 0.4)",
    textAlign: "left",
  },
  order564963: {
    position: "absolute",
    top: 216,
    right: 289,
    fontSize: 18,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: "Red Hat Display",
    color: "rgba(26, 7, 0, 0.4)",
    textAlign: "left",
  },
  yourReceivedTheOrder: {
    position: "absolute",
    top: 177,
    right: 30,
    fontSize: 25,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: "Red Hat Display",
    color: "#1a0700",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#db01ff",
  },
  buttonText: {
    position: "absolute",
    top: "34.85%",
    left: "41.34%",
    fontSize: 16,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: "Red Hat Display",
    color: "#fff",
    textAlign: "center",
  },
  applyButtonView: {
    position: "absolute",
    height: "7.13%",
    width: "83.64%",
    top: "66.85%",
    right: "8.18%",
    bottom: "26.03%",
    left: "8.18%",
  },
  unsplashpUhxoSapPFAView: {
    position: "absolute",
    height: "5.4%",
    width: "11.68%",
    top: "7.02%",
    right: "8.18%",
    bottom: "87.58%",
    left: "80.14%",
    borderRadius: 15,
    backgroundColor: "#fbe0ff",
  },
  ellipseIcon2: {
    position: "absolute",
    height: "52.35%",
    width: "50.21%",
    top: "0.33%",
    right: "0%",
    bottom: "47.32%",
    left: "49.79%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  subtractIcon: {
    position: "relative",
    width: 21.78,
    height: 24.83,
  },
  text: {
    position: "absolute",
    top: "4.36%",
    left: "69.1%",
    fontSize: 7.5,
    fontWeight: "700",
    fontFamily: "Red Hat Display",
    color: "#fff",
    textAlign: "left",
  },
  component2View: {
    position: "absolute",
    top: 77.92,
    left: 357.11,
    width: 25.89,
    height: 24.83,
  },
  feedBackView: {
    position: "relative",
    backgroundColor: "#f5f5f5",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default FeedBack;

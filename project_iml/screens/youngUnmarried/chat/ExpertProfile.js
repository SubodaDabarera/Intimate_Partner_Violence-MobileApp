import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, ScrollView, TouchableOpacity } from "react-native"

export default function ExpertProfile({route, navigation}) {

    const {expertId} = route.params;
    console.log(expertId)

  return (

    <View style={styles.Profile}>
        <ScrollView>
      <View style={styles.Group921}>
        <View style={styles.Group34875}>
          <View style={styles.Ellipse195} />
          <View style={styles.Group5131}>
            <Image
              style={styles.Image1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e710ddbrgkd-27%3A215?alt=media&token=81f63d75-c86e-4d7e-9efa-45a0e000094b",
              }}
            />
            <Text style={styles.Txt428}>Deborah Carr</Text>
            <Text style={styles.Txt696}>@DeborahC</Text>
            <View style = {{
                alignItems: 'center'
            }}>
            <Text style={styles.Txt201}>Qualifications</Text>
            <Text style={styles.Txt468}>Advanced dip in Physio</Text>
            <Text style={styles.Txt335}>Specialist in sexula well being</Text>
            </View>
            <View style = {{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text style={styles.Txt9107}>Age</Text>
            <Text style={styles.Txt183}>34</Text>
            </View>
            <Text style={styles.Txt408}>Occupation</Text>
            <Text style={styles.Txt0108}>Surgeon</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('RateYourExperience')}
            >
            <View style={styles.ApplyButton}>
              <Text style={styles.Txt1061}>Add review</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <Image
        style={styles.BottomNavigation}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e710ddbrgkd-13%3A630?alt=media&token=fcbdd771-6786-4419-b5e5-00c55e917e1d",
        }}
      />
      <Image
        style={styles.OutlineUser1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e710ddbrgkd-28%3A176?alt=media&token=509b8565-9c14-4ede-bcc9-e8e8d356ca9b",
        }}
      />
      <Image
        style={styles.CurvedHeart}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e710ddbrgkd-28%3A178?alt=media&token=9519120b-2448-4868-9630-9dd3820648e1",
        }}
      /> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "flex-start",
    position: "relative",
    // paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(245,245,245,1)",
    width: '100%',
    height: '100%',
  },
  Group921: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Group513: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 46,
  },
  Txt535: {
    fontSize: 18,
    fontFamily: "SF Pro Display, sans-serif",
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: -0.36,
    color: "rgba(26,7,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 237,
  },
  Group5: {
    width: 73.6,
    height: 13,
  },

  Group34875: {
    position: "relative",
    width: 299,
    height: 708,
  },
  Ellipse195: {
    position: "absolute",
    top: 90,
    left: 166,
    backgroundColor: "rgba(40,202,0,1)",
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  Group5131: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 0,
    none: "0px",
    width: 299,
    height: 708,
    marginTop: 20
  },
  Image1: {
    width: 106,
    height: 112,
    marginBottom: 14,
  },
  Txt428: {
    fontSize: 25,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "700",
    letterSpacing: 0.5,
    color: "rgba(26,7,0,1)",
    marginBottom: 1,
  },
  Txt696: {
    fontSize: 16,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "500",
    letterSpacing: 0.32,
    color: "rgba(157,150,147,1)",
    marginBottom: 50,
  },
  Txt201: {
    fontSize: 19,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.38,
    color: "rgba(26,7,0,1)",
    // width: 128,
    // height: 20,
    marginBottom: 8,
  },
  Txt468: {
    fontSize: 14,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.28,
    color: "rgba(159,152,150,1)",
    marginBottom: 3,
  },
  Txt335: {
    fontSize: 14,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.28,
    color: "rgba(159,152,150,1)",
    marginBottom: 40,
  },
  Txt9107: {
    fontSize: 19,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.38,
    color: "rgba(26,7,0,1)",
    // width: 53,
    // height: 25,
    marginBottom: 4,
  },
  Txt183: {
    fontSize: 14,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.28,
    color: "rgba(159,152,150,1)",
    marginBottom: 30,
  },
  Txt408: {
    fontSize: 19,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.38,
    color: "rgba(26,7,0,1)",
    // width: 113,
    // height: 27,
    marginBottom: 1,
  },
  Txt0108: {
    fontSize: 14,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.28,
    color: "rgba(159,152,150,1)",
    marginBottom: 80,
  },
  ApplyButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingLeft: 96.91,
    paddingRight: 96.91,
    borderRadius: 15,
    backgroundColor: "rgba(219,1,255,1)",
  },
  Txt1061: {
    fontSize: 14,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.32,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },

  BottomNavigation: {
    position: "absolute",
    top: 799,
    left: 0,
    width: 428,
    height: 127,
  },
  OutlineUser1: {
    position: "absolute",
    top: "91.36%",
    bottom: "5.18%",
    left: "84.11%",
    right: "8.41%",
    width: 32,
    height: 32,
  },
  CurvedHeart: {
    position: "absolute",
    top: "91.36%",
    bottom: "5.18%",
    left: "46.26%",
    right: "46.26%",
    width: 32,
    height: 32,
  },
})

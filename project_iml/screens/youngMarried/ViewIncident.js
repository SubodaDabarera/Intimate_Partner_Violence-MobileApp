import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function ViewIncident() {
  return (
    <View style={styles.ViewIncident}>
      <View style={styles.Group584}>
        <View style={styles.Group932}>
          <Text style={styles.Txt343}>19:02</Text>
          <Image
            style={styles.Group5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kz2g34bdwzo-22%3A1506?alt=media&token=7c31c11a-4f8b-4dcf-804b-d157d8c7d4d4",
            }}
          />
        </View>
        <View style={styles.PageHeader}>
          <Text style={styles.Txt458}>Back</Text>
          <Text style={styles.Txt977}>View Incident</Text>
          <Text style={styles.Txt558}>Share</Text>
        </View>
        <Text style={styles.Txt880}>Details and proof of the incident</Text>
        <View style={styles.Actions}>
          <View style={styles.ButtonPrimary}>
            <Text style={styles.Txt511}>EDIT</Text>
          </View>
          <Text style={styles.Txt899}>Delete</Text>
        </View>
        <Image
          style={styles.Group34876}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kz2g34bdwzo-22%3A1481?alt=media&token=580233aa-240a-45bd-99ec-bce2ffebd942",
          }}
        />
      </View>
      <View style={styles.Group34901}>
        <View style={styles.Group34900}>
          <View style={styles.ContentContentBlockSmall}>
            <Text style={styles.Txt080}>Proof</Text>
          </View>
          <Image
            style={styles.Group34899}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/kz2g34bdwzo-22%3A1498?alt=media&token=b2b0c82a-3ea5-4927-bca6-71cc93ec72f5",
            }}
          />
        </View>
        <View style={styles.ContentContentBlockSmall1}>
          <Text style={styles.Txt964}>Title</Text>
          <Text style={styles.Txt388}>Lorem ipsum dolor sit amet. </Text>
        </View>
        <View style={styles.Group34898}>
          <View style={styles.ContentContentBlockSmall2}>
            <Text style={styles.Txt964}>Date</Text>
            <Text style={styles.Txt947}>12th May 2016</Text>
          </View>
          <View style={styles.ContentContentBlockSmall3}>
            <Text style={styles.Txt964}>Time</Text>
            <Text style={styles.Txt947}>07.20 PM</Text>
          </View>
        </View>
        <View style={styles.ContentContentBlockSmall4}>
          <Text style={styles.Txt593}>What happened</Text>
          <Text style={styles.Txt467}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
            pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum
          </Text>
        </View>
        <View style={styles.ContentContentBlockSmall5}>
          <Text style={styles.Txt964}>Where it took place</Text>
          <Text style={styles.Txt388}>Lorem ipsum dolor sit amet. </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ViewIncident: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 4,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 433,
    height: 926,
  },
  Group584: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Group932: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 36,
  },
  Txt343: {
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

  PageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 39,
  },
  Txt458: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(219,1,255,1)",
    marginRight: 35,
  },
  Txt977: {
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 25,
  },
  Txt558: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(219,1,255,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt880: {
    fontSize: 20,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.4,
    color: "rgba(26,7,0,1)",
    width: 366,
    marginBottom: 541,
  },
  Actions: {
    display: "flex",
    flexDirection: "column",
  },
  ButtonPrimary: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 31,
    paddingRight: 31,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "rgba(219,1,255,1)",
    width: 304,
  },
  Txt511: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt899: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(219,1,255,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 312,
  },

  Group34876: {
    width: 428,
    height: 127,
  },

  Group34901: {
    position: "absolute",
    top: 203,
    left: 7,
    paddingTop: 0,
    paddingBottom: 0.29,
    paddingLeft: 0,
    paddingRight: 0,
    width: 399,
    height: 475.29,
  },
  Group34900: {
    position: "relative",
    paddingTop: 0,
    paddingBottom: 0.29,
    paddingLeft: 0,
    paddingRight: 0,
    width: 399,
    height: 87.29,
  },
  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 66.29,
    paddingLeft: 65,
    paddingRight: 289,
  },
  Txt080: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
  },

  Group34899: {
    position: "absolute",
    top: 28,
    left: 58,
    width: 201,
    height: 40.81,
  },

  ContentContentBlockSmall1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 0,
    paddingBottom: 41.29,
    paddingLeft: 65,
    paddingRight: 6,
    width: 399,
    height: 87.29,
  },
  Txt964: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 7,
  },
  Txt388: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 326,
  },

  Group34898: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 85,
    left: 0,
    paddingTop: 0,
    paddingBottom: 0.29,
    paddingLeft: 0,
    paddingRight: 0,
    width: 399,
    height: 87.29,
  },
  ContentContentBlockSmall2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 41.29,
    paddingLeft: 65,
    paddingRight: 6,
    marginRight: 3,
  },
  Txt964: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 7,
  },
  Txt947: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 125,
  },

  ContentContentBlockSmall3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 41.29,
    paddingLeft: 65,
    paddingRight: 6,
  },
  Txt964: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 7,
  },
  Txt947: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 125,
  },

  ContentContentBlockSmall4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    top: 252,
    left: 0,
    right: 0,
    width: 399,
    height: 87.29,
  },
  Txt593: {
    position: "absolute",
    top: 0,
    left: 66,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 123,
    height: 19,
  },
  Txt467: {
    position: "absolute",
    top: 27,
    left: 66,
    right: 8,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 326,
    height: 85,
  },

  ContentContentBlockSmall5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    paddingTop: 0,
    paddingBottom: 41.29,
    paddingLeft: 65,
    paddingRight: 6,
    width: 399,
    height: 87.29,
  },
  Txt964: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 7,
  },
  Txt388: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 326,
  },
})

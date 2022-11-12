import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, ScrollView, TouchableOpacity } from "react-native"
import FormScroll from "./FormScroll"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function DocumentIncident({navigation}) {
  return (
    <ScrollView>
    <View style={styles.DocumentIncident}>
      <View style={styles.Group716}>
        <View style={styles.PageHeader}>          
          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                backgroundColor: '#FBE0FF',
                padding: 10,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign
                name="arrowleft"
                style={{
                  fontSize: 20,
                  color: '#DB01FF',
                }}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.Txt901}>Document Incident</Text>
          <TouchableOpacity
          // onPress={() => navigation.goBack()}
          >
            <View
              style={{
                backgroundColor: '#FBE0FF',
                padding: 10,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather
                name="bell"
                style={{
                  fontSize: 20,
                  color: '#DB01FF',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        </View>
        <Text style={styles.Txt554}>
          Enter details of what happened for evidence
        </Text>
      </View>
      <FormScroll/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  DocumentIncident: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 4,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 433,
    // height: 926,
  },
  Group716: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Group884: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 29,
  },
  Txt4510: {
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


  PageHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 34,
    paddingRight: 30,
    marginBottom: 33,
  },
  Txt901: {
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt554: {
    fontSize: 20,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.4,
    color: "rgba(26,7,0,1)",
    width: 366,
    marginBottom: 68,
    paddingLeft: 20,
  },
  Group34918: {
    width: 16,
    height: 471,
  },

  FormScroll: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    top: 230,
    left: 29,
    width: 344,
    height: 930,
  },
  Group34916: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 154,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group34915: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 35,
  },
  Group34894: {
    display: "flex: 1",
    flexDirection: "column",
    marginBottom: 34,
  },
  Caption: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 5,
    marginBottom: 6,
  },
  Txt137: {
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    lineHeight: 21,
    color: "rgba(0,0,0,0.87)",
    width: 329,
    height: 17,
  },

  InputText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 15,
    paddingRight: 295,
    borderRadius: 8,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qoczefbqdss-I22%3A1104%3B144%3A620?alt=media&token=48b65e0c-bf9a-4492-ba6c-762759209585) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
  Txt421: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(189,189,189,1)",
  },

  Group34894: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 34,
  },
  Caption1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 5,
    marginBottom: 10,
  },
  Txt137: {
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    lineHeight: 21,
    color: "rgba(0,0,0,0.87)",
    width: 329,
    height: 17,
  },

  Group34891: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 303,
    paddingRight: 14,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qoczefbqdss-I22%3A1099%3B144%3A620?alt=media&token=1d40e7a8-79aa-4657-addc-ac253340f836) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 343,
    height: 50,
  },
  Calendar_duotone: {
    width: 24,
    height: 24,
  },

  Group34896: {
    marginBottom: 34,
    width: 343,
    height: 72,
  },
  Expand_down: {
    width: 30,
    height: 30,
  },
  Group5510: {
    display: "flex",
    flexDirection: "column",
  },
  Txt588: {
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    lineHeight: 21,
    color: "rgba(0,0,0,0.87)",
    width: 329,
    height: 17,
    marginBottom: 5,
  },
  InputText1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 15,
    paddingRight: 291,
    borderRadius: 8,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qoczefbqdss-I22%3A1110%3B144%3A620?alt=media&token=e2eb19b8-c341-496a-ab19-2c362c575f8f) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
  Txt421: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(189,189,189,1)",
  },

  Group5510: {
    display: "flex",
    flexDirection: "column",
  },
  Caption1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 5,
    marginBottom: 10,
  },
  Txt137: {
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    lineHeight: 21,
    color: "rgba(0,0,0,0.87)",
    width: 329,
    height: 17,
  },

  InputText2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 15,
    paddingRight: 277,
    borderRadius: 8,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qoczefbqdss-I22%3A1108%3B144%3A620?alt=media&token=5d945cb5-fe1b-4cc3-8829-a6325da00354) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
  Txt421: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(189,189,189,1)",
  },

  Group34894: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 34,
  },
  Caption: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 5,
    marginBottom: 6,
  },
  Txt137: {
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    lineHeight: 21,
    color: "rgba(0,0,0,0.87)",
    width: 329,
    height: 17,
  },

  InputText3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 88,
    paddingBottom: 86,
    paddingLeft: 15,
    paddingRight: 237,
    borderRadius: 8,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qoczefbqdss-I22%3A1119%3B144%3A620?alt=media&token=ed95ec57-959c-4382-9d6f-3416abb18669) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
  Txt421: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(189,189,189,1)",
  },

  Group34899: {
    paddingTop: 0,
    paddingBottom: 75,
    paddingLeft: 0,
    paddingRight: 0,
    width: 328,
    height: 91,
  },
  Caption2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 5,
  },
  Txt137: {
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    lineHeight: 21,
    color: "rgba(0,0,0,0.87)",
    width: 329,
    height: 17,
  },

  Group34876: {
    position: "absolute",
    top: 799,
    left: 0,
    width: 428,
    height: 127,
  },

  Actions: {
    position: "relative",
    width: 311,
    height: 86,
  },
  Txt222: {
    position: "absolute",
    top: 386,
    left: 384,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(219,1,255,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 312,
    height: 19,
  },
  ButtonPrimary: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 453,
    left: 384,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 31,
    paddingRight: 31,
    borderRadius: 100,
    backgroundColor: "rgba(219,1,255,1)",
    width: 304,
    height: 51,
  },
  Txt574: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

})

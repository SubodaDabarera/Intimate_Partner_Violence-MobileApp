import React from "react"
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Image, Text, View, ImageBackground, ScrollView, TouchableOpacity } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function ViewIncident({route}) {

  const {incidentData} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.ViewIncident}>
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
          <Text style={styles.Txt1057}>View Incident</Text>
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
      <Text style={styles.Txt914}>Details and proof of the incident</Text>
      {/* content start */}
      <ScrollView>
      <View style={{
              // flexDirection: 'column',              
              justifyContent: 'center',
              paddingLeft: 15,
              paddingTop: 20,
              alignItems: 'center',
              width: '100%',
            }}>
          <View style={styles.ContentContentBlockSmall}>
            <Text style={styles.Txt313}>Title</Text>
            <Text style={styles.Txt246}>{incidentData.title}</Text>
          </View>
          <View style={styles.Group34898}>
            <View style={styles.ContentContentBlockSmall2}>
              <Text style={styles.Txt313}>Date</Text>
              <Text style={styles.Txt697}>{incidentData.date}</Text>
            </View>
            <View style={styles.ContentContentBlockSmall3}>
              <Text style={styles.Txt313}>Time</Text>
              <Text style={styles.Txt697}>{incidentData.time}</Text>
            </View>
          </View>
          <View style={styles.ContentContentBlockSmall5}>
            <Text style={styles.Txt313}>Where it took place</Text>
            <Text style={styles.Txt246}>{incidentData.place}</Text>
          </View>
          <View style={styles.ContentContentBlockSmall4}>
            <Text style={styles.Txt785}>What happened</Text>
            <Text style={styles.Txt5104}>
            {incidentData.description}
            </Text>
          </View>
          <View style={styles.Group34900}>
            <View style={styles.ContentContentBlockSmall1}>
              <Text style={styles.Txt474}>Proof</Text>
            </View>
            <Image
              style={styles.Group34899}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mf0tx5tgqu-22%3A1498?alt=media&token=c7f9d20e-1c94-4af3-942e-058e951c39b8",
              }}
            />
          </View>        
        </View>
        {/* content end */}
         {/* <View style={styles.Actions}>
          <View style={styles.ButtonPrimary}>
            <Text style={styles.Txt557}>EDIT</Text>
          </View>
          <Text style={styles.Txt147}>Delete</Text>
        </View>   */}
        </ScrollView>
        
       
      
    </View>
  )
}

const styles = StyleSheet.create({
  ViewIncident: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 433,
    height: 926,
  },
  PageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 24,
    marginBottom: 5,
  },
  Txt1057: {
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt914: {
    fontSize: 20,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.4,
    color: "rgba(26,7,0,1)",
    width: 366,
    marginBottom: 5,
    paddingLeft: 20,
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
    marginBottom: 5,
    borderRadius: 100,
    backgroundColor: "rgba(219,1,255,1)",
    width: 304,
  },
  Txt557: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt147: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(219,1,255,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 312,
  },

  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    // position: "absolute",
    // top: 203,
    // left: 7,
    // right: 41,
    paddingTop: 0,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 6,
    width: 399,
    // height: 87.29,
  },
  Txt313: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 7,
  },
  Txt246: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 326,
  },

  Group34900: {
    // position: "absolute",
    // top: 591,
    // left: 7,
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 0.29,
    paddingLeft: 0,
    paddingRight: 0,
    width: 399,
    // height: 87.29,
  },
  ContentContentBlockSmall1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 20,
    paddingLeft: 0,
    // paddingRight: 289,
  },
  Txt474: {
    paddingRight: 5,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
  },

  Group34899: {
    // position: "absolute",
    // top: 28,
    // left: 58,
    width: 201,
    // height: 40.81,
  },

  Group34898: {
    display: "flex",
    flexDirection: "row",
    // position: "absolute",
    // top: 288,
    // left: 7,
    paddingTop: 0,
    paddingBottom: 0.29,
    paddingLeft: 0,
    paddingRight: 0,
    width: 399,
    // height: 87.29,
  },
  ContentContentBlockSmall2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 6,
    marginRight: 3,
  },
  Txt313: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 7,
  },
  Txt697: {
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
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 6,
  },
  Txt313: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 7,
  },
  Txt697: {
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
    // position: "absolute",
    // top: 455,
    // left: 7,
    // right: 41,
    width: 399,
    height: 87.29,
  },
  Txt785: {
    // position: "absolute",
    // top: 0,
    // left: 66,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 123,
    height: 19,
  },
  Txt5104: {
    // position: "absolute",
    // top: 27,
    // left: 66,
    // right: 8,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 326,
    height: 85,
    marginBottom: 20,
  },

  ContentContentBlockSmall5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // position: "absolute",
    // top: 373,
    // left: 7,
    // right: 41,
    paddingTop: 0,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 6,
    width: 399,
    height: 87.29,
  },
  Txt313: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 7,
  },
  Txt246: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 326,
  },
})

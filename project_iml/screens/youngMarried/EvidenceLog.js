import React, {useEffect, useState} from "react"
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Image, Text, View, ScrollView, ImageBackground, TouchableOpacity, TextInput } from "react-native"
import {viewAllEvidence, viewBlogsList} from '../../APIs/youngMarriedAPI';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';



const allEvidence = [
  {
    userId: '09309490-9476-4ba7-82eb-41ddef3dd88a',
    title: 'After work',
    date: '15/08/2022',
    time: '06.40 PM',
    place: 'On the way home',
    description: 'We had an argument after work that ended in a fight',    
    proof: [
      {
        imgs: ["img1", "img2"]
      }
    ],
  },
  {
    userId: '09309490-9476-2212-82eb-41ddef3dd88a',
    title: 'Argument at home',
    date: '23/06/2022',
    time: '10.50 PM',
    place: 'home',
    description: 'We had an argument about work',    
    proof: [
      {
        imgs: ["img3", "img4"]
      }
    ],
  },
  {
    userId: '09309490-9476-hj89-82eb-41ddef3dd88a',
    title: 'Fight outside of office',
    date: '02/09/2022',
    time: '07.20 PM',
    place: 'car park outside work',
    description: 'We had a physical fight outside work when he camme to pick me up',    
    proof: [
      {
        imgs: ["img5", "img6"]
      }
    ],
  },
  {
    userId: '09309490-12lp-4ba7-82eb-41ddef3dd88a',
    title: 'Argument',
    date: '13/04/2022',
    time: '09.30 PM',
    place: 'At home',
    description: 'We had an argument that ended in a fight',    
    proof: [
      {
        imgs: ["img7", "img8"]
      }
    ],
  },
  {
    userId: '09309490-9476-4ba7-30ml-41ddef3dd88a',
    title: 'Bruises from fight',
    date: '11/09/2022',
    time: '11.20 PM',
    place: 'At home',
    description: 'I have brisuises on my arm from last night\'s fight',    
    proof: [
      {
        imgs: ["img9", "img10"]
      }
    ],
  },
  {
    userId: '09309490-9476-4ba7-78yu-41ddef3dd88a',
    title: 'threats',
    date: '17/06/2022',
    time: '06.40 AM',
    place: 'On the way to work',
    description: 'He threatened me with physical abuse',    
    proof: [
      {
        imgs: ["img11", "img12"]
      }
    ],
  },
];



export default function EvidenceLog() {

  // const [evidence, setEvidence] = useState([]);
  const [evidence, setEvidence] = useState(allEvidence);

  const navigation = useNavigation();

  // useEffect(() => {
  //   async function viewEvidence() {
  //     await viewBlogsList(setEvidence).then(() => {
  //       console.log('Evidence Retrieved');
  //       console.log(evidence);
  //     });
  //   }
  //   viewEvidence();
  // }, []);

  return (
    <View style={styles.EvidenceLog}>
      <View style={styles.Group1074}>
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
            <Text style={styles.Txt591}>Evidence Log</Text>
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
        <Text style={styles.Txt147}>View list of incidents recorded</Text>
        
        {/* search - start */}

        <View style={styles.Component20}>
          <View style={styles.Group357}>
            {/* add search icon here ------------------------ */}
            <View
              style={{
                justifyContent: 'center',
                paddingRight: 6,
              }}>
              <AntDesign
                name="search1"
                style={{
                  fontSize: 22,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // padding: 20,
                }}
              />
            </View>
            <TextInput
              placeholder="Search ..."
              style={{            
                width: '100%',            
              }}

              //   onChangeText={setSearchQuery}
            />
          </View>
        </View>
        {/* search - end */}
        
        <ScrollView>
        <View style={styles.ContentBlocks}>        
        {evidence.map((incident, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('ViewIncident', {incidentData: incident})}>                             
                <View style={styles.Group34902}>          
                  <View style={styles.ContentContentBlockSmall}>
                    <View style={styles.Group2110}>              
                      <View style={styles.Group633}>
                      <View style={styles.Group411}>
                          <Text style={styles.Txt231}>{incident.title}</Text>
                          <Text style={styles.Txt217}>{incident.date}</Text>
                      </View>
                      <Text style={styles.Txt518}>
                          {incident.description}
                      </Text>
                    </View>
                </View>
                <View style={styles.DividerLine} />
              </View>
            </View>
          </TouchableOpacity>
            )
          })}
        </View>
        </ScrollView>   
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  EvidenceLog: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 433,
    height: 926,
  },
  Group1074: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

  Txt591: {
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Txt147: {
    fontSize: 20,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.4,
    color: "rgba(26,7,0,1)",
    width: 366,
    marginBottom: 15,
    paddingLeft: 20,
  },
  Group34921: {
    marginBottom: 37,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-I22%3A1401%3B144%3A2659?alt=media&token=efa6c176-ed43-4f61-b005-cb9707b226ad) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 338,
    height: 50,
  },
  InputSearch: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 15,
    paddingRight: 266,
    borderRadius: 100,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-I22%3A1401%3B144%3A2659?alt=media&token=efa6c176-ed43-4f61-b005-cb9707b226ad) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
  CurvedSearch: {
    width: 30.3,
    height: 14.55,
    marginRight: 13,
  },
  Txt399: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(189,189,189,1)",
  },

  ContentBlocks: {
    // justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 25,
    marginBottom: 54,
  },
  Group34902: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
    width: "100%",
    height: 80,
    alignItems: "center",
  },
  File_dock_duotone_line: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginRight: 16,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },
  Group411: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
    // justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  Txt231: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    // marginRight: 154,
    position: "absolute",
    left: 0,
  },
 
  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34902: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
    width: 343,
    height: 77,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },
  
  Txt556: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 152,
  },
 

  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34902: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
    width: 343,
    height: 77,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },
 
  Txt827: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 151,
  },
 

  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34902: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
    width: 343,
    height: 77,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },
 
  Txt827: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 151,
  },
  

  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34906: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 343,
    height: 77,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },

  Txt556: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 152,
  },
  Txt217: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(219,1,255,0.47)",
    textAlign: "left",
    // justifyContent: "flex-end",
    position: "absolute",
    right: 0,
  },

  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34875: {
    width: 428,
    height: 127,
  },
  Component20: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '90%',
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom: 20,
    alignItems: 'center'
  },
  Group357: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-I22%3A1401%3B144%3A2659?alt=media&token=efa6c176-ed43-4f61-b005-cb9707b226ad) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
})

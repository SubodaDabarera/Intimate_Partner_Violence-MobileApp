import React from "react"
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from "react-native"

export default function ConfirmationModal() {

  const navigation = useNavigation();

  return (
    <View style={styles.Popup}>
      <Text style={styles.Txt950}>Evidence Saved!</Text>
      <Text style={styles.Txt347}>
        Proof (photos, voice recordings, screenshots and notes) will be stored
        in the app database only and can be accessed any time using the app.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('EvidenceCollection')}>
        <View style={styles.ButtonPrimary}>
          <Text style={styles.Txt962}>Delete</Text>
        </View>
      </TouchableOpacity>      
      <TouchableOpacity onPress={() => navigation.navigate('EvidenceCollection')}>
        <Text style={styles.Txt333}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Popup: {
    position: "relative",
    width: 343,
    height: 363,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },  
  Txt950: {    
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",  
  },
  Txt347: {    
    paddingTop:20,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(102,102,102,1)",
    textAlign: "center",
    justifyContent: "center",   
    paddingBottom:35 
  },
  ButtonPrimary: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 31,
    paddingRight: 31,
    borderRadius: 100,
    backgroundColor: "rgba(219,1,255,1)",
    width: 311,
    height: 51,
  },

  Txt962: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Txt333: {    
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(219,1,255,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 312,
    height: 19,
  },
})

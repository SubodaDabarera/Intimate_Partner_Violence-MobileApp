import React from "react"
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from "react-native"

export default function EvidenceCollection() {

    const navigation = useNavigation();

    return (
        <View style={styles.EvidenceCollection}>
            <View style={styles.Group34923}>
                <View style={styles.PageHeader}>
                <Text style={styles.Txt559}>Evidence Collection</Text>
                </View>
                <Text style={styles.Txt1005}>
                Add new evidence or View Evidence Collected
                </Text>
                {/* button row 1 */}
                <View style={styles.Group350}>
                    {/* button 1 */}
                    <View style={styles.Group823}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DocumentIncident')}
                            style={styles.roundButton1}>
                            <Image
                                style={styles.Camera}
                                source={{
                                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wele8puobx-83%3A668?alt=media&token=a759a0d4-614d-4129-80eb-cddae5362085",
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.Txt628}>Take Photo</Text>
                    </View>
                    {/* button 2 */}
                    <View style={styles.Group823}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DocumentIncident')}
                            style={styles.roundButton1}>
                            <Image
                                style={styles.Camera}
                                source={{
                                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wele8puobx-83%3A664?alt=media&token=e017e2cd-cf2e-4dbd-ac15-1e5c53a6861b",
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.Txt628}>Record Voice</Text>
                    </View>
                </View>
                {/* button row 2 */}
                <View style={styles.Group350}>
                    {/* button 3 */}
                    <View style={styles.Group823}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DocumentIncident')}
                            style={styles.roundButton1}>
                            <Image
                                style={styles.Camera}
                                source={{
                                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wele8puobx-83%3A646?alt=media&token=0ff9ee26-d4c9-4a6b-9e7a-eeba16db1654",
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.Txt628}>Upload Image</Text>
                    </View>
                    {/* button 4 */}
                    <View style={styles.Group823}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DocumentIncident')}
                            style={styles.roundButton1}>
                            <Image
                                style={styles.Camera}
                                source={{
                                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wele8puobx-83%3A650?alt=media&token=351bcd08-f73f-4581-9ad9-ed7721b638d8",
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.Txt628}>Document Incident</Text>
                    </View>
                </View>
                {/* button row 3 */}
                <View style={styles.Group350}>
                    {/* button 5 */}
                    <View style={styles.Group823}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DocumentIncident')}
                            style={styles.roundButton1}>
                            <Image
                                style={styles.Stroke}
                                source={{
                                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wele8puobx-83%3A655?alt=media&token=1f9ff8e2-33fd-4543-a543-17b7fa625f4d",
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.Txt628}>Record Video</Text>
                    </View>
                    {/* button 6 */}
                    <View style={styles.Group823}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EvidenceLog')}
                            style={styles.roundButton1}>
                            <Image
                                style={styles.Camera}
                                source={{
                                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wele8puobx-83%3A659?alt=media&token=71291b05-0183-433b-b4ab-56e5b52539cd",
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.Txt628}>View All Evidence</Text>
                    </View>
                </View>     
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  EvidenceCollection: {
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
  Group34923: {
    display: "flex",
    flexDirection: "column",
  },
  PageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 24,
    marginBottom: 5,
  },
  Txt559: {
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Txt1005: {
    fontSize: 20,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.4,
    color: "rgba(26,7,0,1)",
    width: 366,
    marginBottom: 53,
  },
  Group350: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
  },
  Group34907: {
    marginRight: 33,
    width: 154,
    height: 116,
  },
  Camera: {
    width: 60,
    height: 60,
  },
  Group823: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Txt628: {
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    lineHeight: 21,
    color: "rgba(0,0,0,0.87)",
    textAlign: "center",
    justifyContent: "center",
    width: 155,
    height: 17,
  },
  roundButton1: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    // backgroundColor: 'orange',
    backgroundColor: "rgba(219,1, 255,0.63)",
  },
  Stroke: {
    width: 50,
    height: 50,
  },
})

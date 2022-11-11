import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, ScrollView, TextInput } from "react-native"

export default function FormScroll() {

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  // const [imgs, setImgs] = useState([]);

  const onSave = () => {
    console.log(title, date, time, place, description);
  };

  return (
    <View style={styles.FormScroll}>
      <View style={styles.Group10104}>
        <View style={styles.Group34915}>
          <View style={styles.Group34894}>
            <View style={styles.Caption}>
              <Text style={styles.Txt156}>Title of incident</Text>
            </View>    
            <TextInput
              style={styles.InputText}
              placeholder="title"
              onChangeText={setTitle}
              value={title}
            />
          </View>
          <View style={styles.Group34894}>
            <View style={styles.Caption1}>
              <Text style={styles.Txt156}>Date</Text>
            </View>
            <View style={styles.Group34891}>
              <Image
                style={styles.Calendar_duotone}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/d9m2444r8oj-70%3A369?alt=media&token=c063451f-4420-471e-9883-f3e7f1233e4b",
                }}
              />
            </View>
          </View>
          <View style={styles.Group34896}>
            <Image
              style={styles.Expand_down}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/d9m2444r8oj-70%3A381?alt=media&token=48e2c88d-748c-42ba-b9f3-e77ab98216a2",
              }}
            />
            <View style={styles.Group10104}>
              <Text style={styles.Txt9010}>Time of incident</Text>
              <View style={styles.InputText1}>
                <Text style={styles.Txt261}>time</Text>
              </View>
            </View>
          </View>
          <View style={styles.Group10104}>
            <View style={styles.Caption1}>
              <Text style={styles.Txt156}>Where did it take place?</Text>
            </View>
            <TextInput
              style={styles.InputText2}
              placeholder="where"
              onChangeText={setPlace}
              value={place}
            />
          </View>
        </View>
        <View style={styles.Group34894}>
          <View style={styles.Caption}>
            <Text style={styles.Txt156}>Description of incident</Text>
          </View>
          <TextInput
            style={styles.InputText3}
            placeholder="description"
            onChangeText={setDescription}
            value={description}
          />
        </View>
        <View style={styles.Group34899}>
          <Image
            style={styles.Add_round_fill}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/d9m2444r8oj-70%3A392?alt=media&token=dd050930-36fe-477f-ab9d-17dd6d1e47f5",
            }}
          />
          <View style={styles.Caption2}>
            <Text style={styles.Txt156}>Add proof of incident</Text>
          </View>
        </View>
        <View style={styles.Group10104}>
          <View style={styles.ButtonPrimary}>
            <Text style={styles.Txt634}>SAVE</Text>
          </View>
          <Text style={styles.Txt968}>Cancel</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  FormScroll: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 344,
    // height: 930,
  },
  Group10104: {
    display: "flex",
    flexDirection: "column",
  },
  Group34915: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 35,
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
  Txt156: {
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    lineHeight: 21,
    color: "rgba(0,0,0,0.87)",
    width: 329,
    // height: 17,
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
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/d9m2444r8oj-I70%3A373%3B144%3A620?alt=media&token=5ccddcf3-78cd-487f-80f3-9ebb45dc8723) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
  Txt261: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(189,189,189,1)",
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
  Group34891: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 303,
    paddingRight: 14,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/d9m2444r8oj-I70%3A368%3B144%3A620?alt=media&token=164b3172-c99b-445e-95b3-5eca39d34e27) */
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
  Txt9010: {
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
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/d9m2444r8oj-I70%3A379%3B144%3A620?alt=media&token=97887619-e2b6-4af1-a2d1-a46c968e060b) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
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
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/d9m2444r8oj-I70%3A377%3B144%3A620?alt=media&token=19a64ed7-4f14-4dd5-afaf-d3348415abeb) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
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
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/d9m2444r8oj-I70%3A388%3B144%3A620?alt=media&token=5e512255-5369-47c4-9f51-67f50768a932) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },

  Group34899: {
    marginBottom: 68,
    width: 328,
    // height: 91,
  },
  Add_round_fill: {
    width: 60,
    height: 60,
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
  Txt634: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt968: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(219,1,255,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 312,
  },
})

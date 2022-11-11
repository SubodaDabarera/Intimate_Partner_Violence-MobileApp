import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button, Checkbox} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function AddEmergencyNumber() {
  return (
    <View
      style={{
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <View style={styles.AddImegancyNumbers}>
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
                marginLeft: 20,
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
          <Text style={styles.Txt872}>Add Contacts</Text>
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
                marginRight: 20,
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

        <ScrollView>
          <View
            style={{
              marginTop: 20,
              marginBottom: 30,
              marginRight: 25,
              marginLeft: 25,
            }}>
            <Text style={styles.Txt158}>Full Name</Text>
            <View style={styles.InputText}>
              <TextInput placeholder="Full Name" />
            </View>

            <Text style={styles.Txt158}>Phone Number</Text>
            <View style={styles.InputText}>
              <TextInput keyboardType="numeric" placeholder="Phone Number" />
            </View>

            <Text style={styles.Txt158}>Email</Text>
            <View style={styles.InputText}>
              <TextInput placeholder="Email" />
            </View>

            <Text style={styles.Txt158}>Message</Text>
            <View style={styles.InputText}>
              <TextInput
                multiline
                numberOfLines={4}
                maxLength={100}
                placeholder="Leave your message"
              />
            </View>

            <View>
              <Checkbox />
              <View style={styles.Caption1}>
                <Text style={styles.Txt158}>Call</Text>
              </View>
            </View>
            <View style={styles.Group01}>
              <Checkbox />
              <View style={styles.Caption1}>
                <Text style={styles.Txt158}>Message</Text>
              </View>
            </View>
            <View>
              <Checkbox />
              <View style={styles.Caption1}>
                <Text style={styles.Txt158}>Email</Text>
              </View>
            </View>
            <View style={styles.Group01}>
              <Checkbox />
              <View style={styles.Caption1}>
                <Text style={styles.Txt158}>Location</Text>
              </View>
            </View>

            <Button style={styles.AddButton}>
              <Text style={styles.Txt10}>Save</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AddImegancyNumbers: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(245,245,245,1)',
    width: '100%',
    height: '100%',
  },
  Txt872: {
    fontSize: 18,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.36,
    color: 'rgba(157,150,147,1)',
    marginRight: 37,
  },

  Txt158: {
    fontSize: 16,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '400',
    lineHeight: 21,
    color: 'rgba(0,0,0,0.87)',
    width: 329,
    height: 17,
  },

  InputText: {
    paddingVertical: 4,
    paddingLeft: 25,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '100%',
  },
  Caption1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  Group01: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 200,
    //alignItems: 'center',
  },
  Group916: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Group956: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  AddButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 18.91,
    // paddingBottom: 14.91,
    // paddingLeft: 115.91,
    // paddingRight: 114.91,
    paddingHorizontal: 115,
    paddingVertical: 16,
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
    marginTop: 90,
  },
  Txt10: {
    fontSize: 16,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.32,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
});

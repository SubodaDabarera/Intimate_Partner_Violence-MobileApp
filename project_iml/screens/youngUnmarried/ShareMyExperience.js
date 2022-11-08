import React, {useState} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function ShareMyExperiece({navigation}) {
  const [title, setTitle] = useState('');
  const [experienceDetails, setExperienceDetails] = useState('');

  const onPublish = () => {
    console.log(title, experienceDetails);
  };

  return (
    <View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View style={styles.ShareMyExperiece}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginTop: 10
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
              <Text style={styles.Txt872}>Share my experience</Text>
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

            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Red Hat Display, sans-serif',
                fontWeight: '700',
                letterSpacing: 0.5,
                color: 'rgba(26,7,0,1)',
                marginBottom: 36,
                marginTop: 60,
                width: '100%',
              }}>
              Share my experience
            </Text>
            <View style={styles.Group998}>
              <TextInput
                placeholder="Title . . ."
                onChangeText={setTitle}
                value={title}
              />
            </View>
            <View style={styles.Group224}>
              {/* <Text style={styles.Txt167}>Experience</Text> */}
              <TextInput
                placeholder="Experience . . ."
                onChangeText={setExperienceDetails}
                value={experienceDetails}
              />
            </View>

            <TouchableOpacity onPress={onPublish}>
              <View style={styles.SaveChangesButton}>
                <Text style={styles.Txt10100}>Publish</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ShareMyExperiece: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(245,245,245,1)',
    width: '90%',
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

  Group998: {
    paddingVertical: 4,
    paddingLeft: 25,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '100%',
  },
  Txt167: {
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.28,
    color: 'rgba(157,150,147,1)',
    width: 96,
    height: 18,
  },

  Group224: {
    paddingTop: 16,
    paddingBottom: 143,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '100%',
  },
  Txt167: {
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.28,
    color: 'rgba(157,150,147,1)',
    width: 96,
    height: 18,
  },

  SaveChangesButton: {
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
  Txt10100: {
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

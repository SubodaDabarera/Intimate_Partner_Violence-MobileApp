import React, {useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
  ToastAndroid,
} from 'react-native';
import {createBlog} from '../../APIs/counsilorAPI';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function ViewBlog({route, navigation}) {
  const {blogDetails} = route.params;
  const [title, setTitle] = React.useState(blogDetails.title);
  const [body, setBody] = React.useState(blogDetails.body);

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
              <Text style={styles.Txt872}>Blog</Text>
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

            <Text style={styles.Txt071}>{title}</Text>

            <View style={styles.Group224}>
              {/* <Text style={styles.Txt167}>Experience</Text> */}
              <TextInput
                style={{
                  fontSize: 14,
                  fontFamily: 'Red Hat Display, sans-serif',
                  fontWeight: '500',
                  letterSpacing: 0.28,
                  color: 'rgba(0,0,0,1)',
                }}
                multiline
                editable={false}
                value={body}
              />
            </View>

            {/* <TouchableOpacity onPress={PostBlog}>
              <View style={styles.SaveChangesButton}>
                <Text style={styles.Txt10100}>Publish</Text>
              </View>
            </TouchableOpacity> */}
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
  Txt071: {
    fontSize: 20,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    letterSpacing: 0.4,
    color: 'rgba(255,1,108,1)',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 36,
    marginTop: 60,
    width: '100%',
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
    // position: "absolute",
    // top: 76,
    // left: 21,
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    // letterSpacing: 0.28,
    color: 'rgba(0,0,0,1)',
    // width: 328,
    // height: 344,
    paddingTop: 16,
    paddingBottom: 180,
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

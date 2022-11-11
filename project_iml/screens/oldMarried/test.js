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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function test() {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
          }}>
          <View style={styles.ResouseNumbers1}>
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
              <Text style={styles.Txt872}>Resouse Numbers</Text>
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

            <View style={styles.Component221}>
              <View style={styles.Group357}>
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
                <TextInput placeholder="Search ..." />
              </View>
            </View>

            <View style={styles.Group34989}>
              <View style={styles.Group126}>
                <View style={styles.Group34976}></View>
                <View style={styles.Group590}>
                  <Image
                    style={styles._9044444}
                    source={{
                      uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/rlnpgmmwrxd-207%3A1563?alt=media&token=e4c209b7-305b-4087-a8d7-df5db80683a6',
                    }}
                  />
                  <View style={styles.Group782}>
                    <Text style={styles.Txt854}>Dementia Hotline</Text>
                    <Text style={styles.Txt492}>
                      National Institute of Health
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ResouseNumbers1: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(245,245,245,1)',
    width: '90%',
    height: '100%',
    //width: 428,
    //height: 926,
  },

  Txt872: {
    fontSize: 18,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.36,
    color: 'rgba(157,150,147,1)',
    marginRight: 37,
  },
  Group357: {
    display: 'flex',
    flexDirection: 'row',
  },
  Component221: {
    display: 'flex',
    flexDirection: 'column',
    // paddingTop: 11.91,
    // paddingBottom: 9.91,
    paddingLeft: 27.91,
    // paddingRight: 243.91,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '90%',
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom: 40,
  },

  Group34989: {
    position: 'absolute',
    top: 242,
    left: 25,
    width: 391,
    height: 855,
  },
  Group126: {
    position: 'absolute',
    top: 353,
    none: '0px',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 357,
    height: 95,
  },
  Group34976: {
    position: 'absolute',
    top: 23,
    left: 18,
    borderRadius: 10,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 50,
    height: 50,
  },

  Group590: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 15,
    none: '0px',
    width: 264,
    height: 49,
  },
  _9044444: {
    width: 24,
    height: 24,
    marginRight: 31,
  },
  Group782: {
    display: 'flex',
    flexDirection: 'column',
  },
  Txt854: {
    fontSize: 18,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    color: 'rgba(26,7,0,1)',
    marginBottom: 4,
  },
  Txt492: {
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.28,
    color: 'rgba(157,150,147,1)',
    width: 209,
  },
});

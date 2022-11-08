import React from 'react';
import {StyleSheet, Image, Text, View, ImageBackground} from 'react-native';

function HomeCounsilor() {
  return (
    <View style={styles.HomeCounselor}>
      <View style={styles.ApplyButton}></View>
      <View style={styles.Rectangle5} />
      <Image
        style={styles.ButtomNavigation}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yaglofs2loj-78%3A353?alt=media&token=8301ca7b-b2c5-490b-a949-9218a8d0cc0a',
        }}
      />
      <Image
        style={styles.PlusIcon}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yaglofs2loj-95%3A374?alt=media&token=b0a9b4ee-572b-4368-b4cd-3674c56f87e7',
        }}
      />
      <View style={styles.Group176}>
        <View style={styles.Group126}>
          <View style={styles.Group526}>
            <View style={styles.ApplyButton1}>
              <Text style={styles.Txt219}>My Blogs</Text>
            </View>
            <Image
              style={styles.Blogs_view}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yaglofs2loj-95%3A516?alt=media&token=ac3ff66f-5177-4d54-b38f-bcbdd92ba67f',
              }}
            />
            <View style={styles.Group3100}>
              <View style={styles.Component2}>
                <View style={styles.Group495}>
                  <Text style={styles.Txt362}>1</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.Txt456}>Blogs</Text>
          <Image
            style={styles.Blogs_view}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yaglofs2loj-95%3A516?alt=media&token=ac3ff66f-5177-4d54-b38f-bcbdd92ba67f',
            }}
          />
        </View>
      </View>
      <Image
        style={styles.Chat_icon}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yaglofs2loj-78%3A338?alt=media&token=df3428ed-e835-47a4-a447-d0cc5a57a983',
        }}
      />
      <Text style={styles.Txt541}>CHAT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeCounselor: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'rgba(245,245,245,1)',
    width: 428,
    height: 926,
  },
  ApplyButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'absolute',
    top: '72.03%',
    bottom: '21.49%',
    left: '10.28%',
    right: '8.18%',
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
    width: 349,
    height: 60,
  },

  Rectangle5: {
    position: 'absolute',
    bottom: 16,
    left: 139,
    backgroundColor: 'rgba(0,0,0,1)',
    width: 151,
    height: 5,
    borderRadius: 50,
  },
  ButtomNavigation: {
    position: 'absolute',
    top: 799,
    left: 1,
    width: 428,
    height: 127,
  },
  PlusIcon: {
    position: 'absolute',
    top: 824,
    left: 179,
    width: 70,
    height: 58.1,
  },
  Group176: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    none: '0px',
    width: 416,
    height: 573,
  },
  Group126: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Group526: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  ApplyButton1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 21.91,
    paddingBottom: 19.91,
    paddingLeft: 134.91,
    paddingRight: 133.91,
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
  },
  Txt219: {
    fontSize: 16,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.32,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },

  Blogs_view: {
    width: 415.69,
    height: 202,
  },
  Group3100: {
    paddingTop: 12,
    paddingBottom: 11,
    paddingLeft: 13,
    paddingRight: 9,
    borderRadius: 15,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 50,
    height: 50,
  },
  Component2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 10.83,
    paddingLeft: 12,
    paddingRight: 0,
    backgroundColor: 'white',
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yaglofs2loj-I46%3A749%3B107%3A2121?alt=media&token=d4c11f0d-11e4-4de4-9d5c-299dc2008437) */
  },
  Group495: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 4,
    borderRadius: 6.5,
    backgroundColor: 'rgba(219,1,255,1)',
    width: 13,
    height: 13,
  },
  Txt362: {
    fontSize: 7.5,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },

  Txt456: {
    fontSize: 25,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    letterSpacing: 0.5,
    color: 'rgba(26,7,0,1)',
    marginBottom: 65,
  },
  Blogs_view: {
    width: 415.69,
    height: 202,
  },

  Chat_icon: {
    position: 'absolute',
    top: 680,
    left: 224,
    width: 41,
    height: 37,
  },
  Txt541: {
    position: 'absolute',
    top: 688,
    left: 170,
    fontSize: 15,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.3,
    color: 'rgba(244,244,244,1)',
    width: 45,
    height: 24,
  },
});

export default HomeCounsilor;

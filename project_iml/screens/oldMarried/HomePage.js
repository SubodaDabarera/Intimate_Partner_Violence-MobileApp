import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.HomeV5}>
      <View style={styles.Group229}>
        <View style={styles.Group209}>
          <View style={styles.Group737}></View>
          <View style={styles.Helpbutton}>
            <Text style={styles.Txt1109}>Help</Text>
          </View>

          <View style={styles.Group523}>
            <View style={styles.Group110}>
              <Text style={styles.Txt560}>Emergency</Text>
            </View>
            <View style={styles.Group245}>
              <Text style={styles.Txt560}>Chat</Text>
            </View>
          </View>
          <View style={styles.Group523}>
            <View style={styles.Group630}>
              <Text style={styles.Txt560}>Blog</Text>
            </View>
            <View style={styles.Group197}>
              <Text style={styles.Txt403}>Share My Experience</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeV5: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'rgba(245,245,245,1)',
  },
  Group229: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    none: '0px',
    width: 414,
    height: 600,
  },
  Group209: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Group737: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 50,
  },

  Group101: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 4,
    borderRadius: 6.5,
    backgroundColor: 'rgba(219,1,255,1)',
    width: 13,
    height: 13,
  },
  Txt231: {
    fontSize: 7.5,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },

  Helpbutton: {
    paddingTop: 75,
    paddingBottom: 75,
    paddingLeft: 62,
    paddingRight: 62,
    marginBottom: 40,
    borderRadius: 105,
    backgroundColor: 'rgba(219,1,255,1)',
    width: 210,
    height: 210,
  },
  Txt1109: {
    fontSize: 36,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    lineHeight: 54,
    letterSpacing: 0.72,
    color: 'rgba(255, 255, 255, 1)',
    width: 83,
    height: 51,
  },

  Group523: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  Group110: {
    paddingTop: 60.9,
    paddingBottom: 51.9,
    paddingLeft: 33.9,
    paddingRight: 33.9,
    marginRight: 32,
    borderRadius: 11.93,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 149,
    height: 143,
  },
  Txt560: {
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    lineHeight: 24,
    color: 'rgba(219,1,255,1)',
    // textAlign: 'center',
    justifyContent: 'center',
    width: 79,
    height: 29,
  },

  Group245: {
    paddingTop: 60.9,
    paddingBottom: 51.9,
    paddingLeft: 58.9,
    paddingRight: 48.9,
    borderRadius: 11.93,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 149,
    height: 143,
  },
  Group630: {
    paddingTop: 60.9,
    paddingBottom: 51.9,
    paddingLeft: 60.9,
    paddingRight: 50.9,
    marginRight: 32,
    borderRadius: 11.93,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 149,
    height: 143,
  },
  Group197: {
    paddingTop: 45.9,
    paddingBottom: 35.9,
    paddingLeft: 27.9,
    paddingRight: 24.9,
    borderRadius: 11.93,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 149,
    height: 143,
  },
  Txt403: {
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    lineHeight: 24,
    color: 'rgba(219,1,255,1)',
    //textAlign: 'center',
    justifyContent: 'center',
    width: 94,
    height: 59,
  },
});

import React, { useState } from 'react';
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

export default function RateYourExperience() {

    const [email, setEmail] = useState('@DeborahC')

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.Feedback}>
        <ScrollView>
          <View style={styles.Group740}>
            <View style={styles.Group740}>
              <View style={styles.Group763}>
                <View style={styles.Group537}>
                  <View style={styles.Component2}>
                    <View style={styles.Group349}>
                      <Text style={styles.Txt469}>1</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.Group34876}>
                  <Text style={styles.Txt949}>
                    Rate your experience with me
                  </Text>
                  <Text style={styles.Txt472}>{email}</Text>
                  <View style={styles.Group4102}>
                    <TextInput
                      style={styles.Txt230}
                      placeholder="Write Review ..."
                    />
                  </View>
                  <TouchableOpacity>
                    <View style={styles.ApplyButton}>
                      <Text style={styles.Txt901}>submit</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Feedback: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    paddingTop: 14,
    paddingBottom: 15,
    // paddingLeft: 34,
    // paddingRight: 29,
    backgroundColor: 'rgba(245,245,245,1)',
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
  },
  Group740: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Group740: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Group763: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 40,
  },
  Group749: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 31,
  },
  Txt598: {
    fontSize: 18,
    fontFamily: 'SF Pro Display, sans-serif',
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.36,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 237,
  },
  Group5: {
    width: 73.6,
    height: 13,
  },

  Group537: {
    paddingTop: 12,
    paddingBottom: 11,
    paddingLeft: 13,
    paddingRight: 9,
    marginBottom: 62,
    borderRadius: 15,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 50,
    height: 50,
  },
  Component2: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 10.83,
    paddingLeft: 12,
    paddingRight: 0,
    backgroundColor: 'white',
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ehytggywsvf-I13%3A847%3B107%3A2121?alt=media&token=f36d99ba-fd06-4ed4-bd0d-ac2d00661d54) */
  },
  Group349: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 4,
    borderRadius: 6.5,
    backgroundColor: 'rgba(219,1,255,1)',
    width: 13,
    height: 13,
  },
  Txt469: {
    fontSize: 7.5,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },

  Group34876: {
    display: 'flex',
    flexDirection: 'column',
  },
  Txt949: {
    fontSize: 23,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    letterSpacing: 0.5,
    color: 'rgba(26,7,0,1)',
    marginBottom: 5,
  },
  Txt472: {
    fontSize: 17,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.36,
    color: 'rgba(26,7,0,0.4)',
    marginBottom: 86,
  },
  Group4102: {
    paddingTop: 23,
    paddingBottom: 134,
    paddingLeft: 22,
    // paddingRight: 225,
    // marginBottom: 113,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // width: 358,
    // height: 179,
  },
  Txt230: {
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.28,
    color: 'rgba(26,7,0,0.4)',
  },

  ApplyButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // paddingTop: 21.91,
    // paddingBottom: 19.91,
    // paddingLeft: 146.91,
    // paddingRight: 145.91,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
    marginTop: 80,
  },
  Txt901: {
    fontSize: 16,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.32,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },

  Rectangle5: {
    backgroundColor: 'rgba(0,0,0,1)',
    width: 151,
    height: 5,
    borderRadius: 50,
  },
});

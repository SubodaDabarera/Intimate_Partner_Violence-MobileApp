import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function HomeCounselor({navigation}) {
  return (
    <View style={styles.HomeCounselor}>
      <View style={styles.Group714}>
        <Text style={styles.Txt846}>Blogs</Text>
        <Image
          style={styles.Viewimg}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jvfqde67ux-492%3A2853?alt=media&token=224ce95d-f9fe-45bc-82b9-1e92d3a7aa2b',
          }}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ViewBlogs');
          }}>
          <View style={styles.Myblogs_btn}>
            <View style={styles.ApplyButton}>
              <Text style={styles.Txt636}>My Blogs</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.Chatbtn}>
            <Text style={styles.Txt738}>CHAT</Text>
            <Image
              style={styles.Chat_icon}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jvfqde67ux-78%3A338?alt=media&token=18da9588-4b5c-489c-a235-fc7027bee047',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PostBlog');
          }}>
          <Image
            style={styles.PlusIcon}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jvfqde67ux-95%3A374?alt=media&token=8024848a-835c-4670-b6a8-8a4bbdac2f3d',
            }}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.Bellicon}>
          <View style={styles.Component2}>
            <View style={styles.Group521}>
              <Text style={styles.Txt795}>1</Text>
            </View>
          </View>
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  HomeCounselor: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 64,
    paddingBottom: 43,
    paddingLeft: 3,
    paddingRight: 7,
    backgroundColor: 'rgba(245,245,245,1)',
    width: 428,
    height: 926,
  },
  Group714: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Txt846: {
    fontSize: 25,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    letterSpacing: 0.5,
    color: 'rgba(26,7,0,1)',
    marginBottom: 45,
    top: 10,
  },
  Viewimg: {
    width: 415.69,
    height: 202,
    marginBottom: 37,
  },
  Myblogs_btn: {
    marginBottom: 35,
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
    width: 358,
    height: 60,
  },
  ApplyButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 19.91,
    paddingBottom: 15.91,
    paddingLeft: 134.91,
    paddingRight: 133.91,
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
  },
  Txt636: {
    fontSize: 16,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.32,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },

  Chatbtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 11.91,
    paddingBottom: 8.91,
    paddingLeft: 127.91,
    paddingRight: 129.91,
    marginBottom: 40,
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
  },
  Txt738: {
    fontSize: 15,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.3,
    color: 'rgba(244,244,244,1)',
    width: 46,
    height: 24,
    marginRight: 10,
    marginBottom: 5,
  },
  Chat_icon: {
    width: 42.06,
    height: 37,
  },

  PlusIcon: {
    width: 70,
    height: 58.1,
  },

  Bellicon: {
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
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jvfqde67ux-I46%3A749%3B107%3A2121?alt=media&token=bf5ba5ae-42c8-4a19-8e1d-ffc24f886547) */
  },
  Group521: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 4,
    borderRadius: 6.5,
    backgroundColor: 'rgba(219,1,255,1)',
    width: 13,
    height: 13,
  },
  Txt795: {
    fontSize: 7.5,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
});

import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Button,
  Alert,
  ToastAndroid,
} from 'react-native';
import {createBlog} from '../../APIs/counsilorAPI';

export default function PostBlog() {
  const [title, setTitle] = React.useState();
  const [body, setBody] = React.useState();
  const [isCreationSuccess, setIsCreationSuccess] = React.useState(false);

  //publish blog api call
  const onPressPublishBlog = async () => {
    await createBlog({title, body}, setIsCreationSuccess).then(() => {
      console.log('blog posted');
      ToastAndroid.show('Blog published s', ToastAndroid.SHORT);
    });
  };

  return (
    <ScrollView>
      <View style={styles.PostBlog}>
        <View style={styles.Group2810}>
          <View style={styles.Group34907}>
            <View style={styles.Group838}>
              <View style={styles.BackButton}></View>
              <Text style={styles.Txt286}>Post Blog</Text>
            </View>
            <Image
              style={styles.CurvedArrowLeft}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/37cf3sldx7c-46%3A780?alt=media&token=193a031c-c7ab-498b-bea2-97101b440803',
              }}
            />
          </View>

          <View style={styles.Add_blog}>
            <View style={styles.Group207}>
              <Text style={styles.Txt470}>Write Blog</Text>

              <TextInput
                style={styles.Group217}
                maxLength={30}
                placeholder="Type title here"
                onChangeText={setTitle}
                value={title}
              />

              <View>
                {/* <Text style={styles.Txt139}>Body</Text> */}
                <TextInput
                  multiline
                  numberOfLines={4}
                  maxLength={150}
                  style={styles.Group794}
                  placeholder="Type title here"
                  onChangeText={setBody}
                />
              </View>
            </View>

            <Button
              onPress={onPressPublishBlog}
              //   style={styles.SaveChangesButton}
              title="PUBLISH"
              color="#841584"
              accessibilityLabel="Publish Blog"
            />
          </View>
        </View>
        <Image
          style={styles.BottomNavigation}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/37cf3sldx7c-46%3A779?alt=media&token=aff006b1-70d9-4472-b977-9b4b7137aaa5',
          }}
        />
        <Image
          style={styles.OutlineUser1}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/37cf3sldx7c-46%3A787?alt=media&token=93d89939-2367-4b93-814c-9323179a0887',
          }}
        />
        <Image
          style={styles.PlusIcon}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/37cf3sldx7c-95%3A522?alt=media&token=7f39969c-a0e6-472e-aa30-74e77006bd68',
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  PostBlog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    paddingTop: 45,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(245,245,245,1)',
    width: 428,
    height: 926,
  },
  Group2810: {
    display: 'flex',
    flexDirection: 'column',
  },
  Group34907: {
    position: 'relative',
    marginBottom: 44,
    width: 174,
    height: 50,
  },
  Group838: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 0,
    none: '0px',
    width: 175,
    height: 50,
  },
  BackButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 42,
    borderRadius: 15,
    backgroundColor: 'rgba(251,224,255,1)',
  },

  Txt286: {
    fontSize: 18,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.36,
    color: 'rgba(157,150,147,1)',
  },

  CurvedArrowLeft: {
    position: 'absolute',
    bottom: 13,
    left: 13,
    width: 24,
    height: 24,
  },

  Add_blog: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 30,
  },
  Group207: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 64,
  },
  Txt470: {
    fontSize: 25,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    letterSpacing: 0.5,
    color: 'rgba(26,7,0,1)',
    marginBottom: 53,
  },
  Group217: {
    paddingTop: 20,
    padding: 10,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 22,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 358,
    height: 65,
    fontSize: 16,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.32,
    color: 'rgba(0,0,0,1)',
  },
  Txt376: {
    fontSize: 16,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.32,
    color: 'rgba(0,0,0,1)',
    width: 310,
    height: 23,
  },

  Group794: {
    position: 'relative',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 358,
    height: 310,
    // paddingBottom: 260,
    paddingLeft: 20,
    paddingRight: 20,
  },
  Txt139: {
    position: 'absolute',
    top: 17,
    left: 25,
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.28,
    color: 'rgba(0,0,0,1)',
    width: 310,
    height: 279,
  },
  Txt516: {
    position: 'absolute',
    top: 17,
    left: 25,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 18.91,
    paddingBottom: 14.91,
    paddingLeft: 115.91,
    paddingRight: 114.91,
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
  },
  Txt701: {
    fontSize: 16,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.32,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },

  BottomNavigation: {
    position: 'absolute',
    top: 799,
    left: 0,
    width: 428,
    height: 127,
  },
  OutlineUser1: {
    position: 'absolute',
    top: '91.47%',
    bottom: '5.08%',
    left: '84.35%',
    right: '8.18%',
    width: 32,
    height: 32,
  },
  PlusIcon: {
    position: 'absolute',
    top: 833,
    left: 179,
    width: 70,
    height: 58.1,
  },
});

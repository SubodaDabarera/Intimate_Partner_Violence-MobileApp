import React from 'react';
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
import {deleteBlog, update_Blog} from '../../APIs/counsilorAPI';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function UpdateBlog({route, navigation}) {
  const {blogDetails} = route.params;

  const [blogId, setBlogId] = React.useState(blogDetails._id);
  const [title, setTitle] = React.useState(blogDetails.title);
  const [body, setBody] = React.useState(blogDetails.body);
  const [isCreationSuccess, setIsCreationSuccess] = React.useState(false);

  //blog api call
  const onUpdate = async () => {
    await update_Blog(blogId, {title, body}, setIsCreationSuccess).then(() => {
      console.log('blog updated');
      ToastAndroid.show('Blog updated', ToastAndroid.SHORT);
      navigation.navigate('ViewBlogs');
    });
  };

  const onDelete = async () => {
    console.log(blogId);
    await deleteBlog(blogId).then(() => {
      console.log('blog deleted');
      ToastAndroid.show('Blog deleted...', ToastAndroid.SHORT);
      navigation.navigate('PostBlog');
    });
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
              <Text style={styles.Txt872}>Update Blog</Text>
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
              Update Blog
            </Text>
            <View style={styles.Group998}>
              <TextInput
                placeholder="Title . . ."
                onChangeText={setTitle}
                value={title}
                multiline
                maxLength={100}
              />
            </View>
            <View style={styles.Group224}>
              {/* <Text style={styles.Txt167}>Experience</Text> */}
              <TextInput
                placeholder="Body . . ."
                onChangeText={setBody}
                multiline
                value={body}
              />
            </View>

            <TouchableOpacity onPress={onUpdate}>
              <View style={styles.SaveChangesButton}>
                <Text style={styles.Txt10100}>Update</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onDelete}>
              <View style={styles.deleteBtn}>
                <Text style={styles.Txt10100}>Delete</Text>
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
    paddingLeft: 25.91,
    paddingRight: 25.91,
    paddingHorizontal: 115,
    paddingVertical: 16,
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
    marginTop: 90,
    marginLeft: 240,
  },
  deleteBtn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 18.91,
    // paddingBottom: 14.91,
    paddingLeft: 25.91,
    paddingRight: 25.91,
    paddingHorizontal: 115,
    paddingVertical: 16,
    borderRadius: 15,
    backgroundColor: 'rgba(219,1,255,1)',
    // marginTop: 90,
    // marginLeft: 240,
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

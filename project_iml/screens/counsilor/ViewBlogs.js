import React, {useEffect, useState} from 'react';
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
import {viewBlogsList} from '../../APIs/counsilorAPI';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import BlogListItem from './BlogListItem';

export default function ViewBlogs({navigation}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      await viewBlogsList(setBlogs).then(() => {
        console.log('Blogs retrived');
      });
    }
    getBlogs();
  }, []);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
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
          <Text style={styles.Txt872}>Blog List</Text>
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

        {/* search - start */}

        <View style={styles.Component20}>
          <View style={styles.Group357}>
            {/* add search icon here ------------------------ */}
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
            <TextInput
              placeholder="Search ..."

              //   onChangeText={setSearchQuery}
            />
          </View>
        </View>
        {/* search - end */}

        <ScrollView>
          <View
            style={{
              alignItems: 'center',
            }}>
            {blogs.map((blog, index) => {
              // if (chat.victimId == userId)
              return (
                <>
                  <BlogListItem key={blog._id} blogData={blog} />
                  {/* <ChatListItem key={chat.id} chatData={chat} /> */}
                  {/* <Text>hfgfg</Text> */}
                </>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Component20: {
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
  Group357: {
    display: 'flex',
    flexDirection: 'row',
  },
  CurvedSearch: {
    width: 30.3,
    height: 14.55,
    marginRight: 13,
  },
  Txt1067: {
    fontSize: 10,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.2,
    color: 'rgba(201,197,196,1)',
  },
  ShareMyExperiece: {
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
});

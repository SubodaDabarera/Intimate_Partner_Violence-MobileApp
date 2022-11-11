import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

export default function BlogListItem({blogData}) {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.Component21}>
      {/* <ScrollView> */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ViewBlog', {blogDetails: blogData})
        }>
        <View style={styles.Group692}>
          <View style={styles.Group592}>
            <Text style={styles.Txt484}>{blogData.title}</Text>
          </View>

          <TouchableOpacity onPress={() => toggleModal()}>
            <View style={styles.Frame20}>
              <View style={styles.Frame17}>
                <Text style={styles.Txt694}>Update</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <View style={styles.Rectangle4191}></View> */}
        </View>
      </TouchableOpacity>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  Rectangle4191: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '80%',
    height: '100%',
    borderRadius: 15,
  },
  Component21: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    // backgroundColor: "rgba(255, 255, 255, 1)",
    // marginHorizontal: 10,
    width: '95%',
    // height: '10%',
    marginVertical: 6,
    width: '100%',
    // backgroundColor: 'red'
  },
  Group692: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(70,70,70,0.05)',
    elevation: 3,
    shadowOffset: {width: 0, height: 20},
  },
  Image1: {
    width: 65,
    height: 67,
    marginRight: 27,
  },
  Group592: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 40,
    width: '60%',
    paddingBottom: 50,
  },
  Txt484: {
    fontSize: 15,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    color: 'rgba(26,7,0,1)',
    marginBottom: 1,
    width: '110%',
  },
  Txt632: {
    fontSize: 11,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.22,
    color: 'rgba(26,7,0,1)',
  },

  Frame20: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 100,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 77,
    height: 26,
  },
  Frame19: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
  },
  Frame17: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Txt694: {
    fontSize: 12,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.2,
    color: 'rgba(219,1,255,1)',
  },
  Rectangle4191: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '90%',
    height: '80%',
    borderRadius: 15,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  Image2: {
    width: 95,
    height: 96,
  },
});

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
import Modal from 'react-native-modal';

export default function ChatListItem({chatData}) {
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
          navigation.navigate('Conversation', {chatDetails: chatData})
        }>
        <View style={styles.Group692}>
          <Image
            style={styles.Image1}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zv4xqq7wjck-I13%3A514%3B13%3A513?alt=media&token=88fcd3a4-12ed-43ed-822a-02c8a6a7e47d',
            }}
          />
          <View style={styles.Group592}>
            <Text style={styles.Txt484}>{chatData.expertName}</Text>
            <Text style={styles.Txt632}>Advanced dip in Physio</Text>
          </View>

          <TouchableOpacity onPress={() => toggleModal()}>
            <View style={styles.Frame20}>
              <View style={styles.Frame17}>
                <Text style={styles.Txt694}>View</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <View style={styles.Rectangle4191}></View> */}
        </View>
      </TouchableOpacity>
      {/* </ScrollView> */}

      {/* modal - start */}
      <View style={{flex: 1}}>
        <Modal
          isVisible={isModalVisible}
          style={{
            alignItems: 'center',
          }}
          animationType="fade">
          {/* <View style = {{
            backgroundColor: 'white',
            width: '80%',
            height: '60%',
            justifyContent: 'center',
            alignItems: 'center'
          }}> */}
          <View style={styles.Rectangle4191}>
            <View
              style={{
                height: '100%',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  style={styles.Image2}
                  source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hlt48r66he-52%3A407?alt=media&token=70d67c02-a188-4e69-9567-00b24b04a87a',
                  }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Red Hat Display, sans-serif',
                    fontWeight: '700',
                    letterSpacing: 0.5,
                    color: 'rgba(26,7,0,1)',
                    marginBottom: 1,
                    marginTop: 10,
                  }}>
                  Deborah Carr
                </Text>
                <Text style={{fontSize: 14}}>@DeborahC</Text>

                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Red Hat Display, sans-serif',
                    fontWeight: '600',
                    letterSpacing: 0.38,
                    color: 'rgba(26,7,0,1)',
                    marginTop: 20,
                  }}>
                  Qualifications
                </Text>
                <Text style={{fontSize: 14}}>Advanced dip in Physio</Text>
                <Text style={{fontSize: 14}}>
                  Specialist in sexula well being
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Red Hat Display, sans-serif',
                    fontWeight: '600',
                    letterSpacing: 0.38,
                    color: 'rgba(26,7,0,1)',
                    marginTop: 20,
                  }}>
                  Age
                </Text>
                <Text style={{fontSize: 14}}>34</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Red Hat Display, sans-serif',
                    fontWeight: '600',
                    letterSpacing: 0.38,
                    color: 'rgba(26,7,0,1)',
                    marginTop: 20,
                  }}>
                  Occupation
                </Text>
                <Text style={{fontSize: 14}}>Surgeon</Text>
              </View>

              <View
                style={{
                  alignItems: 'flex-end',
                  marginRight: 20,
                  marginTop: 20,
                }}>
                <TouchableOpacity onPress={toggleModal}>
                  <View
                    style={{
                      paddingVertical: 8,
                      paddingHorizontal: 26,
                      borderRadius: 15,
                      backgroundColor: 'rgba(219,1,255,1)',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'Red Hat Display, sans-serif',
                        fontWeight: '500',
                      }}>
                      Ok
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* modal - end */}
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
    marginRight: 51,
  },
  Txt484: {
    fontSize: 18,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    color: 'rgba(26,7,0,1)',
    marginBottom: 3,
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
    width: 57,
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

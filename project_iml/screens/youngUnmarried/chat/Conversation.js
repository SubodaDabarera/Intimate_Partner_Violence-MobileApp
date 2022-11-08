import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5Pro'

const Conversation = ({route}) => {
  const {chatDetails} = route.params;
  const [expertMessages, setExpertMessages] = useState([]);
  const [victimMessages, setVictimMessages] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    let expertMessages = [];
    let victimMessages = [];

    if (chatDetails) {
      // set expert's messages
      chatDetails.expertMsg.map(detail => {
        expertMessages.push(detail);
      });

      // set victim's messages
      chatDetails.victimMsg.map(detail => {
        victimMessages.push(detail);
      });
    }

    setExpertMessages(expertMessages);
    setVictimMessages(victimMessages);
  }, [chatDetails]);

  const ExpertChatComponent = ({message}) => {
    return (
      <View
        style={{
          alignItems: 'flex-end',
          marginRight: 6,
          marginVertical: 4,
        }}>
        <View style={styles.ReceivingMsgRectangle}>
          <Text>{message.msg}</Text>
        </View>
        <Text
          style={{
            marginRight: 8,
            fontSize: 12,
          }}>
          {message.time}
        </Text>
      </View>
    );
  };

  const VictimChatComponent = ({message}) => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          marginLeft: 6,
          marginVertical: 4,
        }}>
        <View style={styles.SendingMsgRectangle}>
          <Text
            style={{
              color: 'white',
            }}>
            {message.msg}
          </Text>
        </View>
        <Text
          style={{
            marginLeft: 8,
            fontSize: 12,
          }}>
          {message.time}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        // backgroundColor: '#E5E5E5'
      }}>
      {/* header of the chat */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 50,
          borderBottomWidth: 0.5,
          borderBottomColor: '#FBE0FF',
          paddingBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 15,
            marginTop: 15,
          }}>
          <Image
            style={styles.Image1}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zv4xqq7wjck-I13%3A514%3B13%3A513?alt=media&token=88fcd3a4-12ed-43ed-822a-02c8a6a7e47d',
            }}
          />
          <View>
            <Text
              style={{
                color: '#DB01FF',
                fontSize: 20,
                fontWeight: '500',
              }}>
              {chatDetails.expertName}
            </Text>
            <Text>Online</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress = {() => navigation.navigate("ExpertProfile", {expertId: chatDetails.expertId})}
          >
          <View
            style={{
              marginRight: 8,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                backgroundColor: '#FBE0FF',
                paddingHorizontal: 20,
                padding: 5,
                borderRadius: 10,
                color: '#DB01FF',
              }}>
              Add review
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* conversation */}
      <ScrollView>
        <View
          style={{
            marginBottom: 60,
          }}>
          {chatDetails &&
            chatDetails.messages &&
            chatDetails.messages.map((message, index) => {
              if (message.role == 'expert') {
                return <ExpertChatComponent key={message.id} message={message} />;
              } else {
                return <VictimChatComponent key={message.id} message={message} />;
              }
            })}
        </View>
      </ScrollView>

      {/* text input */}
      <View
        style={{
          position: 'absolute',
          bottom: 5,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          // backgroundColor: '#E5E5E5'
        }}>
        <View
          style={{
            marginRight: 6,
          }}>
          <View style={styles.Rectangle4194}>
            <Text>Mic</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <View style={styles.TextInputRectangle}>
            <TextInput placeholder="Write now..." />
            <TouchableOpacity
              style={{
                justifyContent: 'center',
              }}>
              <View
                style={{
                  marginRight: 8,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    backgroundColor: '#FBE0FF',
                    padding: 5,
                    borderRadius: 10,
                  }}>
                  Send
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ReceivingMsgRectangle: {
    backgroundColor: 'rgba(223,223,223,0.8)',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 15,
    alignContent: 'flex-end',
  },
  Image1: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  SendingMsgRectangle: {
    backgroundColor: 'rgba(219,1,255,1)',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 15,
    marginVertical: 3,
    alignContent: 'flex-start',
  },
  TextInputRectangle: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 285,
    height: 46,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Rectangle4194: {
    backgroundColor: 'rgba(219,1,255,1)',
    width: 58,
    height: 46,
    borderRadius: 15,
  },
  Frame18: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 100,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 128,
    height: 35,
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
  Txt256: {
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.28,
    color: 'rgba(219,1,255,1)',
  },
});

export default Conversation;

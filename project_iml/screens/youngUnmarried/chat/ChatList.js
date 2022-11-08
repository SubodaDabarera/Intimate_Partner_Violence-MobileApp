import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FirebaseDB from '../../../../components/firebaseConfig';
import ChatListItem from './ChatListItem';


// ################ view as a vicim's chat list

const staticChat = [
  {
    id: '09309490-9476-4ba7-82eb-41ddef3dd88a',
    expertName: 'Deborah Carr',
    expertId: 'c7d1c7a3-0d16-40b4-9256-770444109b37',
    victimName: 'Piyumi',
    victimId: '3f00d10a-4947-4286-afa1-13431dfc5666',
    expertMsg: ['good', 'ok', 'this is ok', 'don"t worry'],
    victimMsg: ['I"m afraid to talk', 'help me please', 'I am leaving bye'],
    messages: [
      {
        role: 'expert',
        msg: 'good',
        time: '10.12',
        id: '7de0c1f5-d431-4212-a632-f4af37033a76',
      },
      {
        role: 'expert',
        msg: 'ok',
        time: '10.12',
        id: '7de0c1f5-d431-4212-a632-f4af37033a75',
      },
      {
        role: 'victim',
        msg: 'I"m afraid to talk',
        time: '10.15',
        id: '7de0c1f5-d431-4212-a632-f4af37033a71',
      },
      {
        role: 'victim',
        msg: 'help me please',
        time: '10.16',
        id: '7de0c1f5-d431-4212-a632-f4af37033a77',
      },
      {
        role: 'expert',
        msg: 'don"t worry',
        time: '10.16',
        id: '7de0c1f5-d431-4212-a632-f4af37033a7231',
      },
    ],
  },
  {
    id: 'e4fbbf38-7eea-4392-826d-e3a3c968f096',
    expertName: 'Kamala Hassan',
    expertId: '74c9cbf1-9a9a-4917-840d-cf823746387f',
    victimName: 'Piyumi',
    victimId: '3f00d10a-4947-4286-afa1-13431dfc5666',
    expertMsg: ['good', 'ok', 'this is ok', 'don"t worry'],
    victimMsg: ['I"m afraid to talk', 'help me please', 'I am leaving bye'],
  },
  {
    id: 'e39faefa-fbe3-4ef6-98c7-7ad6fc94b227',
    expertName: 'John J',
    expertId: 'f8509f73-9400-48d4-910b-74d38b416fa8',
    victimName: 'Dabare',
    victimId: '3f7f2bef-dbbc-433d-a709-ce59b6d71132',
    expertMsg: ['good', 'ok', 'this is ok', 'don"t worry'],
    victimMsg: ['I"m afraid to talk', 'help me please', 'I am leaving bye'],
    messages: [
      {role: 'expert', msg: 'good', time: '10.12'},
      {role: 'expert', msg: 'ok', time: '10.12'},
      {role: 'victim', msg: 'I"m afraid to talk', time: '10.15'},
      {role: 'victim', msg: 'help me please', time: '10.16'},
      {role: 'expert', msg: 'don"t worry', time: '10.16'},
    ],
  },
  {
    id: '77dd5472-8890-4b4e-a5b9-db33eca07ba6',
    expertName: 'Depp J',
    expertId: '1bb5a8fb-a50f-4438-b6f4-49fa4dcbefdd',
    victimName: 'Hansamali',
    victimId: '5d240969-87f6-476e-b34a-2a6f9fb3cd95',
    expertMsg: ['good', 'ok', 'this is ok', 'don"t worry'],
    victimMsg: ['I"m afraid to talk', 'help me please', 'I am leaving bye'],
  },
  {
    id: '485064be-4623-433a-9b8c-5641f8682ae7',
    expertName: 'John J',
    expertId: 'f8509f73-9400-48d4-910b-74d38b416fa8',
    victimName: 'Kamala',
    victimId: '73239c4c-ae0e-47cb-8bb8-0ab3d3dace25',
    expertMsg: ['good', 'ok', 'this is ok', 'don"t worry'],
    victimMsg: ['I"m afraid to talk', 'help me please', 'I am leaving bye'],
  },
  {
    id: '53b2373c-da95-47ad-aa82-b35b9b6994a4',
    expertName: 'Depp J',
    expertId: '1bb5a8fb-a50f-4438-b6f4-49fa4dcbefdd',
    victimName: 'Sanduni',
    victimId: '005d5a2c-e934-477c-abe9-d09b93bd3cd7',
    expertMsg: ['good', 'ok', 'this is ok', 'don"t worry'],
    victimMsg: ['I"m afraid to talk', 'help me please', 'I am leaving bye'],
  },
];

const ChatList = ({navigation}) => {
  const [chatList, setChatList] = useState(staticChat);
  const [userId, setUserId] = useState('3f00d10a-4947-4286-afa1-13431dfc5666'); //this is victim userId


  useEffect(() => {
    // FirebaseDB
  }, []);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
      }}>
      {/* search - start */}
      <View style={styles.Component20}>
        <View style={styles.Group357}>
          {/* add search icon here ------------------------ */}
          <TextInput placeholder="Search ..." />
        </View>
      </View>
      {/* search - end */}

      <ScrollView>
        <View
          style={{
            alignItems: 'center',
          }}>
          {chatList.map((chat, index) => {
            if (chat.victimId == userId)
              return (
                <>
                  <ChatListItem key={chat.id} chatData={chat} />
                  {/* <ChatListItem key={chat.id} chatData={chat} /> */}
                  {/* <Text>hfgfg</Text> */}
                </>
              );
          })}
        </View>
        
      </ScrollView>
    </View>
  );
};

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
});

export default ChatList;

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomNavBar = () => {
  return (
    <View
      style={{
        bottom: 4,
        // paddingVertical: 13,
        height: 80,
        borderTopEndRadius: 14,
        borderTopStartRadius: 14,
        backgroundColor: 'white',
        marginHorizontal: 2,
        justifyContent: 'center',
        // shadowColor: '#000000',
        // shadowOffset: {
        //   width: 0,
        //   height: 5,
        // },
        // elevation: 2,
        // shadowOpacity: 0.5,
        // shadowRadius: 20

      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity>
          <Feather
            name="home"
            style={{
              fontSize: 26,
              fontWeight: '100',
              color: '#C9C5C4'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="ios-heart-outline"
            style={{
              fontSize: 29,
              fontWeight: '700',
              color: '#C9C5C4'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="user"
            style={{
              fontSize: 27,
              color: '#C9C5C4'
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavBar;

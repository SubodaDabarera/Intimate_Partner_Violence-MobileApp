import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TestingFile = ({navigation}) => {
  return (
    <View>
      <Text>TestingFile - Ramath</Text>

      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('ShareMyExperiece')}>
        <View>
          <Text>Share my experience</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('ChatList')}>
        <View>
          <Text>Chat list</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('HomeCounsilor')}>
        <View>
          <Text>Counsilor Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('PostBlog')}>
        <View>
          <Text>Post Blog</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TestingFile;

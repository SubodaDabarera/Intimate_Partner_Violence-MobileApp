import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TestingFile = ({navigation}) => {
  return (
    <View>
      <Text>TestingFile</Text>

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
        onPress={() => navigation.navigate('ShareMyExperiece2')}>
        <View>
          <Text>Share my experience 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TestingFile;

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
      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('HomePage')}>
        <View>
          <Text>Home Page</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('ResouseNumbers')}>
        <View>
          <Text>Resouse Numbers Page</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('AddEmergencyNumber')}>
        <View>
          <Text>Add Emergency Number</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('ListOfContacts')}>
        <View>
          <Text>List Of Contacts</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('EmergencyHistory')}>
        <View>
          <Text>Emergency History</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('HistoryDetail')}>
        <View>
          <Text>History Detail</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '48%',
          marginVertical: 14,
        }}
        onPress={() => navigation.navigate('ViewBlogs')}>
        <View>
          <Text>View Blogs</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TestingFile;

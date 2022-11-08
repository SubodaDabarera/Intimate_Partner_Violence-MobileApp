import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestingFile from './project_iml/TestingFile';
// import ShareMyExperience from './project_iml/screens/youngUnmarried/ShareMyExperience';
// import ShareMyExperiece2 from './project_iml/screens/youngUnmarried/ShareMyExperience2';
import HomeCounsilor from './project_iml/screens/counsilor/HomeCounsilor';
import PostBlog from './project_iml/screens/counsilor/PostBlog';
import ShareMyExperiece from './project_iml/screens/youngUnmarried/ShareMyExperience';
import ChatList from './project_iml/screens/youngUnmarried/chat/ChatList';
import Conversation from './project_iml/screens/youngUnmarried/chat/Conversation';
import ExpertProfile from './project_iml/screens/youngUnmarried/chat/ExpertProfile';
import RateYourExperience from './project_iml/screens/youngUnmarried/rateYourExperience/RateYourExperience';
import BottomNavBar from './project_iml/common/BottomNavBar';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
      {/* bottom navigation bar */}
      
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Testing" component={TestingFile} />
          <Stack.Screen name="HomeCounsilor" component={HomeCounsilor} />
          <Stack.Screen name="PostBlog" component={PostBlog} />

          {/* Unmarried women */}
          <Stack.Screen name="ChatList" component={ChatList} />
          <Stack.Screen name="Conversation" component={Conversation} />
          <Stack.Screen name="ExpertProfile" component={ExpertProfile} />
          <Stack.Screen
            name="RateYourExperience"
            component={RateYourExperience}
          />
          <Stack.Screen name="ShareMyExperiece" component={ShareMyExperiece} />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomNavBar />
    </View>
  );
};

export default App;

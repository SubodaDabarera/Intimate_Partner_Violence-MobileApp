import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestingFile from './project_iml/TestingFile';
import ShareMyExperiece from './project_iml/screens/youngUnmarried/ShareMyExperience';
import ChatList from './project_iml/screens/youngUnmarried/chat/ChatList';
import Conversation from './project_iml/screens/youngUnmarried/chat/Conversation';
import ExpertProfile from './project_iml/screens/youngUnmarried/chat/ExpertProfile';
import RateYourExperience from './project_iml/screens/youngUnmarried/rateYourExperience/RateYourExperience';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Testing" component={TestingFile} />
        

        {/* Unmarried women */}
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="Conversation" component={Conversation} />
        <Stack.Screen name="ExpertProfile" component={ExpertProfile} />
        <Stack.Screen name="RateYourExperience" component={RateYourExperience} />
        <Stack.Screen name="ShareMyExperiece" component={ShareMyExperiece} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontFamily: 'Demo_ConeriaScript',
  },
});

export default App;
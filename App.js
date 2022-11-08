import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { Home } from './components/screens/Home';
import TestingFile from './project_iml/TestingFile';
import ShareMyExperience from './project_iml/screens/youngUnmarried/ShareMyExperience';
import ShareMyExperiece2 from './project_iml/screens/youngUnmarried/ShareMyExperience2';
import HomeCounsilor from './project_iml/screens/counsilor/HomeCounsilor';
import PostBlog from './project_iml/screens/counsilor/PostBlog';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Testing" component={TestingFile} />
        <Stack.Screen name="ShareMyExperiece" component={ShareMyExperience} />
        <Stack.Screen name="ShareMyExperiece2" component={ShareMyExperiece2} />
        <Stack.Screen name="HomeCounsilor" component={HomeCounsilor} />
        <Stack.Screen name="PostBlog" component={PostBlog} />
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

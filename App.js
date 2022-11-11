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
import HomePage from './project_iml/screens/oldMarried/HomePage';
import ResouseNumbers from './project_iml/screens/oldMarried/ResouseNumbers';
import AddEmergencyNumber from './project_iml/screens/oldMarried/AddEmergencyNumber';
import ListOfContacts from './project_iml/screens/oldMarried/ListOfContacts';
import EmergencyHistory from './project_iml/screens/oldMarried/EmergencyHistory';
import HistoryDetail from './project_iml/screens/oldMarried/HistoryDetail';
import ViewBlogs from './project_iml/screens/counsilor/ViewBlogs';
import ViewBlog from './project_iml/screens/counsilor/ViewBlog';
import EvidenceCollection from './project_iml/screens/youngMarried/EvidenceCollection';
import EvidenceLog from './project_iml/screens/youngMarried/EvidenceLog';
import ViewIncident from './project_iml/screens/youngMarried/ViewIncident';
import DocumentIncident from './project_iml/screens/youngMarried/DocumentIncident';
import ConfirmationModal from './project_iml/screens/youngMarried/ConfirmationModal';

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
          {/* Counsilor */}
          <Stack.Screen name="Testing" component={TestingFile} />
          <Stack.Screen name="HomeCounsilor" component={HomeCounsilor} />
          <Stack.Screen name="ViewBlogs" component={ViewBlogs} />
          <Stack.Screen name="PostBlog" component={PostBlog} />
          <Stack.Screen name="ViewBlog" component={ViewBlog} />

          {/* Unmarried women */}
          <Stack.Screen name="ChatList" component={ChatList} />
          <Stack.Screen name="Conversation" component={Conversation} />
          <Stack.Screen name="ExpertProfile" component={ExpertProfile} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="ResouseNumbers" component={ResouseNumbers} />
          <Stack.Screen name="ListOfContacts" component={ListOfContacts} />
          <Stack.Screen name="EmergencyHistory" component={EmergencyHistory} />
          <Stack.Screen name="HistoryDetail" component={HistoryDetail} />

          <Stack.Screen
            name="AddEmergencyNumber"
            component={AddEmergencyNumber}
          />
          <Stack.Screen
            name="RateYourExperience"
            component={RateYourExperience}
          />
          <Stack.Screen name="ShareMyExperiece" component={ShareMyExperiece} />

          {/* Young mmarried woman */}
          <Stack.Screen name="EvidenceLog" component={EvidenceLog} />
          <Stack.Screen name="ViewIncident" component={ViewIncident} />
          <Stack.Screen name="DocumentIncident" component={DocumentIncident} />
          <Stack.Screen name="EvidenceCollection" component={EvidenceCollection} />
          <Stack.Screen name="ConfirmationModal" component={ConfirmationModal} />

        </Stack.Navigator>
      </NavigationContainer>
      <BottomNavBar />
    </View>
  );
};

export default App;

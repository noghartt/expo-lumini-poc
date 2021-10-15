import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FindUser } from './screens/FindUser';
import { UserDetails } from './screens/UserDetails';
import { GitHubWebView } from './screens/GitHubWebView';

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="FindUser"
      component={FindUser}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="UserDetails"
      component={UserDetails}
      options={{ headerTitle: 'Profile' }}
    />
    <RootStack.Screen
      name="GitHubWebView"
      component={GitHubWebView}
      options={{ headerTitle: 'GitHub' }}
    />
  </RootStack.Navigator>
);

export type RootStackParamList = {
  FindUser: undefined;
  UserDetails: { username: string };
  GitHubWebView: { uriToNavigate: string };
}

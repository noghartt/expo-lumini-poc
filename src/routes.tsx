import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FindUser } from './screens/FindUser';

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="FindUser" component={FindUser} />
  </RootStack.Navigator>
);

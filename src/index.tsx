import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './routes';

const queryClient = new QueryClient();

const App = () => (
  <SafeAreaProvider>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  </SafeAreaProvider>
);

export default App;

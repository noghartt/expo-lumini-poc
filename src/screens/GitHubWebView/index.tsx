import React from 'react';
import { WebView } from 'react-native-webview';
import { useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../routes';

export const GitHubWebView = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'GitHubWebView'>>();

  return (
    <WebView source={{ uri: params.uriToNavigate }} />
  );
};

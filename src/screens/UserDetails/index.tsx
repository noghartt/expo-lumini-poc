import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import axios from 'axios';

import type { RootStackParamList } from '../../routes';

LogBox.ignoreLogs(['Setting a timer'])

type NavigationHook = NativeStackNavigationProp<RootStackParamList>;

export const UserDetails = () => {
  const navigation = useNavigation<NavigationHook>();
  const { params } = useRoute<RouteProp<RootStackParamList, 'UserDetails'>>();

  const { data, isFetching } = useQuery('user', async () => {
    const response = await axios.get(`https://api.github.com/users/${params.username}`);
    return response.data;
  });

  const handleNavigateToWebView = (uriToNavigate: string) =>
    navigation.navigate('GitHubWebView', { uriToNavigate })

  if (isFetching) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: data?.avatar_url }} style={styles.avatarImage} />
      {data?.name && <Text style={styles.username}>{data?.name}</Text>}
      <Text>@{data?.login}</Text>
      <View style={styles.detailsContainer}>
        <View style={[styles.row, styles.followersContainer]}>
          <Text>{data?.followers} followers</Text>
          <Text>{data?.following} following</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Acessar o GitHub"
            onPress={() => handleNavigateToWebView(data?.html_url)}
          />
          <Button
            title="Acessar o gist"
            onPress={() => handleNavigateToWebView(`https://gist.github.com/${data?.login}`)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 24,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: 10,
    flex: 0.5,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followersContainer: {
    width: 180,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flex: 0.5,
  },
  username: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 12,
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  }
});

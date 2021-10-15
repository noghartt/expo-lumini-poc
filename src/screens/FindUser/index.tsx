import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Keyboard } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../routes';

type NavigationHook = NativeStackNavigationProp<RootStackParamList>;

export const FindUser = () => {
  const navigation = useNavigation<NavigationHook>();

  const [value, setValue] = useState('');

  return (
    <Pressable style={StyleSheet.absoluteFill} onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Input
          value={value}
          onChangeText={e => setValue(e)}
          placeholder="Insira algum username"
          leftIcon={<Icon name="user" size={24} color="black" />}
          inputStyle={{ marginLeft: 10, color: '#000' }}
        />
        <Button
          title="Procurar"
          containerStyle={styles.searchButton}
          onPress={() => navigation.navigate('UserDetails', { username: value })}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  searchButton: {
    width: '100%',
  }
});

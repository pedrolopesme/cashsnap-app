import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from 'expo-web-browser';

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from "firebase/auth";

import {auth} from "./services/firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import SingInScreen from './screens/SingInScreen';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = useState({});
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:"175776642411-7tv0sq7o9095tmfippc29pspbau2kk0p.apps.googleusercontent.com",
    androidClientId: "175776642411-livp1q7i68dd7qb7glekthlg0vdsj91e.apps.googleusercontent.com",
  }); 

  useEffect(() => {
    if(response?.type === "success"){
      const {id_token} = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <SingInScreen prompt={promptAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

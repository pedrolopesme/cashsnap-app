import React, { useEffect, useState } from "react";
import Heading from "../../ui/Heading";
import { Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import auth from "@react-native-firebase/auth";
import { User } from "firebase/auth";

export default function LoginForm() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>();

  function onAuthStateChanged(user: User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // async function handleSubmit(e) {
  //     e.preventDefault();
  //     if (!isSigningIn) {
  //         setIsSigningIn(true);
  //         await signInWithEmailAndPassword({ email, password });
  //     }
  // }

  // function handleGoogleSignIn(e) {
  //     e.preventDefault();
  //     if (!isSigningIn) {
  //         setIsSigningIn(true);
  //         signInWithGoogle().catch(err => {
  //             setIsSigningIn(false);
  //             console.error(err);
  //             alert(err.message);
  //         });
  //     }

  // }
}

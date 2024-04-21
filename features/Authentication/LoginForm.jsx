import React, { useState } from 'react'
import Heading from '../../ui/Heading';
import { View } from 'react-native';

export default function LoginForm() {
    // const { isLogged } = useAuth();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [isSigningIn, setIsSigningIn] = useState(false);

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

    return (
        <View>
            <Heading>Login</Heading>
        </View>
    )
}

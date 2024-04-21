import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        // contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
    </Stack.Navigator>
  );
}

// function AuthenticatedStack() {
//   const { logout } = useContext(AuthContext);
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: "white",
//         contentStyle: { backgroundColor: Colors.primary100 },
//       }}
//     >
//       <Stack.Screen
//         name="Welcome"
//         component={WelcomeScreen}
//         options={{
//           headerRight: ({ color }) => (
//             <IconButton icon="exit" color={color} size={24} onPress={logout} />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function Navigation() {
//   const { isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />} */}
      <AuthStack />
    </NavigationContainer>
  );
}

export function Root() {
//   const [loading, setLoading] = useState(true);
//   const { login } = useContext(AuthContext);
//   useEffect(() => {
//     AsyncStorage.getItem("currentUser").then((user) => {
//       if (user) {
//         login(JSON.parse(user));
//       }
//       setLoading(false);
//     });
//   }, []);

//   if (loading) return <AppLoading />;
  return <Navigation />;
}

import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/signup';
import Signin from './src/screens/signin';
import Home from './src/screens/home';
import Edit from './src/screens/edit';
import Create from './src/screens/create';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgw6zqtjwKggL4V0dhQyn7Bv6jTvKMkmo",
  authDomain: "note-app-f9f89.firebaseapp.com",
  projectId: "note-app-f9f89",
  storageBucket: "note-app-f9f89.appspot.com",
  messagingSenderId: "992703777733",
  appId: "1:992703777733:web:2d542d931e22eed88699ac"
};

const app = initializeApp(firebaseConfig);

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: "#fff",
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  const user = false; // not authentacad
  return (
    <NavigationContainer theme={AppTheme}>
        <Stack.Navigator>
          {
            user ? (
            <>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Edit' component={Edit}/>
            <Stack.Screen name='Create' component={Create}/>
            </>
            ) : (
              <>
              <Stack.Screen name='Signin' component={Signin} options={{ headerShown: false}}/>
              <Stack.Screen name='Signup' component={Signup}/>
              </>
            )
          }
          
        </Stack.Navigator>
    </NavigationContainer>
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

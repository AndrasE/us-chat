import React, { useState, createContext, useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from "firebase/auth";

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";

const Stack = createStackNavigator();
const AuthenticationUserContext = createContext({});

const AuthenticationUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticationUserContext.Provider value={{user, setUser}}>
       { children }
       </AuthenticationUserContext.Provider>
  )
}


function ChatStack () {
  return (
    <Stack.Navigator defaultScreenOptions={Home}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

function AuthStack () {
  <Stack.Navigator defaultScreenOptions={Login}>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Signup" component={Signup} />
</Stack.Navigator>
}

function RootNavigator () {
  return (
    <NavigationContainer>
      <ChatStack/>
    </NavigationContainer>
  )
}

export default function App() {
  return <RootNavigator/>
}

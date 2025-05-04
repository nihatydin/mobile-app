import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {Ionicons} from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function StackNavigator({isLoggedIn, setIsLoggedIn}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login">
          {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="MainTabs" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
}

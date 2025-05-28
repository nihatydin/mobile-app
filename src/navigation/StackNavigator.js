import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GameDetailScreen from "../screens/GameDetailScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {Ionicons} from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator({setIsLoggedIn}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#008000",
        tabBarInactiveTintColor: "#808080",
        tabBarStyle: {
          backgroundColor: "#f8f8f8",
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
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
        children={() => <SettingsScreen setIsLoggedIn={setIsLoggedIn} />}
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
        <>
          <Stack.Screen name="MainTabs">
            {() => <TabNavigator setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>

          <Stack.Screen name="GameDetail" component={GameDetailScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

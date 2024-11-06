import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "@/css/global.css"

import { useColorScheme } from '@/hooks/useColorScheme';
import Home from '@/screens/Home';
import Profile from '@/screens/Profile';
import Detail from '@/screens/Detail';
import Login from '@/screens/Auth/Login';
import Register from '@/screens/Auth/Register';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabNavigator = () => {
  return <Tab.Navigator>
    <Tab.Screen name='Home' options={{headerShown: false}} component={Home}/>
    <Tab.Screen name='Profile' options={{headerShown: false}} component={Profile}/>
    <Tab.Screen name='Login' options={{headerShown: false}} component={Login}/>
  </Tab.Navigator>
}

export const StackNavigator = () => {
  return <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name='HomeScreen' component={TabNavigator}/>
    <Stack.Screen name='Detail' component={Detail}/>
    <Stack.Screen name='Register' options={{headerShown: false}} component={Register}/>
  </Stack.Navigator>
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer independent={true}>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

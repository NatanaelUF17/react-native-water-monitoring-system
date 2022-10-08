import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect, useCallback } from 'react';
import { useAssets } from 'expo-asset';
import Dashboard from './views/Dashboard';
import Reports from './views/Reports';
import Header from './components/Header';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [assets, error] = useAssets([
    require('./assets/logo.png'),
    require('./assets/user-avatar.png')
  ]);

  const loadFonts = async () => {
    try {
      return await Font.loadAsync({
        'montserrat-black': require('./assets/fonts/Montserrat-Black.ttf'),
        'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'montserrat': require('./assets/fonts/Montserrat.ttf'),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setFontsLoaded(true);
    }
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  useEffect(() => {
    loadFonts();
  }, [])

  if (!fontsLoaded || error || !assets || (assets && assets.length < 0)) return null;

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Dashboard") {
            return <Feather name="home" size={24} color={'white'} />
          } else if (route.name === "Reports") {
            return <Ionicons name="information-circle-outline" size={24} color={'white'} />
          }
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#3B70EE'
        }
      })}>
        <Tab.Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            headerTitle: () => <Header logo={assets[0]} avatar={assets[1]} />,
            headerStyle: styles.dashboardHeaderStyle,
            headerShown: true,
          }}
        />
        <Tab.Screen
          name='Reports'
          component={Reports}
          options={{
            headerTitle: () => <Header logo={assets[0]} avatar={assets[1]} />,
            headerStyle: styles.dashboardHeaderStyle,
            headerShown: true
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  dashboardHeaderStyle: {
    backgroundColor: 'white',
    shadowColor: "#0000000F",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.55,
    shadowRadius: 5,
    elevation: 21,
  }
});
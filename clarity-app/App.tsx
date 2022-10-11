import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect, useCallback } from 'react';
import Onboarding from './views/Onboarding';
import Navigation from './common/Navigation';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    try {
      return await Font.loadAsync({
        'montserrat-black': require('./assets/fonts/Montserrat-Black.ttf'),
        'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
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

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './views/Dashboard';
import Reports from './views/Reports';
import Header from './components/Header';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
            headerTitle: () => <Header />,
            headerStyle: styles.dashboardHeaderStyle,
            headerShown: true,
          }}
        />
        <Tab.Screen
          name='Reports'
          component={Reports}
          options={{
            headerTitle: () => <Header />,
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
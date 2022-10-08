import React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useAssets } from 'expo-asset';
import Dashboard from '../views/Dashboard';
import Reports from '../views/Reports';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

interface Props {
    route: any,
}

export default function Navigation({ route }: Props) {
    const { name } = route.params;
    const [assets, error] = useAssets([
        require('../assets/logo.png'),
        require('../assets/user-avatar.png')
    ]);

    const handleTabBarIcons = (route: any, focused: any, color: any, size: any) => {
        if (route.name === "Dashboard") {
            return <Feather name="home" size={24} color={'white'} />
        } else if (route.name === "Reports") {
            return <Ionicons name="information-circle-outline" size={24} color={'white'} />
        }
    }

    if (!assets || (assets && assets.length < 0) || error) return null;

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return handleTabBarIcons(route, focused, color, size);
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#3B70EE'
                }
            })}>
                <Tab.Screen
                    name='Dashboard'
                    children={() => <Dashboard name={name} />}
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
    )
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
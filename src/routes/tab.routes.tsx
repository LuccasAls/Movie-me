
import React from "react";
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home';
import { SearchScreen } from '../screens/SearchScreen';
import { TicketScreen } from '../screens/TicketScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { theme } from "../theme/theme";

import Icon from 'react-native-vector-icons/MaterialIcons'
import Feater from 'react-native-vector-icons/Feather'
import { ButtonTicket } from "../components/ButtonTicket";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
    return(
        <Tab.Navigator
            
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#1D2440", 
                    borderTopColor: '#0007249d',
                    borderTopWidth: 1.5,
                    height: 70
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true
                    
                
            }}>
        <Tab.Screen 
            component={Home} 
            name="Home"
            options={{

                tabBarIcon: ({size, color}) => (
                    <Icon
                        name="home"
                        size={30}
                        color={color}
                    />
                )

            }}
        />
        <Tab.Screen 
            component={SearchScreen} 
            name="SearchScreen"
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feater
                        name="search"
                        size={30}
                        color={color}
                    />
                )
            }}
        />
        <Tab.Screen 
            component={TicketScreen} 
            name="TicketScreen"
            options={{
                tabBarIcon: ({size, color}) => (
                    <ButtonTicket size={size} color={color} 
                       
                    />
                )
            }}
        />
        <Tab.Screen 
            component={FavoriteScreen} 
            name="FavoriteScreens"
            options={{
                tabBarIcon: ({size, color}) => (
                    <Icon
                        name="bookmark-border" // bookmark-border
                        size={30}
                        color={color}
                    />
                )
            }}
        />
        <Tab.Screen 
            component={ProfileScreen} 
            name="ProfileScreen"
            options={{
                tabBarIcon: ({size, color}) => (
                    <Icon
                        name="person" 
                        size={30}
                        color={color}
                    />
                )
            }}
        />
    </Tab.Navigator>
    )
}
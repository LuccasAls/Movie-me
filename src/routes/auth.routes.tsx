import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { SingIn } from '../screens/SingIn'
import { SingUp } from '../screens/SingUp'

const AppStack = createStackNavigator();

export function AuthRoutes() {  

    return (
        <AppStack.Navigator
            
            screenOptions={{ 
                headerShown: false,
                gestureDirection: 'horizontal',
                
                
                }}
            
            
        >
            <AppStack.Screen name="SingIn" component={SingIn}/>
            <AppStack.Screen name="SingUp" component={SingUp}/>
        </AppStack.Navigator>

    )
}
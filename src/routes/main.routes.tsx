import React from 'react';
import { createStackNavigator, CardStyleInterpolators }  from '@react-navigation/stack'

import { MovieDetails } from '../screens/MovieDetails';
import { TabRoutes } from './tab.routes';
const Stack = createStackNavigator()

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

export function MainRoutes() {
    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
        >
            <Stack.Screen 
                name="TabRoutes" 
                component={TabRoutes} 
            />
            <Stack.Screen 
                name="MovieDetails" 
                component={MovieDetails}
            />

        </Stack.Navigator>
    )
}
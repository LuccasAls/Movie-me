import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes';

import { Home } from '../screens/Home';
import  auth  from '@react-native-firebase/auth';
import { MainRoutes } from './main.routes';

export function Routes() {
    const [user, setUser] = useState(null)

    useEffect(() => {
       const unsubscribed = auth().onAuthStateChanged((_user )=> {
        setUser(_user);
       })

       return unsubscribed
    }, [])
    
    return (
        <NavigationContainer>
           {!user ? <AuthRoutes/> : <MainRoutes/>}
        </NavigationContainer>
    )
}
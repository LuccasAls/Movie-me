import React, { ReactNode } from 'react'
import { AuthProvider } from './auth'
import { FilmsProvider } from './films'

type AppProviderProps = {
    children: ReactNode
}
export function AppProvider({children}: AppProviderProps){
    return (
        
        <AuthProvider>
            <FilmsProvider>
                {children}
            </FilmsProvider>
        </AuthProvider>
    )
}
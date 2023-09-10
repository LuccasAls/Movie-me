import React, {createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth'
import { VerifyErroCode } from '../auth/VerifyErroCode';
import  firebase from '@react-native-firebase/firestore';
import {useAsyncStorage} from '@react-native-async-storage/async-storage'
import { MMKV, useMMKVObject } from 'react-native-mmkv'

type User = {
    id: string;
    
    
}

type LoginProps = {
    email: string;
    password?: string;
    name?: string;
}

type AuthContextData = {
    forgotPassword: ({}: LoginProps) => Promise<void>
    singIn: ({}: LoginProps) => Promise<void>,
    singUp: ({} : LoginProps) => Promise<void>,
    loading: Boolean;
    idUser?
}
type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);


function AuthProvider({children} : AuthProviderProps) {
    const [loading, setLoading] = useState(false);
    const {getItem, setItem} = useAsyncStorage("@movie-me:user")
    
    

   

    async function singIn({email, password}: LoginProps) {
        setLoading(true)
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (item) => {
            const user = await firebase()
                .collection('users')
                .where('id', '==', item.user.uid)
                .get()

            const res =  user.docs.map((doc) => {
                return {
                    ... doc.data()
                } 
            })
            
            
            await setItem(JSON.stringify(res))

            
        })
        .catch(error => {
            let errorMessage = VerifyErroCode(error.code);
            Alert.alert("Erro ao logar", errorMessage)
        })
        .finally(() =>  setLoading(false));
            
    }
   
    
       

    async function forgotPassword({email}: LoginProps) {
        auth()
        .sendPasswordResetEmail(email)
        .then(() => Alert.alert("Redefinição de senha!", "Enviamos um e-mail para a sua redefinição"))
        .catch(error => {
        let errorMessage = VerifyErroCode(error.code);
        Alert.alert("Erro ao logar", errorMessage)
        })
    }

    async function singUp({email, password, name} : LoginProps) {
        setLoading(true)
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then( async (item) => {
            firebase()
            .collection('users')
            .add({
                id: item.user.uid,
                email,
                name
            })
            const user = await firebase()
                .collection('users')
                .where('id', '==', item.user.uid)
                .get()

            const res = user.docs.map((doc) => {
                return {
                    ... doc.data()
                } as User[]
            })
            // setUser(item.user.uid)
            await setItem(JSON.stringify(res))
           
            



            .then(() => Alert.alert("Conta criada com sucesso", "Sua conta foi criada, aproveite ao máximo seu aplicativo"))
            .catch(() => Alert.alert("Usuário não foi criado"))
        })
        .catch(error => {
        let errorMessage = VerifyErroCode(error.code);
        Alert.alert("Erro ao logar",errorMessage)
        })
        .finally(() =>  setLoading(false));
    }

    return (
        <AuthContext.Provider
            value={{
                loading,
                singIn,
                forgotPassword,
                singUp,
                
                
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context;
}

export {
    AuthProvider,
    useAuth
}
import React, {useState, useEffect, useCallback} from 'react';
import { Container, Title, ButtonSingOut, Context, IconProfile, ProfileHeader, TitleContent, EmailUser, SingOutContent, TextSingOut, NameContent, TitleGetting, DetailsContent, DetailsButton, Line, SpanText} from './styles';
import auth  from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/Entypo'
import MateriaIcons from 'react-native-vector-icons/MaterialIcons'
import Fontsito from 'react-native-vector-icons/Fontisto'

import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {ActivityIndicator} from 'react-native'
import { theme } from '../../theme/theme';
import { useFilms } from '../../hooks/films';
import { Loading } from '../../components/Loading';

import { MMKV } from 'react-native-mmkv'
 
const storage = new MMKV


export function ProfileScreen() {
  const { removeItem, getItem } = useAsyncStorage("@movie-me:user")
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { clearId } = useFilms()


  useFocusEffect(useCallback(() => {
      async function loadingALL() {
      const response = await getItem()
      const data = response ? JSON.parse(response) : [];
      setUser(data)
    }
    loadingALL()
    setIsLoading(true)
  }, []))



  async function handleSingOut() {
    // storage.set('user', JSON.stringify({id : ' '}))
    auth().signOut()
    clearId()
    await removeItem()

  }

  const name = String(user[0]?.name).split(" ")
  const firstName = name[0]


  return (
    <Container>
      {isLoading ? 
          <Context>
            <ProfileHeader>
              <IconProfile>
                <MateriaIcons 
                  name="person"
                  color={'#fff'}
                  size={30}
                />
              </IconProfile>
              <TitleContent>
                <NameContent>
                  <TitleGetting style={{color: theme.colors.primary}}>Olá,</TitleGetting>
                  <Title>{firstName}!</Title>
                </NameContent>
                <EmailUser>{user[0]?.email}</EmailUser>
              </TitleContent>
            </ProfileHeader>
            <DetailsContent>
              <DetailsButton>
                  <MateriaIcons
                    name="bookmark-border"
                    color={theme.colors.headingPlaceholder}
                    size={30}
                  />
                <SpanText>Meus Favoritos</SpanText>
              </DetailsButton>
              <Line/>
              <DetailsButton>
                <Fontsito 
                  name="ticket"
                  color={theme.colors.headingPlaceholder}
                  size={30}
                />
                <SpanText>Meus Tickets</SpanText>
              </DetailsButton>
            </DetailsContent>
            <SingOutContent>
              <TextSingOut>Sair</TextSingOut>
              <ButtonSingOut onPress={handleSingOut}>
                <Icon 
                  name="log-out"
                  size={25}
                  color={theme.colors.circleRed}
                />
              </ButtonSingOut>
            </SingOutContent>
          </Context>
        :  
        <Loading/> 
      }
    </Container>
  );
}
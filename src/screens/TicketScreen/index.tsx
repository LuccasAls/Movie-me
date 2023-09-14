import React, { useState, useEffect } from 'react';
import * as S from './styles';

import firestore from '@react-native-firebase/firestore'
import { useFilms } from '../../hooks/films';
import { IMAGE_URL } from '../../services/tmdb';
import Icon from 'react-native-vector-icons/MaterialIcons'


type MyTicketsProps = {
  id: string;
  data: any,
  userId: string;
}

export function TicketScreen({navigation}) {
  const { byId } = useFilms()
  const [myTickets, setMyTickets] = useState<MyTicketsProps[]>()
  const [] = useState()


  useEffect(() => {
    const subscribed =
      firestore()
        .collection('UsersTickets')
        .where('userId', '==', byId)
        .onSnapshot(querySnapshot => {
          const data = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          }) as MyTicketsProps[]
          setMyTickets(data)

        })


    return () => subscribed()
  }, [])

  function handleMyTicketScreen(item) {
    navigation.navigate('MyTicketScreen', {id: item})
  }

  return (
    <S.Container>

      <S.Title>Meus Ingressos</S.Title>

      <S.TicketContainer>
        <S.ListTickets
          showsVerticalScrollIndicator={false}
          data={myTickets}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={S.Separator}
          renderItem={({ item }) => (
            <S.TicketContent onPress={() => handleMyTicketScreen(item.id)} >
              
                <S.TicketMovieImageContainer>
                  <S.TicketMovieImage source={{ uri: `${IMAGE_URL}${item.backdrop_path}` }} />
                </S.TicketMovieImageContainer>
                <S.Line />
                <S.TicketDetails>
                  <S.TicketBorder>
                    <S.TicketText>{item.title}</S.TicketText>
                    <S.TicketDescriptions>
                      <S.TicketSeatsContent>
                        <Icon
                          name="weekend"
                          color={'black'}
                          size={20}
                          />
                          <S.TicketSeatsText>{item.seat[0]}</S.TicketSeatsText>
                      </S.TicketSeatsContent>
                      <S.TicketTimeContent>
                      <Icon
                          name="access-time"
                          color={'black'}
                          size={20}
                          />
                        <S.TicketTimeText>{item.time}</S.TicketTimeText>
                      </S.TicketTimeContent>
                    </S.TicketDescriptions>
                  </S.TicketBorder>
                </S.TicketDetails>
                <S.Circle />
                <S.CircleO />
                <S.CircleA />
                <S.CircleC />
              
            </S.TicketContent>
          )}

        />

      </S.TicketContainer>

    </S.Container>
  );
}
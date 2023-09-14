import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore'
import * as S from './styles';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { IMAGE_URL } from '../../services/tmdb';
import LinearGradient from 'react-native-linear-gradient';
import { Loading } from '../../components/Loading';
import barCode from '../../assets/barcode.png'
import Icon from 'react-native-vector-icons/MaterialIcons'

type TicketProps = {
  backdrop_path: string,
  data: string,
  day: string,
  time: string,
  title: string,
  seat: any
}



export function MyTicketScreen({ route, navigation }) {
  const { id } = route.params
  const [ticket, setTicket] = useState<TicketProps>()

  const month = {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro',
  }

  useEffect(() => {
    const subscribed =
      firestore()
        .collection('UsersTickets')
        .doc(id)
        .onSnapshot(querySnapshot => {
          const data = querySnapshot.data() as TicketProps

          setTicket(data)

        })

    return () => subscribed()
  }, [])




  return (
    <S.Container>


      <HeaderNavigation goBack={() => navigation.navigate('TicketScreen')} />
      <S.BackdropContainer source={{ uri: `${IMAGE_URL}${ticket?.backdrop_path}` }} blurRadius={10} />

      <S.TicketContainer>
        <S.PosterMovie source={{ uri: `${IMAGE_URL}${ticket?.backdrop_path}` }}>
          <LinearGradient style={{ height: 380, width: '100%' }} colors={['transparent', 'transparent', '#ffc800']}>

          </LinearGradient>
        </S.PosterMovie>
        <S.TicketDetails>
          <S.Line />
          <S.TicketDetailsContent>

            <S.TicketTitle>{ticket?.title}</S.TicketTitle>
            <S.TicketDateContainer>

              <S.BoxTicketDetails>
                <S.TicketDateText >{ticket?.data.split('/')[0]}</S.TicketDateText>
                <S.TicketMonthText>{month[Number(ticket?.data.split('/')[1])]}</S.TicketMonthText>
              </S.BoxTicketDetails>
              <S.LineSeparator />
              <S.BoxTicketSeats>
                <S.SeatsContainer>
                  <Icon
                    name="weekend"
                    color={'white'}
                    size={20}
                  />
                  <S.SeatsText>{ticket?.seat[0]}</S.SeatsText>
                </S.SeatsContainer>
                <S.TimeContainer>
                  <Icon
                    name="access-time"
                    color={'white'}
                    size={20}
                  />
                  <S.TimeText>{ticket?.time}</S.TimeText>
                </S.TimeContainer>
              </S.BoxTicketSeats>
            </S.TicketDateContainer>
          </S.TicketDetailsContent>
        </S.TicketDetails>
        <S.BarCodeContainer>
          <S.BarCodeImage source={barCode} />
        </S.BarCodeContainer>
      </S.TicketContainer>

    </S.Container>
  );
}
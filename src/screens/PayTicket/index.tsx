import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Toast from 'react-native-toast-message';

import { timeArray, generateData, generateSeats } from '../../utils/BaseArray';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Seat from 'react-native-vector-icons/MaterialIcons'
import { IMAGE_URL } from '../../services/tmdb';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import firestore from '@react-native-firebase/firestore';
import { useFilms } from '../../hooks/films';
import { HeaderNavigation } from '../../components/HeaderNavigation'
import { firebase } from '@react-native-firebase/auth';

type TicketsProps = {
    date: number,
    movieId: number,
    day: string,
    time: string,
    seat: any[]
}


export function PayTicket({ navigation, route }) {
    const { byId } = useFilms()

    const ticketDefault = {
        date: true,
        time: true,
    }

    const [acentos, setAcentos] = useState<any[]>([])
    const [tickets, setTickets] = useState<any>(ticketDefault)
    const { movieId, backdrop_path, title } = route.params

    const [dateArray, setDateArray] = useState<any[]>(generateData())
    const [selectedDateIndex, setSelectedDateIndex] = useState<number>()
    const [price, setPrice] = useState<number>(0);
    const [twoSeatArray, setTwoSeatArray] = useState<any[][]>()
    const [selectedSeatArray, setSelectedSeatArray] = useState([]);
    const [selectedTimeIndex, setSelectedTimeIndex] = useState<number>()
    const [dateMovieTicket, setDateMovieTicket] = useState<any>();
    const [timeMovieTicket, setTimeMovieTicket] = useState<any>();

    const verificationDataBase = firestore().collection('tickets').where('movieId', '==', movieId).where('date', '==', ticketDefault?.date ? tickets?.date : dateArray[0].date).where('time', '==', ticketDefault?.time ? tickets?.time : timeArray[0])
    const isUserTicket = firestore()
        .collection('UsersTickets')
        .where('movieId', '==', Number(movieId))
        .where('data', '==', tickets?.date)
        .where('time', '==', timeArray[0])
        .where('userId', '==', byId)

    useEffect(() => {

        const subscribed = verificationDataBase
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as any[]
                setAcentos(data)
                data[0]?.seat ? setTwoSeatArray(generateSeats(data[0]?.seat)) : setTwoSeatArray(generateSeats([]))
            })

        return () => subscribed()
    }, [selectedTimeIndex, selectedDateIndex])


    function handleSelectItemDate(item: number, day: string, date: string) {
        setSelectedDateIndex(item == selectedDateIndex ? null : item)
        const data = { day: day, date: date }
        tickets.date = date
        setDateMovieTicket(item == selectedDateIndex ? false : data)
        setSelectedSeatArray([])
        setPrice(0)

    }
    function handleSelectItemTime(item: number, time: string) {
        setSelectedTimeIndex(item == selectedTimeIndex ? null : item)
        tickets.time = time

        setTimeMovieTicket(item == selectedTimeIndex ? false : { time: time })

        setSelectedSeatArray([])
        setPrice(0)
    }
    async function handleBuyTicket() {
        if (dateMovieTicket && timeMovieTicket) {
            if (selectedSeatArray.length > 0) {

                const data = Object.assign(dateMovieTicket, timeMovieTicket, { movieId: movieId }, { seat: selectedSeatArray }) as TicketsProps

                const isTicket = await verificationDataBase.get()
                const userIsTicket = await isUserTicket.get()

                if (isTicket.empty) {
                    firestore()
                        .collection('tickets')
                        .add(data)

                    if (userIsTicket.empty) {
                        console.log('ticket nao existe [1]')
                    } else {
                        console.log('ticket ja existe [1]')
                    }


                    firestore()
                        .collection('UsersTickets')
                        .add({

                            userId: byId,
                            data: data.date,
                            movieId: data.movieId,
                            day: data.day,
                            seat: data.seat,
                            time: data.time,
                            backdrop_path: backdrop_path,
                            title: title

                        }).then((doc) => {
                            console.log(doc.id)
                            navigation.navigate('MyTicketScreen', { id: doc.id })
                            Alert.alert("Compra concluída", "Parabéns por comprar seu ingresso!")
                        })


                } else {
                    firestore()
                        .collection('tickets')
                        .doc(acentos[0].id)
                        .update({
                            seat: acentos[0].seat.concat(selectedSeatArray)
                        })
                        .then(() => {

                            if (!userIsTicket.empty) {


                                const id = userIsTicket.docs.map(doc => doc.id)
                                const seats = userIsTicket.docs.map(doc => { return { ...doc.data() } })
                              

                                firestore()
                                    .collection('UsersTickets')
                                    .doc(id[0])
                                    .update({
                                        seat: seats[0].seat.concat(selectedSeatArray)
                                    })
                                    .then((doc) => {
                                        Alert.alert("Compra concluída")
                                        navigation.navigate('MyTicketScreen', { id: id[0] })
    
                                    })
                                    .catch((err) => console.log(err))

                                   

                            } else {
                                firestore()
                                .collection('UsersTickets')
                                .add({
    
                                    userId: byId,
                                    data: data.date,
                                    movieId: data.movieId,
                                    day: data.day,
                                    seat: data.seat,
                                    time: data.time,
                                    backdrop_path: backdrop_path,
                                    title: title
                                })
                                .then((doc) => {
                                    Alert.alert("Compra concluída")
                                    navigation.navigate('MyTicketScreen', { id: doc.id })
                                    
                                })
                            }



                            

                        })
                        .catch((error) => Alert.alert("nao foi possível cadastrar", error))
                }



            } else {
                Toast.show({
                    type: 'info',
                    text1: 'Atenção',
                    text2: 'Verifique se o acento selecionado corretamente!'
                })
            }
        } else {
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: 'Verifique se a data e hora estão selecionado corretamente!'
            })
        }

    }
    function goBackNavigation() {
        navigation.goBack()
    }
    function selectedSeat(index, subindex, num) {


        if (dateMovieTicket && timeMovieTicket) {
            if (!twoSeatArray[index][subindex].taken) {
                let array: any = [...selectedSeatArray]
                let temp = [...twoSeatArray]
                temp[index][subindex].selected = !temp[index][subindex].selected;

                if (!array.includes(num)) {
                    array.push(num)
                    setSelectedSeatArray(array)
                } else {
                    const tempIndex = array.indexOf(num)
                    if (tempIndex > -1) {
                        array.splice(tempIndex, 1)
                        setSelectedSeatArray(array)
                    }
                }
                setPrice(array.length * 15.00)
                setTwoSeatArray(temp)
            }


        } else {
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: 'Verifique se a data e hora estão selecionado corretamente!'
            })

        }






    }

    return (
        <S.Container>
            <S.BackdropMovie source={{ uri: `${IMAGE_URL}${backdrop_path}` }}>
                <LinearGradient style={{ flex: 1 }} colors={['#38436d73', '#1b213b']}>
                    <HeaderNavigation goBack={goBackNavigation} />
                    <S.BackdropContent>
                        <S.SeatsContainer>
                            <BlurView
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                }}
                                blurType='light'
                                blurAmount={2}
                            />
                            <S.SeatsGroup>

                                {
                                    twoSeatArray?.map((item, index) => (
                                        <S.SeatsRow key={index}>
                                            {item.map((subItem, subindex) => (
                                                <S.Seat key={subItem.number} onPress={() => { selectedSeat(index, subindex, subItem.number) }}>
                                                    <Seat
                                                        name="weekend"
                                                        color={subItem.taken ? 'grey' : subItem.selected ? '#ffcc00' : 'white'}
                                                        size={25}
                                                    />
                                                </S.Seat>
                                            ))}
                                        </S.SeatsRow>
                                    ))

                                }
                            </S.SeatsGroup>
                        </S.SeatsContainer>
                    </S.BackdropContent>
                </LinearGradient>
            </S.BackdropMovie>

            <S.Content>
                <S.TitleMovie>Filme: {title}</S.TitleMovie>
                <S.DateContent>
                    <S.DateTitle>Data : </S.DateTitle>

                    <S.DateList
                        ItemSeparatorComponent={S.DateSeparator}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={item => item.id}
                        data={dateArray}
                        renderItem={({ item, index }) => (
                            <S.DateDetails onPress={() => handleSelectItemDate(index, item.day, item.date)} style={index === selectedDateIndex ? { backgroundColor: '#ffcc00' } : {}}>
                                <S.DateDayText>{item.date.split("/")[0]}</S.DateDayText>
                                <S.DateWeekText>{item.day}</S.DateWeekText>
                            </S.DateDetails>
                        )}
                    />
                </S.DateContent>
                <S.TimeContent>
                    <S.TimeTitle>Hora : </S.TimeTitle>
                    <S.TimeList
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={S.TimeSeparator}
                        horizontal
                        data={timeArray}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (
                            <S.TimeDetails onPress={() => handleSelectItemTime(index, item)} style={index === selectedTimeIndex ? { backgroundColor: '#ffcc00' } : {}}>
                                <S.TimeText>{item}</S.TimeText>
                            </S.TimeDetails>
                        )}
                    />
                </S.TimeContent>
                <S.PriceContent>
                    <S.PriceDetails>
                        <S.PriceTotalText>Total Ingressos: {selectedSeatArray.length}</S.PriceTotalText>
                        <S.PriceText>R$ {price},00</S.PriceText>
                    </S.PriceDetails>
                    <S.BuyTicketButton onPress={handleBuyTicket}>
                        <S.BuyTicketText>Comprar</S.BuyTicketText>
                    </S.BuyTicketButton>
                </S.PriceContent>

            </S.Content>
        </S.Container>
    );
}
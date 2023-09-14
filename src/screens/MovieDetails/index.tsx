import React, { useEffect, useState } from 'react';
import { Container, BannerFilms, Context, BuyTicketButton, BuyTicketText } from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

import tmdb from '../../services/tmdb';
import { BlurView } from '@react-native-community/blur';
import firestore from '@react-native-firebase/firestore'

import { IMAGE_URL } from '../../services/tmdb';
import Toast from 'react-native-toast-message';
import { useFilms } from '../../hooks/films';
import { Loading } from '../../components/Loading';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import {MovieDescriptions } from '../../components/MovieDescriptions'
import { CastDescriptions } from '../../components/CastDescriptions';

export function MovieDetails({ navigation, route }) {
    const [getMovie, setGetMovie] = useState(null)
    const [getCast, setGetCast] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isFavorite, setIsFavorite] = useState<boolean>()
    const { byId } = useFilms()

    const { movie } = route.params
    const itemRef = firestore().collection('favorites')


    // Adicionando Filme aos Favoritos 
    async function handleNewFavorite() {
        setIsFavorite(false)
        const querySnapshot = await itemRef.where('movieId', '==', movie).where('user', '==', byId).get()
        if (querySnapshot.empty) {
            await itemRef.add({
                user: byId,
                movieId: getMovie?.id,
                title: getMovie?.title,
                vote_average: getMovie?.vote_average,
                poster_path: getMovie?.poster_path,
                backdrop_path: getMovie?.backdrop_path,

            })
                .then(() => {
                    Toast.show({
                        type: 'success',
                        text1: 'Favoritado',
                        text2: 'Filme adicionado aos favoritos com sucesso',
                    })

                })
        } else {
            Toast.show({
                type: 'error',
                text1: 'Filme já está favoritado',
                text2: 'Não foi possível adicionar',
            })
        }

    }

    useEffect(() => {
        // Puxando Filme e os atores principais 
        const loadingALL = async () => {

            // Busca se o Filme está na lista de favoritos do usuário conectado
            const querySnapshot = await itemRef.where('movieId', '==', movie).where('user', '==', byId).get()

            const [list, cast] = await Promise.all([
                tmdb.getMovie(movie),
                tmdb.getCast(movie)
            ])
            setGetMovie(list[0].info)
            setGetCast(cast[0].info.cast)
            if (list && cast) {
                setIsLoading(true)
            }
            // Adicionando o resultado da busca dos favoritos
            setIsFavorite(querySnapshot.empty)
        }
        loadingALL()
    }, [])

    function navigateToBuyTicket() {
        navigation.navigate('PayTicket', { movieId: getMovie?.id, backdrop_path: getMovie.poster_path, title: getMovie.title })
    }

    return (
        <>
            {isLoading ?
                <Container>
                    <BannerFilms source={{ uri: `${IMAGE_URL}${getMovie.poster_path}` }}>
                        <HeaderNavigation 
                            goBack={() => navigation.goBack()} 
                            heart handleNewFavorite={handleNewFavorite} 
                            favorite={isFavorite}
                        />
                    </BannerFilms>
                    <Context>
                        <BlurView
                            blurAmount={5}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                backgroundColor: "#6286af44",

                            }}
                        />
                        <MovieDescriptions 
                            getMovie={getMovie}
                        />
                        <CastDescriptions
                            getCast={getCast}
                        />
                        <BuyTicketButton onPress={navigateToBuyTicket} >
                            <BuyTicketText>Compar</BuyTicketText>
                            <Icon
                                name="cart-sharp"
                                size={25}
                                color={'#fff'}
                            />
                        </BuyTicketButton>
                    </Context>
                </Container>
                :
                <Loading />
            }

        </>
    );
}
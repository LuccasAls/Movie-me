import React, { useEffect, useState} from 'react';
import { Container, Header, Button, Title, BannerFilms, Context, TitleDetails, StarsView, StarsVote, OverviewText, GenresContext, GenresText, GenresContainer, Separator, TitleContext, CastContext, CastList, CastTitle, CastContainer, CastImage, CastName, Indicator, PersonContainer } from './styles';
import Icon from 'react-native-vector-icons/Ionicons'
import IconPerson from 'react-native-vector-icons/MaterialIcons'

import { ActivityIndicator } from 'react-native'
import tmdb from '../../services/tmdb';
import { BlurView } from '@react-native-community/blur';
import { Stars } from '../../components/Stars';
import firestore from '@react-native-firebase/firestore'

import { IMAGE_URL } from '../../services/tmdb';
import Toast from 'react-native-toast-message';
import { useFilms } from '../../hooks/films';
import { Loading } from '../../components/Loading';

export function MovieDetails({navigation, route}) {
    const [getMovie, setGetMovie] = useState(null)
    const [getCast, setGetCast] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isFavorite, setIsFavorite] = useState<Boolean>()
    const { byId } = useFilms()

    const { movie } = route.params
    const itemRef = firestore().collection('favorites')

    async function handleNewFavorite() {
        setIsFavorite(false)
        
        const querySnapshot =  await itemRef.where('movieId', '==', movie).where('user', '==', byId).get()

       if(querySnapshot.empty) {
            await itemRef.add({
                user: byId,
                movieId: getMovie?.id,
                title: getMovie?.title,
                vote_average: getMovie?.vote_average,
                poster_path: getMovie?.poster_path,
                backdrop_path: getMovie?.backdrop_path,

            })
            .then(() =>{ 
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
       const loadingALL = async () => {
            const querySnapshot =  await itemRef.where('movieId', '==', movie).where('user', '==', byId).get()

            
                const [list, cast] = await Promise.all([
                    tmdb.getMovie(movie),
                    tmdb.getCast(movie)
                ])
                setGetMovie(list[0].info)
                setGetCast(cast[0].info.cast)

                if(list && cast ){
                    setIsLoading(true)
                }
            
                


            setIsFavorite(querySnapshot.empty)
       }
       loadingALL()
    },[])
    

    function renderItemGenres({item}){
        return (
            <GenresContainer>
                <GenresText>{item.name}</GenresText>
            </GenresContainer>
        )
    }
    function renderItemCast({item}){
        return (
            <CastContainer>
                {item.profile_path 
                ? <CastImage borderRadius={37} source={{uri: `${IMAGE_URL}${item?.profile_path}`}} /> 
                : <PersonContainer><IconPerson name="person" color={'#fff'} size={40}/></PersonContainer>
                }
                <CastName>{item.name}</CastName>
            </CastContainer>
        )
    }


    
    
  return (
    <>
            
        {isLoading ? 
            <Container> 
                <BannerFilms source={{uri: `${IMAGE_URL}${getMovie.poster_path}`}}>
                    <Header>
                        <Button onPress={() => navigation.goBack()} >
                            <Icon 
                                name="arrow-undo"
                                size={30}
                                color={'#fff'}
                            />
                        </Button>
                        <Button onPress={handleNewFavorite}>
                            {isFavorite ? 
                                <Icon 
                                name="heart-outline"
                                size={30}
                                color={'#fff'}
                                />:
                                <Icon 
                                    name="heart"
                                    size={30}
                                    color={'#fff'}
                                />}
                        </Button>
                    </Header>
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
                    <TitleDetails>
                        <TitleContext>
                            <Title>{getMovie.title}</Title>
                        </TitleContext>
                        <StarsView>
                            <Stars stars={getMovie?.vote_average}/>
                        </StarsView>
                            <GenresContext 
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                ItemSeparatorComponent={Separator}
                                data={getMovie.genres}
                                keyExtractor={(item) => item.id}
                                renderItem={renderItemGenres}
                            />
                    </TitleDetails>
                    <OverviewText>{getMovie.overview}</OverviewText>
                    <CastContext>
                        <CastTitle>Atores</CastTitle>
                        <CastList
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={Separator}
                            keyExtractor={(item) => item.id}
                            data={getCast}
                            renderItem={renderItemCast}
                        />
                    </CastContext>
                </Context>
            </Container>
        : 
            <Loading/>
        }
    </>
  );
}
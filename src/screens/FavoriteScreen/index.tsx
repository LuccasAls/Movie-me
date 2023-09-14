import React, { useEffect, useState, useCallback } from 'react';
import { Container, Title, HeaderTitle, Content, LoadingContent,  } from './styles';
import firestore from '@react-native-firebase/firestore'
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native'
import { FavoriteMovie } from '../../components/FavoriteMovie';
import { useFilms } from '../../hooks/films';
import { Loading } from '../../components/Loading';
import { useAuth } from '../../hooks/auth';


type MovieProps = {
  movieId: string;
  id: string;
}

export function FavoriteScreen({navigation}) {
  const {getItem} = useAsyncStorage("@movie-me:user")
  const [isLoading, setIsLoading] = useState(false)
  const { byId } = useFilms()
  const [movieId, setMovieId] = useState([])
   



  useEffect(() => {
    
    const subscribed = firestore()
    .collection('favorites')
    .where('user', '==', byId )
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as MovieProps[]
      
      setMovieId(data)
      setIsLoading(true)
    })
    return () => subscribed()
  },[])

  

  return (
    
      <Container>
        <HeaderTitle>
          <Title>Filmes Favoritos</Title>
        </HeaderTitle>
        {isLoading 
          ? <FavoriteMovie items={movieId} navigation={navigation}/>
          : <Loading />
        }
      </Container>
   
  );
}
import React, {useEffect, useState} from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';

import  auth  from '@react-native-firebase/auth';

import { Container, Context, Section } from './styles';
import tmdb from '../../services/tmdb';
import { Button } from '../../components/Button';
import { MovieTrending } from '../../components/MovieTrending';
import { MovieUpcoming } from '../../components/MovieUpcoming';
import { Categories } from '../../components/Categories';
import { FeaturedMovie } from '../../components/FeaturedMovie';
import { useFilms } from '../../hooks/films';
import { Loading } from '../../components/Loading';


export function Home({navigation}) {

  const {trending, upComing, loading, categories, getById} = useFilms()



  
  
  return (
    <>
 
      { loading ?
        <Loading /> 
        
      :
          <Container>
            <FeaturedMovie item={trending}/>
            <Context>
              <MovieTrending 
                title={'Em Alta'} 
                items={trending}
                navigation={navigation}
              />
              <MovieUpcoming 
                title={'Novos Lançamentos'} 
                items={upComing}
                navigation={navigation}
              />
              <Categories 
                title={'Categorias'} 
                genres={categories}
                navigation={navigation}
              />  
            </Context>
          </Container>
      }
    </>
  );
};


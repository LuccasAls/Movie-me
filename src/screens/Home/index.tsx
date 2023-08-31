import React, {useEffect, useState} from 'react';
import { ActivityIndicator, View } from 'react-native';

import  auth  from '@react-native-firebase/auth';
import { Title } from '../../components/Header';
import { Container, Context, Section } from './styles';
import tmdb from '../../services/tmdb';
import { Button } from '../../components/Button';
import { MovieTrending } from '../../components/MovieTrending';
import { MovieUpcoming } from '../../components/MovieUpcoming';
import { Categories } from '../../components/Categories';
import { FeaturedMovie } from '../../components/FeaturedMovie';


export function Home() {

  const [isLoading, setIsLoading] = useState(true)
  const [movieList, setMovieList] = useState([])
  const [movieUp, setMovieUp] = useState([])
  const [categories, setCategories] = useState([])
  

  useEffect(() => {
    const loadingAll = async () => {

      let list = await tmdb.trending();
      let up = await tmdb.upComing();
      let categories = await tmdb.Categories();

 
      setMovieList(list[0].items.results);
      setMovieUp(up[0].items.results);
      setCategories(categories[0].items)
      // setIsLoading(false)

      if(movieList && movieUp && categories ) {
        setIsLoading(false)
      }
    }
    loadingAll();
    
  }, [])
  
  
  
  function handleSingOut() {
    auth().signOut()
  }
  return (
    <>
 
      { isLoading ?
        <Section>
          <ActivityIndicator size={40} color={'#fff'} />
        </Section> 
        
      :
        
        <Container showsVerticalScrollIndicator={false}>
          {/* <Button title='sair' onPress={handleSingOut}/> */}


          <FeaturedMovie item={movieList}/>
          <Context>
            <MovieUpcoming 
              title={'Novos Lançamentos'} 
              items={movieUp}
            />
            <MovieTrending 
              title={'Em Alta'} 
              items={movieList}
            />
            
            <Categories 
              title={'Categorias'} 
              genres={categories}
            />  
          </Context>
        </Container>
      }
    </>
  );
};


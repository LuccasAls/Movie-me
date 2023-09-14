import React, { useEffect, useState } from 'react';
import { Container, Title, SearchContext, SearchInput, FilmsList, FilmsContext, FilmsDetails, FilmesImage, Separator,SearchButton, LoadingContainer } from './styles';
import { ActivityIndicator } from 'react-native'
import Feater from 'react-native-vector-icons/Feather'
import { theme } from '../../theme/theme';
import tmdb from '../../services/tmdb';
import { IMAGE_URL } from '../../services/tmdb';
import { ModalConfirm } from '../../components/ModalConfirm/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ModalContent } from '../../components/ModalConfirm/ModalContent';



export function SearchScreen({navigation}) {
  const [getMovie, setGetMovie] = useState(' ')
  const [getListMovieId, setGetListMovieId] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  

  async function handleFilms() {
    setIsLoading(true)
    let movieId = await tmdb.getMovieId(getMovie)
    setGetListMovieId(movieId[0].info.results)
    setIsLoading(false)
    
  }

  async function handleOpenMovieDetails(id) {
    
    navigation.navigate('MovieDetails', {movie: id})
  }

  function renderItem({item}) {
    return (
      <FilmsContext onPress={() => handleOpenMovieDetails(item.id)}>
          <FilmesImage source={{ uri: `${IMAGE_URL}${item.poster_path}`}} />
          <FilmsDetails>
          <Title>{item.title}</Title>
          </FilmsDetails>
        </FilmsContext>
    )
  }
 
  return (
    <Container> 
        <SearchContext>
          <SearchInput placeholder={'Pesquisar'} placeholderTextColor={theme.colors.text} onChangeText={setGetMovie}/>

          {isLoading  ?  
            <ActivityIndicator
              color={'#fff'}
              size={20}
            /> : 
            <SearchButton 
              onPress={handleFilms}>
              <Feater 
                name="search"
                size={23}
                color={theme.colors.text}
              /> 
            </SearchButton>
          }

        </SearchContext>
        <FilmsList  
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          ItemSeparatorComponent={Separator}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={getListMovieId}
          renderItem={renderItem}
        />

        
    </Container>
  );
}
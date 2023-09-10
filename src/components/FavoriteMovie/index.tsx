import React, {useState} from 'react';
import { ButtonBookMark, Container, ListMovies, TitleFilme, ContentFavorite, Separator, FilmeImage, BackdropImage, Line, ContentDetails, StarsView, NoFavoritesContent, MessageNoFavorites } from './styles';
import { IMAGE_URL } from '../../services/tmdb';
import  {LinearGradient}  from 'react-native-linear-gradient'
import { Stars } from '../Stars';
import Icon from 'react-native-vector-icons/MaterialIcons'
import firestore from '@react-native-firebase/firestore'
import Toast from 'react-native-toast-message';
import { ModalConfirm } from '../ModalConfirm';


type Props = {
  items: any[]
  navigation: any
}

export function FavoriteMovie({items,navigation}: Props) {
  const [openModal, setOpenModal] = useState(false)
  const [idMovie, setMovieId] = useState('')


 function removeMovie(id) {
    firestore()
    .collection("favorites")
    .doc(id)
    .delete()
    .then(() => 
      Toast.show({
        type: 'success',
        text1: 'Retirado com sucesso!',
        text2: 'Filme retirado da sua lista de favoritos com sucesso!',
    }))
    setOpenModal(false)
 }

 function handleOpenModal(idMovie) {
  setMovieId(idMovie)
  setOpenModal(true)
 }
function handleCloseModal() {
  setOpenModal(false)
}

function handleOpenDetails(movieId: string) {
    navigation.navigate('MovieDetails', { movie: movieId })
}

  return (
    <Container>
        {items.length > 0? 
          <ListMovies 
          data={items}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ContentFavorite onPress={() => handleOpenDetails(item.movieId)}>
              <FilmeImage source={{ uri: `${IMAGE_URL}${item.poster_path}`}}/>
                <Line/>
                <BackdropImage source={{ uri: `${IMAGE_URL}${item.backdrop_path}`}}>
                  <LinearGradient style={{ height: '100%', width: '100%'}} colors={['#1d244089','#1d2440da']} start={{x: 1, y: 0}} end={{x: 0, y: 0}}>
                    <ContentDetails>
                      <TitleFilme>{item.title}</TitleFilme> 
                      <StarsView>
                        <Stars stars={item.vote_average} />
                      </StarsView>
                      <ButtonBookMark onPress={() => handleOpenModal(item.id)}>
                        <Icon
                          name="bookmark"
                          size={25}
                          color={'#fff'}
                        />
                      </ButtonBookMark>
                    </ContentDetails>
                  </LinearGradient>
                </BackdropImage>
              </ContentFavorite>
            )}
          />
            : 
            <NoFavoritesContent>
            <MessageNoFavorites>Sem Filmes nos favoritos!</MessageNoFavorites>
          </NoFavoritesContent>
        }


        <ModalConfirm.Root isVisible={openModal}>
          <ModalConfirm.Content>
            <ModalConfirm.Icon warning/>
            <ModalConfirm.Message 
              text='Deseja retirar esse filme dos favoritos?' 
              title='Tem certeza disso?'/>
          </ModalConfirm.Content>
          <ModalConfirm.Actions 
            handleAccept={() => removeMovie(idMovie)}  
            handleClose={handleCloseModal}
          />
        </ModalConfirm.Root>
    </Container>
  );
}
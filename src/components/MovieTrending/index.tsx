import React from 'react';
import { Separator, Title } from './styles';
import { 
    Container,
    Context,
    ListFilms,
    SectionTrending,
    CardFilms
 } from './styles';
import { IMAGE_URL } from '../../services/tmdb';

type Props = & {
    title: string,
    items: any,
    navigation: any
}


export function MovieTrending({title, items, navigation} : Props) {

    

    function handleOpenMovieDetails(id: string) {
        navigation.navigate('MovieDetails', {movie: id})
    }
  return (
    <Container>
        <Title>{title}</Title>
        <Context>
            <ListFilms 
                ItemSeparatorComponent={Separator}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <SectionTrending  onPress={() => handleOpenMovieDetails(item.id)}>
                        <CardFilms source={{ uri: `${IMAGE_URL}${item.poster_path}` }}/>                        
                    </SectionTrending>
                )}
            />
        </Context>
    </Container>
  );
}
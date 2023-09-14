import React from 'react';
import { BlurView } from '@react-native-community/blur'

import { 
    Title, 
    UpComingList,
    Container,
    ContainerImage,
    CoverImage,
    TitleContainer,
    TitleFilms,
    Separator,
    ContentDetailsFilm
} from './styles';
import { IMAGE_URL } from '../../services/tmdb';

type Props = {
    title: string,
    items: any,
    navigation: any,
}

export function MovieUpcoming({title, items, navigation} : Props) {
    
    function handleOpenMovieDetails(id: String) {
        navigation.navigate('MovieDetails', {movie: id})
    }
  return (
    <Container >
        <Title>{title}</Title>
            <UpComingList
                ItemSeparatorComponent={Separator}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <ContainerImage onPress={() => handleOpenMovieDetails(item.id)}>
                        <CoverImage 
                            borderRadius={30} 
                            source={{ uri: `${IMAGE_URL}${item.backdrop_path}` }}>
                           <TitleContainer>
                                <ContentDetailsFilm>
                                    <BlurView 
                                        style={{
                                            position: "absolute",
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                            opacity: 0.9
                                        }}
                                        blurType='dark'
                                        blurAmount={40}
                                        >
                                        <TitleFilms>{item.title}</TitleFilms>
                                    </BlurView>
                                </ContentDetailsFilm>
                           </TitleContainer>
                        </CoverImage> 
                    </ContainerImage>
                )}
            />
    </Container>
  );
}
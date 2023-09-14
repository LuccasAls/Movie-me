import React, { useState, useEffect } from 'react';
import { Container, ListGenres, Section, Title, Span, Gap, ContainerFilmsImage, FilmsImageContainer, DescriptionText, TitleFilmsText, StarsContainer, ListMovie, SectionFilmContainer, LoadingContainer } from './styles';
import { theme } from '../../theme/theme';
import tmdb, { IMAGE_URL } from '../../services/tmdb';
import { Genres } from '../Genres';
import { Stars } from '../Stars';
import { ActivityIndicator, View, VirtualizedList, Text } from 'react-native';
type Props = {
    title: string,
    genres: any,
    navigation: any
}





export function Categories({ title, genres, navigation }: Props) {
    const [colorSelect, setColorSelect] = useState(28)
    const [movieList, setMovieList] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        loadingAll(28)
    }, [])

    const loadingAll = async (color) => {
        let movieLis = await tmdb.MoviesList(color);
        setMovieList(movieLis[0].items.results)

        if (movieLis) {
            setIsLoading(false)
        }
    }

    async function handleColorSelect(item: number) {
        setColorSelect(item == colorSelect ? item : item)
        loadingAll(item ? item : colorSelect)
        setIsLoading(true)
    }

    function handleOpenMovieDetails(id: string) {
        navigation.navigate('MovieDetails', { movie: id })
    }

    function renderItem({ item, index }) {
        return (
            <Section
                onPress={() => handleColorSelect(index)}
                style={colorSelect === index? { backgroundColor: theme.colors.primary } : {}}>
                <Span style={colorSelect === index ? { color: theme.colors.text } : {}}>
                    {item.name}
                </Span>
            </Section>
        )
    }
   

    

    return (
        <Container>
            <Title>{title}</Title>
            <ListGenres
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={Gap}
                data={genres.genres}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}

            />

            {isLoading
                ?
                <LoadingContainer>
                    <ActivityIndicator size={40} color={'#fff'} />
                </LoadingContainer>
                :
                <>
                    <ListMovie contentContainerStyle={{ gap: 20 }}  >

                        {movieList.map((item, key) => (
                            <ContainerFilmsImage key={key}>
                                <SectionFilmContainer onPress={() => handleOpenMovieDetails(item.id)}>
                                    <FilmsImageContainer source={{ uri: `${IMAGE_URL}${item.poster_path}` }} />
                                </SectionFilmContainer >
                                <DescriptionText >
                                    <TitleFilmsText >{item.title}</TitleFilmsText>
                                    <StarsContainer >

                                        <Stars stars={item.vote_average} />
                                    </StarsContainer>
                                    <Genres items={item.genre_ids} />
                                </DescriptionText>
                            </ContainerFilmsImage>
                        ))}

                    </ListMovie>

                  
                </>

            }

        </Container>


    );
}
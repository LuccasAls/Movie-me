import React, {useState, useEffect} from 'react';
import { Container, ListGenres, Section, Title, Span, Gap, ContainerSection, ContainerFilmsImage , FilmsImageContainer, DescriptionText, TitleFilmsText, StarsContainer, StartsVoteText, StarsView, ListMovie,SectionFilmContainer } from './styles';
import { theme } from '../../theme/theme';
import tmdb from '../../services/tmdb';
// import { MovieHorizontal } from '../MovieHorizontal';
import { Genres } from '../Genres';
import { Stars } from '../Stars';
import { ActivityIndicator, View } from 'react-native';
type Props ={
    title: string,
    genres: any
}


export function Categories({title, genres}: Props) {
    const [colorSelect, setColorSelect] = useState(28)
    const [movieList, setMovieList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    
    useEffect(()=>{
        loadingAll(28)
    },[])

    const loadingAll = async (color) => {
        let movieLis = await tmdb.MoviesList(color);   
        setMovieList(movieLis[0].items.results)
        
        if(movieLis){
            setIsLoading(false)
        }
    }
    
    async function handleColorSelect(item) {
        setColorSelect(item == colorSelect ? item : item)
        loadingAll(item ? item : colorSelect)
        setIsLoading(true)
    }
  
    return (
        <>
            <Title>{title}</Title>
                <ListGenres
                    horizontal        
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={Gap}
                    data={genres.genres}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        
                        <Section 
                            onPress={() => handleColorSelect(item.id)}
                            style= {colorSelect === item.id ? {backgroundColor: theme.colors.primary}: {}  }
                        >
                            <Span style= {colorSelect === item.id ? {color: theme.colors.text}: {}  }>
                                {item.name}
                            </Span>
                        </Section>
                    )}
                />
            {isLoading 
            ? <View style={{height: 300, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size={40} color={'#fff'}/> 
                </View>
            : 
            <Container>
                
                <ContainerSection>
                    {movieList.map((items, k)=>(
                        <ContainerFilmsImage key={items.id}>
                            <SectionFilmContainer>
                                <FilmsImageContainer source={{ uri: `https://image.tmdb.org/t/p/w300${items.poster_path}`}}/>
                                </SectionFilmContainer>
                            <DescriptionText>
                                <TitleFilmsText>{items.title}</TitleFilmsText>
                                <StarsContainer>
                                    <StartsVoteText>{items.vote_average}</StartsVoteText>
                                    <Stars stars={items.vote_average}/>
                                </StarsContainer>
                                <Genres  item={items.genre_ids}/>
                            </DescriptionText>           
                        </ContainerFilmsImage>
                    ))}
                </ContainerSection>
            </Container>
            }
    </>
            
            
    );
}
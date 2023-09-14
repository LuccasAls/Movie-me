import React from 'react';
import { 
  Container,
  ImageFilms,
  HeaderContent,
  Section,
  StarsView,
  DescriptionView,
  Span,
  VoteAverage,
  TitleFilm,
  TextTitle
 } from './styles';
import { Stars } from '../Stars';
import  {LinearGradient}  from 'react-native-linear-gradient'
import {theme}  from '../../theme/theme'
import { IMAGE_URL } from '../../services/tmdb';

export function FeaturedMovie({item}) {
  
    let randomFilme = Math.floor(Math.random() * item.length)
    let doc = item[randomFilme]
   

  return (
    <Container>
      <ImageFilms source={{uri: `${IMAGE_URL}${doc.poster_path}` }}>  
        <LinearGradient style={{ height: 551, width: '100%'}} colors={['transparent','#1d2440a2','#1D2440']}>
              <Section>
                <HeaderContent>
                  <TextTitle>Movie.</TextTitle>
                  <TextTitle style={{ color: theme.colors.primary}}>me</TextTitle>
                </HeaderContent>
                <DescriptionView>
                  <TitleFilm>{doc.title}</TitleFilm>
                  <StarsView>
                    <Stars stars={doc.vote_average}/>
                  </StarsView>
                  <Span>
                    <VoteAverage>{doc.overview.slice(0, 104)}...</VoteAverage>
                  </Span>
                </DescriptionView>
              </Section>
        </LinearGradient>
      </ImageFilms> 
    </Container>
  );
}
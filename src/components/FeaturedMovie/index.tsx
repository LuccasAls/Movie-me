import React, { useEffect, useState} from 'react';
import { 
  Container,
  Text,
  ImageFilms,
  Header,
  Section,
  StarsView,
  DescriptionView,
  Span,
  VoteAverage,
  TitleFilm
 } from './styles';
 import { ActivityIndicator} from 'react-native'
import { Stars } from '../Stars';
import  {LinearGradient}  from 'react-native-linear-gradient'
import { View } from 'react-native'
 
export function FeaturedMovie({item}) {
  
    let randomFilme = Math.floor(Math.random() * item.length)
    let doc = item[randomFilme]
   

  return (
    <Container>
      <ImageFilms source={{uri: `https://image.tmdb.org/t/p/w300${doc.poster_path}` }}>
        <LinearGradient style={{ height: 551, width: '100%'}} colors={['transparent','#1d2440a2','#1D2440']}>
              <Section>
                <Header>

                </Header>

                <DescriptionView>
                  <TitleFilm>{doc.title}</TitleFilm>
                  <StarsView>
                    <VoteAverage>{doc.vote_average.toFixed(1)}</VoteAverage>
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
import React from 'react';
import { Container, GenresContainer, GenresContext, GenresText, OverviewText, Separator, StarsView, Title, TitleContext, TitleDetails } from './styles';
import { Stars } from '../Stars';

export function MovieDescriptions({getMovie}) {

    function renderItemGenres({ item }) {
        return (
            <GenresContainer>
                <GenresText>{item.name}</GenresText>
            </GenresContainer>
        )
    }
    return (
        <Container>
            <TitleDetails>
                <TitleContext>
                    <Title>{getMovie.title}</Title>
                </TitleContext>
                <StarsView>
                    <Stars stars={getMovie?.vote_average} />
                </StarsView>
                <GenresContext
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    ItemSeparatorComponent={Separator}
                    data={getMovie.genres}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItemGenres}
                />
            </TitleDetails>
            <OverviewText>{getMovie.overview}</OverviewText>
        </Container>
    );
}
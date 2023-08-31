import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { Title } from './styles';
import { 
    Container,
    Context,
    ListFilms,
    SectionTrending,
    CardFilms
 } from './styles';

type Props = {
    title: string,
    items: any
}

export function MovieTrending({title, items}: Props) {
  return (
    <Container>
        <Title>{title}</Title>
        <Context>
            <ListFilms 
                showsHorizontalScrollIndicator={false}
                horizontal
                data={items}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <SectionTrending>
                        <CardFilms source={{ uri: `https://image.tmdb.org/t/p/w300${item.poster_path}` }}/>                        
                    </SectionTrending>
                )}
            />
        </Context>
    </Container>
  );
}
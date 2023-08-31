import React from 'react';
import { BlurView } from '@react-native-community/blur'

import { 
    Title, 
    UpComingList,
    Container,
    ContainerImage,
    CoverImage,
    TitleContainer,
    TitleFilms
} from './styles';
import { View } from 'react-native'

type Props = {
    title: string,
    items: any
}

export function MovieUpcoming({title, items} : Props) {
    
  return (
    <Container >
        <Title>{title}</Title>
            <UpComingList 
                showsHorizontalScrollIndicator={false}
                horizontal
                data={items.slice(4, 9)}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <ContainerImage>
                        <CoverImage 
                            borderRadius={30} 
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}>
                           <TitleContainer>
                                <View style={{ overflow: "hidden" , width: '100%', height: 60, backgroundColor: '#0000008'}}>
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
                                </View>
                           </TitleContainer>
                        </CoverImage> 
                    </ContainerImage>
                )}
            />
    </Container>
  );
}
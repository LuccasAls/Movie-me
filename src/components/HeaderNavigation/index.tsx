import React from 'react';
import { Button, Container } from './styles';
import Icon from 'react-native-vector-icons/Ionicons'


type Props = {
    goBack: () => void, 
    handleNewFavorite?: () => void,  
    favorite?: boolean,  
    heart?: boolean,
}

export function HeaderNavigation({goBack, handleNewFavorite, favorite, heart = false}: Props) {
    return (
        <Container>
            <Button onPress={goBack} >
                <Icon
                    name="arrow-undo"
                    size={30}
                    color={'#fff'}
                />
            </Button>
            {heart &&
                <Button onPress={handleNewFavorite}>
                    {favorite ?
                        <Icon
                            name="heart-outline"
                            size={30}
                            color={'#fff'}
                        /> :
                        <Icon
                            name="heart"
                            size={30}
                            color={'#fff'}
                        />}
                </Button>
            }

        </Container>
    );
}
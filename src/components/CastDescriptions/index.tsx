import React from 'react';
import IconPerson from 'react-native-vector-icons/MaterialIcons'

import { CastContainer, CastContext, CastImage, CastList, CastName, CastTitle, Container, PersonContainer, Separator } from './styles';
import { IMAGE_URL } from '../../services/tmdb';

export function CastDescriptions({getCast}) {
    function renderItemCast({ item }) {
        return (
            <CastContainer>
                {item.profile_path
                    ? <CastImage borderRadius={37} source={{ uri: `${IMAGE_URL}${item?.profile_path}` }} />
                    : <PersonContainer><IconPerson name="person" color={'#fff'} size={40} /></PersonContainer>
                }
                <CastName>{item.name}</CastName>
            </CastContainer>
        )
    }
    return (
        <Container>
            <CastContext>
                <CastTitle>Atores</CastTitle>
                <CastList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={Separator}
                    keyExtractor={(item) => item.id}
                    data={getCast}
                    renderItem={renderItemCast}
                />
            </CastContext>
        </Container>
    );
}
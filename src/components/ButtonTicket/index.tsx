import React from 'react';
import { Container } from './styles';
import Fontsito from 'react-native-vector-icons/Fontisto'
import { theme } from '../../theme/theme';

export function ButtonTicket({size, color}) {
  return (
    <Container>
        <Fontsito 
            name="ticket"
            color={theme.colors.text}
            size={size + 7}
        />
    </Container>
  );
}
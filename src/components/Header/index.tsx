import React from 'react';
import { Container, Text, HeaderTitle } from './styles';
import { theme } from '../../theme/theme';





export function Header() {
  return (
    <Container>

        <HeaderTitle>
          <Text style={{ color: theme.colors.text}}>Movie.</Text>
          <Text style={{ color: theme.colors.primary}}>me</Text>
        </HeaderTitle>

    </Container>
  );
}
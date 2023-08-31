import React from 'react';
import { Container } from './styles';


type Props = {
    color: string
}

export function Circle({color}: Props) {
  return (
    <Container style={{ backgroundColor: color}}>

    </Container>
  );
}
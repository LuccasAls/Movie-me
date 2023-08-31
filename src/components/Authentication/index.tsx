import React from 'react';
import { ImageProps} from 'react-native'
import { Container, Image, Title } from './styles';

type Props = {
  icon: ImageProps;
  title: string;
  color: string;
  textColor: string;
}

export function Authentication({icon, title, color, textColor}: Props) {
  return (
    <Container style={{ backgroundColor: color}}>
      <Image source={icon}/>
      <Title style={{ color: textColor }}>{title}</Title>
    </Container>
  );
}
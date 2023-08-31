import React from 'react';
import { Container, Title, InputField } from './styles';
import { TextInputProps} from 'react-native'


type Props = TextInputProps &{
    title: string,
    holder?: string,
}

export function Input({title, holder, ...rest} : Props) {
  return (

    <Container>
        <Title>{title}</Title>
        <InputField
            {...rest}
            placeholderTextColor={'#3d3d3d7b'}/>
    </Container>
  );
}
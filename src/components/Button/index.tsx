import React from 'react';
import { TouchableOpacityProps} from 'react-native'
import { Container, Content,Title  } from './styles';

type Props = TouchableOpacityProps& {
    title: string
}


export function Button({title, ...rest}: Props) {
  return (
       <Content
            {...rest}
       >
            <Title>
                {title}
            </Title>
       </Content>
  );
}
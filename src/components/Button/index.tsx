import React from 'react';
import { TouchableOpacityProps, ActivityIndicator} from 'react-native'
import { Container, Content,Title  } from './styles';

type Props = TouchableOpacityProps& {
    title: string;
    loading?: Boolean;
}


export function Button({title, loading, ...rest}: Props) {
  return (
       <Content {...rest} >
          {loading 
               ? <ActivityIndicator  color={'#fff'} size={25}/>
               : <Title> {title} </Title> 
          }
       </Content>
  );
}
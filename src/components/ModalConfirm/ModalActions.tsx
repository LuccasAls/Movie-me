import React from 'react';
import { Button, Container, Footer } from './styles';
import Material from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../../theme/theme';




type ModalActionsProps = {
    handleAccept?: () => void,
    handleClose?: () => void,

}

export function ModalActions({ handleClose, handleAccept }: ModalActionsProps) {
    const { onAccept } = theme.colors

  return (
    <Footer>
        <Button
            onPress={handleClose}
            style={{borderColor: "red", borderWidth: 2.5, borderBottomLeftRadius: 30}}>
            <Material 
                name="close"
                color={'red'}
                size={20}
            />
        </Button>
        <Button
            onPress={handleAccept}
            style={{backgroundColor: onAccept}}>
            <Material 
                name="done"
                color={'white'}
                size={20}
            />
        </Button>
    </Footer>
  );
}
import React, { ReactNode } from 'react';
import { Container, Content, ContentModal } from './styles';
import { Modal } from 'react-native';

type ModalRootProps = {
    handleClose?: () => void,
    isVisible: boolean,
    children: ReactNode

}

export function ModalRoot({isVisible, handleClose, children}: ModalRootProps) {
  return (
    <Modal
    animationType='slide'
    transparent={true}
    visible={isVisible}
    onRequestClose={handleClose}
    >
        <Content>
            <ContentModal>
                {children}
            </ContentModal>  
        </Content>
    </Modal>
  );
}
import React, { ReactNode } from 'react';
import { Container, Message, MessageTitle, ModalDetails, WarningContent } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { theme } from '../../theme/theme';

type ModalContentProps = {
    children: ReactNode
}

export function ModalContent({ children}: ModalContentProps) {
  return (
    <ModalDetails>
        {children}
    </ModalDetails>
  );
}
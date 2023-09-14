import React, { useEffect, useState } from 'react';
import { Container, WarningContent } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../theme/theme';

type ModalIconProps = {
   
    success?: boolean,
    warning?: boolean,
    error?: boolean,
}



export function ModalIcon({ warning = false, success = false, error=false } : ModalIconProps) {
   const { primary, onAccept, circleRed} = theme.colors
   


  return (

    <>
        {warning && 
            <WarningContent  style={{ borderColor: primary} }>
                <MaterialCommunityIcons
                    name='exclamation'
                    size={60}
                    color={primary}
                 />
             </WarningContent>
        }
        {success && 
            <WarningContent  style={{ borderColor: onAccept} }>
                <MaterialCommunityIcons
                    name='check'
                    size={60}
                    color={onAccept}
                 />
             </WarningContent>
        }
        {error && 
            <WarningContent  style={{ borderColor:circleRed} }>
                <MaterialCommunityIcons
                    name='close'
                    size={60}
                    color={circleRed}
                 />
             </WarningContent>
        }
    </>

  );
}
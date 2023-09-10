import styled from 'styled-components/native';
import { theme } from '../../theme/theme';



export const Container = styled.View`
  flex: 1;

`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
`;

export const Header = styled.View`
    height: 70px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-bottom-width: 2px;
    border-color: ${theme.colors.backgroundBlur};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 20px;
    color: ${theme.colors.primary};
`;
export const Message = styled.Text`
    font-family: ${theme.fonts.POPPINS_REGULAR};
    font-size: 12px;
    text-align: center;
    width: 50%;
`;

export const Footer = styled.View`
    flex-direction: row;
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0;
`;
export const ContentModal = styled.View`
    height: 300px;
    background-color: #ffffff;
    border-radius: 30px;
    overflow: hidden;
    width: 90%;
    align-items: center;
    
`;

export const ModalDetails = styled.View`
    flex: 1;
    justify-content:center;
    align-items: center;
    top: -10px;
`;

export const Button = styled.TouchableOpacity`
    flex: 1;
    justify-content:center;
    align-items: center;
`;

export const WarningContent = styled.View`
    height: 100px;
    width: 100px;
    border-radius:50px;
    border-width: 3px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const MessageTitle = styled.Text`
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 20px;

`;

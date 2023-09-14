import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.ScrollView`
  background-color: ${theme.colors.background};
`;

export const BannerFilms = styled.ImageBackground`
    width: 100%;
    height: 675px;
    position: absolute;
`;

export const Context = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 470px;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    overflow: hidden;
    padding: 30px;
`;

export const BuyTicketButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 70%;
    background-color: ${theme.colors.primary};
    border-radius: 30px;
    margin: 0 auto;
    margin-top: 20px;
    flex-direction: row;
    
`;
export const BuyTicketText = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 20px;
    margin-right: 20px
`;
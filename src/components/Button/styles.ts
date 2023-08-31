import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;

`;
export const Content = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
    border-radius: 30px;
    margin-top: 40px;
`
export const Title = styled.Text`
    padding: 12px 0px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 16px;

`
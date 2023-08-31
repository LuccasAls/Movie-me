import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
`;
export const Title = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 16px;
    margin-top: 20px;
    
`;

export const InputField = styled.TextInput`
    width: 100%;
    padding: 12px 0px;
    background-color: ${theme.colors.inputField};
    padding-left: 25px;
    border-radius: 30px;
    font-family: ${theme.fonts.POPPINS_REGULAR};
    font-size: 13px;
    color: ${theme.colors.text};
    
`;
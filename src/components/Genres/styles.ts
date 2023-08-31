import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
    

`;

export const FlatGenres = styled.FlatList`
    max-height: 45px;    
    width: 170px;
`;

export const Text = styled.Text`
    color: ${theme.colors.text};
`;
export const Gap = styled.View`
    width: 10px;
`;

export const Context = styled.View`
    padding: 8px 15px;
    border-width: 1px;
    border-color: ${theme.colors.text};
    border-radius: 20px;
    margin-top: 7px;
`;
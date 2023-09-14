import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
`;
export const CastContext = styled.View`
    margin-top: 20px;
`;
export const CastTitle = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 20px;
    margin-bottom: 10px;
`;
export const CastList = styled.FlatList``;
export const CastContainer = styled.View``;
export const CastImage = styled.Image`
    width: 80px;
    height: 100px;
`;
export const PersonContainer = styled.View`
    width: 80px;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.headingPlaceholder};
    border-radius: 37px;
`;
export const CastName = styled.Text`
    width: 70px;
    text-align: center;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_LIGHT};
`;
export const Separator =  styled.View`
    width: 10px;
`;

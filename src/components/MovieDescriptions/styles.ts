import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
`;
export const TitleDetails = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
`;
export const TitleContext = styled.View`
    width: 100%;
    align-items: center;
`;
export const Title = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 24px;
    text-align: center;
    width: 80%;
`;
export const StarsView = styled.View`
    width: 100%;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: center;
`;
export const GenresContext = styled.FlatList``;

export const Separator =  styled.View`
    width: 10px;
`;
export const GenresContainer = styled.View`
    padding: 5px 15px;
    border-width: 1px;
    border-radius: 30px;
    border-color: ${theme.colors.text};
`;
export const GenresText = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_REGULAR};
`;
export const OverviewText = styled.Text`
    text-align: justify;
    color: ${theme.colors.text};
    font-size: 16px;
    font-family: ${theme.fonts.POPPINS_REGULAR};
    margin-top: 20px;
`;
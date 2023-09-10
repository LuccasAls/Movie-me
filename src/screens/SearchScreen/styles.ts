import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 20px 20px;
`;

export const Title = styled.Text`
  color: ${theme.colors.text};
  text-align: center;
`;

export const SearchContext = styled.View`
  width: 100%;
  height: 70px;
  background-color: #313A5E;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 25px;
  margin-top: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  color: ${theme.colors.text};
  
`;

export const FilmsList = styled.FlatList`
  
`;

export const FilmsContext = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;
export const FilmesImage = styled.Image`
  width: 158px;
  height: 220px;
  border-radius: 20px;
`;

export const FilmsDetails = styled.View`
  margin-top: 10px;
  width: 80%;
`;

export const Separator = styled.View`
  height: 30px;
`;

export const SearchButton = styled.TouchableOpacity``;
export const LoadingContainer =  styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
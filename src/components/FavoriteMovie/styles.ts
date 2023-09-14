import styled, { ThemeConsumer } from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
`;
export const ListMovies = styled.FlatList`
  
`;

export const TitleFilme = styled.Text`
  color: ${theme.colors.text};
  width: 70%;
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 14px;
  text-align: center;
`;

export const  ContentFavorite = styled.TouchableOpacity`
  width: 100%;
  border-width: 1px;
  border-color: ${theme.colors.backgroundBlur};
  border-radius: 20px;
  flex-direction: row;
  height: 110px;
  overflow: hidden;

`;

export const Separator = styled.View`
  height: 20px;
`;

export const FilmeImage = styled.Image`
  height: 100%;
  width: 90px;
`;

export const BackdropImage = styled.ImageBackground`
  flex:1;
`;

export const Line = styled.View`
  height: 100%;
  width: 2px;
  background-color: ${theme.colors.backgroundBlur};
`;

export const ContentDetails = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StarsView = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;


export const ButtonBookMark = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const NoFavoritesContent = styled.View`
  width: 100%;
  flex: 1;	
  justify-content: center;
  align-items: center;
`;

export const MessageNoFavorites = styled.Text`
  color: ${theme.colors.inputField};
  font-size: 14px;
  font-family: ${theme.fonts.POPPINS_LIGHT}
`;
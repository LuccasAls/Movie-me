import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
`;
export const Title = styled.Text`
  color: ${theme.colors.text};
  font-size: 22px;
  font-family: ${theme.fonts.POPPINS_BOLD};
  margin-bottom: 20px;
  margin-top: 20px;

`;
export const UpComingList = styled.FlatList`

`;
export const ContainerImage = styled.TouchableOpacity`
  width: 344px;
  height: 193px; 
`;
export const CoverImage = styled.ImageBackground`
  flex: 1; 
  justify-content: flex-end;
`;
export const TitleContainer = styled.View`
  width: 100%;
  border-bottom-left-radius: 30px; 
  border-bottom-right-radius: 30px; 
  background-color: #00000090; 
  overflow: hidden;
  
`;
export const TitleFilms = styled.Text`
  color: ${theme.colors.text}; 
  font-size: 18px;
  font-family: ${theme.fonts.POPPINS_BOLD};
  padding: 15px;
`;

export const Separator = styled.View`
  width: 15px;
`;

export const ContentDetailsFilm = styled.View`
  overflow: hidden;
  height: 60px;
  width: 100%;
  background-color: #00000008;
`;

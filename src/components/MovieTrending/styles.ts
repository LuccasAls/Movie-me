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
`;
export const Context = styled.View`
  flex: 1;
`;
export const ListFilms = styled.FlatList`
`;
export  const SectionTrending = styled.TouchableOpacity`
`;
export const CardFilms = styled.Image`
  width: 170px; 
  height: 236px; 
  border-radius: 20px;
`;
export const Separator = styled.View`
  width: 15px;
`;
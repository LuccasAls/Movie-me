import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  background-color: ${theme.colors.background};

`;

export const ListGenres = styled.FlatList`
  margin-bottom: 20px;
`;

export const Section = styled.TouchableOpacity`
  padding: 7px 25px;
  border-width: 2px;
  border-color: ${theme.colors.primary};
  border-radius: 50px;
  height: 40px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 22px;
  font-family: ${theme.fonts.POPPINS_BOLD};
  color: ${theme.colors.text};
`;

export const Span = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.POPPINS_BOLD};
  color: ${theme.colors.primary};
  

`;

export const Gap = styled.View`
    width: 18px;
  
`;
export const GapList = styled.View`
    height: 25px;
  
`;

export const MovieList = styled.FlatList`
  margin-top: 25px;

`;

export const FilmsImage = styled.Image`
    height: 214px;
    width: 150px;
    border-radius: 10px;
`;

export const ContainerFilms = styled.View`
   flex: 1;
`;
export const Description = styled.View`
  padding-top: 20px;
  padding-left: 25px;
  height: 100%;

`;
export const TitleFilms = styled.Text`
  width: 160px;
  font-size: 18px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
`;
export const StartsVote = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_REGULAR};
  margin-right: 10px;
`;

export const StarsView = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  

`;

export const ListMovie = styled.ScrollView`

`
// Movie Horizontal
export const ContainerSection = styled.ScrollView`
  padding-top: 20px;
`;

export const FilmsImageContainer = styled.Image`
    height: 201px;
    width: 134px;
    border-radius: 10px;
`;

export const ContainerFilmsImage = styled.View`
   flex: 1;
  
   flex-direction: row;
   margin-bottom: 30px;
`;
export const DescriptionText = styled.View`
  padding-top: 20px;
  padding-left: 25px;
  height: 100%;
`;

export const TitleFilmsText = styled.Text`
  width: 170px;
  font-size: 18px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
`;

export const StartsVoteText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_REGULAR};
  margin-right: 10px;
`;

export const StarsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const SectionFilmContainer = styled.TouchableOpacity`
`;

export const LoadingContainer =styled.View`
  height: 300px;
  width: 100%; 
  justify-content: center; 
  align-items: center;
`
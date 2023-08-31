import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
 
`;
export const Text = styled.Text`
  font-size: 20px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
`;
export const ImageFilms = styled.ImageBackground`
  height: 551px;
  width: 100%;
  justify-content: space-between ;
`;
export const Header = styled.View`
  width: 100%;
`;
export const Section = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const StarsView = styled.View`
  height: 30px;
  flex-direction: row;
  justify-content: center;
`;

export const DescriptionView = styled.View`
  padding: 0px 25px;
  align-items: center;
  margin-bottom: 30px;

`;
export const Span = styled.View`
  align-items: center;
`;
export const SpanText =styled.Text`
  font-size: 15px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};

`;

export const VoteAverage =styled.Text`
  font-size: 15px;
  margin-right: 10px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  text-align: justify;

`;

export const TitleFilm = styled.Text`
  font-size: 24px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  text-align: center;
  max-width: 80%;
`
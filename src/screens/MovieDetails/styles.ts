import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import { Stars } from '../../components/Stars';


export const Indicator = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};

`;


export const Container = styled.ScrollView`

  background-color: ${theme.colors.background};
  
`;
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 35px;
  
  
`;
export const  Button =  styled.TouchableOpacity`
`;
export const Title = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 24px;
    text-align: center;
    width: 80%;

`;

export const TitleContext = styled.View`
    width: 100%;
    align-items: center;
`;

export const TitleDetails = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
    
`;

export const BannerFilms = styled.ImageBackground`
    width: 100%;
    height: 675px;
    position: absolute;
`;

export const Context = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 470px;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    overflow: hidden;
    padding: 30px;
    
    
`;

export const StarsView = styled.View`
    width: 100%;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: center;
`;

export const StarsVote = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_BOLD};
    margin-right: 10px;
`;

export const OverviewText = styled.Text`
    text-align: justify;
    color: ${theme.colors.text};
    font-size: 16px;
    font-family: ${theme.fonts.POPPINS_REGULAR};
    margin-top: 20px;
`;

export const GenresContext = styled.FlatList`
   
`;
export const GenresText = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_REGULAR};
`;

export const GenresContainer = styled.View`
    padding: 5px 15px;
    border-width: 1px;
    border-radius: 30px;
    border-color: ${theme.colors.text};
`;

export const Separator =  styled.View`
    width: 10px;
`;

export const CastContext = styled.View`
    margin-top: 20px;
`;

export const CastList = styled.FlatList``;

export const CastName = styled.Text`
    width: 70px;
    text-align: center;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_LIGHT};
`;

export const CastTitle = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 20px;
    margin-bottom: 10px;
`;

export const CastImage = styled.Image`
    width: 80px;
    height: 100px;
`;

export const CastContainer = styled.View`
`;
export const PersonContainer = styled.View`
    width: 80px;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.headingPlaceholder};
    border-radius: 37px;
`;
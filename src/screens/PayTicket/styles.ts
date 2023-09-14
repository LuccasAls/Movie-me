import { TouchableOpacity } from 'react-native';
import { BackdropImage } from './../../components/FavoriteMovie/styles';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const SeatsContainer = styled.View`
  border-radius: 25px;
  overflow: hidden;
  padding: 20px;
`;

export const SeatsGroup = styled.View`
  gap: 10px;
`

export const SeatsRow = styled.View`
  gap: 10px;
  justify-content: center;
  flex-direction: row;
`;

export const Seat = styled.TouchableOpacity``;

export const BackdropMovie = styled.ImageBackground`
  width: 100%;
  height: 455px;
  
`;

export const BackdropContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const TitleMovie = styled.Text`
  color: ${theme.colors.text};
  font-size: 20px;
  font-family: ${theme.fonts.POPPINS_BOLD};
  
`;

export const DateList = styled.FlatList``;

export const DateDetails = styled.TouchableOpacity`
  height: 91px;
  width: 65px;
  border-radius: 25px;
  background-color: #2E3A67;
  justify-content: center;
  align-items: center;
`;

export const DateContent = styled.View`
  margin-top: 10px;
`;

export const DateTitle = styled.Text`
  color: ${theme.colors.text};
  font-size: 18px;
  font-family: ${theme.fonts.POPPINS_BOLD};
`;

export const DateDayText = styled.Text`
  color: ${theme.colors.text};
  font-size: 20px;
  font-family: ${theme.fonts.POPPINS_BOLD};
`;

export const DateWeekText = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-family: ${theme.fonts.POPPINS_BOLD};
`;

export const DateSeparator = styled.View`
  width: 10px;
`;

export const TimeContent = styled.View`
`;

export const TimeList = styled.FlatList``;

export const TimeDetails = styled.TouchableOpacity`
  background-color: #2E3A67;
  padding: 7px 20px;
  border-radius: 20px;
`;

export const TimeText = styled.Text`
  color: ${theme.colors.text};
  font-size: 16px;
  font-family: ${theme.fonts.POPPINS_BOLD};
`;

export const TimeTitle = styled.Text`
  color: ${theme.colors.text};
  font-size: 18px;
  font-family: ${theme.fonts.POPPINS_BOLD};
`;

export const TimeSeparator = styled.View`
  width: 10px;
`;

export const PriceContent = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const PriceDetails = styled.View`
 
`;


export const PriceText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 24px;
  font-family: ${theme.fonts.POPPINS_BOLD};
`;

export const BuyTicketButton = styled.TouchableOpacity`
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  border-radius: 30px;
`;

export const BuyTicketText = styled.Text`
  color: ${theme.colors.text};
  font-size: 18px;
  font-family: ${theme.fonts.POPPINS_BOLD};
`;

export const PriceTotalText = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-family: ${theme.fonts.POPPINS_BOLD};`;
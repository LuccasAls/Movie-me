import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;
export const Title = styled.Text`
  font-size: 20px;
  margin-top: 40px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  text-align: center;
`;

export const ListTickets = styled.FlatList`

`;

export const TicketContent = styled.TouchableOpacity`
  width: 100%;
  height: 140px;
  flex-direction: row;
  overflow: hidden;
  
`;

export const  TicketMovieImage = styled.Image`
  width: 130px;
  height: 140px;
`;

export const TicketMovieImageContainer = styled.View``;

export const TicketContainer = styled.View`
  padding: 20px;
  margin-bottom: 60px;

`;
export const Line = styled.View`
  height: 100%;
  border-color: black;
  background-color: white;
  border-right-width: 5px;
  border-style: dashed ;
  
`;

export const TicketDetails = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px 30px 20px 10px ;
  background-color: ${theme.colors.text};
  
`;

export const Circle = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 25px;
  background-color: ${theme.colors.background};
  position: absolute;
  top: -18px;
  left: -18px;
`;
export const CircleO = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 25px;
  background-color: ${theme.colors.background};
  position: absolute;
  top: -18px;
  right: -18px;
`;
export const CircleA = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 25px;
  background-color: ${theme.colors.background};
  position: absolute;
  bottom: -18px;
  right: -18px;
`;
export const CircleC = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 25px;
  background-color: ${theme.colors.background};
  position: absolute;
  bottom: -18px;
  left: -18px;
`;

export const TicketBorder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TicketText = styled.Text`
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 16px;
`;

export const TicketDescriptions = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 20px;
`;

export const TicketSeatsContent = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const TicketSeatsText = styled.Text`
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 14px;
  padding-left: 5px;
`;
export const TicketTimeText = styled.Text`
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 14px;
  padding-left: 5px;

`;
export const TicketTimeContent = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Separator = styled.View`
  height: 10px;
`;

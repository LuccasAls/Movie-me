import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  align-items: center;
`;

export const BackdropContainer = styled.ImageBackground`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  position: absolute;
  z-index: -1;
`;
 
export const TicketContainer = styled.View`
  height: 80%;
  width: 70%;
  background-color: ${theme.colors.text};
  border-radius: 20px;
  overflow: hidden;
`;

export const PosterMovie = styled.ImageBackground`
  width: 100%;
  height: 380px;
`;

export const TicketDetails = styled.View`
  width: 100%;
  height: 170px;
  background-color: #ffc800;
`;
export const Line = styled.View`
  width: 100%;
  border-color: white;
  background-color: transparent;
  border-bottom-width: 6px;
  border-style: dashed ;
`;

export const TicketDateContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: center;
 
`;

export const TicketDateText = styled.Text`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 60px;
  height: 70px;
  top: -10px;
`;


export const TicketMonthText = styled.Text`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 20px;
  top: -15px;
`;



export const TicketTitle = styled.Text`
  width: 90%;
  text-align: center;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 14px;
  margin-top: 10px;
`;

export const TicketDetailsContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;

export const BoxTicketDetails = styled.View`
  top: -5px;
  justify-content: center;
  align-items: center;
`;

export const LineSeparator = styled.View`
  height: 70px;
  background-color: ${theme.colors.text};
  width: 4px;
  top: -15px;
  margin: 0px 10px;

`;

export const BoxTicketSeats = styled.View`
  padding-bottom: 20px;
`

export const SeatsContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const SeatsText = styled.Text`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 14px;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const TimeText = styled.Text`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 14px;
`;

export const BarCodeContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const BarCodeImage = styled.Image`
  width: 90%;
  height: 50px;
`;

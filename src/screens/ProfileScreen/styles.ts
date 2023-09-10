import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  color: ${theme.colors.text};
  font-size: 20px;
  font-family: ${theme.fonts.POPPINS_LIGHT};

`;
export const TitleGetting = styled.Text`
  color: ${theme.colors.text};
  font-size: 20px;
  font-family: ${theme.fonts.POPPINS_BOLD};
  margin-right: 5px;
`;

export const ButtonSingOut = styled.TouchableOpacity``;

export const  Context = styled.View`
  width: 100%;
  flex: 1;
  padding: 35px;
  margin-top: 40px;
  justify-content: center;
`;

export const IconProfile = styled.View`
  height: 80px;
  width: 80px;
  border-radius: 90px;
  background-color: ${theme.colors.headingPlaceholder};
  justify-content: center;
  align-items: center;
`;

export const ProfileHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TitleContent = styled.View`
  margin-top: 10px;
  margin-left: 20px;
`;
export const EmailUser = styled.Text`
  color: ${theme.colors.backgroundBlur};
  font-family: ${theme.fonts.POPPINS_REGULAR};
  font-size: 13px;
`;

export const SingOutContent = styled.View`
  position: absolute;
  top: 15px;
  right: 20px;
  flex-direction: row;
`;

export const TextSingOut = styled.Text`
  color: ${theme.colors.circleRed};
  font-family: ${theme.fonts.POPPINS_BOLD};
  font-size: 16px;
  margin-right: 20px;
`;

export const NameContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const DetailsContent = styled.View`
  width: 100%;
  flex-direction: row;
  border-radius: 15px;
  border-color: ${theme.colors.headingPlaceholder};
  border-width: 2px;
  margin-top: 40px;
`;

export const DetailsButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  border-color: ${theme.colors.headingPlaceholder};
  padding: 20px;
`;

export const Line = styled.View`
  height: 100%;
  width: 2px;
  background-color: ${theme.colors.headingPlaceholder};
`;

export const SpanText = styled.Text`
  color: ${theme.colors.headingPlaceholder};
  font-family: ${theme.fonts.POPPINS_REGULAR};
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
`;


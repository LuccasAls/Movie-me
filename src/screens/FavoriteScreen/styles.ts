import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 30px 20px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.View`
  width: 100%;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0px 30px;

`;

export const LoadingContent = styled.View`
  justify-content: center;
  align-self: center;
  flex: 1;
`;
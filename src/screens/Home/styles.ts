import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.ScrollView`
  height: 100%;
  background-color: ${theme.colors.background};

`;
export const Context = styled.View`
  padding-left: 25px;
`;
export const Section = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};

`;
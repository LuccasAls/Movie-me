import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 34px;
`;

export const Button = styled.TouchableOpacity`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.POPPINS_BOLD};
    font-size: 24px;
    justify-content: space-between;
`;
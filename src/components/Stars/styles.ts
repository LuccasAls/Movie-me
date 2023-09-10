import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
 
`;
export const StarsView = styled.View`
    flex-direction: row;
`;
export const StarsText = styled.Text`
  font-size: 14px;
  margin-right: 5px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.POPPINS_BOLD};
  text-align: center;
  top: 2px;
`
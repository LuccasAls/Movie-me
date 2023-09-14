import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  padding: 13px 20px;
  border: 0px;
  
`;
export const Image = styled.Image`
  height: 20px;
  width: 20px;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.POPPINS_BOLD};
`;
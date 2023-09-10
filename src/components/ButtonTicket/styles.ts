import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Container = styled.View`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  position: relative;
  top: -25px;
  
`;
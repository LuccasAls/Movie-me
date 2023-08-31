import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const Getting = styled.Text`
    font-size: 44px;
    font-family: ${theme.fonts.POPPINS_BOLD};
    margin-top: 54px;
    color: ${theme.colors.primary};
`;

export const Content = styled.View`
    padding: 24px;
    flex: 1;
    justify-content: flex-end;
`;

export const CircleYellow = styled.View`
    position: absolute;
    top: 160px;
    right: -150px;
    z-index: -100;
`;
export const CircleRed = styled.View`
    position: absolute;
    bottom: -120px;
    right: 170px;
    z-index: -1;   
`;

export const Form = styled.View`
    height: 490px;
    width: 350px;
    background-color: #cecece40;
    border-radius: 40px;
    padding: 26px;
    overflow: hidden;
`;

export const SectionAuth = styled.View` 
    flex-direction: row;
    gap: 20px;
    margin-top: 10px;
`;

export const FormHeader = styled.View`
    width: 100%;
    align-items: center;
`;

export const Description = styled.Text`
    font-family: ${theme.fonts.POPPINS_REGULAR};
    color: ${theme.colors.text};
`;
export const DescriptionFooter = styled.View` 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`;

export const FooterSing = styled.TouchableOpacity` `;

export const Span = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.POPPINS_BOLD};
`;

export const ForgotPassword = styled.TouchableOpacity`
    width: 100%;
    height: 20px;
    align-items: flex-end;
    margin-top: 10px;
    justify-content: flex-end;
    flex-direction: row;
`;

export const FormContainer = styled.View`
    padding: 28px;
`;
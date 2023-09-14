import React, {useState, useContext} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { 
  CircleRed, 
  CircleYellow, 
  Content, 
  Description, 
  DescriptionFooter, 
  FooterSing, 
  ForgotPassword, 
  Form, 
  FormHeader, 
  Getting, 
  SectionAuth, 
  Span,
  FormContainer
} from './styles';
import  auth from '@react-native-firebase/auth';
import { Input } from '../../components/Input';
import { theme } from '../../theme/theme';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Authentication } from '../../components/Authentication';
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import { Circle } from '../../components/Circle';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from '@react-native-community/blur';
// import {AuthContext} from '../../context/auth';
import { VerifyErroCode } from '../../auth/VerifyErroCode';
import { useAuth } from '../../hooks/auth';

export function SingIn() {
  // const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const navigation = useNavigation()
  const { loading, singIn, forgotPassword} = useAuth();


  async function handleSingIn() {
    await singIn({email, password})
  }

  function handleOpenSingUp() {
    navigation.navigate('SingUp')
  }

  

  function handleForgotPassword() {
    forgotPassword({email})
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: theme.colors.background}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>

          <Header/>
          <Getting>Hi!</Getting>
          
          <Form> 
            <BlurView 
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  
                }}
                blurType='light'
                blurAmount={70}
              />
                <FormContainer>
                  <FormHeader>
                    <Description>Please, sing in to continue!</Description>
                    <SectionAuth>
                      <Authentication
                        title='Google'
                        icon={google}
                        color={theme.colors.text}
                        textColor='#484848'
                      />
                      <Authentication
                        title='Facebook'
                        icon={facebook}
                        color={theme.colors.facebookField}
                        textColor={theme.colors.text}
                      />
                    </SectionAuth>
                  </FormHeader>
                  
                  <Input 
                    textContentType='emailAddress'
                    title='E-mail'
                    placeholder='Digite seu email'
                    onChangeText={setEmail}
                  />
                  <Input 
                    secureTextEntry
                    title='Password'
                    placeholder='Digite sua senha'
                    onChangeText={setPassword}
                  />
                  <ForgotPassword
                    onPress={handleForgotPassword}>
                      
                    <Span>Esqueci a senha</Span>
                    <MaterialIcons
                        name='email'
                        color={theme.colors.primary}
                        size={17}
                        style={{ marginRight: 5, marginLeft: 5}}
                      />
                  </ForgotPassword>
                
                   <Button 
                        title="Login"
                        onPress={handleSingIn}
                        loading={loading}

                      />
                  
                  <DescriptionFooter> 
                    <Description> Don't have an account? </Description>
                    <FooterSing 
                      onPress={handleOpenSingUp}
                    > 
                      <Span> Sing In</Span>
                      
                    </FooterSing>
                  </DescriptionFooter>
              </FormContainer>
              
          </Form>

          <CircleYellow>
            <Circle 
              color={theme.colors.primary}
            />
          </CircleYellow>
          <CircleRed>
              <Circle 
                color={theme.colors.circleRed}
              />
            </CircleRed>
        </Content>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


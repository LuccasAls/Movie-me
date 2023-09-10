import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator
} from 'react-native';

import  auth  from '@react-native-firebase/auth'; 

import { Input } from '../../components/Input';
import { theme } from '../../theme/theme';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { 
  CircleRed, 
  CircleYellow, 
  Content, 
  Description, 
  DescriptionFooter, 
  FooterSing, 
  Form, 
  FormContext, 
  FormHeader, 
  FormSection, 
  Getting, 
  Span } 
from './styles';
import { Circle } from '../../components/Circle';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur'
import { useAuth } from '../../hooks/auth';


export function SingUp() {

  const [email, setEmail] = useState(' ');
  const [name, setName] = useState(' ');
  const [password, setPassword] = useState(' ');
  const navigation = useNavigation()
  const {loading, singUp} = useAuth()



  async function handleSingIn() {
    await singUp({email, password, name})
  }

  function handleOpenSingIn() {
    navigation.navigate('SingIn')
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
                position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
              }}
              blurType="light"
              blurAmount={40}
              
              />

              
              <FormSection>
                <FormHeader>
                  <Description>Please, sing in to continue!</Description>

                  
                </FormHeader>
                <FormContext> 
                  <Input 
                    textContentType='name'
                    title='Nome'
                    placeholder='Digite seu nome'
                    onChangeText={setName}
                  />
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
    
                  </FormContext>
                
                 <Button 
                      style={{marginTop: 10}}
                      title="Sing In"
                      onPress={handleSingIn}
                      loading={loading}
                    />
                  
                <DescriptionFooter> 
                  <Description> Have an account? </Description>
                  <FooterSing 
                    onPress={handleOpenSingIn}
                  > 
                    <Span> Sing In</Span>
                  </FooterSing>
                </DescriptionFooter>
              </FormSection>
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


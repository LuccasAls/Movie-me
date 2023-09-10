import React from 'react';
import { Container, Message, MessageTitle } from './styles';

type ModalContentProps = {
    title: string,
    text: string,
}

export function ModalMessage({ title, text}: ModalContentProps) {
  return (
    <>
        <MessageTitle>{title}</MessageTitle>
        <Message>{text}</Message>
    </>
  );
}
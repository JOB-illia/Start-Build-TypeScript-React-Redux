import React from 'react';
import Styled from './ButtonsStyle';

interface IButton {
  children: React.ReactNode | React.ReactChildren,
  color?: 'inherit' | 'primary' | 'secondary' | 'default',
  type?: 'text' | 'outlined' | 'contained',
  size?: 'small' | 'medium' | 'large',
  onClick: () => void;
}

export const Buttons: React.FC<IButton> = (
    { children, color, type, size, onClick }: IButton
  ) => {
  return (
    <Styled.Btn
      size={size}
      variant={type}
      color={color}
      onClick={onClick}
    >
      {children}
    </Styled.Btn>
  )
}

interface IButtonIcon {
  children: React.ReactChildren | React.ReactNode,
  size?: 'small' | 'medium',
  onClick: () => void,
}

export const ButtonIcon: React.FC<IButtonIcon> = (
  {children, size, onClick}: IButtonIcon) => {
 return (
  <Styled.BtnIcon aria-label="delete" size={size} onClick={onClick}>
    {children}
  </Styled.BtnIcon>
 )
}
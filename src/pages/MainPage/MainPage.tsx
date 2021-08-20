import React from 'react';
import Counter from '../../components/Counter/Counter';
import Styled from './MainPageStyle';
import { ButtonIcon } from '../../atoms/Buttons/Buttons';

interface IMainPage {
  onClick: () => void;
}

const MainPage: React.FC<IMainPage> = ({ onClick }: IMainPage) => {


  return (
    <Styled.Body>
      <Styled.Title>Main Page</Styled.Title>
      <Counter />
      <ButtonIcon size="small" onClick={onClick}>
        <Styled.IconBright />
      </ButtonIcon>
    </Styled.Body>
  )
}

export default MainPage;
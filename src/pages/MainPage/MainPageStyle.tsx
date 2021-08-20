import styled from 'styled-components';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default {
  Body: styled.div`
    position: relative;
    height: 100vh;
    background: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap column;
  `,
  Title: styled.h1`
    margin: 0;
    font-size: 72px;
    text-align: center;
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.font.thin};
    margin-bottom: 20px;
  `,

  IconBright: styled(Brightness4Icon)`
    && {
      color: ${({theme}) => theme.colors.black};
    }
  `,
}
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

export default {
  Btn: styled(Button)`
    && {
      margin: 0 2rem;
    }
  `,

  BtnIcon: styled(IconButton)`
    && {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  `,
}
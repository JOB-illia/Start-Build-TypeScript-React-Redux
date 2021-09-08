import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: blue[800],
      light: '#f1f1f1',
    },
    secondary: {
      main: green[500],
    },
  },
});

export default responsiveFontSizes(theme);

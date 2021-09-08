import { makeStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    // backgroundColor: theme.palette.primary.light,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default headerStyle;

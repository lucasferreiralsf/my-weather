import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      width: '100%',
      margin: 0,
    },
    rightSide: {
      background: theme.palette.primary.dark,
    },
  })
);

export default useStyles;

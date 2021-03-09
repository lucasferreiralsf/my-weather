import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      width: '100%',
      margin: 0,
      [theme.breakpoints.down(960)]: {
        flexDirection: 'row-reverse',
      },
    },
    rightSide: {
      background: theme.palette.primary.dark,
      [theme.breakpoints.down(960)]: {
        order: 1,
      },
    },
    leftSide: {
      [theme.breakpoints.down(960)]: {
        order: 2,
      },
    },
  })
);

export default useStyles;

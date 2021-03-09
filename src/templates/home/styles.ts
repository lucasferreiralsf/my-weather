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
      [theme.breakpoints.down(960)]: {
        order: 1,
      },
    },
    leftSide: {
      [theme.breakpoints.down(960)]: {
        order: 2,
      },
      [theme.breakpoints.up(960)]: {
        overflowY: 'auto',
        height: '100vh',
      },
    },
  })
);

export default useStyles;

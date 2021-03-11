import {
  createStyles,
  darken,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      width: '100%',
      margin: 0,
    },
    rightSide: {
      background: theme.palette.primary.main,
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
    reactourMask: {
      color: darken(theme.palette.primary.dark, 0.5),
      opacity: 0.6,
    },
    reactourHelper: {
      color:
        theme.palette.type === 'dark'
          ? `${theme.palette.text.secondary} !important`
          : `${theme.palette.text.secondary} !important`,
      backgroundColor:
        theme.palette.type === 'dark'
          ? `${theme.palette.primary.dark} !important`
          : `${theme.palette.primary.main} !important`,
      '& button.reactour__close, [data-tour-elem="right-arrow"], [data-tour-elem="left-arrow"]': {
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.secondary.main,
        },
      },
    },
  })
);

export default useStyles;

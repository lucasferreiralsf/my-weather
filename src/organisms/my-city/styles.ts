import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.secondary,
      width: '100%',
      [theme.breakpoints.down(960)]: {
        height: '110vh',
      },
      [theme.breakpoints.up(960)]: {
        height: '98vh',
      },
    },
    weatherIcon: {
      fontSize: '3.4em',
    },
    circleSeparator: {
      width: '6px',
      height: '6px',
      background: 'white',
      borderRadius: '60px',
      margin: theme.spacing(2, 3),
    },
    '@global': {
      '.recharts-wrapper .recharts-cartesian-grid-vertical line:nth-last-child(2)': {
        strokeOpacity: 0,
      },
      '.recharts-wrapper .recharts-cartesian-grid-vertical line:last-child': {
        strokeOpacity: 0,
      },
      '.recharts-wrapper .recharts-layer line': {
        strokeOpacity: 0,
      },
    },
    cloudsLeft: {
      marginTop: '-900px',
      opacity: 0.06,
      zIndex: 0,
      fontSize: '6px',
    },
    cloudsRight1: {
      marginTop: '-700px',
      opacity: 0.03,
      zIndex: 0,
      fontSize: '8px',
    },
    cloudsRight2: {
      marginTop: '-1150px',
      opacity: 0.04,
      zIndex: 0,
      fontSize: '4px',
    },
    zindex: {
      zIndex: 1,
    },
    toggleDarkMode: {
      zIndex: 1,
    },
  })
);

export default useStyles;

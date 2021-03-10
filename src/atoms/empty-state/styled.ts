import {
  makeStyles,
  createStyles,
  createMuiTheme,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    primaryText: {
      fontWeight: theme.typography.fontWeightMedium,
      padding: '20px 0 4px 0',
      color: theme.palette.text.primary,
    },
    secondaryText: {
      color: theme.palette.text.hint,
    },
  })
);

export default useStyles;

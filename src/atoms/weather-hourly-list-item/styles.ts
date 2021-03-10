import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chart: {
      fontSize: '1.1em',
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);

export default useStyles;

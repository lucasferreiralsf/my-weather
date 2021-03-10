import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '150px',
      maxWidth: '150px',
      cursor: 'pointer',
    },
    image: {
      width: 150,
      height: 200,
      background: 'transparent',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: 12,
      border: `2px solid ${
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.light
      }`,
    },
    tapDiv: {
      width: '100%',
      height: '100%',
      borderRadius: '12px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addIcon: {
      fontSize: 50,
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.light,
    },
  })
);

export default useStyles;

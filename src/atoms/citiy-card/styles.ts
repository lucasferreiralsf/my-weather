import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '150px',
      maxWidth: '150px',
      cursor: 'pointer',
    },
    image: (props: { src: string }) => ({
      width: 150,
      height: 200,
      background: `url(${props.src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: 12,
      position: 'relative',
    }),
    imageShadow: (props: { src: string }) => ({
      background: `url(${props.src})`,
      filter: 'blur(12px) opacity(0.55)',
      position: 'absolute',
      width: 150,
      height: 200,
    }),
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
      color: theme.palette.primary.light,
    },
  })
);

export default useStyles;

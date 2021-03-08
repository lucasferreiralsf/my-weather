import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';
import MyCity from '../components/my-city';

export default function Home(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={8} />
      <Grid
        container
        item
        xs={12}
        md={4}
        className={classes.rightSide}
        justify="center"
        alignItems="center"
      >
        <MyCity />
      </Grid>
    </Grid>
  );
}

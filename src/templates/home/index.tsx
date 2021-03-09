import React from 'react';
import { Grid } from '@material-ui/core';

import { OpenWeatherCityByLatLon, OpenWeatherOneCall } from '@core/interfaces';
import MyCity from '@organisms/my-city';

import useStyles from './styles';

type HomeProps = {
  initialCity?: OpenWeatherCityByLatLon;
  oneCallInitialData?: OpenWeatherOneCall;
};

function Home({ initialCity, oneCallInitialData }: HomeProps) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={8} className={classes.leftSide} />
      <Grid
        container
        item
        xs={12}
        md={4}
        className={classes.rightSide}
        justify="center"
        alignItems="center"
      >
        <MyCity
          initialCity={initialCity}
          oneCallInitialData={oneCallInitialData}
        />
      </Grid>
    </Grid>
  );
}

export default Home;

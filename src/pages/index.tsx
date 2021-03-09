import React from 'react';
import { Grid } from '@material-ui/core';
import { GetStaticProps } from 'next';

import useStyles from './styles';
import MyCity from '../components/my-city';

import {
  OpenWeatherOneCall,
  OpenWeatherCityByLatLon,
} from '../core/interfaces';
import OtherCities from '../components/other-cities';

export default function Home({
  initialCity,
  oneCallInitialData,
}: {
  initialCity: OpenWeatherCityByLatLon;
  oneCallInitialData: OpenWeatherOneCall;
}): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={8} className={classes.leftSide}>
        <OtherCities />
      </Grid>
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

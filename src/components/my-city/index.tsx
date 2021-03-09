import React, { useEffect, useState } from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { IoCloudySharp } from 'react-icons/io5';
import { RiCloudFill } from 'react-icons/ri';
import { FaCloud } from 'react-icons/fa';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { Skeleton } from '@material-ui/lab';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import useStyles from './styles';
import {
  OpenWeatherCityByLatLon,
  OpenWeatherOneCall,
} from '../../core/interfaces';

import {
  useOpenWeatherCityByLatLon,
  useOpenWeatherOneCall,
} from '../../core/fetchers/open-weather-fetcher';

export type MyCity = {
  oneCallInitialData?: OpenWeatherOneCall;
  initialCity?: OpenWeatherCityByLatLon;
};

const MyCity = ({ oneCallInitialData, initialCity }: MyCity) => {
  const classes = useStyles();

  const [coords, setCoords] = useState<{ lat: number; lon: number }>();
  const {
    data: weatherData,
    loading: weatherLoading,
    mutate: mutateWeather,
  } = useOpenWeatherOneCall(coords?.lat, coords?.lon, oneCallInitialData);
  const {
    data: cityData,
    loading: cityLoading,
    mutate: mutateCity,
  } = useOpenWeatherCityByLatLon(coords?.lat, coords?.lon, initialCity);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          mutateWeather();
          mutateCity();
        }
      );
    }
  });

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
      spacing={4}
    >
      <Grid container item justify="center" alignItems="center" xs={12}>
        {weatherData && (
          <img
            src={`http://openweathermap.org/img/wn/${weatherData?.current.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        )}
        <Grid item>
          <Typography variant="h4">Hoje</Typography>
          <Typography>
            {format(Date.now(), 'd LLL, EEE', { locale: ptBR })}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Typography variant="h2">
          {weatherLoading ? <Skeleton /> : `${weatherData?.current.temp} °C`}
        </Typography>
        <Typography>
          {cityLoading ? (
            <Skeleton />
          ) : (
            `${cityData?.name}, ${cityData?.country}`
          )}
        </Typography>
      </Grid>
      <Grid container item justify="center" alignItems="center" xs={12}>
        <Grid item lg={5}>
          <Typography align="center">
            {weatherLoading ? (
              <Skeleton width={100} />
            ) : (
              `Sensação de ${weatherData?.current.feels_like} °C`
            )}
          </Typography>
        </Grid>
        <Grid item className={classes.circleSeparator} />
        <Grid item lg={5}>
          <Typography align="center">
            {weatherLoading ? (
              <Skeleton />
            ) : (
              `Pôr do sol às${' '}
            ${
              weatherData?.current?.sunset &&
              format(weatherData.current.sunset * 1000, 'HH:mm')
            }`
            )}
          </Typography>
        </Grid>
      </Grid>
      {weatherData && (
        <Grid container item justify="center" alignItems="center">
          <Grid item xs={10}>
            <Typography style={{ padding: '30px 0' }}>
              Chance de chuva
            </Typography>
            <ResponsiveContainer width="95%" height={150}>
              <BarChart
                data={weatherData?.hourly.slice(
                  weatherData.hourly.length - 5,
                  weatherData.hourly.length
                )}
              >
                <XAxis
                  dataKey="dt"
                  stroke="#8884d8"
                  axisLine={false}
                  tickFormatter={(value: number) =>
                    format(value * 1000, 'HH:mm')
                  }
                />

                <YAxis
                  stroke="white"
                  interval={1}
                  tickFormatter={(value) => `${value}%`}
                />

                <Tooltip />
                <CartesianGrid
                  horizontal={false}
                  stroke="#ccc"
                  strokeDasharray="5 5"
                />
                <Bar
                  dataKey="humidity"
                  fill="#8884d8"
                  barSize={14}
                  radius={100}
                />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      )}
      <svg viewBox="1 0 20 12" className={classes.cloudsLeft}>
        <RiCloudFill />
      </svg>
      <svg viewBox="-14 0 20 12" className={classes.cloudsRight1}>
        <IoCloudySharp />
      </svg>
      <svg viewBox="-15 0 20 12" className={classes.cloudsRight2}>
        <FaCloud />
      </svg>
    </Grid>
  );
};

export default MyCity;

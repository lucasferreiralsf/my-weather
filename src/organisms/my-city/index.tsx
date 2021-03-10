import React, { useEffect, useState } from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
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

import DarkModeToggle from '@atoms/DarkModeToggle';
import { ThemeContext } from '@core/theme';
import { OpenWeatherCityByLatLon, OpenWeatherOneCall } from '@core/interfaces';
import {
  useOpenWeatherCityByLatLon,
  useOpenWeatherOneCall,
} from '@core/fetchers/open-weather-fetcher';
import environments from '@core/api/environments';

import useStyles from './styles';

export type MyCityProps = {
  oneCallInitialData?: OpenWeatherOneCall;
  initialCity?: OpenWeatherCityByLatLon;
};

const MyCity = ({ oneCallInitialData, initialCity }: MyCityProps) => {
  const classes = useStyles();
  const theme = useTheme();

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
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
      spacing={5}
    >
      <Grid
        container
        item
        justify="flex-end"
        alignItems="center"
        xs={12}
        className={classes.toggleDarkMode}
      >
        <ThemeContext.Consumer>
          {({ prefersDarkMode, toggleDarkMode }) => (
            <DarkModeToggle
              toggleSelected={toggleDarkMode}
              selected={prefersDarkMode}
            />
          )}
        </ThemeContext.Consumer>
      </Grid>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.zindex}
      >
        {weatherData && (
          <img
            src={`${environments.openWeatherIconsBaseUrl}/${weatherData?.current.weather[0].icon}@2x.png`}
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
        className={classes.zindex}
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
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.zindex}
      >
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
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          className={classes.zindex}
        >
          <Grid item xs={10}>
            <Typography style={{ padding: '30px 0' }}>
              Chance de chuva
            </Typography>
            <ResponsiveContainer width="95%" height={200}>
              <BarChart
                data={weatherData?.hourly.slice(
                  weatherData.hourly.length - 5,
                  weatherData.hourly.length
                )}
              >
                <XAxis
                  dataKey="dt"
                  stroke={theme.palette.text.secondary}
                  axisLine={false}
                  tickFormatter={(value: number) =>
                    format(value * 1000, 'HH:mm')
                  }
                />

                <YAxis
                  stroke={theme.palette.text.secondary}
                  interval={1}
                  tickFormatter={(value) => `${value}%`}
                />

                <Tooltip
                  labelFormatter={() => ''}
                  contentStyle={{
                    background: theme.palette.background.paper,
                    borderRadius: '12px',
                    border: 'none',
                  }}
                  cursor={{
                    fill: 'transparent',
                  }}
                  wrapperStyle={{ zIndex: 2 }}
                  formatter={(value: number) => [` ${value}%`, 'Humidade']}
                />
                <CartesianGrid
                  horizontal={false}
                  stroke={theme.palette.background.paper}
                  strokeDasharray="5 5"
                />
                <Bar
                  dataKey="humidity"
                  fill={theme.palette.primary.dark}
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

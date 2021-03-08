import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
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
import { GetStaticProps } from 'next';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import useStyles from './style';
import { OpenWeatherOneCall } from '../../core/interfaces/open-weather-one-call';
import { getOneCallForecast } from '../../core/providers/open-weather';
import { useOpenWeatherOneCall } from '../../core/fetchers/open-weather-fetcher';

export const getStaticProps: GetStaticProps = async () => {
  const initialData = await getOneCallForecast();
  return {
    props: { initialData },
  };
};

export type MyCity = {
  initialData?: OpenWeatherOneCall;
};

const MyCity = ({ initialData }: MyCity) => {
  const classes = useStyles();

  const [coords, setCoords] = useState<{ lat: number; lon: number }>();
  const { data } = useOpenWeatherOneCall(coords?.lat, coords?.lon, initialData);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
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
    >
      <Grid item style={{ margin: '100px 0' }}>
        <Grid container item justify="center" alignItems="center">
          {data && (
            <img
              src={`http://openweathermap.org/img/wn/${data?.current.weather[0].icon}@2x.png`}
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
          style={{ margin: '40px 0' }}
        >
          <Typography variant="h2">{data?.current.temp} &deg;C</Typography>
          <Typography>São Paulo, MG</Typography>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography>Sensação de {data?.current.feels_like} &deg;C</Typography>
          <div className={classes.circleSeparator} />
          <Typography>
            Pôr do sol às{' '}
            {data?.current?.sunset &&
              format(data.current.sunset * 1000, 'HH:mm')}
          </Typography>
        </Grid>
      </Grid>
      {data && (
        <Grid container item justify="center">
          <Grid item xs={10}>
            <Typography style={{ padding: '30px 0' }}>
              Chance de chuva
            </Typography>
            <ResponsiveContainer width="95%" height={150}>
              <BarChart
                data={data?.hourly.slice(
                  data.hourly.length - 5,
                  data.hourly.length
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
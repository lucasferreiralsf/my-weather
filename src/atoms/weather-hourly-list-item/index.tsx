import React from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { WiRaindrop, WiThermometer } from 'react-icons/wi';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { motion } from 'framer-motion';

import { bottomToTopVariant } from '@core/animations/default-animations';
import { Current } from '@core/interfaces/open-weather-one-call';
import environments from '@core/api/environments';

const WeatherHourlyListItem = ({
  data,
  loading = false,
}: {
  data?: Current;
  loading?: boolean;
}) => {
  const theme = useTheme();

  return (
    <motion.div variants={bottomToTopVariant} style={{ width: '100%' }}>
      <Grid
        container
        item
        spacing={2}
        alignItems="center"
        justify="center"
        xs={12}
      >
        <Grid item xs>
          {loading ? (
            <Skeleton />
          ) : (
            <Typography style={{ textTransform: 'capitalize' }}>
              {data && format(data.dt * 1000, 'EEE, HH:mm', { locale: ptBR })}
            </Typography>
          )}
        </Grid>
        <Grid container item alignItems="center" justify="center" xs={2}>
          <WiRaindrop
            fontSize={28}
            color={theme.palette.primary.light}
            style={{ marginTop: 2 }}
          />
          {loading ? (
            <Skeleton width={50} />
          ) : (
            <Typography>{data?.pop && (data.pop * 100).toFixed()}%</Typography>
          )}
        </Grid>
        <Grid item xs={1}>
          {loading ? (
            <Skeleton />
          ) : (
            <img
              src={`${environments.openWeatherIconsBaseUrl}/${data?.weather[0].icon}.png`}
              alt="weather icon"
            />
          )}
        </Grid>
        <Grid container item alignItems="center" justify="center" xs>
          {loading ? (
            <Skeleton width={50} />
          ) : (
            <Typography>{data?.temp && data.temp.toFixed()} °C</Typography>
          )}
          <WiThermometer
            fontSize={28}
            color={theme.palette.secondary.light}
            style={{ marginTop: 2 }}
          />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default WeatherHourlyListItem;

import React from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { WiRaindrop } from 'react-icons/wi';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { motion } from 'framer-motion';

import { bottomToTopVariant } from '@core/animations/default-animations';
import { Daily } from '@core/interfaces/open-weather-one-call';
import environments from '@core/api/environments';

import useStyles from './styles';

const WeatherDailyListItem = ({
  data,
  loading = false,
}: {
  data?: Daily;
  loading?: boolean;
}) => {
  const theme = useTheme();
  const classes = useStyles();

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
        <Grid item xs={3}>
          {loading ? (
            <Skeleton />
          ) : (
            <Typography style={{ textTransform: 'capitalize' }}>
              {data && format(data.dt * 1000, 'EEEE, dd-MM', { locale: ptBR })}
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
        <Grid item xs={6} className={classes.chart}>
          {loading ? (
            <Skeleton />
          ) : (
            <ResponsiveContainer width="100%" height={50}>
              <BarChart data={[data]} layout="vertical" stackOffset="sign">
                <XAxis type="number" domain={[100, 0, 100]} hide />

                <YAxis
                  dataKey="temp.min"
                  type="category"
                  tickFormatter={(value) => `${value.toFixed()} °C`}
                  stroke={theme.palette.text.primary}
                />
                <YAxis
                  dataKey="temp.max"
                  orientation="right"
                  yAxisId="right"
                  type="category"
                  tickFormatter={(value) => `${value.toFixed()} °C`}
                  stroke={theme.palette.text.primary}
                />

                <Tooltip
                  formatter={(value: number, name: string) => [
                    ` ${value} °C`,
                    name === 'temp.max' ? 'Temperatura máx' : 'Temperatura min',
                  ]}
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
                />

                <Bar
                  dataKey="temp.min"
                  fill={theme.palette.primary.light}
                  barSize={8}
                  radius={100}
                  stackId="temp"
                />
                <Bar
                  dataKey="temp.max"
                  fill={theme.palette.secondary.dark}
                  barSize={8}
                  radius={100}
                  stackId="temp"
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default WeatherDailyListItem;

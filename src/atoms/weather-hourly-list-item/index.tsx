import React from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { WiRaindrop, WiThermometer } from 'react-icons/wi';
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
import { Current } from '@core/interfaces/open-weather-one-call';
import useStyles from './styles';

const WeatherHourlyListItem = ({
  data,
  loading = false,
}: {
  data?: Current;
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
              src={`http://openweathermap.org/img/wn/02d.png`}
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
          {/* {loading ? (
            <Skeleton />
            ) : (


            <ResponsiveContainer width="100%" height={50}>
              <BarChart data={[data]} layout="vertical" stackOffset="sign">
                <XAxis type="number" domain={[0, 100]} hide />

                <YAxis
                  dataKey="temp"
                  type="category"
                  tickFormatter={(value) => `${value} °C`}
                  stroke={theme.palette.text.primary}
                />

                <Tooltip
                  formatter={(value: number, name: string) => [
                    ` ${value} °C`,
                    'Temperatura',
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
                  dataKey="temp"
                  fill={theme.palette.primary.light}
                  barSize={8}
                  radius={100}
                  stackId="temp"
                />
              </BarChart>
            </ResponsiveContainer>
          )} */}
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default WeatherHourlyListItem;

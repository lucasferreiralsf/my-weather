import React from 'react';
import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';

import EmptyState from '@atoms/empty-state';
import WeatherDailyListItem from '@atoms/weather-daily-list-item';
import { OpenWeatherOneCall } from '@core/interfaces/open-weather-one-call';
import { defaultContainerVariants } from '@core/animations/default-animations';
import WeatherHourlyListItem from '@atoms/weather-hourly-list-item';

const WeatherHourlyList = ({
  weatherData = { daily: [] } as any,
  loading = false,
}: {
  weatherData?: OpenWeatherOneCall;
  loading?: boolean;
}) => {
  return (
    <motion.div
      variants={defaultContainerVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Grid container justify="center" alignItems="center">
        {loading ? (
          Array(5)
            .fill(5)
            .map((_item, i) => (
              <WeatherDailyListItem
                /* eslint-disable */
                key={i}
                loading={loading}
              />
            ))
        ) : weatherData && weatherData.hourly?.length > 0 ? (
          weatherData.hourly.slice(0, 24).map((item, i) => (
            <WeatherHourlyListItem
              /* eslint-disable */
              data={item}
              key={i}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </Grid>
    </motion.div>
  );
};

export default WeatherHourlyList;

import React from 'react';
import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';

import EmptyState from '@atoms/empty-state';
import WeatherDailyListItem from '@atoms/weather-daily-list-item';
import { OpenWeatherOneCall } from '@core/interfaces/open-weather-one-call';
import { defaultContainerVariants } from '@core/animations/default-animations';

const WeatherDailyList = ({
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
            .map((item, i) => (
              <WeatherDailyListItem
                /* eslint-disable */
                key={i}
                loading={loading}
              />
            ))
        ) : weatherData && weatherData.daily?.length > 0 ? (
          weatherData?.daily.map((item, i) => (
            <WeatherDailyListItem
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

export default WeatherDailyList;

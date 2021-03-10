import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { AnimatePresence } from 'framer-motion';

import WeatherDailyList from '@molecules/weather-daily-list';
import WeatherHourlyList from '@molecules/weather-hourly-list';
import { StyledTab, StyledTabs } from '@atoms/styled-tabs';
import CitiesList from '@molecules/cities-list';
import { getPlaces, INITIAL_PLACES } from '@core/providers/add-place';
import { useOpenWeatherOneCall } from '@core/fetchers/open-weather-fetcher';

import useStyles from './styles';

const OtherCities = () => {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedCity, setSelectedCity] = useState<keyof typeof INITIAL_PLACES>(
    'paris'
  );
  const [cities, setCities] = useState<typeof INITIAL_PLACES>({});

  /* eslint-disable */
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  const { data: weatherData, loading: weatherLoading } = useOpenWeatherOneCall(
    cities[selectedCity]?.lat,
    cities[selectedCity]?.lon
  );

  useEffect(() => {
    setCities(getPlaces());
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" color="textPrimary">
            Previsão do tempo
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            overflowX: 'auto',
            padding: '40px 32px 40px 32px',
            marginTop: '-20px',
          }}
        >
          <CitiesList
            data={INITIAL_PLACES}
            onSelectCity={setSelectedCity}
            selectedCity={selectedCity}
          />
        </Grid>
        <Grid container item spacing={4}>
          <Grid item xs={12}>
            <StyledTabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="styled tabs example"
            >
              <StyledTab label="Semana" />
              <StyledTab label="Próximas horas" />
            </StyledTabs>
          </Grid>
          <Grid item xs={12}>
            <AnimatePresence exitBeforeEnter>
              {selectedTab === 0 ? (
                <WeatherDailyList
                  weatherData={weatherData}
                  loading={weatherLoading}
                  key={0}
                />
              ) : (
                <WeatherHourlyList
                  weatherData={weatherData}
                  loading={weatherLoading}
                  key={1}
                />
              )}
            </AnimatePresence>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OtherCities;

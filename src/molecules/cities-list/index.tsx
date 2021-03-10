import React from 'react';
import { Grid } from '@material-ui/core';

import AddCityButton from '@atoms/add-city-button';
import CityCard from '@atoms/citiy-card';
import { AppCities } from '@core/interfaces/app-cities';

type CitiesListProps = {
  data?: AppCities;
  onSelectCity?: (key: keyof AppCities) => void;
  selectedCity?: keyof AppCities;
  withAddCity?: boolean;
};

const CitiesList = ({
  data,
  onSelectCity,
  selectedCity,
  withAddCity = false,
}: CitiesListProps) => {
  const handleSelectCity = (labelId: any) => {
    if (onSelectCity) onSelectCity(labelId);
  };

  return (
    <Grid container item xs={12} spacing={4} wrap="nowrap">
      {data ? (
        Object.keys(data).map((item, i, arr) =>
          arr.length === i + 1 && withAddCity ? (
            <React.Fragment key={i}>
              <Grid item>
                <CityCard
                  src={data[item].src}
                  label={data[item].label}
                  onClick={handleSelectCity}
                  selected={selectedCity as string}
                />
              </Grid>
              <Grid item>
                <AddCityButton />
              </Grid>
            </React.Fragment>
          ) : (
            <Grid item key={i}>
              <CityCard
                src={data[item].src}
                label={data[item].label}
                onClick={handleSelectCity}
                selected={selectedCity as string}
              />
            </Grid>
          )
        )
      ) : (
        <Grid item>
          <Grid item>
            <AddCityButton />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default CitiesList;

import React, { useEffect, useState } from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import dynamic from 'next/dynamic';

import { OpenWeatherCityByLatLon, OpenWeatherOneCall } from '@core/interfaces';
import OtherCities from '@organisms/other-cities';
import MyCity from '@organisms/my-city';

import useStyles from './styles';

const Tour = dynamic(() => import('reactour'), { ssr: false });

const steps = [
  {
    content:
      'Olá, irei te guiar nesse app de previsão do tempo. Não esqueça de autorizar o acesso a sua localização 😉',
  },
  {
    selector: '[data-tour="step2"]',
    content:
      'Aqui fica a lista de outras cidades pra você conferir a previsão.',
  },
  {
    selector: '[data-tour="step3"]',
    content:
      'Aqui fica toda a previsão da cidade selecionada no passo anterior. Você pode escolher ver por dia da semana ou pelas próximas horas.',
  },
  {
    selector: '[data-tour="step4"]',
    content: 'Desse lado fica a previsão do tempo para a sua localidade. ☁️',
  },
  {
    selector: '[data-tour="step5"]',
    content:
      'E por último, mas não menos importante. Teste o modo dark clicando aqui. 😎',
  },
  {
    content: 'Terminamos o tutorial 😃, faça bom proveito!',
  },
];

type HomeProps = {
  initialCity?: OpenWeatherCityByLatLon;
  oneCallInitialData?: OpenWeatherOneCall;
};

function Home({ initialCity, oneCallInitialData }: HomeProps) {
  const classes = useStyles();
  const [isTourOpen, setIsTourOpen] = useState(true);
  const theme = useTheme();

  const handleCloseTour = () => {
    localStorage.setItem('tourDone', 'true');
    setIsTourOpen(false);
  };

  useEffect(() => {
    if (localStorage) {
      const tourDone = localStorage.getItem('tourDone');
      if (tourDone) setIsTourOpen(tourDone === 'false' ?? false);
    }
  }, []);

  return (
    <Grid container className={classes.root}>
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={handleCloseTour}
        rounded={14}
        closeWithMask={false}
        accentColor={theme.palette.secondary.main}
        maskSpace={4}
        maskClassName={classes.reactourMask}
        className={classes.reactourHelper}
        lastStepNextButton={
          <Typography onClick={handleCloseTour} variant="body2">
            Fechar
          </Typography>
        }
      />
      <Grid item xs={12} md={8} className={classes.leftSide}>
        <OtherCities />
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={4}
        className={classes.rightSide}
        justify="center"
        alignItems="center"
      >
        <MyCity
          initialCity={initialCity}
          oneCallInitialData={oneCallInitialData}
        />
      </Grid>
    </Grid>
  );
}

export default Home;

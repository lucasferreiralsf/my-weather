import React from 'react';
import { Typography } from '@material-ui/core';

import EmptyLogo from './empty_logo';
import useStyles from './styled';

type EmptyState = {
  primaryText?: string;
  secondaryText?: string;
};

function EmptyState(props: EmptyState): JSX.Element {
  const { primaryText, secondaryText } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <EmptyLogo width={220} />
      <Typography className={classes.primaryText} variant="subtitle1">
        {primaryText ?? 'Não encontramos nada'}
      </Typography>
      <Typography className={classes.secondaryText} variant="subtitle2">
        {secondaryText ?? 'Tente buscar novamente'}
      </Typography>
    </div>
  );
}

export default EmptyState;

import React from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { motion } from 'framer-motion';
import { IoAddCircleOutline } from 'react-icons/io5';

import hex2rgba from '@core/helpers/hex2rgba';
import useStyles from './styles';

type AddCityButtonProps = {
  onClick?: () => void;
};

const AddCityButton = ({ onClick }: AddCityButtonProps) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleButtonClick = () => {
    if (onClick) onClick();
  };

  return (
    <motion.div
      className={classes.root}
      whileHover={{
        scale: 1.05,
      }}
      onTap={handleButtonClick}
    >
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <div className={classes.image}>
            <motion.div
              className={classes.tapDiv}
              whileTap={{
                backgroundColor: hex2rgba(
                  theme.palette.type === 'dark'
                    ? theme.palette.secondary.dark
                    : theme.palette.primary.dark,
                  0.2
                ),
              }}
            >
              <IoAddCircleOutline className={classes.addIcon} />
            </motion.div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">Adicionar cidade</Typography>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default AddCityButton;

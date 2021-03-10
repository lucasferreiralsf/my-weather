import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Typography } from '@material-ui/core';

import { rightToLeftVariant } from '@core/animations/default-animations';
import useStyles from './styles';

export type CityCardProps = {
  src: string;
  label: string;
  selected?: string;
  onClick?: (labelId: string) => void;
  key?: string;
};

const CityCard = ({ src, label, key, selected, onClick }: CityCardProps) => {
  const classes = useStyles({ src });

  // const labelId = label.trim().replace(' ', '_').toUpperCase();
  const labelId = label.toLowerCase();

  const onCardTap = () => {
    if (onClick) onClick(key ?? labelId);
  };

  return (
    <motion.div variants={rightToLeftVariant} style={{ width: '100%' }}>
      <motion.div
        className={classes.root}
        whileHover={'hover'}
        onTap={onCardTap}
        animate={selected ?? false}
        variants={{
          [key ?? labelId]: {
            scale: 1.1,
          },
          hover: {
            scale: selected ? 1.1 : 1.05,
          },
        }}
        inherit={false}
      >
        <Grid container justify="center" alignItems="center" spacing={1}>
          <Grid item xs={12} style={{ position: 'relative' }}>
            <motion.div
              animate={selected ?? false}
              style={{ display: 'none' }}
              variants={{
                [key ?? labelId]: {
                  display: 'block',
                },
              }}
            >
              <div className={classes.imageShadow} />
            </motion.div>
            <div className={classes.image}>
              <motion.div
                className={classes.tapDiv}
                whileTap={{
                  backgroundColor: 'rgba(0,0,0,0.3)',
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">{label}</Typography>
          </Grid>
        </Grid>
      </motion.div>
    </motion.div>
  );
};
export default CityCard;

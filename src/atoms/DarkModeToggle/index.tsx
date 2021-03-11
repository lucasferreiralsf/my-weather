import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core';
import { motion } from 'framer-motion';

type DarkModeToggleProps = {
  selected?: boolean;
  toggleSelected?: (event: boolean) => void;
};
const DarkModeToggle = (props: DarkModeToggleProps): JSX.Element => {
  const { selected = false, toggleSelected } = props;
  const theme = useTheme();

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (toggleSelected) toggleSelected(!isOn);
  };

  useEffect(() => {
    if (toggleSelected) {
      setIsOn(selected);
    }
  }, [selected]);

  return (
    <motion.svg
      initial={false}
      animate={isOn ? 'checked' : 'unchecked'}
      onClick={toggleSwitch}
      width="60"
      height="30"
      fill="none"
      viewBox="0 0 60 30"
      style={{ cursor: 'pointer' }}
      data-tour="step5"
    >
      <motion.rect
        width="60"
        height="30"
        rx="15"
        variants={{
          checked: {
            fill: theme.palette.primary.dark,
          },
          unchecked: {
            fill: theme.palette.primary.light,
          },
        }}
      />
      <motion.rect
        width="23"
        height="23"
        rx="11"
        fill="#F9F9FC"
        y="3.5"
        variants={{
          checked: {
            x: 32,
            opacity: 0,
          },
          unchecked: {
            x: 4,
            opacity: 1,
          },
        }}
      />
      <motion.path
        fill="#F9F9FC"
        d="M32.3333 18.2061C33.9815 23.6469 39.248 27.1659 44.9102 26.6098C50.5725 26.0538 55.0525 21.5777 55.609 15.9204C56.1655 10.2631 52.6435 5.00124 47.1979 3.35442C46.9865 3.29836 46.7611 3.35576 46.6024 3.50609L46.4973 3.61109C46.3723 3.74238 46.3086 3.92037 46.3221 4.10109C46.7723 7.72701 45.527 11.3581 42.9457 13.9462C40.3645 16.5343 36.7346 17.7914 33.104 17.3544C32.9231 17.3409 32.7449 17.4045 32.6135 17.5294L32.5084 17.6344C32.358 17.793 32.3005 18.0182 32.3566 18.2294L32.3333 18.2061Z"
        variants={{
          checked: {
            x: -0,
            opacity: 1,
          },
          unchecked: {
            x: -29,
            opacity: 0,
          },
        }}
      />
      <motion.path
        fill="#F9F9FC"
        d="M14.4586 8.05297C14.4234 8.02735 14.4083 7.9822 14.4211 7.94057L14.4378 7.88854C14.45 7.84741 14.4865 7.8183 14.5294 7.81569L15.8593 7.70953L16.3692 6.48355C16.3863 6.4406 16.4293 6.41366 16.4754 6.41694H16.5295C16.573 6.41602 16.6123 6.44276 16.6273 6.48355L17.1393 7.70953L18.4693 7.81569C18.5121 7.8183 18.5487 7.84741 18.5609 7.88854L18.5775 7.94057C18.5917 7.98088 18.5792 8.02574 18.5463 8.05297L17.5431 8.9147L17.8511 10.2073C17.8613 10.2487 17.8457 10.2921 17.8116 10.3176L17.7512 10.3509C17.716 10.3747 17.6699 10.3747 17.6347 10.3509L16.5024 9.66403L15.364 10.3572C15.3288 10.381 15.2826 10.381 15.2474 10.3572L15.2016 10.3259C15.1675 10.3004 15.1519 10.257 15.1621 10.2156L15.4618 8.9147L14.4586 8.05297Z"
        variants={{
          checked: {
            y: 0,
            opacity: 1,
          },
          unchecked: {
            y: -10,
            opacity: 0,
          },
        }}
      />
      <motion.path
        fill="#F9F9FC"
        d="M21.4586 20.053C21.4234 20.0273 21.4083 19.9822 21.4211 19.9406L21.4378 19.8885C21.45 19.8474 21.4865 19.8183 21.5294 19.8157L22.8593 19.7095L23.3692 18.4835C23.3863 18.4406 23.4293 18.4136 23.4754 18.4169H23.5295C23.573 18.416 23.6123 18.4427 23.6273 18.4835L24.1393 19.7095L25.4693 19.8157C25.5121 19.8183 25.5487 19.8474 25.5609 19.8885L25.5775 19.9406C25.5917 19.9809 25.5792 20.0257 25.5463 20.053L24.5431 20.9147L24.8511 22.2073C24.8613 22.2487 24.8457 22.2921 24.8116 22.3176L24.7512 22.3509C24.716 22.3747 24.6699 22.3747 24.6347 22.3509L23.5024 21.664L22.364 22.3571C22.3288 22.3809 22.2826 22.3809 22.2474 22.3571L22.2016 22.3259C22.1675 22.3004 22.1519 22.257 22.1621 22.2156L22.4618 20.9147L21.4586 20.053Z"
        variants={{
          checked: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          },
          unchecked: {
            y: 6,
            opacity: 0,
          },
        }}
      />
      <motion.rect
        rx="1.5"
        fill="#F9F9FC"
        variants={{
          checked: {
            x: 27,
            y: 12,
            width: 2,
            height: 2,
          },
          unchecked: {
            x: 30,
            y: 11,
            width: 3,
            height: 3,
          },
        }}
      />
      <motion.rect
        y="5"
        rx="3"
        fill="#F9F9FC"
        variants={{
          checked: {
            x: 36,
            width: 2,
            height: 2,
          },
          unchecked: {
            x: 38,
            width: 6,
            height: 6,
          },
        }}
      />
      <motion.rect x="12" y="17" width="2" height="2" rx="1" fill="#F9F9FC" />
    </motion.svg>
  );
};

export default DarkModeToggle;

import React from 'react';
import { createStyles, Tab, Tabs, Theme, withStyles } from '@material-ui/core';

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      opacity: 0.6,
      '&:focus': {
        opacity: 1,
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabsProps {
  value: number;
  /* eslint-disable */
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles((theme: Theme) =>
  createStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: theme.palette.primary.dark,
      },
    },
  })
)((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

export { StyledTabs, StyledTab };

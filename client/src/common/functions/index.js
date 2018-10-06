import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const breakLine = str => (
  str.split('\n').map((i, key) => (
    <Typography
      align='center'
      component={Grid}
      key={key}>
      {i}<br />
    </Typography>
  ))
);
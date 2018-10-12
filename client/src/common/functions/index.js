import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const breakLine = (str, align) => (
  str.split('\n').map((i, key) => (
    <Typography
      align={align || 'center'}
      component={Grid}
      key={key}
      style={{
        fontSize: 'inherit',
        fontWeight: 'inherit',
      }}>
      {i}<br />
    </Typography>
  ))
);
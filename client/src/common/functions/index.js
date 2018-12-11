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

export const getReference = referenceString => {
  return referenceString.toLowerCase().split(' ').join('');
};

export const scrollTo = (view, name) => {
  if ( !view[name] ) return null;
  window.scroll({ top: view[name].current.offsetTop, behavior: 'smooth' });
};
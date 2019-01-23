import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const breakLine = (str, align) => str.split('\n').map((i, key) => {
  const identifier = `${str.substring(0, 10)}_${key}`;
  return (
    <Typography
      align={align || 'center'}
      component={Grid}
      key={identifier}
      style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
    >
      {i}
      <br />
    </Typography>
  );
});

export const getReference = (referenceString) => {
  if (!referenceString) return '';
  return referenceString.toLowerCase().split(' ').join('');
};

export const scrollTo = (view, name) => {
  if (!view[name]) return null;
  window.scroll({ behavior: 'smooth', top: view[name].current.offsetTop });
};
import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  subheading: {
    color: '#000',
    fontWeight: 300,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  title: {
    color: '#000',
    fontWeight: 300,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export class Carousel extends Component {
  renderItems = () => {
    const { classes, items } = this.props;

    return items.items.map((item, key) => {
      return <Grid item key={key} { ...item.outerContainerProps }>
        <Grid
          container
          direction='column'
          justify='flex-end'
          { ...item.innerContainerProps }
          style={{
            backgroundImage: `url('${item.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 450,
            ...item.imageProps,
            ...item.innerContainerProps
          }}>

          <Grid item>
            <Typography
              className={classes.title}
              gutterBottom
              variant='title'
              { ...item.titleTypographyProps }>
              { item.title }
            </Typography>

            <Typography
              className={classes.subheading}
              gutterBottom
              variant='subheading'
              { ...item.subheadingTypographyProps }>
              { item.subheading }
            </Typography>
          </Grid>

        </Grid>
      </Grid>
    });
  }
  render() {
    const { classes, items } = this.props;

    return <Grid
      className={classes.root}
      container
      justify='center'
      spacing={40}
      { ...items.containerProps }>
      { this.renderItems() }
    </Grid>
  }
}

Carousel.defaultProps = {};
Carousel.propTypes = {};

export default withStyles(styles)(Carousel);
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => {
  const { breakpoints, spacing } = theme;

  return {
    container: {
      backgroundImage: 'url("/images/city.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: 750,
      margin: '0 auto',
      marginBottom: spacing.unit * 3,
      overflow: 'hidden',
      width: 'auto',
      [breakpoints.down('lg')]: {
        height: 550,
      },
    },
    spacingLg: {
      margin: `${theme.spacing.unit * 7}px ${theme.spacing.unit * 9}px`,
    },
    spacingMd: {
      margin: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 7}px`,
    },
    spacingSm: {
      margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 5}px`,
    },
  };
};

class Hero extends Component {
  getHorizontalPosition = () => {
    const { position } = this.props;

    if (position.includes('bottom')) {
      return 'flex-end';
    }

    if (position.includes('top')) {
      return 'flex-start';
    }

    return 'center';
  };

  getVerticalPosition = () => {
    const { position } = this.props;

    if (position.includes('left')) {
      return 'flex-start';
    }

    if (position.includes('right')) {
      return 'flex-end';
    }

    return 'center';
  };

  render() {
    const { classes, children, spacing } = this.props;

    const spacingClass = spacing
      ? classes[`spacing${spacing.charAt().toUpperCase() + spacing.slice(1)}`]
      : '';

    return (
      <Grid
        alignItems={this.getHorizontalPosition()}
        className={`${classes.container} ${spacingClass}`}
        container
        justify={this.getVerticalPosition()}
      >
        {children}
      </Grid>
    );
  }
}

Hero.defaultProps = {
  position: 'center',
  spacing: 'none',
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
  position: PropTypes.oneOf([
    'bottom', 'bottom-left', 'bottom-right',
    'center', 'center-left', 'center-right',
    'top', 'top-left', 'top-right',
  ]),
  spacing: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
};

export default withStyles(styles)(Hero);
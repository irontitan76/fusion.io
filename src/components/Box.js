// TOO MUCH ABSTRACTION

import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import BoxItems from 'components/BoxItems';

const styles = theme => ({
  outerContainer: {
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }
});

export class Box extends Component {
  renderItems = () => {
    const { data } = this.props;
    return <BoxItems items={data.items} />;
  };

  render() {
    const { classes, data, ...props } = this.props;

    return (
      <Grid
        className={classes.outerContainer}
        container
        justify='space-around'
        spacing={16}
        {...data.containerProps}
        {...props}>
        { this.renderItems() }
      </Grid>
    );
  }
}

Box.defaultProps = {};

Box.propTypes = {};

export default withStyles(styles)(Box);
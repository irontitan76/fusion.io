import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import Hero from 'components/Hero';

const styles = theme => ({
  heroContent: {
    backgroundColor: 'rgba(0,116,217,.35)',
    paddingBottom: theme.spacing.unit * 15,
    paddingTop: theme.spacing.unit * 15
  },
  icon: {
    color: '#fff'
  },
  title: {
    color: '#fff'
  }
});

export class Technology extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Hero
          contentProps={{ className: classes.heroContent }}
          icon={[ 'far', 'users' ]}
          iconProps={{ className: classes.icon }}
          image='/images/desks.jpg'
          title='FUSION TECHNOLOGY'
          titleTypographyProps={{ className: classes.title }}
        />
      </>
    );
  }
}

Technology.defaultProps = {};
Technology.propTypes = {};

export default withStyles(styles)(Technology);
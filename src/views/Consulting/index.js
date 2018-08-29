import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';
import Hero from 'components/Hero';
import TabBar from 'components/TabBar';

import { services, title } from './manifest';

const styles = theme => ({
  heroContent: {
    // backgroundColor: 'rgba(0,0,0,.6)'
    paddingBottom: theme.spacing.unit * 15,
    paddingTop: theme.spacing.unit * 15
  },
  icon: {
    color: '#fff'
  },
  iconSpacing: {
    marginRight: theme.spacing.unit * 2,
  },
  title: {
    color: '#fff'
  }
});

export class Consulting extends Component {
  breakLine = str => (
    str.split('\n').map((i,key) => (
      <Typography component='p' key={key}>{i}<br /></Typography>
    ))
  );

  render() {
    const { classes } = this.props;

    return (
      <>
        <Hero
          contentProps={{ className: classes.heroContent }}
          icon={[ 'far', 'users' ]}
          iconProps={{ className: classes.icon }}
          image='/images/teams.jpg'
          title={title}
          titleTypographyProps={{ className: classes.title }}
        />

        <TabBar
          direction='horizontal'
          name={services.title}
          values={services.items}
        />

        <Grid
          alignItems='center'
          container
          justify='center'
          style={{ backgroundColor: '#f2f2f2', minHeight: 150 }}>
          <Grid item md={6} sm={7} xs={10}>
            <Typography align='center' variant='subheading' style={{ fontWeight: 300 }}>
              To learn more about how Fusion Consulting can help you with your
              next digital transformation, contact us or see our consultant
              articles.
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Grid container justify='center'>
              <Grid item md={3} xs={12} style={{ marginRight: 30 }}>
                <Button
                  color='primary'
                  fullWidth
                  variant='raised'>
                  Contact Us
                </Button>
              </Grid>
              <Grid item md={3} xs={12}>
                <Button
                  color='secondary'
                  fullWidth
                  variant='raised'>
                  Read Our Articles
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Footer />
      </>
    );
  }
}

Consulting.defaultProps = {};
Consulting.propTypes = {};

export default withStyles(styles)(Consulting);
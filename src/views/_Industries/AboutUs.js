import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';
import TabBar from 'components/TabBar';
import { aboutManifest } from 'common/manifests';

const styles = theme => ({
  button: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid white',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.5)',
    }
  },
  heroContent: {
    backgroundColor: 'rgba(0,0,0,.6)',
    padding: 30
  },
  main: {
    backgroundColor: '#fafafa',
    maxWidth: 1024
  },
  root: {
    backgroundImage: 'url("./images/camp3-1x.webp")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 600,
    [theme.breakpoints.up('xl')]: {
      height: 850,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '130% 100%'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '180% 100%'
    }
  },
  text: {
    color: '#f2f2f2',
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2
  },
  title: {
    color: '#f2f2f2',
    fontSize: 42,
    fontWeight: 300
  }
});

export class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid
          alignItems='center'
          className={classes.root}
          container
          justify='center'>

          <Grid item xl={5} md={7}>
            <Grid
              alignItems='center'
              className={classes.heroContent}
              container
              justify='center'>

              <Typography
                align='center'
                className={classes.title}
                component={Grid}
                item
                variant='display1'
                xs={12}>
                { aboutManifest.tagline }
              </Typography>

              <Typography
                align='center'
                className={classes.text}
                component={Grid}
                item
                md={12}
                xs={12}>
                { aboutManifest.mission }
              </Typography>

              <Grid item md={4} xs={8}>
                <Button
                  className={classes.button}
                  fullWidth
                  variant='outlined'>
                  Read Our Story
                </Button>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

        <Grid
          alignItems='center'
          container
          justify='center'>

          <TabBar name='Our Values' values={aboutManifest.values} />
        </Grid>

        <Grid container>
          <Grid item xs={12} style={{
              backgroundColor: '#ddd',
              borderTop: '1px solid #aaa',
              borderBottom: '1px solid #aaa',
              marginBottom: 48
            }}>
            <Typography
              align='center'
              style={{
                fontSize: 20,
                fontWeight: 300,
                padding: 50
              }}
              variant='subheading'>
              “Disruption will only accelerate. The quantity and diversity of
              connected devices — many of which we haven’t imagined yet — will
              explode, as will the quantity and diversity of the people around
              the world who use them. Our existing standards, workflows, and
              infrastructure won’t hold up. Today’s onslaught of devices is
              already pushing them to the breaking point. They can’t
              withstand what’s ahead.”
            </Typography>

            <Typography
              align='center'
              style={{
                fontSize: 18,
                fontWeight: 300,
                marginBottom: 50
              }}
              variant='subheading'>
              The Future-Friendly Manifesto by Brad Frost
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid alignItems='center' container justify='center'>
              <Grid item md={7} xs={12}>
                <Grid
                  container
                  justify='center'
                  style={{
                    height: 500,
                    marginBottom: 50
                  }}>
                  <img src='/images/sat1.jpg' height='100%' width='100%'/>
                </Grid>
              </Grid>

              <Typography
                align='center'
                component={Grid}
                gutterBottom
                variant='display1'
                xs={12}>
                Our Story
              </Typography>

              <Typography
                align='center'
                component={Grid}
                gutterBottom
                style={{ marginBottom: 50 }}
                variant='subheading'
                md={5}
                xs={11}>
                The Fusion Standard written by Ross Sheppard on October 1, 2018.
              </Typography>


            </Grid>
          </Grid>
        </Grid>

        <Footer />
      </>
    );
  }
}

Home.defaultProps = {};
Home.propTypes = {};

export default withStyles(styles, { withTheme: true })(Home);
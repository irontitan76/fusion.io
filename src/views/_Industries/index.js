import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Box from 'components/Box';
import Carousel from 'components/Carousel';
import Footer from 'components/Footer';
import Hero from 'components/Hero';

import { homeManifest } from 'common/manifests';

const styles = theme => ({
  button: {
    backgroundColor: 'rgba(0,0,0,.45)',
    color: '#fff',
    marginBottom: theme.spacing.unit * 2
  },
  heroContent: {
    backgroundColor: 'rgba(0,0,0,.4)',
    height: '100%'
  },
  icon: {
    fontSize: '10rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '6rem'
    }
  },
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  sectionSubtitle: {
    margin: theme.spacing.unit * 3
  },
  sectionTitle: {
    marginTop: theme.spacing.unit * 5
  },
  white: {
    color: '#fff'
  }
});

export class Home extends Component {
  renderHero = () => {
    const { classes } = this.props;

    return <Hero
      contentProps={{ className: classes.heroContent }}
      height={550}
      icon={ homeManifest.hero.icon }
      iconProps={{ className: classes.white }}
      image='./images/desk.jpg'
      subtitle={ homeManifest.hero.subtitle }
      subtitleTypographyProps={{ className: classes.white }}
      title={ homeManifest.hero.title }
      titleTypographyProps={{ className: classes.white }}>

      <Grid container justify='center' spacing={24}>
        <Grid item lg={4} sm={6} xl={3} xs={10}>
          <Button
            className={classes.button}
            color='default'
            component={Link}
            fullWidth
            to='/about/solutions'
            variant='outlined'>
            EXPLORE OUR SOLUTIONS
          </Button>
        </Grid>

        <Grid item lg={4} sm={6} xl={3} xs={10}>
          <Button
            className={classes.button}
            color='default'
            component={Link}
            fullWidth
            to='/about/solutions'
            variant='outlined'>
            EXPLORE OUR SERVICES
          </Button>
        </Grid>
      </Grid>
    </Hero>
  };

  renderLatestNews = () => {
    const { classes } = this.props;

    return <>
      <Grid alignItems='center' container justify='center'>
        <Grid item xs={12}>
          <Typography
            align='center'
            className={classes.sectionTitle}
            gutterBottom
            variant='display1'>
            The Latest
          </Typography>

          <Typography
            align='center'
            className={classes.sectionSubtitle}
            gutterBottom
            variant='subheading'>

          </Typography>

          <Grid item xs={12}>
            <Box data={homeManifest.latest} />
          </Grid>
        </Grid>
      </Grid>
    </>;
  };

  renderProducts = () => {
    const { classes } = this.props;

    return <>
      <Grid item xs={12}>
        <Typography
          align='center'
          className={classes.sectionTitle}
          gutterBottom
          variant='display1'>
          Accelerate Innovation
        </Typography>

        <Typography
          align='center'
          className={classes.sectionSubtitle}
          gutterBottom
          variant='subheading'>
          A solution portfolio that optimizes infrastructure and delivery
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Carousel items={homeManifest.products} />
      </Grid>
    </>;
  };

  renderOverview = () => {
    const { classes } = this.props;
    return <Box data={homeManifest.overview} style={{ paddingTop: 40 }} />;
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        { this.renderHero() }
        { this.renderOverview() }
        {/* this.renderLatestNews() */}
        { this.renderProducts() }
        <Footer />
      </>
    );
  }
}

Home.defaultProps = {};
Home.propTypes = {};

export default withStyles(styles)(Home);
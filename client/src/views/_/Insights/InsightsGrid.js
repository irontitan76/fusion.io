import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  grid: {},
  gridCard: {
    marginBottom: theme.spacing.unit * 3,
    cursor: 'pointer',
    transition: 'box-shadow .3s ease-out',
    '&:hover': {
      boxShadow: '1px 8px 20px grey',
      transition: 'box-shadow .3s ease-in'
    }
  },
  gridContent: {
    fontWeight: 300,
    height: 75
  },
  gridLink: {
    textDecoration: 'none',
  },
  gridMedia: {
    height: 160,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
  grids: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 12,
    paddingRight: theme.spacing.unit * 12,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  gridTitle: {}
});

class InsightsGrid extends Component {
  render() {
    const { classes, insights } = this.props;

    return <Grid
      className={classes.grids}
      container
      justify='center'
      spacing={24}>
      {
        insights && insights.map((item, key) => {
          const size = item.size ? item.size : {
            md: 3,
            sm: 6,
            xl: 2,
            xs: 12
          };
          return <Grid
            className={classes.grid}
            item
            key={key}
            { ...size }>
            <Link className={classes.gridLink} to={`./insights${item.slug}`}>
              <Card
                className={classes.gridCard}
                elevation={2}>

                {
                  item.media ?
                    <CardMedia
                      className={classes.gridMedia}
                      component={item.media.type || 'div'}
                      src={item.media.src}
                    /> : null
                }

                <CardHeader
                  className={classes.gridTitle}
                  title={item.title}
                  titleTypographyProps={{ variant: 'subheading' }}
                />

                <CardContent>
                  <Typography
                    className={classes.gridContent}
                    component='p'>
                    {item.body}
                  </Typography>
                </CardContent>

              </Card>
            </Link>
          </Grid>
        })
      }
    </Grid>;
  };
}

export default withStyles(styles)(InsightsGrid);
import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { overview } from './home';

const styles = theme => ({
  overview: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  overviewCard: {
    backgroundColor: '#fbfbfb',
  },
  overviewSubtitle: {
    fontWeight: 300,
  },
  overviewTitle: {
    color: '#111',
    fontWeight: 700,
  },
  overviewCardContent: {
    height: 75,
  }
});

class HomeOverview extends Component {
  render() {
    const { classes } = this.props;
    const { items, subtitle, title } = overview;

    return <Grid
      className={classes.overview}
      container
      justify='space-around'
      spacing={24}>

        <Grid className={classes.overviewTitleContainer} item xs={12}>
          <Typography
            align='center'
            className={classes.overviewTitle}
            gutterBottom
            variant='h4'>
            {title}
          </Typography>

          <Typography
            align='center'
            className={classes.overviewSubtitle}
            gutterBottom
            variant='subtitle1'>
            {subtitle}
          </Typography>
        </Grid>

        {
          items.map((item, key) => (
            <Grid
              className={classes.overviewItem}
              item
              key={key}
              md={4}
              xs={12}>
              <Card className={classes.overviewCard} elevation={0}>
                <CardHeader
                  avatar={
                    <FontAwesomeIcon
                      color='#777'
                      icon={item.icon}
                      style={{ fontSize: 26 }} />
                  }
                  title={item.title}/>
                <CardContent className={classes.overviewCardContent}>
                  <Typography component='p'>
                    {item.content}
                  </Typography>
                </CardContent>
                { item.divider ? <Divider light /> : null }
                <CardActions>
                  <Button
                    color='primary'
                    component={Link}
                    size='small'
                    to={item.button.path}>
                    {item.button.label}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
    </Grid>;
  };
}

HomeOverview.defaultProps ={};
HomeOverview.propTypes = {};

export default withStyles(styles)(HomeOverview);
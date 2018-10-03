import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { overview } from '../manifests/home';

const styles = theme => ({
  overview: {
    marginBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  overviewCard: {
    backgroundColor: '#fbfbfb',
  },
});

class HomeOverview extends Component {
  render() {
    const { classes } = this.props;
    const { items } = overview;

    return <Grid
      className={classes.overview}
      container
      justify='space-around'
      spacing={24}>
      {
        items.map((item, key) => (
          <Grid
            className={classes.overviewItem}
            item
            key={key}
            md={4}
            xs={12}>
            <Card className={classes.overviewCard} elevation={0}>
              <CardMedia />
              <CardHeader
                avatar={
                  <FontAwesomeIcon
                    color='#0074d9'
                    icon={item.icon}
                  />
                }
                title={item.title}/>
              <CardContent>
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
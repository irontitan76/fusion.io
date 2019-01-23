import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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
    },
  },
  overviewCard: {
    backgroundColor: 'transparent',
  },
  overviewCardContent: {
    height: 75,
  },
  overviewSubtitle: {
    fontWeight: 300,
  },
  overviewTitle: {
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
});

class HomeOverview extends Component {
  renderItem = (item, key) => {
    const { classes } = this.props;

    const avatar = (
      <FontAwesomeIcon
        color='#777'
        icon={item.icon}
        style={{ fontSize: 26 }}
      />
    );
    const divider = item.divider ? <Divider light /> : null;

    return (
      <Grid
        className={classes.overviewItem}
        item
        key={key}
        md={4}
        xs={12}
      >

        <Card className={classes.overviewCard} elevation={0}>

          <CardHeader
            avatar={avatar}
            title={<FormattedMessage id={`home.overview.card[${key}].title`} />}
          />

          <CardContent className={classes.overviewCardContent}>
            <Typography component='p'>
              <FormattedMessage id={`home.overview.card[${key}].content`} />
            </Typography>
          </CardContent>

          {divider}

          <CardActions>
            <Button
              color='primary'
              component={Link}
              size='small'
              to={item.button.path}
            >
              <FormattedMessage id={`home.overview.card[${key}].button`} />
            </Button>
          </CardActions>

        </Card>
      </Grid>
    );
  }

  renderItems = () => {
    const items = [
      {
        button: {
          label: 'home.overview.card[0].button',
          path: '/about',
        },
        content: 'home.overview.card[0].content',
        divider: true,
        icon: ['fal', 'user-tie'],
        title: 'home.overview.card[0].title',
      },
      {
        button: {
          label: 'home.overview.card[0].button',
          path: '/insights',
        },
        content: 'home.overview.card[1].content',
        divider: true,
        icon: ['fal', 'binoculars'],
        title: 'home.overview.card[1].content',
      },
      {
        button: {
          label: 'home.overview.card[0].button',
          path: '/contact',
        },
        content: 'home.overview.card[2].content',
        divider: true,
        icon: ['fal', 'route'],
        title: 'home.overview.card[2].content',
      },
    ];

    return items.map((item, key) => this.renderItem(item, key));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid
        className={classes.overview}
        container
        justify='space-around'
        spacing={24}
      >

        <Grid className={classes.overviewTitleContainer} item xs={12}>
          <Typography
            align='center'
            className={classes.overviewTitle}
            gutterBottom
            variant='h4'
          >
            <FormattedMessage id='home.overview.title' />
          </Typography>

          <Typography
            align='center'
            className={classes.overviewSubtitle}
            gutterBottom
            variant='subtitle1'
          >
            <FormattedMessage id='home.overview.subtitle' />
          </Typography>
        </Grid>

        {this.renderItems()}
      </Grid>
    );
  }
}

HomeOverview.defaultProps = {};
HomeOverview.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(HomeOverview);
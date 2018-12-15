import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  loadStrategies,
  unloadStrategies,
} from 'actions/strategies';

const styles = theme => ({
  actions: {
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 2,
  },
  icon: {
    fontSize: 16,
    marginRight: theme.spacing.unit,
  },
  root: {},
  noResults: {
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  tableRow: {
    height: 30,
  },
  title: {
    fontWeight: 400,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  }
})

class ProfilePosts extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadStrategies());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStrategies());
  };

  getTitleLevel = (strategy) => {
    return new Array(strategy.level).join('\u00a0\u00a0\u00a0');
  };

  renderContent = () => {
    const { classes, strategies = [] } = this.props;

    if ( strategies.items.length === 0 ) {
      return <TableRow className={classes.tableRow} key={0}>
        <TableCell
          className={classes.noResults}
          colSpan={6}>
          No items found
        </TableCell>
      </TableRow>;
    }

    return strategies.items
      .sort((a,b) => a.order - b.order)
      .map((strategy, key) => (
      <TableRow className={classes.tableRow} key={key}>
        <TableCell>
          <Link to={`/profile/strategies/${strategy._id}`}>
            { strategy.title }
          </Link>
        </TableCell>
        <TableCell>{ strategy.order }</TableCell>
        <TableCell>{ strategy.level }</TableCell>
        <TableCell>{ moment(strategy._createdAt).format('MMM Do YYYY, h:mm a') }</TableCell>
        <TableCell>{ moment(strategy._modifiedAt).format('MMM Do YYYY, h:mm a') }</TableCell>
        <TableCell>{ strategy._publishedAt || 'Unpublished' }</TableCell>
      </TableRow>
    ));
  };

  render() {
    const { classes } = this.props;

    return <Grid
      className={classes.root}
      container>

      <Grid item xs={12}>
        <Grid alignItems='center' container justify='space-between'>

          <Grid item style={{ flex: 1 }}>
            <Typography
              className={classes.title}
              variant='h6'>
              The Fusion Strategy
            </Typography>
          </Grid>

          <Grid className={classes.actions} item>
            <Button
              color='primary'
              component={Link}
              to='/profile/strategy'
              variant='contained'>
              <FontAwesomeIcon
                className={classes.icon}
                icon={['fal', 'plus']}
              />
              New Strategy
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableRow}>
              {
                [
                  'Title',
                  'Order',
                  'Level',
                  'Date Created',
                  'Date Modified',
                  'Date Published'
                ].map((header, key) => (
                  <TableCell key={key}>{header}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderContent()}
          </TableBody>
        </Table>
      </Grid>
    </Grid>;
  }
}

const select = state => ({
  strategies: state.strategies,
});

export default withStyles(styles)(connect(select)(ProfilePosts));
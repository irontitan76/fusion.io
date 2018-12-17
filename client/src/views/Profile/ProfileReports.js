import React, { Component } from 'react';
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
  loadStandards,
  unloadStandards,
} from 'actions/standards';

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
  noResults: {
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  root: {},
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

class ProfileReports extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards') {
      dispatch(loadStandards());
    } else if ( type === '/profile/strategies' ) {
      dispatch(loadStrategies());
    }
  };

  componentWillUnmount = () => {
    const { dispatch, match } = this.props;
    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards') {
      dispatch(unloadStandards());
    } else if ( type === '/profile/strategies' ) {
      dispatch(unloadStrategies());
    }
  };

  getTitleLevel = (item) => {
    return new Array(item.level).join('\u00a0\u00a0\u00a0');
  };

  renderContent = () => {
    const { classes, items, match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    if ( items.items.length === 0 ) {
      return [
        <TableRow className={classes.tableRow} key={0}>
          <TableCell
            className={classes.noResults}
            colSpan={6}>
            No items found
          </TableCell>
        </TableRow>
      ];
    }

    return items.items
      .sort((a,b) => a.order - b.order)
      .map((item, key) => {
        const link = `${type}/edit/${item._id}`;

        return <TableRow className={classes.tableRow} key={key}>
          <TableCell>
            <Link to={link}>
              { item.title }
            </Link>
          </TableCell>
          <TableCell>{ item.order }</TableCell>
          <TableCell>{ item.level }</TableCell>
          <TableCell>{ moment(item._createdAt).format('MMM Do YYYY, h:mm a') }</TableCell>
          <TableCell>{ moment(item._modifiedAt).format('MMM Do YYYY, h:mm a') }</TableCell>
          <TableCell>{ item._publishedAt || 'Unpublished' }</TableCell>
        </TableRow>;
    })
  };

  render() {
    const { classes, match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    let add = '', title = '';
    if ( type === '/profile/standards') {
      add = 'New Standard';
      title = 'The Fusion Standard';
    } else if ( type === '/profile/strategies' ) {
      add = 'New Strategy';
      title = 'The Fusion Strategy'
    }

    return <Grid
      className={classes.root}
      container>

      <Grid item xs={12}>
        <Grid alignItems='center' container justify='space-between'>

          <Grid item style={{ flex: 1 }}>
            <Typography
              className={classes.title}
              variant='h6'>
              {title}
            </Typography>
          </Grid>

          <Grid className={classes.actions} item>
            <Button
              color='primary'
              component={Link}
              to={`${type}/new`}
              variant='contained'>
              <FontAwesomeIcon
                className={classes.icon}
                icon={['fal', 'plus']}
              />
              {add}
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

export default withStyles(styles)(ProfileReports);
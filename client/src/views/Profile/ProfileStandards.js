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
  loadStandards,
  unloadStandards,
} from 'actions/standards';

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

class ProfilePosts extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadStandards());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStandards());
  };

  getTitleLevel = (standard) => {
    return new Array(standard.level).join('\u00a0\u00a0\u00a0');
  };

  renderContent = () => {
    const { classes, standards } = this.props;

    if ( standards.items.length === 0 ) {
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

    return standards.items
      .sort((a,b) => a.order - b.order)
      .map((standard, key) => (
      <TableRow className={classes.tableRow} key={key}>
        <TableCell>
          <Link to={`/profile/standards/${standard._id}`}>
            { standard.title }
          </Link>
        </TableCell>
        <TableCell>{ standard.order }</TableCell>
        <TableCell>{ standard.level }</TableCell>
        <TableCell>{ moment(standard._createdAt).format('MMM Do YYYY, h:mm a') }</TableCell>
        <TableCell>{ moment(standard._modifiedAt).format('MMM Do YYYY, h:mm a') }</TableCell>
        <TableCell>{ standard._publishedAt || 'Unpublished' }</TableCell>
      </TableRow>
    ))
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
              The Fusion Standard
            </Typography>
          </Grid>

          <Grid className={classes.actions} item>
            <Button
              color='primary'
              component={Link}
              to='/profile/standard'
              variant='contained'>
              <FontAwesomeIcon
                className={classes.icon}
                icon={['fal', 'plus']}
              />
              New Standard
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
  standards: state.standards,
});

export default withStyles(styles)(connect(select)(ProfilePosts));
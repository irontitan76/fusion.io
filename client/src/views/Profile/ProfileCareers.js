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
  loadCareers,
  unloadCareers,
} from 'actions/careers';

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
  root: {
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

class ProfileCareers extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadCareers());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadCareers());
  };

  renderHeaders = () => {
    const { classes } = this.props;

    const headers = [
      'Role',
      'Brief Description',
      'Location',
      'Organization',
      'Team',
      'Posted At'
    ];

    const headerCells = headers.map((header, key) => (
      <TableCell key={key}>{ header }</TableCell>
    ));

    return <TableHead>
      <TableRow className={classes.tableRow}>
        {headerCells}
      </TableRow>
    </TableHead>;
  };

  renderBody = () => {
    const { careers, classes } = this.props;

    const careerRows = careers.roles.map((role, key) => (
      <TableRow className={classes.tableRow} key={key}>
        <TableCell>
          <Link to={`/profile/careers/edit/${role._id}`}>
            { role.role }
          </Link>
        </TableCell>
        <TableCell>{ role.brief }</TableCell>
        <TableCell>{ role.location.city + ', ' + role.location.state }</TableCell>
        <TableCell>{ role.org }</TableCell>
        <TableCell>{ role.team }</TableCell>
        <TableCell>{ moment(role._publishedAt).format('MMM Do YYYY, h:mm a') || 'Not Posted' }</TableCell>
      </TableRow>
    ));

    return <TableBody>{careerRows}</TableBody>;
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
              Careers
            </Typography>
          </Grid>

          <Grid className={classes.actions} item>
            <Button
              color='primary'
              component={Link}
              to='/profile/insights/new'
              variant='contained'>
              <FontAwesomeIcon
                className={classes.icon}
                icon={['fal', 'plus']} />
              New Career
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Table padding='dense'>
          {this.renderHeaders()}
          {this.renderBody()}
        </Table>
      </Grid>
    </Grid>;
  }
}

const select = state => ({
  careers: state.careers,
  user: state.session.user,
});

export default withStyles(styles)(connect(select)(ProfileCareers));
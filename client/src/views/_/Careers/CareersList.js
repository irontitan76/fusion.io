import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { loadCareers, unloadCareers } from 'actions/careers';

const styles = theme => ({
  careersList: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  careersListNoMoreFound: {
    color: '#777',
    textAlign: 'center',
  },
  careersListRow: {
    '&:nth-of-type(even)': {
      backgroundColor: '#f2f2f2',
    },
  },
  careersListTable: {
    height: 500,
  },
  careersListTitle: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
  }
});

class CareersList extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadCareers());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadCareers());
  };

  renderHeaders = () => {
    const { headers } = this.props;

    if (!headers) return null;
    return headers.map((header, key) => {
      return <TableCell key={key}>{header.name}</TableCell>
    })
  };

  renderRolesRows = () => {
    const { careers, classes } = this.props;

    if ( careers.roles.length === 0 ) {
      return <TableRow>
        <TableCell colSpan={5}>No roles available</TableCell>
      </TableRow>
    }

    const rolesRows = careers.roles.map((role, key) => {
      return <TableRow className={classes.careersListRow} key={key}>
        <TableCell>{role.role}</TableCell>
        <TableCell>{role.org}</TableCell>
        <TableCell>{role.team}</TableCell>
        <TableCell>{`${role.location.city} ${role.location.state}`}</TableCell>
        <TableCell><Button color='primary' variant='text'>Apply</Button></TableCell>
      </TableRow>
    });

    return <>
      {rolesRows}
      <TableRow>
        <TableCell
          className={classes.careersListNoMoreFound}
          colSpan={5}>
          End of results
        </TableCell>
      </TableRow>
    </>;
  };

  render() {
    const { classes } = this.props;

    return <Fade in timeout={350}>
      <Grid
        className={classes.careersList}
        container
        justify='center'>

        <Grid item md={10}>
          <Typography
            className={classes.careersListTitle}
            variant='h4'>
            Open Positions
          </Typography>
        </Grid>

        <Grid
          className={classes.careersListTable}
          item
          md={10}>
          <Table>

            <TableHead>
              <TableRow>{this.renderHeaders()}</TableRow>
            </TableHead>

            <TableBody>
              {this.renderRolesRows()}
            </TableBody>

          </Table>
        </Grid>
      </Grid>
    </Fade>
  }
}

CareersList.defaultProps = {
  headers: [
    { name: 'Role' },
    { name: 'Organization' },
    { name: 'Team' },
    { name: 'Location' },
    { name: '' }
  ]
};

const select = state => ({
  careers: state.careers,
});

export default withStyles(styles)(connect(select)(CareersList));
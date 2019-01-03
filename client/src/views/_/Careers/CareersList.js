import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  careersList: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
  },
  careersListFilter: {
    marginBottom: theme.spacing.unit * 3,
  },
  careersListFilters: {
    paddingBottom: theme.spacing.unit * 4,
    paddingTop: 0,
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
  state = {
    'org': {
      name: 'org',
      label: 'Organization',
      items: [
        'All organizations',
        'Fusion A.I.',
        'Fusion Consulting',
        'Fusion Cosmos',
        'Fusion Energy',
        'Fusion Finance',
        'Fusion Health',
        'Fusion Legal',
        'Fusion Media',
        'Fusion Technology',
        'Fusion Transport'
      ],
      value: 'All organizations',
    },
    'team': {
      name: 'team',
      label: 'Team',
      items: [
        'All teams',
        'Engineering & Technology',
        'User Experience & Design',
        'Accounts & Sales',
        'Finance',
        'Marketing',
        'Legal & Corporate Affairs'
      ],
      value: 'All teams',
    },
    'location': {
      name: 'location',
      label: 'Location',
      items: [
        'Any location',
        'Austin, TX',
        'Remote'
      ],
      value: 'Any location',
    }
  };

  onChange = event => {
    const { onChange } = this.props;
    const { name, value } = event.target;

    this.setState({
      [name]: {
        ...this.state[name],
        value,
      }}, onChange(event));
  };

  renderFilters = () => {
    const { state } = this;
    const { careers, classes } = this.props;

    return Object.keys(state).map((searcher, key) => {
      const options = state[searcher].items.map((item, index) => (
        <MenuItem key={item} value={item}>{item}</MenuItem>)
      );

      return <Grid item key={state[searcher].name}>
        <TextField
          className={classes.careersListFilter}
          fullWidth
          inputProps={{ name: state[searcher].name, id: state[searcher].name }}
          label={state[searcher].label}
          name={state[searcher].name}
          onChange={this.onChange}
          select
          value={careers.filters[state[searcher].name] || state[searcher].value}>
          {options}
        </TextField>
      </Grid>;
    });
  };

  renderHeaders = () => {
    const { headers } = this.props;

    if (!headers) return null;
    return headers.map((header, key) => {
      return <TableCell key={key}>
        {header.name}
      </TableCell>
    })
  };

  renderRolesRows = () => {
    const { careers, classes } = this.props;

    let content = null;
    if ( careers.isFetching ) {
      content = <CircularProgress />
    } else {
      content = 'No roles available';
    }

    if ( careers.items.length === 0 ) {
      return <TableRow>
        <TableCell colSpan={5}>{content}</TableCell>
      </TableRow>
    }

    const rolesRows = careers.items.map((career) => {
      return <TableRow className={classes.careersListRow} key={career._id}>
        <TableCell>{career.role}</TableCell>
        <TableCell>{career.org}</TableCell>
        <TableCell>{career.team}</TableCell>
        <TableCell>{career.location}</TableCell>
        <TableCell>
          <Button
            color='primary'
            component={Link}
            to={`/careers/${career._id}`}
            variant='text'>
            More
          </Button>
        </TableCell>
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

    return <Grid
      className={classes.careersList}
      container
      spacing={40}>

      <Grid item md={3}>

        <Grid
          className={classes.careersListFilters}
          container
          direction='column'
          style={{
            backgroundColor: 'rgb(250,251,252)',
            border: '1px solid #ccc',
            padding: 40,
            paddingTop: 0,
            marginTop: 20,
          }}>
          <Typography
            className={classes.careersListTitle}
            variant='h5'>
            Filter
          </Typography>
          {this.renderFilters()}
        </Grid>
      </Grid>

      <Grid item md={9}>
        <Typography
          className={classes.careersListTitle}
          variant='h4'>
          Open Requisitions
        </Typography>

        <Table>

          <TableHead>
            <TableRow>{this.renderHeaders()}</TableRow>
          </TableHead>

          <TableBody>
            {this.renderRolesRows()}
          </TableBody>

        </Table>
      </Grid>
    </Grid>;
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

export default withStyles(styles)(CareersList);
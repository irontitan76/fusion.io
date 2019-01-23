import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FormattedMessage, injectIntl } from 'react-intl';

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
    backgroundColor: theme.palette.background.default,
    marginTop: 0,
    minHeight: '100vh',
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
  },
  careersListFilter: {
    marginBottom: theme.spacing.unit * 3,
  },
  careersListFilters: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ccc',
    marginTop: theme.spacing.unit * 1.5,
    padding: theme.spacing.unit * 5,
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
    // height: 500,
  },
  careersListTitle: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
  },
});

class CareersList extends Component {
  state = {
    'location': {
      items: [
        'Any location',
        'Austin, TX',
        'Remote',
      ],
      label: 'careers.filter.location.label',
      name: 'location',
      value: 'Any location',
    },
    'org': {
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
        'Fusion Transport',
      ],
      label: 'careers.filter.org.label',
      name: 'org',
      value: 'All organizations',
    },
    'team': {
      items: [
        'All teams',
        'Engineering & Technology',
        'User Experience & Design',
        'Accounts & Sales',
        'Finance',
        'Marketing',
        'Legal & Corporate Affairs',
      ],
      label: 'careers.filter.team.label',
      name: 'team',
      value: 'All teams',
    },
  };

  onChange = event => {
    const { onChange } = this.props;
    const { name, value } = event.target;

    this.setState(state => ({
      [name]: { ...state[name], value } }), onChange(event));
  };

  renderFilters = () => {
    const { state } = this;
    const { careers, classes, intl } = this.props;

    return Object.keys(state).map((searcher) => {
      const options = state[searcher].items.map((item) => (
        <MenuItem key={item} value={item}>{item}</MenuItem>)
      );

      return (
        <Grid item key={state[searcher].name}>
          <TextField
            aria-label='Filter careers'
            className={classes.careersListFilter}
            fullWidth
            inputProps={{ id: state[searcher].name, name: state[searcher].name }}
            label={intl.formatMessage({ id: state[searcher].label })}
            name={state[searcher].name}
            onChange={this.onChange}
            select
            value={careers.filters[state[searcher].name] || state[searcher].value}
          >
            {options}
          </TextField>
        </Grid>
      );
    });
  };

  renderHeaders = () => {
    const { headers } = this.props;

    if (!headers) return null;
    return headers.map((header) => {
      return (
        <TableCell key={header.name}>
          <FormattedMessage id={header.name} />
        </TableCell>
      );
    });
  };

  renderRolesRows = () => {
    const { careers, classes, intl } = this.props;

    let content = null;
    if (careers.isFetching) {
      content = <CircularProgress />;
    } else {
      content = intl.formatMessage({ id: 'careers.search.none.descriptor' });
    }

    if (careers.items.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={5}>{content}</TableCell>
        </TableRow>
      );
    }

    const rolesRows = careers.items.map((career) => {
      return (
        <TableRow className={classes.careersListRow} key={career._id}>
          <TableCell>{career.role}</TableCell>
          <TableCell>{career.org}</TableCell>
          <TableCell>{career.team}</TableCell>
          <TableCell>{career.location}</TableCell>
          <TableCell>
            <Button
              color='primary'
              component={Link}
              to={`/careers/${career._id}`}
              variant='text'
            >
              <FormattedMessage id='careers.select.descriptor' />
            </Button>
          </TableCell>
        </TableRow>
      );
    });

    return (
      <>
        {rolesRows}
        <TableRow>
          <TableCell
            className={classes.careersListNoMoreFound}
            colSpan={5}
          >
            {intl.formatMessage({ id: 'careers.search.end.descriptor' })}
          </TableCell>
        </TableRow>
      </>
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.careersList} container spacing={40}>

        <Grid item md={3}>
          <Grid className={classes.careersListFilters} container direction='column'>
            <Typography className={classes.careersListTitle} variant='h5'>
              <FormattedMessage id='careers.filter.title' />
            </Typography>
            {this.renderFilters()}
          </Grid>
        </Grid>

        <Grid item md={9}>
          <Typography className={classes.careersListTitle} variant='h4'>
            <FormattedMessage id='careers.title' />
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
      </Grid>
    );
  }
}

CareersList.defaultProps = {
  headers: [
    { name: 'careers.table.header[0]' },
    { name: 'careers.table.header[1]' },
    { name: 'careers.table.header[2]' },
    { name: 'careers.table.header[3]' },
    { name: 'careers.table.header[4]' },
  ],
};

CareersList.propTypes = {
  careers: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
  headers: PropTypes.arrayOf(PropTypes.shape({})),
  intl: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(injectIntl(CareersList));
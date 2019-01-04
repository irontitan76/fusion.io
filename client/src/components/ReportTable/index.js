import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
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

class ReportTable extends Component {
  renderContent = () => {
    const { classes, items, properties } = this.props;

    if ( items.length === 0 ) {
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

    return items
      .sort((a,b) => a.order - b.order)
      .map((item, key) => {
        return <TableRow className={classes.tableRow} key={item._id || key}>
          {
            properties.map((property) => {
              let value = item[property.name];

              if ( property.modifier ) {
                value = property.modifier(item);
              }

              return <TableCell key={property.name}>
                {value}
              </TableCell>;
            })
          }
        </TableRow>;
    });
  };

  renderHeaders = () => {
    const { headers } = this.props;

    return headers.map((header) => (
      <TableCell key={header}>{header}</TableCell>
    ));
  }

  render() {
    const { addButton, classes, onAdd, title } = this.props;

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
              to={onAdd}
              variant='contained'>
              <FontAwesomeIcon
                className={classes.icon}
                icon={['fal', 'plus']} />
              {addButton}
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Table padding='dense'>
          <TableHead>
            <TableRow className={classes.tableRow}>
              {this.renderHeaders()}
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

export default withStyles(styles)(ReportTable);
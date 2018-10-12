import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  notifications: {
    flexShrink: 1,
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
});

class ProfileNotifications extends Component {
  render() {
    const { classes, notifications } = this.props;

    const headers = [ 'Name', 'Description', 'Notified At' ];

    return <Grid
      className={classes.notifications}
      container
      justify='center'>

      <Grid item xs={12}>
        <Typography
          className={classes.title}
          variant='h6'>
          Your Notifications
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableRow}>
              {
                headers.map((header, key) => (
                  <TableCell key={key}>{ header }</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              notifications.map((notification, key) => (
                <TableRow className={classes.tableRow} key={key}>
                  <TableCell>{ notification.name }</TableCell>
                  <TableCell>{ notification.description }</TableCell>
                  <TableCell>{ notification._notifiedAt }</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(ProfileNotifications);
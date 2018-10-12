import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import { loadInsights } from 'actions/insights';

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

class ProfilePosts extends Component {
  componentDidMount() {
    const { dispatch, user } = this.props;
    dispatch(loadInsights(user._id));
  }

  render() {
    const { classes, insights } = this.props;

    return <Grid
      className={classes.root}
      container>

      <Grid item xs={12}>
        <Grid alignItems='center' container justify='space-between'>

          <Grid item style={{ flex: 1 }}>
            <Typography
              className={classes.title}
              variant='h6'>
              Your Posts
            </Typography>
          </Grid>

          <Grid className={classes.actions} item>
            <Button
              color='primary'
              component={Link}
              to='/profile/post'
              variant='contained'>
              <FontAwesomeIcon
                className={classes.icon}
                icon={['fal', 'plus']}
              />
              New Post
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableRow}>
              {
                ['Title', 'Content', 'Created At', 'Last Modified', 'Published At'].map((header, key) => (
                  <TableCell key={key}>{ header }</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              insights.items.map((insight, key) => (
                <TableRow className={classes.tableRow} key={key}>
                  <TableCell>
                    <Link to={`/insights/${insight.slug}`}>
                      { insight.title }
                    </Link>
                  </TableCell>
                  <TableCell>{ insight.brief }...</TableCell>
                  <TableCell>{ insight._createdAt }</TableCell>
                  <TableCell>{ insight._modifiedAt }</TableCell>
                  <TableCell>{ insight._publishedAt || 'Unpublished' }</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Grid>
    </Grid>;
  }
}

const select = state => ({
  insights: state.insights,
  user: state.session.user,
});

export default withStyles(styles)(connect(select)(ProfilePosts));
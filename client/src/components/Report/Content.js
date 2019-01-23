import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  contentBody: {
    '& a': {
      '&:link': {
        color: theme.palette.text.primary,
      },
      '&:visited': {
        color: theme.palette.text.primary,
      },
      color: theme.palette.text.primary,
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    '& blockquote': {
      '& em': {
        fontWeight: 300,
      },
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 16,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 16,
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
});

class ReportContent extends Component {
  renderMarkdown = () => {
    const { body } = this.props;
    return <Markdown source={body} />;
  };

  render() {
    const { classes, children } = this.props;

    return (
      <Grid className={classes.root} container justify='center'>
        <Grid item xl={5} md={6} xs={12}>
          <Typography
            className={classes.contentBody}
            component='div'
            variant='body2'
          >
            {this.renderMarkdown()}
            {children}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

ReportContent.defaultProps = {
  body: '',
  children: [],
};

ReportContent.propTypes = {
  body: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ReportContent);
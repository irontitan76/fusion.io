import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Fade from '@material-ui/core/Fade';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  main: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    width: '100%',
  },
});

class Page extends Component {
  componentDidMount = () => {
    const { title } = this.props;

    if (!title) return null;

    document.title = `AllClear ID Support | ${title}`;
  };

  render() {
    const { children, classes } = this.props;

    return (
      <Fade in timeout={500}>
        <main className={classes.main}>{children}</main>
      </Fade>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Page);
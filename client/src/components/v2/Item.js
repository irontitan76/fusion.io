import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  card: {
    '&:hover': {
      boxShadow: theme.shadows[16],
    },
    cursor: 'pointer',
    transition: 'box-shadow 1.5s',
  },
  cardContent: {},
  item: {},
});

class Item extends Component {
  renderHeader = () => {
    const { classes, subheader, title } = this.props;

    return (
      <CardHeader
        className={classes.cardHeader}
        subheader={subheader}
        title={title}
      />
    );
  };

  renderContent = () => {
    const { classes, children, type } = this.props;

    let content;
    switch (type) {
    case 'number':
      break;
    case 'table':
      break;
    case 'text':
      content = <Typography>{children}</Typography>;
      break;
    default:
      content = children;
      break;
    }

    return (
      <CardContent
        className={classes.cardContent}
      >
        {content}
      </CardContent>
    );
  };

  render() {
    const { classes, onClick, ...props } = this.props;

    return (
      <Grid className={classes.item} item {...props}>
        <Card className={classes.card} onClick={onClick}>
          {this.renderHeader()}
          {this.renderContent()}
        </Card>
      </Grid>
    );
  }
}

Item.defaultProps = {
  onClick: () => null,
  type: 'text',
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func,
  subheader: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['number', 'graph', 'table', 'text']),
};

export default withStyles(styles)(Item);
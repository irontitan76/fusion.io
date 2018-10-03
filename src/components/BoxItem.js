import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  hover: {
    boxShadow: '3px 2px 5px #ccc',
    cursor: 'pointer',
    transition: 'box-shadow .6s ease-out',
    '&:hover': {
      boxShadow: '1px 8px 20px grey',
      transition: 'box-shadow .6s ease-in'
    }
  },
  innerContainer: {
    textDecoration: 'none'
  },
  item: {
    backgroundColor: '#fbfbfb',
    marginBottom: theme.spacing.unit * 5
  },
});

export class BoxItem extends Component {
  renderCardActions = () => {
    const { item } = this.props;
    if ( !item.CardActionsProps ) return null;
    return <CardActions {...item.CardActionsProps} />;
  };

  renderCardContent = () => {
    const { item } = this.props;
    if ( !item.CardContentProps ) return null;
    return <CardContent {...item.CardContentProps} />;
  };

  renderCardHeader = () => {
    const { item } = this.props;
    if ( !item.CardHeaderProps ) return null;
    return (
      <CardHeader
        titleTypographyProps={{
          variant: 'headline'
        }}
        {...item.CardHeaderProps}>
      </CardHeader>
    );
  }

  renderCardMedia = () => {
    const { item } = this.props;
    if ( !item.CardMediaProps ) return null;
    return <CardMedia {...item.CardMediaProps} />;
  }

  render() {
    const { classes, item, key } = this.props;

    return (
      <Grid
        className={classes.innerContainer}
        item
        key={key}
        md={4}
        xs={12}
        {...item.itemProps}>

        <Card
          className={`${classes.item} ${item.hover ? classes.hover : ''}`}
          elevation={1}
          {...item.CardProps}>

          { this.renderCardMedia() }
          { this.renderCardHeader() }
          { this.renderCardContent() }
          { !!item.isDivider && <Divider light /> }
          { this.renderCardActions() }

        </Card>

      </Grid>
    );
  }
}

BoxItem.defaultProps = {};
BoxItem.propTypes = {};

export default withStyles(styles)(BoxItem);
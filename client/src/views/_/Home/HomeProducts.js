import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FormattedMessage, injectIntl } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  light: {
    color: `${theme.palette.common.white} !important`,
  },
  product: {
    marginBottom: theme.spacing.unit * 5,
  },
  productContainer: {
    margin: 'auto',
    width: '100%',
  },
  productItem: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 450,
    padding: theme.spacing.unit * 3,
  },
  productItemLink: {
    textDecoration: 'none',
  },
  productItemSubtitle: {
    color: theme.palette.dark,
    fontWeight: 300,
    paddingBottom: theme.spacing.unit * 2,
  },
  productItemTitle: {
    color: theme.palette.dark,
    fontWeight: 300,
  },
  products: {
    marginBottom: theme.spacing.unit * 3,
  },
  productsSubtitle: {
    fontWeight: 300,
  },
  productsTitle: {
    color: theme.palette.dark,
    fontWeight: 700,
  },
});

class HomeProducts extends Component {
  renderSubheading = (subheading, variant) => {
    const { classes } = this.props;

    const className = `
      ${classes.productItemSubtitle}
      ${this.getVariantClass(variant)}
    `;

    return (
      <Typography className={className} gutterBottom variant='subtitle1'>
        {subheading}
      </Typography>
    );
  };

  renderTitle = (title, variant) => {
    const { classes } = this.props;

    const className = `
      ${classes.productItemTitle}
      ${this.getVariantClass(variant)}
    `;

    return (
      <Typography className={className} gutterBottom variant='h6'>
        {title}
      </Typography>
    );
  };

  renderItem = (item, key) => {
    const { classes, intl } = this.props;

    const title = intl.formatMessage({ id: item.title });
    const subtitle = intl.formatMessage({ id: item.subtitle });

    return (
      <Grid item key={key} {...item.size}>
        <Link className={classes.productItemLink} to={item.path}>
          <Grid
            className={classes.productItem}
            container
            direction='column'
            justify='flex-end'
            style={{ backgroundImage: `url('${item.image.src}')` }}
          >
            <Grid item>
              {this.renderTitle(title, item.variant)}
              {this.renderSubheading(subtitle, item.variant)}
            </Grid>
          </Grid>
        </Link>
      </Grid>
    );
  };

  renderItems = () => {
    const items = [{
      image: { alt: 'design', src: './images/design2.jpg' },
      path: '/technology/products/1',
      size: { md: 4, sm: 6, xs: 12 },
      subtitle: 'home.products[0].subtitle',
      title: 'home.products[0].title',
      variant: 'light',
    },
    {
      image: { alt: 'design', src: './images/isomorph.jpg' },
      path: '/technology/products/2',
      size: { md: 4, sm: 6, xs: 12 },
      subtitle: 'home.products[1].subtitle',
      title: 'home.products[1].title',
      variant: 'light',
    },
    {
      image: { alt: 'team', src: './images/consult.jpg' },
      path: '/consulting/services',
      size: { md: 8, sm: 12, xs: 12 },
      subtitle: 'home.products[2].subtitle',
      title: 'home.products[2].title',
      variant: 'light',
    },
    ];

    return items.map((item, key) => this.renderItem(item, key));
  };

  getVariantClass = (variant) => {
    const { classes } = this.props;
    if (variant === 'light') return classes.light;
    return '';
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid className={classes.products} item xs={12}>
          <Typography align='center' className={classes.productsTitle} variant='h4'>
            <FormattedMessage id='home.products.title' />
          </Typography>

          <Typography
            align='center'
            className={classes.productsSubtitle}
            gutterBottom
            variant='subtitle1'
          >
            <FormattedMessage id='home.products.subtitle' />
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.product}>
          <Grid
            className={classes.productContainer}
            container
            justify='center'
            spacing={40}
          >
            {this.renderItems()}
          </Grid>
        </Grid>
      </>
    );
  }
}

HomeProducts.defaultProps = {};
HomeProducts.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  intl: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(injectIntl(HomeProducts));
import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { products } from './home';

const styles = theme => ({
  light: {
    color: `${theme.palette.common.white} !important`,
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
    padding: theme.spacing.unit * 3,
    height: 450,
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
  }
});

class HomeProducts extends Component {
  renderSubheading = (subheading, variant) => {
    const { classes } = this.props;

    return <Typography
      className={`
        ${classes.productItemSubtitle}
        ${this.getVariantClass(variant)}
      `}
      gutterBottom
      variant='subtitle1'>
      {subheading}
    </Typography>;
  };

  renderTitle = (title, variant) => {
    const { classes } = this.props;

    return <Typography
      className={`
        ${classes.productItemTitle}
        ${this.getVariantClass(variant)}
      `}
      gutterBottom
      variant='h6'>
      {title}
    </Typography>;
  };

  getVariantClass = variant => {
    const { classes } = this.props;
    if ( variant === 'light' ) return classes.light;
    else return '';
  }

  render() {
    const { classes } = this.props;
    const { items, subtitle, title } = products;

    return <>
      <Grid className={classes.products} item xs={12}>
        <Typography
          align='center'
          className={classes.productsTitle}
          variant='h4'>
          {title}
        </Typography>

        <Typography
          align='center'
          className={classes.productsSubtitle}
          gutterBottom
          variant='subtitle1'>
          {subtitle}
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.product}>
        <Grid
          className={classes.productContainer}
          container
          justify='center'
          spacing={40}>
          {
            items.map((item, key) => {
              return <Grid item key={key} {...item.size}>
                <Link className={classes.productItemLink} to={item.path}>
                  <Grid
                    className={classes.productItem}
                    container
                    direction='column'
                    justify='flex-end'
                    style={{ backgroundImage: `url('${item.image.src}')` }}>
                    <Grid item>
                      {this.renderTitle(item.title, item.variant)}
                      {this.renderSubheading(item.subheading, item.variant)}
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            })
          }
        </Grid>
      </Grid>
    </>;
  };
}

HomeProducts.defaultProps ={};
HomeProducts.propTypes = {};

export default withStyles(styles)(HomeProducts);
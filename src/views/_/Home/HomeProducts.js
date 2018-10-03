import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { products } from './home';

const styles = theme => ({
  products: {
    marginBottom: theme.spacing.unit * 3,
  },
  productsSubtitle: {

  },
  productsTitle: {

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
  productItemSubtitle: {
    color: '#000',
    fontWeight: 300,
    paddingBottom: theme.spacing.unit * 2,
  },
  productItemTitle: {
    color: '#000',
    fontWeight: 300,
  }
});

class HomeProducts extends Component {
  render() {
    const { classes } = this.props;
    const { items, subtitle, title } = products;

    return <>
      <Grid className={classes.products} item xs={12}>
        <Typography
          align='center'
          className={classes.productsTitle}
          gutterBottom
          variant='display1'>
          { title }
        </Typography>

        <Typography
          align='center'
          className={classes.productsSubtitle}
          gutterBottom
          variant='subheading'>
          { subtitle }
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
                  <Grid
                  className={classes.productItem}
                  container
                  direction='column'
                  justify='flex-end'
                  style={{ backgroundImage: `url('${item.image.src}')` }}>
                  <Grid item>
                    <Typography
                      className={classes.productItemTitle}
                      gutterBottom
                      variant='title'>
                      { item.title }
                    </Typography>

                    <Typography
                      className={classes.productItemSubtitle}
                      gutterBottom
                      variant='subheading'>
                      { item.subheading }
                    </Typography>
                  </Grid>
                </Grid>
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
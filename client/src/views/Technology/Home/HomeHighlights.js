import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  actions: {
    paddingLeft: 0,
  },
  button: {
    color: theme.palette.blue,
    fontWeight: 500,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  card: {
    '&:hover': {
      cursor: 'pointer',
      opacity: '0.8'
    },
  },
  content: {
    paddingLeft: 0,
  },
  media: {
    height: 175,
  }
});

const cards = [
  {
    media: { image: './images/drone.jpg', title: 'camp' },
    title: 'Bloggers',
    desc: 'Lizards are a widespread group of squamate reptiles',
  },
  {
    media: { image: './images/marketing-resized.jpg', title: 'camp' },
    title: 'Developers',
    desc: 'Lizards are a widespread group of squamate reptiles',
  },
  {
    media: { image: './images/desk-laptop.jpg', title: 'camp' },
    title: 'Designers',
    desc: 'Lizards are a widespread group of squamate reptiles',
  },
  {
    media: { image: './images/gamer.jpg', title: 'camp' },
    title: 'Business people',
    desc: 'Lizards are a widespread group of squamate reptiles',
  },
];

class Sample extends Component {
  renderCards = () => {
    const { classes } = this.props;

    return cards.map(card => {
      return <Grid item key={card.title} md={3}>
        <Card className={classes.card} elevation={0}>
            <CardMedia
              className={classes.media}
              {...card.media} />
            <CardContent className={classes.content}>
              <Typography variant='h6'>
                {card.title}
              </Typography>
              <Typography component='p'>
                {card.desc}
              </Typography>
            </CardContent>
          <CardActions className={classes.actions}>
            <Typography
              className={classes.button}
              component={Link}
              to='/technology'
              variant='body1'>
              SEARCH NOW >
            </Typography>
          </CardActions>
        </Card>
      </Grid>;
    })
  }
  render() {
    return <Grid container justify='center'>
      <Grid item md={11} xs={12} xl={8}>
        <Grid container justify='space-between' spacing={40}>
          {this.renderCards()}
        </Grid>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(Sample);
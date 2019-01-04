import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit * 2
  },
  content: {
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 2}px`
  },
  icon: {
    fontSize: '7rem',
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: '4rem'
    }
  },
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 180%',
    overflow: 'hidden',
    [theme.breakpoints.down('xl')]: {
      backgroundSize: '100% 180%',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '180% 120%',
    }
  },
  subtitle: {
    fontSize: 26,
    fontWeight: 400,
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  title: {
    fontSize: 32,
    fontWeight: 300,
    letterSpacing: 20,
    textIndent: 28,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20
    }
  }
});

export class Hero extends Component {
  renderIcon = () => {
    const { classes, icon, iconProps } = this.props;

    return icon && (
      <FontAwesomeIcon
        icon={ icon }
        {...iconProps}
        className={`
          ${classes.icon}
          ${iconProps && iconProps.className
            ? iconProps.className : ''}
        `}
      />
    );
  };

  renderSubtitle = () => {
    const { classes, subtitle, subtitleTypographyProps } = this.props;

    return subtitle && (
      <Typography
        align='center'
        gutterBottom
        variant='h4'
        {...subtitleTypographyProps}
        className={`
          ${classes.subtitle}
          ${subtitleTypographyProps && subtitleTypographyProps.className
            ? subtitleTypographyProps.className : ''}
        `}>
        { subtitle }
      </Typography>
    );
  };

  renderTitle = () => {
    const { classes, title, titleTypographyProps } = this.props;

    return title && (
      <Typography
        align='center'
        gutterBottom
        variant='h4'
        {...titleTypographyProps}
        className={`
          ${classes.title}
          ${titleTypographyProps && titleTypographyProps.className
            ? titleTypographyProps.className : ''}
        `}>
        { title }
      </Typography>
    )
  };

  render() {
    const {
      classes,
      children,
      contentProps,
      height,
      image,
    } = this.props;

    return (
      <Grid
        className={classes.root}
        container
        justify='center'
        style={{ backgroundImage: `url("${image}")`, height: height || 'auto' }}>

        <Grid item xs={12}>
          <Grid
            alignItems='center'
            container
            direction='column'
            justify='center'
            {...contentProps}
            className={`
              ${classes.content} ${contentProps && contentProps.className
                ? contentProps.className : ''}
            `}>

            { this.renderIcon() }
            { this.renderTitle() }
            { this.renderSubtitle() }
            { children }

          </Grid>
        </Grid>

      </Grid>
    );
  }
}

Hero.defaultProps = {};
Hero.propTypes = {};

export default withStyles(styles)(Hero);
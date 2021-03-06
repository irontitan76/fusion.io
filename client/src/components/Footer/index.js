import React, { Component, Fragment } from 'react';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  footer: {
    backgroundColor: '#333',
    borderTop: '1px solid #dedede',
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4
  },
  footerColumn: {
    height: 100,
    paddingTop: theme.spacing.unit * 4,
  },
  footerCopyright: {
    color: theme.palette.common.white,
    fontWeight: 300
  },
  footerLink: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.blue,
    }
  },
  footerListItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  footerListItemText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 300
  },
  footerSocial: {
    height: 125,
    paddingTop: theme.spacing.unit * 4,
  },
  footerSocialButton: {
    color: 'white',
    fontSize: 18,
    height: 36,
    width: 36,
  },
  footerSocialIcon: {
    '&:hover': {
      color: theme.palette.blue,
    }
  },
  footerText: {
    color: theme.palette.common.white,
  }
});

export class Footer extends Component {
  getIcons = () => {
    return {
      'linkedin': 'http://linkedin.com/in/rosssheppard',
      'twitter': 'http://twitter.com/rshep182',
      'github': 'http://github.com/irontitan76',
      'facebook': 'http://facebook.com/rshep',
      'instagram': 'http://instagram.com/rshep182'
    }
  };

  getLinks = () => {
    return [
      {
        label: 'Privacy',
        path: '/company/privacy',
      },
      {
        label: 'Terms of Use',
        path: '/company/terms-of-use',
      },
      {
        label: 'Cookies',
        path: '/company/cookies',
      },
      {
        label: 'Sitemap',
        path: '/company/sitemap',
      }
    ];
  };

  getMenus = () => {
    return [
      // {
      //   title: 'COMPANY',
      //   list: [
      //     'About Fusion',
      //     'Accessibility',
      //     'Careers',
      //     'Contact Us',
      //     'Corporate Responsibility',
      //     'Investor Relations',
      //     'Leadership'
      //   ]
      // },
      // {
      //   title: 'NEWS & EVENTS',
      //   list: [
      //     'Newsroom',
      //     'Discover',
      //     'Events'
      //   ]
      // },
      // {
      //   title: 'COMMUNITY',
      //   list: []
      // },
      // {
      //   title: 'CUSTOMER RESOURCES',
      //   list: []
      // }
    ];
  };

  renderCopyright = () => {
    const { classes } = this.props;
    const links = this.getLinks();

    const renderedLinks = links.map((link, key) => {
      const separator = key === links.length - 1 ? null : ' \u00A0| \u00A0';
      
      return <Fragment key={key}>
        <Link
          className={classes.footerLink}
          to={link.path}>
          { link.label }
        </Link>
        {separator}
      </Fragment>
    });

    return <>
      <Grid item xs={6}>
        <Typography
          className={classes.footerCopyright}
          variant='body2'>
          © Copyright 2018 Fusion Industries, Inc.
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography
          align='right'
          className={classes.footerCopyright}
          variant='body2'>
          {renderedLinks}
        </Typography>
      </Grid>
    </>;
  };

  renderSocial = (belowMedium) => {
    const { classes } = this.props;
    const icons = this.getIcons();

    return <Grid className={classes.footerSocial} item xs={8}>
      <Typography
        align={ belowMedium ? 'center' : 'right' }
        className={classes.footerText}
        variant='body2'>
        FOLLOW FUSION
      </Typography>
      <Typography
        align={ belowMedium ? 'center' : 'right' }>
        {
          Object.keys(icons).map((icon, key) => (
            <IconButton
              aria-label={icon}
              className={classes.footerSocialButton}
              href={icons[icon]}
              key={key}
              rel='noopener'
              target='_blank'>
              <FontAwesomeIcon
                className={classes.footerSocialIcon}
                icon={['fab', icon]}
              />
            </IconButton>
          ))
        }
      </Typography>

    </Grid>
  }

  renderMenu = (menu) => {
    const { classes } = this.props;

    return menu.list.map((item, key) => {
      return <ListItem
        className={classes.footerListItem}
        dense
        key={key}>
        <ListItemText
          primary={item}
          primaryTypographyProps={{
            className: classes.footerListItemText
          }}/>
      </ListItem>
    })
  }
  
  renderMenus = () => {
    const { classes } = this.props;
    const menus = this.getMenus();

    return menus.length > 0 ? menus.map((menu, key) => {
      return <Grid
        className={classes.footerColumn}
        item
        key={key}
        xs={2}>

        <Typography className={classes.footerText} variant='body2'>
          { menu.title }
        </Typography>

        <List>
          {this.getMenu(menu)}
        </List>

      </Grid>
    }) : <Grid item xs={10} />
  }

  render() {
    const { classes, theme } = this.props;
    const belowMedium = theme.breakpoints.down('md');

    return (
      <Grid
        alignItems='center'
        className={classes.footer}
        component='footer'
        container
        justify={ belowMedium ? 'center' : 'space-between'}>

        {this.renderMenus()}
        {this.renderSocial(belowMedium)}
        {this.renderCopyright()}

      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Footer);
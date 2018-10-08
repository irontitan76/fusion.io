import React, { Component } from 'react';
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
  footerSocialIcon: {},
  footerText: {
    color: theme.palette.common.white,
  }
});

export class Footer extends Component {
  render() {
    const { classes, theme } = this.props;

    const icons = {
      'twitter': 'http://twitter.com/rshep182',
      'github': 'http://github.com/irontitan76',
      'facebook': 'http://facebook.com/rshep',
      'instagram': 'http://instagram.com/rshep182'
    };

    const menus = [
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

    const links = [
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

    const belowMedium = theme.breakpoints.down('md');

    return (
      <Grid
        alignItems='center'
        className={classes.footer}
        container
        justify={ belowMedium ? 'center' : 'space-between'}>

        {
          menus.length > 0 ? menus.map((menu, key) => {
            return <Grid
              className={classes.footerColumn}
              item
              xs={2}>

              <Typography className={classes.footerText} variant='body1'>
                { menu.title }
              </Typography>

              <List>
                {
                  menu.list.map((item, key) => {
                    return <ListItem dense style={{ padding: '5px 0' }}>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          style: {
                            color: '#fff',
                            fontSize: 13,
                            fontWeight: 300
                          }
                        }}/>
                    </ListItem>
                  })
                }
              </List>

            </Grid>
          }) : <Grid item xs={10} />
        }

        <Grid className={classes.footerSocial} item xs={8}>
          <Typography
            align={ belowMedium ? 'center' : 'right' }
            className={classes.footerText}
            variant='body1'>
            FOLLOW FUSION
          </Typography>
          <Typography
            align={ belowMedium ? 'center' : 'right' }>
            {
              Object.keys(icons).map((icon, key) => (
                <IconButton
                  className={classes.footerSocialButton}
                  href={icons[icon]}
                  key={key}
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

        <Grid item xs={6}>
          <Typography
            className={classes.footerCopyright}
            variant='body1'>
            © Copyright 2018 Fusion Industries, Inc.
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography
            align='right'
            className={classes.footerCopyright}
            variant='body1'>
            {
              links.map((link, key) => <>
                <Link className={classes.footerLink} key={key} to={link.path}>
                  { link.label }
                </Link>
                { key === links.length - 1 ? null : ' \u00A0| \u00A0' }
              </>)
            }
          </Typography>
        </Grid>

      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Footer);
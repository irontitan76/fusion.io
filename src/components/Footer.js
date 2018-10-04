import React, { Component } from 'react';
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

  },
  footerText: {
    color: theme.palette.common.white,
  }
});

export class Footer extends Component {
  render() {
    const { classes } = this.props;

    const icons = [
      ['fab', 'twitter'],
      ['fab', 'github'],
      ['fab', 'facebook'],
      ['fab', 'instagram']
    ];

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

    return (
      <Grid
        alignItems='center'
        className={classes.footer}
        container
        justify='space-between'>

        {
          menus.length > 0 ? menus.map((menu, key) => {
            return <Grid
              className={classes.footerColumn}
              item
              xs={2}>

              <Typography className={classes.footerText} variant='body1'>
                {menu.title}
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

        <Grid className={classes.footerSocial} item xs={2}>
          <Typography
            align='right'
            className={classes.footerText}
            variant='body1'>
            FOLLOW FUSION
          </Typography>
          <Typography
            align='right'>
            {
              icons.map((icon, key) => (
                <IconButton
                  className={classes.footerSocialButton}
                  key={key}>
                  <FontAwesomeIcon
                    className={classes.footerSocialIcon}
                    icon={icon}
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
            Privacy &nbsp;| &nbsp;Terms of Use &nbsp;| &nbsp;Cookies &nbsp;|
            &nbsp;Sitemap
          </Typography>
        </Grid>

      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);
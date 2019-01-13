import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';

import AppBar from '@material-ui/core/AppBar';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  description: {
    paddingLeft: theme.spacing.unit *4,
    paddingRight: theme.spacing.unit *4,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing.unit *3,
    }
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 300
  },
  horizontalLabel: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  icon: {
    padding: theme.spacing.unit
  },
  image: {
    width: '100%',
  },
  label: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  root: {},
  subheading: {
    marginBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit *4,
    paddingRight: theme.spacing.unit *4,
  },
  tab: {
    minHeight: 585,
    paddingBottom: theme.spacing.unit * 6,
    paddingTop: theme.spacing.unit * 6,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  tabs: {
    backgroundColor: '#fefefe',
  },
  tabsName: {
    color: 'white',
    fontWeight: 300,
    letterSpacing: 5,
    paddingBottom: 10,
    paddingTop: 10
  },
  title: {
    paddingLeft: theme.spacing.unit *4,
    paddingRight: theme.spacing.unit *4,
  }
});

export class TabBar extends Component {
  state = { value: 0 };

  onChange = (event, value) => {
    this.setState({ value });
  };

  renderTabIcon = (header, isVertical) => {
    const { classes } = this.props;

    if ( isVertical ) {
      return <FontAwesomeIcon
        className={classes.icon}
        icon={header.icon} />;
    } else {
      return <Grid alignItems='center' container justify='center'>
        <Grid item xs={5}>
          <Grid container alignItems='center'>
            <Grid item xs={2}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={header.icon} />
            </Grid>
            <Grid className={classes.horizontalLabel} item xs={10}>
              {header.label}
            </Grid>
          </Grid>
          </Grid>
      </Grid>;
    }
  }

  renderTabs = (tabs) => {
    const { value } = this.state;
    const { classes, intl } = this.props;

    return tabs.map((tab, key) => (
      value === key && (
        <Grid
          alignItems='center'
          className={classes.tab}
          container
          justify='center'
          key={key}>

          <Typography
            align='center'
            className={classes.title}
            component={Grid}
            gutterBottom
            item
            variant='h6'
            xs={12}>
            { intl ? <FormattedMessage id={tab.title} /> : tab.title }
          </Typography>

          <Typography
            align='center'
            className={classes.subheading}
            component={Grid}
            gutterBottom
            item
            variant='subtitle1'
            xs={12}>
            { intl ? <FormattedMessage id={tab.subtitle} /> : tab.subtitle }
          </Typography>


          <Grid item xs={12}>
            <Grid
              alignItems='center'
              container
              justify='space-around'>
              <Grid
                className={classes.description}
                item
                md={5}
                xs={12}>

                <Fade in timeout={{ enter: 1200, exit: 500 }}>

                  <Grid
                    alignItems='center'
                    className={classes.descriptionText}
                    container
                    direction='column'
                    justify='center'>
                    <Typography align='center' style={{ fontSize: 'inherit', fontWeight: 'inherit' }} variant='body1'>
                      { intl ? <FormattedMessage id={tab.description} /> : tab.description }
                    </Typography>
                  </Grid>

                </Fade>

              </Grid>

              <Grid item md={5} xs={12}>

                <Grid
                  alignItems='center'
                  container
                  direction='column'
                  justify='center'>
                  <Grid item xs={12}>
                    { (tab.media && tab.media.type === 'image')
                      && <Fade in timeout={{ enter: 1200, exit: 500 }}>
                          <img
                          alt={tab.media.alt}
                          className={classes.image}
                          src={tab.media.src} />
                      </Fade>
                    }
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>

        </Grid>
      )
    ));
  };

  renderTabsHeaders = headers => {
    const { classes, direction } = this.props;
    const isVertical = direction === 'vertical';

    return headers.map((header, key) => {
      const icon = this.renderTabIcon(header, isVertical);
      const label = isVertical ? header.label : undefined;

      return <Tab
        aria-label={header.label}
        classes={{ label: classes.label }}
        icon={icon}
        key={key}
        label={label} />
    });
  };

  render() {
    const { value } = this.state;
    const { classes, name, values } = this.props;

    // TODO: change Tabs to variant='fullWidth' with MUI update

    return (
      <>
        <AppBar className={classes.root} position='static'>
          <Typography
            align='center'
            className={classes.tabsName}
            variant='h6'>
            { name }
          </Typography>
          <Tabs
            centered
            className={classes.tabs}
            fullWidth
            indicatorColor='primary'
            onChange={this.onChange}
            textColor='primary'
            value={value}>
            {this.renderTabsHeaders(values)}
          </Tabs>
        </AppBar>
        {this.renderTabs(values)}
      </>
    );
  }
}

TabBar.defaultProps = {
  direction: 'vertical',
};

TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  values: PropTypes.array.isRequired,
};

export default withStyles(styles)(TabBar);
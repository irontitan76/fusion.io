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

const styles = theme => {
  const { breakpoints, palette, spacing } = theme;
  // const isDark = palette.type === 'dark';
  return {
    description: {
      paddingLeft: spacing.unit * 4,
      paddingRight: spacing.unit * 4,
      [breakpoints.down('sm')]: {
        marginBottom: spacing.unit * 3,
      },
    },
    descriptionText: {
      color: palette.text.primary,
      fontSize: 18,
      fontWeight: 300,
    },
    horizontalLabel: {
      [breakpoints.down('md')]: {
        display: 'none',
      },
    },
    icon: {
      padding: spacing.unit,
    },
    image: {
      width: '100%',
    },
    label: {
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    root: {},
    subheading: {
      color: palette.text.primary,
      marginBottom: spacing.unit * 4,
      paddingLeft: spacing.unit * 4,
      paddingRight: spacing.unit * 4,
    },
    tab: {
      backgroundColor: palette.background.default,
      minHeight: 585,
      paddingBottom: spacing.unit * 6,
      paddingTop: spacing.unit * 6,
      [breakpoints.down('sm')]: {
        height: 'auto',
      },
    },
    tabs: {
      backgroundColor: palette.background.paper,
    },
    tabsName: {
      color: palette.common.white,
      fontWeight: 300,
      letterSpacing: 5,
      paddingBottom: 10,
      paddingTop: 10,
    },
    title: {
      paddingLeft: spacing.unit * 4,
      paddingRight: spacing.unit * 4,
    },
  };
};

class TabBar extends Component {
  state = { value: 0 };

  onChange = (event, value) => {
    this.setState({ value });
  };

  renderTabIcon = (header, isVertical) => {
    const { classes } = this.props;

    if (isVertical) {
      return <FontAwesomeIcon className={classes.icon} icon={header.icon} />;
    }

    return (
      <Grid alignItems='center' container justify='center'>
        <Grid item xs={5}>
          <Grid alignItems='center' container>
            <Grid item xs={2}>
              <FontAwesomeIcon className={classes.icon} icon={header.icon} />
            </Grid>
            <Grid className={classes.horizontalLabel} item xs={10}>
              <FormattedMessage id={header.title} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  renderTabs = (tabs) => {
    const { value } = this.state;
    const { classes } = this.props;

    return tabs.map((tab, key) => value === key && (
      <Grid
        alignItems='center'
        className={classes.tab}
        container
        justify='center'
        key={tab.title}
      >

        <Typography
          align='center'
          className={classes.title}
          component={Grid}
          gutterBottom
          item
          variant='h6'
          xs={12}
        >
          <FormattedMessage id={tab.title} />
        </Typography>

        <Typography
          align='center'
          className={classes.subheading}
          component={Grid}
          gutterBottom
          item
          variant='subtitle1'
          xs={12}
        >
          <FormattedMessage id={tab.subtitle} />
        </Typography>


        <Grid item xs={12}>
          <Grid
            alignItems='center'
            container
            justify='space-around'
          >
            <Grid
              className={classes.description}
              item
              md={5}
              xs={12}
            >

              <Fade in timeout={{ enter: 1200, exit: 500 }}>

                <Grid
                  alignItems='center'
                  className={classes.descriptionText}
                  container
                  direction='column'
                  justify='center'
                >
                  <Typography
                    align='center'
                    style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                    variant='body1'
                  >
                    <FormattedMessage id={tab.description} />
                  </Typography>
                </Grid>

              </Fade>

            </Grid>

            <Grid item md={5} xs={12}>

              <Grid
                alignItems='center'
                container
                direction='column'
                justify='center'
              >
                <Grid item xs={12}>
                  {
                    tab.media && tab.media.type === 'image'
                    && (
                      <Fade in timeout={{ enter: 1200, exit: 500 }}>
                        <img
                          alt={tab.media.alt}
                          className={classes.image}
                          src={tab.media.src}
                        />
                      </Fade>
                    )
                  }
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

      </Grid>
    )
    );
  };

  renderTabsHeaders = headers => {
    const { classes, direction } = this.props;
    const isVertical = direction === 'vertical';

    return headers.map((header) => {
      const icon = this.renderTabIcon(header, isVertical);
      const label = isVertical ? <FormattedMessage id={header.title} /> : undefined;

      return (
        <Tab
          aria-label={header.title}
          classes={{ label: classes.label }}
          icon={icon}
          key={header.title}
          label={label}
        />
      );
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
            variant='h6'
          >
            {name}
          </Typography>
          <Tabs
            centered
            className={classes.tabs}
            fullWidth
            indicatorColor='primary'
            onChange={this.onChange}
            textColor='primary'
            value={value}
          >
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
  classes: PropTypes.shape({}).isRequired,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withStyles(styles)(TabBar);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AppBar from '@material-ui/core/AppBar';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { breakLine } from 'common/functions';

const styles = theme => ({
  description: {

  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 300
  },
  icon: {
    padding: theme.spacing.unit
  },
  label: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  root: {

  },
  subheading: {
    marginBottom: theme.spacing.unit * 4
  },
  tab: {
    paddingBottom: theme.spacing.unit * 6,
    paddingTop: theme.spacing.unit * 6
  },
  tabs: {
    backgroundColor: '#111'
  }
});

export class TabBar extends Component {
  state = {
    value: 0
  };

  onChange = (event, value) => {
    this.setState({ value });
  };

  renderTabs = tabs => {
    const { value } = this.state;
    const { classes } = this.props;

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
            component={Grid}
            gutterBottom
            item
            variant='title'
            xs={12}>
            {tab.title}
          </Typography>

          <Typography
            align='center'
            className={classes.subheading}
            component={Grid}
            gutterBottom
            item
            variant='subheading'
            xs={12}>
            {tab.subheading}
          </Typography>

          <Fade in timeout={{ enter: 750 }}>
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

                  <Grid
                    alignItems='center'
                    container
                    direction='column'
                    justify='center'>
                    { breakLine(tab.description) }
                  </Grid>

                </Grid>

                <Grid item md={5} xs={12}>

                  <Grid
                    alignItems='center'
                    container
                    direction='column'
                    justify='center'>
                    <Grid item xs={12}>
                      { (tab.media && tab.media.type === 'image')
                        && <img alt={tab.media.alt} src={tab.media.src} /> }
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Fade>

        </Grid>
      )
    ));
  };

  renderTabsHeaders = headers => {
    const { classes, direction } = this.props;

    return headers.map((header, key) => (
      <Tab
        classes={{ label: classes.label }}
        icon={
          direction === 'vertical' ? <FontAwesomeIcon
            className={classes.icon}
            icon={header.icon}
          /> : <>
            <Grid alignItems='center' container justify='center'>
              <Grid item xs={5}>
                <Grid container alignItems='center'>
                  <Grid item xs={2}>
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={header.icon}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    {header.label}
                  </Grid>
                </Grid>
                </Grid>
            </Grid>
          </>
        }
        key={key}
        label={direction === 'vertical' ? header.label : undefined }
      />
    ))
  };

  render() {
    const { value } = this.state;
    const { classes, name, values } = this.props;

    return (
      <>
        <AppBar className={classes.root} position='static'>
          <Typography
            align='center'
            style={{
              color: 'white',
              fontWeight: 300,
              letterSpacing: 5,
              paddingBottom: 10,
              paddingTop: 10
            }}
            variant='title'>
            { name }
          </Typography>
          <Tabs
            centered
            className={classes.tabs}
            fullWidth
            indicatorColor='primary'
            onChange={this.onChange}
            value={value}>
            { this.renderTabsHeaders(values) }
          </Tabs>
        </AppBar>
        { this.renderTabs(values) }
      </>
    );
  }
}

TabBar.defaultProps = {
  direction: 'vertical'
};
TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  values: PropTypes.array.isRequired,
};

export default withStyles(styles)(TabBar);
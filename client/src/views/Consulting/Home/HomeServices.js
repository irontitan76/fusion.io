import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import TabBar from 'components/TabBar';

// eslint-disable-next-line
class HomeServices extends Component {
  render() {
    const { intl } = this.props;

    const services = [{
      description: 'consult.home.services[0].description',
      icon: ['fal', 'comments'],
      media: {
        alt: 'social',
        src: '/images/social.jpg',
        type: 'image',
      },
      subtitle: 'consult.home.services[0].subtitle',
      title: 'consult.home.services[0].title',
    },
    {
      description: 'consult.home.services[1].description',
      icon: ['fal', 'desktop-alt'],
      media: {
        alt: 'web',
        src: '/images/web.jpg',
        type: 'image',
      },
      subtitle: 'consult.home.services[1].subtitle',
      title: 'consult.home.services[1].title',
    },
    {
      description: 'consult.home.services[2].description',
      icon: ['fal', 'analytics'],
      media: {
        alt: 'data',
        src: '/images/data.jpg',
        type: 'image',
      },
      subtitle: 'consult.home.services[2].subtitle',
      title: 'consult.home.services[2].title',
    },
    {
      description: 'consult.home.services[3].description',
      icon: ['fal', 'cloud'],
      media: {
        alt: 'cloud',
        src: '/images/digital.jpg',
        type: 'image',
      },
      subtitle: 'consult.home.services[3].subtitle',
      title: 'consult.home.services[3].title',
    },
    {
      description: 'consult.home.services[4].description',
      icon: ['fal', 'mind-share'],
      media: {
        alt: 'artificial intelligence',
        src: '/images/earth-resized.jpg',
        type: 'image',
      },
      subtitle: 'consult.home.services[4].subtitle',
      title: 'consult.home.services[4].title',
    },
    {
      description: 'consult.home.services[5].description',
      icon: ['fal', 'head-vr'],
      media: {
        alt: 'reality',
        src: '/images/reality.jpg',
        type: 'image',
      },
      subtitle: 'consult.home.services[5].subtitle',
      title: 'consult.home.services[5].title',
    },
    ];

    return (
      <TabBar
        direction='horizontal'
        intl
        name={intl.formatMessage({ id: 'consult.home.services.title' })}
        values={services}
      />
    );
  }
}

HomeServices.propTypes = {
  intl: PropTypes.shape({}).isRequired,
};

export default injectIntl(HomeServices);
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconStyle = {
  fontSize: 16,
  width: 24
};

export const title = 'FUSION';

export const primaryMenu = [
  {
    active: true,
    children: [
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'far', 'home' ]}
          style={iconStyle}
        />,
        name: 'Home',
        path: '/'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'far', 'glasses' ]}
          style={iconStyle}
        />,
        name: 'About Us',
        path: '/about'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'far', 'people-carry' ]}
          style={iconStyle}
        />,
        name: 'Careers',
        path: '/careers'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'far', 'binoculars' ]}
          style={{
            // color: '#001f0c',
            ...iconStyle
          }}
        />,
        name: 'Insights',
        path: '/insights'
      },
    ],
    icon: <FontAwesomeIcon
      icon={[ 'far', 'globe' ]}
      style={iconStyle}
    />,
    name: 'Industries',
    // path: '/',
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'brain' ]}
      style={{
        // color: '#001f3f',
        ...iconStyle
      }}
    />,
    name: 'A.I.',
    path: '/ai'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'users' ]}
      style={{
        // color: '#0074D9',
        ...iconStyle
      }}
    />,
    name: 'Consulting',
    path: '/consulting'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'space-shuttle' ]}
      style={{
        // color: '#aaa',
        fontSize: 20,
        width: 24
      }}
    />,
    name: 'Cosmos',
    path: '/cosmos'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'solar-panel' ]}
      style={{
        // color: '#ff851b',
        ...iconStyle
      }}
    />,
    name: 'Energy',
    path: '/energy'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'credit-card-blank' ]}
      style={{
        // color: '#3d9970',
        ...iconStyle
      }}
    />,
    name: 'Finance',
    path: '/finance'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'dna' ]}
      style={{
        // color: '#85144b',
        ...iconStyle
      }}
    />,
    name: 'Health',
    path: '/health'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'balance-scale' ]}
      style={{
        // color: '#bf4900',
        ...iconStyle
      }}
    />,
    name: 'Legal',
    path: '/legal'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'broadcast-tower' ]}
      style={{
        // color: '#ff4136',
        ...iconStyle
      }}
    />,
    name: 'Media',
    path: '/media'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'code' ]}
      style={{
        // color: '#0074d9',
        ...iconStyle
      }}
    />,
    name: 'Technology',
    path: '/tech'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'map-marked' ]}
      style={{
        // color: '#ffdc00',
        ...iconStyle
      }}
    />,
    name: 'Transport',
    path: '/transport'
  }
];

export const secondaryMenu = [
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'sliders-h' ]}
      style={{ fontSize: '1rem', width: 24 }}
    />,
    name: 'Profile',
    path: '/profile'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'far', 'sign-out' ]}
      style={{ fontSize: '1rem', width: 24 }}
    />,
    name: 'Sign out',
    path: '/'
  }
];

export default {
  menus: {
    primary: primaryMenu,
    secondary: secondaryMenu
  },
  title,
};
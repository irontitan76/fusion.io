import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconStyle = {
  color: 'inherit',
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
          icon={[ 'fal', 'home' ]}
          style={iconStyle}
        />,
        name: 'Home',
        path: '/'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'fal', 'glasses' ]}
          style={iconStyle}
        />,
        name: 'About Us',
        path: '/about'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'fal', 'briefcase' ]}
          style={iconStyle}
        />,
        name: 'Careers',
        path: '/careers'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'fal', 'binoculars' ]}
          style={{
            ...iconStyle
          }}
        />,
        name: 'Insights',
        path: '/insights'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'fal', 'circle-notch' ]}
          style={{
            ...iconStyle
          }}
        />,
        name: 'Standard',
        path: '/standard'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'fal', 'infinity' ]}
          style={{
            ...iconStyle
          }}
        />,
        name: 'Strategy',
        path: '/strategy'
      },
    ],
    icon: <FontAwesomeIcon
      icon={[ 'fal', 'globe' ]}
      style={iconStyle}
    />,
    name: 'Industries',
  },
  // {
  //   active: true,
  //   icon: <FontAwesomeIcon
  //     icon={[ 'fal', 'brain' ]}
  //     style={{
  //       ...iconStyle
  //     }}
  //   />,
  //   name: 'A.I.',
  //   path: '/ai'
  // },
  {
    active: true,
    children: [
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'fal', 'home' ]}
          style={{
            ...iconStyle
          }}
        />,
      name: 'Home',
        path: '/consulting'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'fal', 'toolbox' ]}
          style={iconStyle}
        />,
        name: 'Services',
        path: '/consulting/services'
      },
      {
        active: true,
        icon: <FontAwesomeIcon
          icon={[ 'fal', 'boxes-alt' ]}
          style={iconStyle}
        />,
        name: 'Solutions',
        path: '/consulting/solutions'
      },
    ],
    icon: <FontAwesomeIcon
      icon={[ 'fal', 'users' ]}
      style={{
        ...iconStyle
      }}
    />,
    name: 'Consulting',
  },
  // {
  //   active: true,
  //   icon: <FontAwesomeIcon
  //     icon={[ 'fal', 'space-shuttle' ]}
  //     style={{
  //       fontSize: 20,
  //       width: 24
  //     }}
  //   />,
  //   name: 'Cosmos',
  //   path: '/cosmos'
  // },
  // {
  //   active: true,
  //   icon: <FontAwesomeIcon
  //     icon={[ 'fal', 'solar-panel' ]}
  //     style={{
  //       ...iconStyle
  //     }}
  //   />,
  //   name: 'Energy',
  //   path: '/energy'
  // },
  // {
  //   active: true,
  //   icon: <FontAwesomeIcon
  //     icon={[ 'fal', 'credit-card-blank' ]}
  //     style={{
  //       ...iconStyle
  //     }}
  //   />,
  //   name: 'Finance',
  //   path: '/finance'
  // },
  // {
  //   active: true,
  //   icon: <FontAwesomeIcon
  //     icon={[ 'fal', 'dna' ]}
  //     style={{
  //       ...iconStyle
  //     }}
  //   />,
  //   name: 'Health',
  //   path: '/health'
  // },
  // {
  //   active: true,
  //   icon: <FontAwesomeIcon
  //     icon={[ 'fal', 'balance-scale' ]}
  //     style={{
  //       ...iconStyle
  //     }}
  //   />,
  //   name: 'Legal',
  //   path: '/legal'
  // },
  // {
  //   active: true,
  //   icon: <FontAwesomeIcon
  //     icon={[ 'fal', 'broadcast-tower' ]}
  //     style={{
  //       ...iconStyle
  //     }}
  //   />,
  //   name: 'Media',
  //   path: '/media'
  // },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'fal', 'code' ]}
      style={{
        ...iconStyle
      }}
    />,
    name: 'Technology',
    path: '/tech'
  },
  // {
  //   active: true,
  //   icon: <FontAwesomeIcon
  //     icon={[ 'fal', 'map-marked' ]}
  //     style={{
  //       ...iconStyle
  //     }}
  //   />,
  //   name: 'Transport',
  //   path: '/transport'
  // }
];

export const secondaryMenu = [
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'fal', 'sliders-h' ]}
      style={{ fontSize: '1rem', width: 24 }}
    />,
    name: 'Profile',
    path: '/profile'
  },
  {
    active: true,
    icon: <FontAwesomeIcon
      icon={[ 'fal', 'sign-out' ]}
      style={{ fontSize: '1rem', width: 24 }}
    />,
    name: 'Sign out',
    path: '/login'
  }
];

export const menus = {
  primary: primaryMenu,
  secondary: secondaryMenu
};
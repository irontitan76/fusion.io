import React from 'react';

export const search = {
  placeholder: 'Search jobs...',
};

export const hero = {
  heading: <>
    <span style={{ color: '#ff4136', fontWeight: 500 }}>Find </span>
    a job you love,
    <span style={{ color: '#0074d9', fontWeight: 500 }}> create </span>
    the future you want,
    <span style={{ color: '#ffdc00', fontWeight: 500 }}> explore </span>
    your unique passion, and
    <span style={{ color: '#3d9970', fontWeight: 500 }}> empower </span>
    billions.
  </>,
};

const size = {
  md: 3,
  sm: 6,
  xl: 2,
  xs: 12
};

export const grid = {
  teams: [
    {
      button1: {
        label: 'Learn more',
        path: '/teams/engineering'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=engineering'
      },
      content: 'Develop solutions and provide professional services for \
        businesses.',
      divider: true,
      media: {
        alt: 'engineering',
        src: '/images/engineering-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Engineering & Technology',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/design'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=design'
      },
      content: 'Create intuitive experiences and design the future of user \
        interaction.',
      divider: true,
      media: {
        alt: 'user experience & design',
        src: '/images/design-resized.jpg',
        type: 'img'
      },
      size,
      title: 'User Experience & Design',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/sales'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=sales'
      },
      content: 'Find, grow, and lead the people who make Fusion great.',
      divider: true,
      media: {
        alt: 'sales',
        src: '/images/sales-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Accounts & Sales',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/finance'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=finance'
      },
      content: 'Drive high impact revenues and provide guidance for investment \
        decisions.',
      divider: true,
      media: {
        alt: 'finance',
        src: '/images/finance-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Finance',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/marketing'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=marketing'
      },
      content: 'Protect, enhance and build our company reputation through \
        media.',
      divider: true,
      media: {
        alt: 'marketing',
        src: '/images/marketing-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Marketing',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/legal'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=legal'
      },
      content: 'Optimize industry policy and govern how stakeholders interact \
        with each other.',
      divider: true,
      media: {
        alt: 'legal',
        src: '/images/legal-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Legal & Corporate Affairs',
    },
  ],
};
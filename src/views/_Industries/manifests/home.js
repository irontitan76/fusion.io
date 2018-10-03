import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'react-router-dom/Link';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const iconStyle = {
  fontSize: 24
};

export const hero = {
  icon: [ 'fal', 'atom' ],
  subtitle: 'Optimizing business through intelligent design',
  title: 'FUSION',
};

export const overview = {
  containerProps: {
    spacing: 32
  },
  items: [
    {
      CardActionsProps: {
        children: <Button
          color='primary'
          component={Link}
          size='small'
          to='/about'>
          About Us
        </Button>
      },
      CardContentProps: {
        children: <Typography component='p'>
          Fusion redefines operational efficiency with solutions that transform. We
          are a team of innovative individuals who provide insights and deliver
          solutions across varying verticals.
        </Typography>
      },
      CardHeaderProps: {
        avatar: <FontAwesomeIcon
          color='#0074D9'
          icon={[ 'far', 'user-tie' ]}
          style={iconStyle}
        />,
        title: 'Who We Are'
      },
      CardProps: {
        elevation: 0
      },
      isDivider: true,
      itemProps: {
        md: 4,
        xs: 12
      }
    },
    {
      CardActionsProps: {
        children: <Button
          color='primary'
          component={Link}
          size='small'
          to='/strategy'>
          Read More
        </Button>
      },
      CardContentProps: {
        children: <Typography component='p'>
          Business outcomes must be built faster than ever before. Our Insight
          Engine lets you discover end-to-end solutions and solve the complexities
          of your digital enterprise.
        </Typography>
      },
      CardHeaderProps: {
        avatar: <FontAwesomeIcon
          color='#0074D9'
          icon={[ 'far', 'binoculars' ]}
          style={iconStyle}
        />,
        title: 'Insight Engine',
      },
      CardProps: {
        elevation: 0
      },
      isDivider: true,
      itemProps: {
        md: 4,
        xs: 12
      }
    },
    {
      CardActionsProps: {
        children: <Button
          color='primary'
          component={Link}
          size='small'
          to='/contact'>
          Our Locations
        </Button>
      },
      CardContentProps: {
        children: <Typography component='p'>
          Our Sales Team has vision and tactics for delivering optimal solutions.
          They work closely to provide you with the best technology and people
          possible.
        </Typography>
      },
      CardHeaderProps: {
        avatar: <FontAwesomeIcon
          color='#0074D9'
          icon={[ 'far', 'route' ]}
          style={iconStyle}
        />,
        title: 'Contact Us',
      },
      CardProps: {
        elevation: 0
      },
      isDivider: true,
      itemProps: {
        md: 4,
        xs: 12
      }
    }
  ]
};

export const products = {
  containerProps: {},
  items: [
    {
      image: './images/design-resized.jpg',
      imageProps: {},
      innerContainerProps: {},
      outerContainerProps: {
        md: 4,
        sm: 6,
        xs: 12
      },
      subheading: 'A React Component Library',
      subheadingTypographyProps: {},
      title: 'Design System',
      titleTypographyProps: {},
    },
    {
      image: './images/team-resized.jpg',
      imageProps: {},
      innerContainerProps: {},
      outerContainerProps: {
        md: 4,
        sm: 6,
        xs: 12
      },
      subheading: 'Optimally Built Teams',
      subheadingTypographyProps: {
        style: { color: '#fff' }
      },
      title: 'Professional Services',
      titleTypographyProps: {
        style: { color: '#fff' }
      },
    },
    {
      image: './images/sf.jpg',
      imageProps: {},
      innerContainerProps: {},
      outerContainerProps: {
        md: 8,
        sm: 12,
        xs: 12
      },
      subheading: 'Optimally Built Teams',
      subheadingTypographyProps: {
        style: { color: '#fff' }
      },
      title: 'Professional Services',
      titleTypographyProps: {
        style: { color: '#fff' }
      },
    }
  ]
};

export const latest = {
  containerProps: {},
  items: [
    {
      CardContentProps: {
        children: <Typography component='p'>
          Our Sales Team has vision and tactics for delivering optimal solutions.
          They work closely to provide you with the best technology and people
          possible.
        </Typography>
      },
      CardHeaderProps: {
        subheading: 'A React Component Library',
        title: 'Design System'
      },
      CardMediaProps: {
        image: './images/design-resized.jpg',
        style: { height: 200 }
      },
      CardProps: {
        elevation: 1
      },
      hover: true,
      itemProps: {
        md: 2,
        xs: 12
      },
    },
  ]
};

export default {
  hero,
  latest,
  overview,
  products
};
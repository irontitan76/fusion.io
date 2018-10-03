import React from 'react';
import Link from 'react-router-dom/Link';

import Typography from '@material-ui/core/Typography';

export const articles = {
  containerProps: {
    spacing: 32
  },
  items: [
    {
      CardActionsProps: {},
      CardContentProps: {
        children: <Typography component='p' style={{ fontWeight: 300 }}>
          Develop solutions and provide professional services for businesses.
        </Typography>
      },
      CardHeaderProps: {
        title: 'Engineering & Technology',
        titleTypographyProps: { variant: 'subheading' }
      },
      CardMediaProps: {
        image: '/images/engineering-resized.jpg',
        style: { height: 140 }
      },
      CardProps: { elevation: 2 },
      hover: true,
      itemProps: {
        component: Link,
        md: 3,
        sm: 6,
        to: '/insights/0',
        xl: 2,
        xs: 12
      }
    },{
      CardActionsProps: {},
      CardContentProps: {
        children: <Typography component='p' style={{ fontWeight: 300 }}>
          Create intuitive experiences and design the future of user interaction.
        </Typography>
      },
      CardHeaderProps: {
        title: 'User Experience & Design',
        titleTypographyProps: { variant: 'subheading' }
      },
      CardMediaProps: {
        image: '/images/design-resized.jpg',
        style: { height: 140 }
      },
      CardProps: { elevation: 2 },
      hover: true,
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {},
      CardContentProps: {
        children: <Typography component='p' style={{ fontWeight: 300 }}>
          Equip businesses with the right tools to help them grow.
        </Typography>
      },
      CardHeaderProps: {
        title: 'Accounts & Sales',
        titleTypographyProps: { variant: 'subheading' }
      },
      CardMediaProps: {
        image: '/images/sales-resized.jpg',
        style: { height: 140 }
      },
      CardProps: { elevation: 2 },
      hover: true,
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {},
      CardContentProps: {
        children: <Typography component='p' style={{ fontWeight: 300 }}>
          Find, grow, and lead the people who make Fusion great.
        </Typography>
      },
      CardHeaderProps: {
        title: 'Management & Operations',
        titleTypographyProps: { variant: 'subheading' }
      },
      CardMediaProps: {
        image: '/images/team-resized.jpg',
        style: { height: 140 }
      },
      CardProps: { elevation: 2 },
      hover: true,
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {},
      CardContentProps: {
        children: <Typography component='p' style={{ fontWeight: 300 }}>
          Drive high impact revenues and provide guidance for investment decisions.
        </Typography>
      },
      CardHeaderProps: {
        title: 'Finance',
        titleTypographyProps: { variant: 'subheading' }
      },
      CardMediaProps: {
        image: '/images/finance-resized.jpg',
        style: { height: 140 }
      },
      CardProps: { elevation: 2 },
      hover: true,
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {},
      CardContentProps: {
        children: <Typography component='p' style={{ fontWeight: 300 }}>
          Protect, enhance and build our company reputation through media.
        </Typography>
      },
      CardHeaderProps: {
        title: 'Marketing & Communications',
        titleTypographyProps: { variant: 'subheading' }
      },
      CardMediaProps: {
        image: '/images/marketing-resized.jpg',
        style: { height: 140 }
      },
      CardProps: { elevation: 2 },
      hover: true,
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {},
      CardContentProps: {
        children: <Typography component='p' style={{ fontWeight: 300 }}>
          Optimize industry policy and govern how stakeholders
          interact with each other.
        </Typography>
      },
      CardHeaderProps: {
        title: 'Legal & Corporate Affairs',
        titleTypographyProps: { variant: 'subheading' }
      },
      CardMediaProps: {
        image: '/images/legal-resized.jpg',
        style: { height: 140 }
      },
      CardProps: { elevation: 2 },
      hover: true,
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {},
      CardContentProps: {
        children: <Typography component='p' style={{ fontWeight: 300 }}>
          Optimize industry policy and govern how stakeholders
          interact with each other.
        </Typography>
      },
      CardHeaderProps: {
        title: 'Legal & Corporate Affairs',
        titleTypographyProps: { variant: 'subheading' }
      },
      CardMediaProps: {
        image: '/images/legal-resized.jpg',
        style: { height: 140 }
      },
      CardProps: { elevation: 2 },
      hover: true,
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
  ]
};

export default {
  articles
};
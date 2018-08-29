import React from 'react';
import Link from 'react-router-dom/Link';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const slogan = <>
  <span style={{ color: '#ff4136', fontWeight: 400 }}>Find </span>
  a job you love,
  <span style={{ color: '#0074d9', fontWeight: 400 }}> create </span>
  the future you want,
  <span style={{ color: '#ffdc00', fontWeight: 400 }}> explore </span>
  your unique passion, and
  <span style={{ color: '#3d9970', fontWeight: 400 }}> empower </span>
  billions.
</>;

/**
 * Cards that follow this format:
 * {
 *   CardActionProps,
 *   CardContentProps,
 *   CardHeaderProps,
 *   CardMediaProps,
 *   CardProps,
 *   itemProps
 * }
 */
export const teams = {
  containerProps: {},
  items: [
    {
      CardActionsProps: {
        children: <Button
          color='primary'
          component={Link}
          size='small'
          to='/careers?team=engineering'>
          See Jobs
        </Button>
      },
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
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },{
      CardActionsProps: {
        children: <Button
          color='primary'
          component={Link}
          size='small'
          to='/careers?team=design'>
          See Jobs
        </Button>
      },
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
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {
        children: <>
          <Button
            color='primary'
            component={Link}
            size='small'
            to='/team/sales'>
            Learn more
          </Button>
          <Button
            color='primary'
            component={Link}
            size='small'
            to='/careers?team=sales'>
            See Jobs
          </Button>
        </>
      },
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
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {
        children: <Button
          color='primary'
          component={Link}
          size='small'
          to='/careers?team=management'>
          See Jobs
        </Button>
      },
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
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {
        children: <Button
          color='primary'
          component={Link}
          size='small'
          to='/careers?team=finance'>
          See Jobs
        </Button>
      },
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
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {
        children: <Button
          color='primary'
          component={Link}
          size='small'
          to='/careers?team=marketing'>
          See Jobs
        </Button>
      },
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
      itemProps: {
        md: 3,
        sm: 6,
        xl: 2,
        xs: 12
      }
    },
    {
      CardActionsProps: {
        children: <Button
          color='primary'
          component={Link}
          size='small'
          to='/careers?group=legal'>
          See Jobs
        </Button>
      },
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
  slogan,
  teams
};
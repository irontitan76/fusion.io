export const hero = {
  button1: {
    label: 'WHO WE ARE',
    path: '/about'
  },
  button2: {
    label: 'EXPLORE OUR ORGANIZATIONS',
    path: '/about/organizations'
  },
  icon: [ 'fal', 'atom-alt' ],
  subtitle: 'Optimizing business through intelligent design',
  title: 'FUSION'
};

export const logos = {
  items: [
    {
      icon: 'brain',
      label: 'A.I.',
      to: '/ai',
    },
    {
      icon: 'users',
      label: 'Consulting',
      to: '/consulting',
    },
    {
      icon: 'space-shuttle',
      label: 'Cosmos',
      to: '/cosmos',
    },
    {
      icon: 'solar-panel',
      label: 'Energy',
      to: '/energy',
    },
    {
      icon: 'credit-card-blank',
      label: 'Finance',
      to: '/finance',
    },
    {
      icon: 'dna',
      label: 'Health',
      to: '/health',
    },
    {
      icon: 'balance-scale',
      label: 'Legal',
      to: '/legal',
    },
    {
      icon: 'broadcast-tower',
      label: 'Media',
      to: '/media',
    },
    {
      icon: 'code',
      label: 'Technology',
      to: '/technology',
    },
    {
      icon: 'map-marked',
      label: 'Transport',
      to: '/transport',
    },
  ]
};

export const overview = {
  // subtitle: 'A solution portfolio that optimizes infrastructure and delivery',
  title: 'Together, We Accelerate Innovation',
  items: [
    {
      button: {
        label: 'About Us',
        path: '/about'
      },
      content: 'Fusion redefines operational efficiency with solutions that \
      transform. We are a team of innovative individuals who provide insights \
      and deliver solutions across varying verticals.',
      divider: true,
      icon: [ 'fal', 'user-tie' ],
      title: 'Who We Are',
    },
    {
      button: {
        label: 'Read more',
        path: '/insights'
      },
      content: 'Business outcomes must be built faster than ever before. Our \
      Insight Engine lets you discover end-to-end solutions and solve the \
      complexities of your digital enterprise.',
      divider: true,
      icon: [ 'fal', 'binoculars' ],
      title: 'Insights Engine',
    },
    {
      button: {
        label: 'Our Locations',
        path: '/contact'
      },
      content: 'Our Sales Team has vision and tactics for delivering optimal \
      solutions. They work closely to provide you with the best technology \
      and people possible.',
      divider: true,
      icon: [ 'fal', 'route' ],
      title: 'Contact Us',
    },
  ]
};

export const products = {
  subtitle: 'A solution portfolio that optimizes infrastructure and delivery',
  title: 'Solutions That Transform',
  items: [
    {
      image: {
        alt: 'design',
        src: './images/design2.jpg',
      },
      path: '/technology/products/1',
      size: {
        md: 4,
        sm: 6,
        xs: 12
      },
      subtitle: 'A React Component Library',
      title: 'Design System',
      variant: 'light',
    },
    {
      image: {
        alt: 'design',
        src: './images/isomorph.jpg',
      },
      path: '/technology/products/2',
      size: {
        md: 4,
        sm: 6,
        xs: 12
      },
      subtitle: 'A React Component Library',
      title: 'Isomorph.io',
      variant: 'light',
    },
    {
      image: {
        alt: 'team',
        src: './images/consult.jpg',
      },
      path: '/consulting/services',
      size: {
        md: 8,
        sm: 12,
        xs: 12
      },
      subtitle: 'Optimally Built Teams',
      title: 'Professional Services',
      variant: 'light',
    }
  ]
};
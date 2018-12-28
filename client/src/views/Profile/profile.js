export const userMenu = [
  {
    label: 'Dashboard',
    icon: ['fal', 'tachometer'],
    path: '/profile'
  },
  {
    label: 'Notifications',
    icon: ['fal', 'exclamation'],
    path: '/profile/notifications'
  },
  {
    label: 'Insights',
    icon: ['fal', 'file-alt'],
    path: '/profile/insights',
  },
];

export const adminMenu = [
  ...userMenu,
  {
    label: 'Careers',
    icon: ['fal', 'briefcase'],
    path: '/profile/careers',
  },
  {
    label: 'Policies',
    icon: ['fal', 'file-contract'],
    path: '/profile/policies',
  },
  {
    label: 'Standards',
    icon: ['fal', 'circle-notch'],
    path: '/profile/standards',
  },
  {
    label: 'Strategies',
    icon: ['fal', 'infinity'],
    path: '/profile/strategies',
  }
];

export const settingsMenu = [
  {
    label: 'Settings',
    icon: ['fal', 'cog'],
    path: '/profile/settings',
  },
];
export const userMenu = [
  {
    icon: ['fal', 'tachometer'],
    label: 'Dashboard',
    path: '/profile',
  },
  {
    icon: ['fal', 'exclamation'],
    label: 'Notifications',
    path: '/profile/notifications',
  },
  {
    icon: ['fal', 'file-alt'],
    label: 'Insights',
    path: '/profile/insights',
  },
];

export const adminMenu = [
  ...userMenu,
  {
    icon: ['fal', 'briefcase'],
    label: 'Careers',
    path: '/profile/careers',
  },
  {
    icon: ['fal', 'file-contract'],
    label: 'Policies',
    path: '/profile/policies',
  },
  {
    icon: ['fal', 'circle-notch'],
    label: 'Standards',
    path: '/profile/standards',
  },
  {
    icon: ['fal', 'infinity'],
    label: 'Strategies',
    path: '/profile/strategies',
  },
];

export const settingsMenu = [
  {
    icon: ['fal', 'cog'],
    label: 'Settings',
    path: '/profile/settings',
  },
];
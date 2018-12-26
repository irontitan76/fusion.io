export const userMenu = [
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
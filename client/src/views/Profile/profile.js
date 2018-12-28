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
    admin: true,
    label: 'Careers',
    icon: ['fal', 'briefcase'],
    path: '/profile/careers',
  },
  {
    admin: true,
    label: 'Policies',
    icon: ['fal', 'file-contract'],
    path: '/profile/policies',
  },
  {
    admin: true,
    label: 'Standards',
    icon: ['fal', 'circle-notch'],
    path: '/profile/standards',
  },
  {
    admin: true,
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
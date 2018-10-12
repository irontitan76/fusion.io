export const userMenu = [
  {
    label: 'Notifications',
    icon: ['fal', 'exclamation'],
    path: '/profile/notifications'
  },
  {
    label: 'Posts',
    icon: ['fal', 'scroll'],
    path: '/profile/posts',
  },
  {
    label: 'Settings',
    icon: ['fal', 'cog'],
    path: '/profile/settings',
  },
];

export const adminMenu = [
  ...userMenu,
];
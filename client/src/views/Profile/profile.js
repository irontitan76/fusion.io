export const userMenu = [
  {
    label: 'Notifications',
    icon: ['fal', 'exclamation'],
    path: '/profile/notifications'
  },
  {
    label: 'Posts',
    icon: ['fal', 'file-alt'],
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
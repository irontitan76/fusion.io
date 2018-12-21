export const title = 'Contact Us';
export const subtitle = 'Fill out the form below and we\'ll put you in contact\
 with one of our account representatives';

export const fields = [
  {
    label: 'Business Need',
    required: true,
    options: [
      {
        label: 'Consulting',
        value: 0,
      },
      {
        label: 'Technology',
        value: 1,
      },
      {
        label: 'Other',
        value: 2,
      },
    ],
    select: true,
    type: 'select'
  },
  {
    label: 'First Name',
    required: true,
    type: 'text',
  },
  {
    label: 'Last Name',
    required: true,
    type: 'text',
  },
  {
    label: 'Company',
    required: true,
    type: 'text',
  },
  {
    label: 'Role / Title',
    required: true,
    type: 'text',
  },
  {
    label: 'Email Address',
    required: true,
    type: 'email',
  },
  {
    label: 'Phone Number',
    required: false,
    type: 'text',
  },
  {
    label: 'Comments',
    multiline: true,
    required: false,
    rows: 10,
    type: 'text',
  }
];
export const rolesList = [
  {
    id: '1',
    name: 'Admin',
    description: 'Admin Role for root Tenant',
    permissions: [
      'Permissions.Dashboard.View',
      'Permissions.Users.View',
      'Permissions.Users.Search',
      'Permissions.Users.Create',
      'Permissions.Users.Update',
      'Permissions.Users.Delete',
    ],
  },
  {
    id: '2',
    name: 'Basic',
    description: 'Basic Role for root Tenant',
    permissions: [
      'Permissions.Dashboard.View',
      'Permissions.Users.View',
      'Permissions.Users.Search',
      'Permissions.Users.Create',
      'Permissions.Users.Update',
      'Permissions.Users.Delete',
    ],
  },
];
export const permissionList = [
  'Permissions.Dashboard.View',
  'Permissions.Hangfire.View',
  'Permissions.Users.View',
  'Permissions.Users.Search',
  'Permissions.Users.Create',
  'Permissions.Users.Update',
  'Permissions.Users.Delete',
  'Permissions.Users.Export',
  'Permissions.UserRoles.View',
  'Permissions.UserRoles.Update',
  'Permissions.Roles.View',
  'Permissions.Roles.Create',
  'Permissions.Roles.Update',
];
export const permissionsList = [
  {
    id: 1,
    name: 'Dashboard',
    create: false,
    view: true,
    update: false,
    search: true,
    delete: false,
    export: true,
    approve: false,
  },
  {
    id: 2,
    name: 'Users',
    create: true,
    view: true,
    update: true,
    search: true,
    delete: true,
    export: true,
    approve: true,
  },
  {
    id: 3,
    name: 'Department',
    create: true,
    view: true,
    update: true,
    search: true,
    delete: true,
    export: true,
    approve: false,
  },
  {
    id: 4,
    name: 'Subsidiaries',
    create: true,
    view: true,
    update: true,
    search: true,
    delete: true,
    export: true,
    approve: false,
  },
  {
    id: 5,
    name: 'Sections',
    create: true,
    view: true,
    update: true,
    search: true,
    delete: true,
    export: true,
    approve: false,
  },
  {
    id: 6,
    name: 'Sub-Sections',
    create: true,
    view: true,
    update: true,
    search: true,
    delete: true,
    export: true,
    approve: false,
  },
  {
    id: 7,
    name: 'Risk-Parameters',
    create: true,
    view: true,
    update: true,
    search: true,
    delete: true,
    export: true,
    approve: false,
  },
  {
    id: 8,
    name: 'Risk-Universe',
    create: true,
    view: true,
    update: true,
    search: true,
    delete: true,
    export: true,
    approve: true,
  },
  {
    id: 9,
    name: 'Incident-Management',
    create: true,
    view: true,
    update: true,
    search: true,
    delete: true,
    export: true,
    approve: true,
  },
];

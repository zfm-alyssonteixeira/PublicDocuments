import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docusite/markdown-page',
    component: ComponentCreator('/Docusite/markdown-page', '1e5'),
    exact: true
  },
  {
    path: '/Docusite/docs',
    component: ComponentCreator('/Docusite/docs', '71e'),
    routes: [
      {
        path: '/Docusite/docs/api/Activity-Logging',
        component: ComponentCreator('/Docusite/docs/api/Activity-Logging', '3a7'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/Docusite/docs/api/API-Documentation',
        component: ComponentCreator('/Docusite/docs/api/API-Documentation', 'c67'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/Docusite/docs/api/lessons-learned/Composer-package-remove',
        component: ComponentCreator('/Docusite/docs/api/lessons-learned/Composer-package-remove', 'a99'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/Docusite/docs/api/lessons-learned/Composer-package-update',
        component: ComponentCreator('/Docusite/docs/api/lessons-learned/Composer-package-update', '9f9'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/Docusite/docs/api/Testing',
        component: ComponentCreator('/Docusite/docs/api/Testing', '875'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/Docusite/docs/frontend/Project-structure',
        component: ComponentCreator('/Docusite/docs/frontend/Project-structure', '421'),
        exact: true,
        sidebar: "frontendSidebar"
      },
      {
        path: '/Docusite/docs/general/Conventions/Commits',
        component: ComponentCreator('/Docusite/docs/general/Conventions/Commits', '262'),
        exact: true,
        sidebar: "generalSidebar"
      },
      {
        path: '/Docusite/docs/general/Conventions/Functions',
        component: ComponentCreator('/Docusite/docs/general/Conventions/Functions', 'c7b'),
        exact: true,
        sidebar: "generalSidebar"
      },
      {
        path: '/Docusite/docs/general/Conventions/Naming',
        component: ComponentCreator('/Docusite/docs/general/Conventions/Naming', 'aad'),
        exact: true,
        sidebar: "generalSidebar"
      },
      {
        path: '/Docusite/docs/general/Conventions/Routes',
        component: ComponentCreator('/Docusite/docs/general/Conventions/Routes', '46d'),
        exact: true,
        sidebar: "generalSidebar"
      },
      {
        path: '/Docusite/docs/general/Workflow',
        component: ComponentCreator('/Docusite/docs/general/Workflow', '0d3'),
        exact: true,
        sidebar: "generalSidebar"
      },
      {
        path: '/Docusite/docs/intro',
        component: ComponentCreator('/Docusite/docs/intro', 'a13'),
        exact: true
      }
    ]
  },
  {
    path: '/Docusite/',
    component: ComponentCreator('/Docusite/', '4f3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

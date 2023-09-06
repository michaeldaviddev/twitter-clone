import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then( m => m.HomePage)
      },
      {
        path: 'explore',
        loadComponent: () =>
          import('./explore/explore.page').then( m => m.ExplorePage)
      },
      {
        path: 'communities',
        loadComponent: () =>
          import('./communities/communities.page').then( m => m.CommunitiesPage)
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications.page').then( m => m.NotificationsPage)
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./messages/messages.page').then( m => m.MessagesPage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  }
];

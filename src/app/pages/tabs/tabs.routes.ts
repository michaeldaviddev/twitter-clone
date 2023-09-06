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
        path: 'tab1',
        loadComponent: () =>
          import('../../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../../tab3/tab3.page').then((m) => m.Tab3Page),
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

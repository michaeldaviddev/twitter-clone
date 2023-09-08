import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  public appPages = [
    { title: 'Profile', url: '/', icon: 'person' },
    { title: 'Premium', url: '/folder/outbox', icon: 'person' },
    { title: 'Bookmarks', url: '/folder/favorites', icon: 'bookmark' },
    { title: 'Lists', url: '/folder/archived', icon: 'reader' },
    { title: 'Spaces', url: '/folder/trash', icon: 'mic' },
    { title: 'Monetization', url: '/folder/spam', icon: 'cash' },
  ];

  constructor() {}
}

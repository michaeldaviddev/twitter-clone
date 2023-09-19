import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  prefersDark!: MediaQueryList;

  posts: Post[] = [
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/467.jpg',
        username: 'user123'
      },
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      created_at: '1h'
    },
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/608.jpg',
        username: 'jane_doe'
      },
      caption: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      created_at: '2h'
    },
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/109.jpg',
        username: 'alex_smith'
      },
      caption: 'Sed eget ipsum in libero facilisis tincidunt.',
      created_at: '3h'
    },
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/896.jpg',
        username: 'user456'
      },
      caption: 'Nulla facilisi. Vivamus a varius justo.',
      created_at: '4h'
    },
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1128.jpg',
        username: 'michael_johnson'
      },
      caption: 'Aenean tincidunt odio nec libero interdum, eu lacinia justo ultricies.',
      created_at: '5h'
    },
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/495.jpg',
        username: 'user789'
      },
      caption: 'Etiam eu urna eget dolor malesuada luctus a eu tortor.',
      created_at: '6h'
    },
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/704.jpg',
        username: 'emma_williams'
      },
      caption: 'Suspendisse ut est at enim malesuada pharetra nec vel nisi.',
      created_at: '7h'
    },
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/383.jpg',
        username: 'user101112'
      },
      caption: 'Maecenas tincidunt dolor in lectus convallis, in suscipit mauris consequat.',
      created_at: '8h'
    },
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/513.jpg',
        username: 'olivia_jones'
      },
      caption: 'Vestibulum ut orci at est mattis laoreet.',
      created_at: '9h'
    },
    {
      user: {
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/361.jpg',
        username: 'user131415'
      },
      caption: 'Nam feugiat libero eu metus gravida aliquet.',
      created_at: '10h'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  }

}

import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIconComponent, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'Home',
      icon: 'home',
      link: '',
    },
    {
      label: 'Chat',
      icon: 'chat',
      link: '',
    },
    {
      label: 'Search',
      icon: 'search',
      link: '',
    },
  ];
}

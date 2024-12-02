import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [RouterModule, CommonModule], // Add CommonModule
})
export class NavigationComponent {
  menuItems = [
    {
      name: 'Home',
      path: '',
      children: [],
    },
    {
      name: 'HTML',
      children: [
        { name: 'HTML Notes', path: '/html-notes' },
        { name: 'HTML Code Notes', path: '/html-code-notes' },
      ],
    },
    {
      name: 'CSS',
      children: [
        { name: 'CSS Notes', path: '/css-notes' },
        { name: 'CSS Code Notes', path: '/css-code-notes' },
      ],
    },
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

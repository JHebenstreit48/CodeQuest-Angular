import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-navigation',
  standalone: true,  // Ensure this component is standalone
  imports: [CommonModule, RouterModule],  // Import CommonModule and RouterModule
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isMenuOpen = false;
  menuItems = [
    { name: 'Home', path: '/' },
    { name: 'HTML', children: [{ name: 'HTML Notes', path: '/html-notes' }, { name: 'HTML Code Notes', path: '/html-code-notes' }] },
    { name: 'CSS', children: [{ name: 'CSS Notes', path: '/css-notes' }, { name: 'CSS Code Notes', path: '/css-code-notes' }] },
    // Add more items as needed
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import pages from '@/Navigation-Structure/Pages';
import { Subpage } from '@/Navigation-Structure/NavigationTypes';

import { SearchIconComponent } from '@components/NavigationUI/search-icon/search-icon.component';
import { SearchModalComponent } from '@components/NavigationUI/search-modal/search-modal.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchIconComponent,
    SearchModalComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // ✅ Bind imported pages to class
  pages = pages;

  activeDropdown: Set<string> = new Set();
  isMenuOpen = false;
  searchTerm = '';
  searchResults: { name: string; path: string; breadcrumbs: string[] }[] = [];
  showModal = false;
  searchMode: 'instant' | 'manual' =
    (localStorage.getItem('searchMode') as 'instant' | 'manual') || 'instant';

  constructor() {
    const savedTerm = localStorage.getItem('lastSearchTerm') || '';
    const savedResults = localStorage.getItem('lastSearchResults');
    this.searchTerm = savedTerm;
    this.searchResults = savedResults ? JSON.parse(savedResults) : [];
  }

  toggleDropdown(key: string): void {
    if (this.activeDropdown.has(key)) {
      this.activeDropdown.delete(key);
    } else {
      this.activeDropdown.add(key);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleSearch(value: string): void {
    const results: { name: string; path: string; breadcrumbs: string[] }[] = [];

    this.pages.forEach((page) => {
      results.push(...this.searchSubpages(page.subpages, value, [page.name]));
    });

    this.searchResults = results;
    localStorage.setItem('lastSearchTerm', value);
    localStorage.setItem('lastSearchResults', JSON.stringify(results));
  }

  private searchSubpages(
    subpages: Subpage[],
    term: string,
    breadcrumbs: string[] = []
  ): { name: string; path: string; breadcrumbs: string[] }[] {
    const lowerTerm = term.toLowerCase().trim();

    return subpages.flatMap((sp) => {
      const trail = [...breadcrumbs, sp.name];
      const match = sp.name.toLowerCase().includes(lowerTerm) && !!sp.path;

      const children = sp.subpages ? this.searchSubpages(sp.subpages, term, trail) : [];

      return [
        ...(match ? [{ name: sp.name, path: sp.path!, breadcrumbs }] : []),
        ...children
      ];
    });
  }
}

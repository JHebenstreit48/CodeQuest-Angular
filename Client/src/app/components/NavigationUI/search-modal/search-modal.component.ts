import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Add this line

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule // ✅ Add this to imports
  ],
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent {
  @Input() searchTerm: string = '';
  @Input() searchResults: { name: string; path: string; breadcrumbs: string[] }[] = [];
  @Input() searchMode: 'instant' | 'manual' = 'instant';

  @Output() close = new EventEmitter<void>();
  @Output() manualSearch = new EventEmitter<string>();

  inputValue: string = '';
  hasSearched = false;

  ngOnInit(): void {
    this.inputValue = this.searchTerm;
    this.hasSearched = !!this.searchTerm;
  }

  ngOnChanges(): void {
    this.inputValue = this.searchTerm;
  }

  onChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.inputValue = value;
    if (this.searchMode === 'manual') this.hasSearched = false;

    if (this.searchMode === 'instant' && value.trim()) {
      this.manualSearch.emit(value);
      this.hasSearched = true;
    }
  }

  onKeydown(e: KeyboardEvent): void {
    if (this.searchMode === 'manual' && e.key === 'Enter') {
      this.manualSearch.emit(this.inputValue);
      this.hasSearched = true;
    }
  }

  clearSearch(): void {
    this.inputValue = '';
    this.hasSearched = false;
  }

  resetStorage(): void {
    localStorage.removeItem('lastSearchTerm');
    localStorage.removeItem('lastSearchResults');
    this.clearSearch();
    this.searchTerm = '';
  }

  setMode(mode: 'instant' | 'manual'): void {
    this.searchMode = mode;
    localStorage.setItem('searchMode', mode);
  }
}

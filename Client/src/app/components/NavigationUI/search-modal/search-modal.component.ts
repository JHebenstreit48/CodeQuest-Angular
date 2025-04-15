import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  standalone: true,
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent {
  @Input() searchTerm = '';
  @Input() searchResults: { name: string; path: string; breadcrumbs: string[] }[] = [];
  @Input() searchMode: 'instant' | 'manual' = 'instant';

  @Output() close = new EventEmitter<void>();
  @Output() manualSearch = new EventEmitter<string>();

  inputValue = this.searchTerm;

  clearSearch(): void {
    this.inputValue = '';
    this.manualSearch.emit('');
  }

  toggleMode(mode: 'instant' | 'manual'): void {
    localStorage.setItem('searchMode', mode);
    this.searchMode = mode;
  }

  triggerSearch(): void {
    this.manualSearch.emit(this.inputValue);
  }

  resetStorage(): void {
    localStorage.removeItem('lastSearchTerm');
    localStorage.removeItem('lastSearchResults');
    this.clearSearch();
  }
}

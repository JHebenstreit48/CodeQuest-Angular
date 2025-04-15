import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-icon',
  standalone: true,
  template: `
    <div class="searchIconContainer">
      <button class="searchIconButton" (click)="onClick.emit()" aria-label="Open Search">
        🔍
      </button>
    </div>
  `,
  styleUrls: ['./search-icon.component.scss']
})
export class SearchIconComponent {
  @Output() onClick = new EventEmitter<void>();
}

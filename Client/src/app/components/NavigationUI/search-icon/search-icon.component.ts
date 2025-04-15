import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-icon',
  standalone: true,
  template: `
    <div class="searchIconContainer">
      <button class="searchIconButton" (click)="onClick.emit()" aria-label="Open Search">
        <svg class="searchIconSvg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path d="M10,2A8,8 0 0,1 18,10C18,11.85 17.2,13.55 15.9,14.78L22,20.88L20.59,22.29L14.5,16.21C13.27,17.2 11.7,17.79 10,17.79A8,8 0 0,1 10,2M10,4A6,6 0 0,0 4,10A6,6 0 0,0 10,16A6,6 0 0,0 16,10A6,6 0 0,0 10,4Z"/>
        </svg>
      </button>
    </div>
  `,
  styleUrls: ['./search-icon.component.scss']
})
export class SearchIconComponent {
  @Output() onClick = new EventEmitter<void>();
}

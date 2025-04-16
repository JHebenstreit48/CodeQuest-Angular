import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { BackToTopComponent } from '@/components/NotesPagesRendering/back-to-top/back-to-top.component';
import Prism from 'prismjs';

@Component({
  selector: 'app-notes-render',
  standalone: true,
  imports: [CommonModule, MarkdownModule, BackToTopComponent],
  templateUrl: './notes-render.component.html'
})
export class NotesRenderComponent implements OnInit {
  @Input() filePath!: string;
  @Input() markdownContent?: string;

  content: string = '';
  copiedCode = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.filePath) {
      this.http.get(this.filePath, { responseType: 'text' }).subscribe({
        next: (res) => {
          this.content = res;
          Prism.highlightAll(); // ✅ Manual syntax highlighting trigger
        },
        error: (err) => console.error('Error loading Markdown:', err)
      });
    }
  }

  copyToClipboard(code: string): void {
    navigator.clipboard.writeText(code);
    this.copiedCode = true;
    setTimeout(() => (this.copiedCode = false), 2000);
  }
}

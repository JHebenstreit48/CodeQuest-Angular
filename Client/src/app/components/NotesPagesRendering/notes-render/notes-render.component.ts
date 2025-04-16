import { Component, Input, OnInit } from '@angular/core';
import { gql } from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { BackToTopComponent } from '@/components/NotesPagesRendering/back-to-top/back-to-top.component';
import Prism from 'prismjs';

const GET_MARKDOWN = gql`
  query GetMarkdown($path: String!) {
    getMarkdown(path: $path)
  }
`;

@Component({
  selector: 'app-notes-render',
  standalone: true,
  imports: [CommonModule, MarkdownModule, BackToTopComponent],
  templateUrl: './notes-render.component.html',
  styleUrls: ['./notes-render.component.scss']
})
export class NotesRenderComponent implements OnInit {
  @Input() filePath!: string;
  @Input() markdownContent?: string;

  content: string = '';
  copiedCode = false;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    if (!this.filePath) return;

    this.apollo.watchQuery({
      query: GET_MARKDOWN,
      variables: { path: this.filePath }
    }).valueChanges.subscribe({
      next: ({ data, loading }: any) => {
        this.content = data.getMarkdown;
        this.loading = loading;
        Prism.highlightAll(); // ✅ syntax highlighting after markdown loads
      },
      error: (err) => {
        this.loading = false;
        this.error = err;
        console.error('GraphQL Markdown Error:', err);
      }
    });
  }

  copyToClipboard(code: string): void {
    navigator.clipboard.writeText(code);
    this.copiedCode = true;
    setTimeout(() => (this.copiedCode = false), 2000);
  }
}

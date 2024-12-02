import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-html-notes',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss'],
})
export class HtmlComponent implements OnInit {
  markdownContent: string = '';

  constructor(private http: HttpClient) {} // Inject the HttpClient

  ngOnInit(): void {
    // Fetch Markdown file from the assets folder
    this.http
      .get('assets/markdown/notes.md', { responseType: 'text' })
      .subscribe((data) => {
        this.markdownContent = data;
      });
  }
}

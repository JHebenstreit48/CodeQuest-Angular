import { Routes } from '@angular/router';
import { HtmlComponent } from './components/htmlNotes/html.component'; // HTML Notes
// import { HtmlCodeComponent } from './components/htmlCode/html-code.component'; // HTML Code Notes

export const routes: Routes = [
  { path: '', component: HtmlComponent }, // Home
  { path: 'html-notes', component: HtmlComponent },
  // { path: 'html-code-notes', component: HtmlCodeComponent },
  { path: 'css-notes', component: HtmlComponent }, // Example for CSS
  { path: 'css-code-notes', component: HtmlComponent },
];

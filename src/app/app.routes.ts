import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HtmlComponent } from './components/htmlNotes/html.component';
import { HtmlCodeNotesComponent } from './components/html-code-notes/html-code-notes.component';
import { CSSNotesComponent } from './components/css-notes/css-notes.component';
// import { CssCodeComponent } from './components/cssCode/css-code.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (Home)
  { path: 'html-notes', component: HtmlComponent },
  { path: 'html-code-notes', component: HtmlCodeNotesComponent },
  { path: 'css-notes', component: CSSNotesComponent },
  // { path: 'css-code-notes', component: CssCodeComponent },
];

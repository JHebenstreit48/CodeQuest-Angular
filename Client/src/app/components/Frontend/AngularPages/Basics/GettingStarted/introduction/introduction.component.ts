import { Component } from '@angular/core';
import { HeaderComponent } from '@/components/Header/header.component';
import { NotesRenderComponent } from '@/components/NotesPagesRendering/notes-render/notes-render.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [HeaderComponent, NotesRenderComponent], // ✅ Import standalone components
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent {
  markdownFilePath = '/FrontEnd/AngularNotes/AngularBasics/GettingStarted/Introduction.md';
}

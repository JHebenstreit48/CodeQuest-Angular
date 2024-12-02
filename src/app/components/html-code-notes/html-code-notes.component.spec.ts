import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCodeNotesComponent } from './html-code-notes.component';

describe('HtmlCodeNotesComponent', () => {
  let component: HtmlCodeNotesComponent;
  let fixture: ComponentFixture<HtmlCodeNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCodeNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCodeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

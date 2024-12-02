import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssNotesComponent } from './css-notes.component';

describe('CssNotesComponent', () => {
  let component: CssNotesComponent;
  let fixture: ComponentFixture<CssNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

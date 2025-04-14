import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathAliasesComponent } from './path-aliases.component';

describe('PathAliasesComponent', () => {
  let component: PathAliasesComponent;
  let fixture: ComponentFixture<PathAliasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathAliasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathAliasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

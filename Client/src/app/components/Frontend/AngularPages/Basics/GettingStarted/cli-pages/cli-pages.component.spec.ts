import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliPagesComponent } from './cli-pages.component';

describe('CliPagesComponent', () => {
  let component: CliPagesComponent;
  let fixture: ComponentFixture<CliPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

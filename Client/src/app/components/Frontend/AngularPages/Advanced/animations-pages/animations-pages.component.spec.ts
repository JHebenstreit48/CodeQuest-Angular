import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsPagesComponent } from './animations-pages.component';

describe('AnimationsComponent', () => {
  let component: AnimationsPagesComponent;
  let fixture: ComponentFixture<AnimationsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

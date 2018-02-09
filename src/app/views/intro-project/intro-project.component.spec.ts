import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroProjectComponent } from './intro-project.component';

describe('IntroProjectComponent', () => {
  let component: IntroProjectComponent;
  let fixture: ComponentFixture<IntroProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

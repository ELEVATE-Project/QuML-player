import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderQuestionComponent } from './slider-question.component';

describe('SliderQuestionComponent', () => {
  let component: SliderQuestionComponent;
  let fixture: ComponentFixture<SliderQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

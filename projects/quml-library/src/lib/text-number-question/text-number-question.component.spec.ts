import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNumberQuestionComponent } from './text-number-question.component';

describe('TextNumberQuestionComponent', () => {
  let component: TextNumberQuestionComponent;
  let fixture: ComponentFixture<TextNumberQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextNumberQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextNumberQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

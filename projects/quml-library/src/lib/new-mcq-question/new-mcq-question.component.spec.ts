import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMcqQuestionComponent } from './new-mcq-question.component';

describe('NewMcqQuestionComponent', () => {
  let component: NewMcqQuestionComponent;
  let fixture: ComponentFixture<NewMcqQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMcqQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMcqQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

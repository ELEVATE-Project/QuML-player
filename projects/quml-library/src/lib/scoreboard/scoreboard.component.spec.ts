import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SafeHtmlPipe } from '../pipes/safe-html/safe-html.pipe';

import { ScoreboardComponent } from './scoreboard.component';

describe('ScoreboardComponent', () => {
  let component: ScoreboardComponent;
  let fixture: ComponentFixture<ScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreboardComponent, SafeHtmlPipe],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the component', () => {
    spyOn(component.scoreBoardLoaded, 'emit');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    spyOn(event, 'stopPropagation');
    document.dispatchEvent(event);
    component.ngOnInit();
    expect(component.scoreBoardLoaded.emit).toHaveBeenCalledWith({ scoreBoardLoaded: true });
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should emit the event with question number', () => {
    spyOn(component.emitQuestionNo, 'emit');
    component.goToQuestion(1, 'do_121212');
    expect(component.emitQuestionNo.emit).toHaveBeenCalledWith({ questionNo: 1, identifier: 'do_121212' });
  });

  it('should clean up the subscription', () => {
    component.subscription = of(1, 2, 3).subscribe();
    spyOn(component.subscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });
});

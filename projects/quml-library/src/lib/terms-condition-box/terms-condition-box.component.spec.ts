import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionBoxComponent } from './terms-condition-box.component';

describe('TermsConditionBoxComponent', () => {
  let component: TermsConditionBoxComponent;
  let fixture: ComponentFixture<TermsConditionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsConditionBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsConditionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRemarksComponent } from './show-remarks.component';

describe('ShowRemarksComponent', () => {
  let component: ShowRemarksComponent;
  let fixture: ComponentFixture<ShowRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

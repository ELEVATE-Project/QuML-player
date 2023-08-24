import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRemarkComponent } from './show-remark.component';

describe('ShowRemarkComponent', () => {
  let component: ShowRemarkComponent;
  let fixture: ComponentFixture<ShowRemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRemarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

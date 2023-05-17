import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PJModalComponent } from './pjmodal.component';

describe('PJModalComponent', () => {
  let component: PJModalComponent;
  let fixture: ComponentFixture<PJModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PJModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PJModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

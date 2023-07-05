import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingWebsiteComponent } from './gaming-website.component';

describe('GamingWebsiteComponent', () => {
  let component: GamingWebsiteComponent;
  let fixture: ComponentFixture<GamingWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

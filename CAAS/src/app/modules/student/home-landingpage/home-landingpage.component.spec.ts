import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingpageComponent } from './home-landingpage.component';

describe('HomeLandingpageComponent', () => {
  let component: HomeLandingpageComponent;
  let fixture: ComponentFixture<HomeLandingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLandingpageComponent]
    });
    fixture = TestBed.createComponent(HomeLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

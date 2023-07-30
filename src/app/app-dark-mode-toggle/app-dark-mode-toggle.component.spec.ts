import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDarkModeToggleComponent } from './app-dark-mode-toggle.component';

describe('AppDarkModeToggleComponent', () => {
  let component: AppDarkModeToggleComponent;
  let fixture: ComponentFixture<AppDarkModeToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDarkModeToggleComponent]
    });
    fixture = TestBed.createComponent(AppDarkModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

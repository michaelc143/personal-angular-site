import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppDarkModeToggleComponent } from './app-dark-mode-toggle/app-dark-mode-toggle.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule(
      {
        imports: [
          RouterTestingModule,
          MatCardModule,
          MatIconModule,
          MatSlideToggleModule
        ], 
        declarations: [
          AppComponent,
          AppDarkModeToggleComponent
        ]
      }
    )
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'personal-angular-site'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('personal-angular-site');
  });

  it('should generate the toolbar', () => {
    expect(fixture.debugElement.query(By.css('.toolbar'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-app-dark-mode-toggle'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.linkedin-logo'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.experience-div'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.skills-div'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.github-link'))).toBeTruthy();
  });

  it('should generate the current page', () => {
    expect(fixture.debugElement.query(By.css('router-outlet'))).toBeTruthy();
  });

  it('should generate the home button', () => {
    expect(fixture.debugElement.query(By.css('.homeBtn'))).toBeTruthy();
  });

  it('should generate the footer waves', () => {
    expect(fixture.debugElement.query(By.css('.footer-waves'))).toBeTruthy();
  });
});

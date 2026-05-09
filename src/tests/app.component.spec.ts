import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { AppDarkModeToggleComponent } from 'src/app/app-dark-mode-toggle/app-dark-mode-toggle.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        imports: [
          RouterTestingModule,
          MatCardModule,
          MatIconModule,
          MatSlideToggleModule,
          MatButtonModule,
          MatMenuModule,
          MatTooltipModule,
          MatRippleModule
        ], 
        declarations: [
          AppComponent,
          AppDarkModeToggleComponent
        ]
      }
    ).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'personal-angular-site'`, () => {
    expect(component.title).toEqual('personal-angular-site');
  });

  it('should generate the toolbar', () => {
    expect(fixture.debugElement.query(By.css('.toolbar'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-app-dark-mode-toggle'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.linkedin-logo'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.menu-btn'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.github-link'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.toolbar-name'))).toBeTruthy();
  });

  it('should render a router outlet', () => {
    expect(fixture.debugElement.query(By.css('router-outlet'))).toBeTruthy();
  });

  it('should render the home button', () => {
    const button = fixture.debugElement.query(By.css('.homeBtn'));
    expect(button).toBeTruthy();
    expect(button.attributes['routerLink']).toBe('');
  });
});

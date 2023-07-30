import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppDarkModeToggleComponent } from './app-dark-mode-toggle/app-dark-mode-toggle.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ComponentFixture } from '@angular/core/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule(
      {
        imports: [RouterTestingModule, MatCardModule, MatIconModule], 
        declarations: [AppComponent,AppDarkModeToggleComponent]
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
});

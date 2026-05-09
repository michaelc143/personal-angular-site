import { AppDarkModeToggleComponent } from "src/app/app-dark-mode-toggle/app-dark-mode-toggle.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BehaviorSubject, Observable } from 'rxjs';
import { DarkModeService } from 'angular-dark-mode';

class MockDarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();
  toggle = jasmine.createSpy('toggle');
}

describe('DarkModeComponent', () => {
  let component: AppDarkModeToggleComponent;
  let fixture: ComponentFixture<AppDarkModeToggleComponent>;
  let mockService: MockDarkModeService;

  beforeEach(async () => {
    mockService = new MockDarkModeService();

    await TestBed.configureTestingModule({
      declarations: [AppDarkModeToggleComponent],
      imports: [MatIconModule, MatButtonModule, MatTooltipModule],
      providers: [{ provide: DarkModeService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(AppDarkModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the toggle button', () => {
    expect(fixture.nativeElement.querySelector('button')).toBeTruthy();
  });

  it('should call toggle when the button is clicked', () => {
    fixture.nativeElement.querySelector('button').click();
    expect(mockService.toggle).toHaveBeenCalled();
  });
});
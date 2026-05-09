import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ProjectsPageComponent } from 'src/app/projects-page/projects-page.component';
import { By } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('ProjectsPageComponent', () => {
  let component: ProjectsPageComponent;
  let fixture: ComponentFixture<ProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsPageComponent],
      imports: [MatCardModule, MatExpansionModule, BrowserAnimationsModule, MatTooltipModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page title', () => {
    expect(fixture.nativeElement.querySelector('.projects-title')).toBeTruthy();
  });

  it('should render seven project cards', () => {
    expect(fixture.debugElement.queryAll(By.css('mat-card')).length).toEqual(7);
  });

  it('should render the BorbChat project card', () => {
    expect(fixture.nativeElement.querySelector('.borb-links')).toBeTruthy();
  });

  it('should render the WebApp Template card and title', () => {
    expect(component.appTemplateTitle).toBe('WebApp Template');
    expect(fixture.nativeElement.querySelector('.template-links')).toBeTruthy();
  });

  it('should render the Euchre project card and title', () => {
    expect(component.euchreTitle).toBe('Euchre Card Engine');
    expect(fixture.nativeElement.querySelector('.euchre-links')).toBeTruthy();
  });

  it('should render the BasketballReference project card and title', () => {
    expect(component.bballTitle).toBe('BasketballReference Python Package');
    expect(fixture.nativeElement.querySelector('.bball-links')).toBeTruthy();
  });

  it('should render the React resume project card and title', () => {
    expect(component.reactTitle).toBe('Personal Resume Site in React');
    expect(fixture.nativeElement.querySelector('.react-links')).toBeTruthy();
  });

  it('should render the employee payroll project card', () => {
    expect(fixture.nativeElement.querySelector('.api-links')).toBeTruthy();
    expect(component.employeeTitle).toBe('Employee Payroll App');
  });

  it('should render the machine learning project card', () => {
    expect(component.machineLearningTitle).toBe('Clean/Dirty Roads Machine Learning Model');
    expect(fixture.nativeElement.querySelector('.machine-learning-links')).toBeTruthy();
  });
});

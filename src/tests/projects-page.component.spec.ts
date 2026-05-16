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

  // --- Page structure ---

  it('should render the page title', () => {
    expect(fixture.nativeElement.querySelector('.projects-title')).toBeTruthy();
  });

  it('should render five project cards', () => {
    expect(fixture.debugElement.queryAll(By.css('mat-card')).length).toEqual(5);
  });

  // --- Project titles (data integrity) ---

  it('should have correct WebApp Template title', () => {
    expect(component.appTemplateTitle).toBe('Enterprise-Scale Architecture Kit');
  });

  it('should have correct Euchre title', () => {
    expect(component.euchreTitle).toBe('Real-Time Game Logic Engine');
  });

  it('should have correct BasketballReference title', () => {
    expect(component.bballTitle).toBe('Automated Data Extraction Pipeline');
  });

  it('should have correct Employee Payroll title', () => {
    expect(component.employeeTitle).toBe('Full-Stack ERP Human Capital API');
  });

  it('should have correct Machine Learning title', () => {
    expect(component.machineLearningTitle).toBe('AI Road Condition Classifier');
  });

  // --- Project link sections (DOM presence) ---

  it('should render the WebApp Template link section', () => {
    expect(fixture.nativeElement.querySelector('.template-links')).toBeTruthy();
  });

  it('should render the Euchre link section', () => {
    expect(fixture.nativeElement.querySelector('.euchre-links')).toBeTruthy();
  });

  it('should render the BasketballReference link section', () => {
    expect(fixture.nativeElement.querySelector('.bball-links')).toBeTruthy();
  });

  it('should render the Employee Payroll link section', () => {
    expect(fixture.nativeElement.querySelector('.api-links')).toBeTruthy();
  });

  it('should render the Machine Learning link section', () => {
    expect(fixture.nativeElement.querySelector('.machine-learning-links')).toBeTruthy();
  });

  // --- Links open in new tab ---

  it('should have all project link section anchors open in a new tab', () => {
    const linkSections = ['.template-links', '.euchre-links', '.bball-links', '.api-links', '.machine-learning-links'];
    linkSections.forEach(selector => {
      const section = fixture.nativeElement.querySelector(selector);
      if (section) {
        const anchors: NodeListOf<HTMLAnchorElement> = section.querySelectorAll('a[href^="https"]');
        anchors.forEach((link) => {
          expect(link.target).toBe('_blank');
        });
      }
    });
  });
});

import { MatChipsModule } from "@angular/material/chips";
import { ExperiencePageComponent } from "src/app/experience-page/experience-page.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from "@angular/material/divider";
import { By } from "@angular/platform-browser";
import { DarkModeService } from 'angular-dark-mode';
import { of } from 'rxjs';

const darkModeServiceMock = { darkMode$: of(false) };

describe('ExperiencePageComponent', () => {
  let component: ExperiencePageComponent;
  let fixture: ComponentFixture<ExperiencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperiencePageComponent],
      imports: [MatChipsModule, MatDividerModule],
      providers: [{ provide: DarkModeService, useValue: darkModeServiceMock }]
    }).compileComponents();
    fixture = TestBed.createComponent(ExperiencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // --- Section headings ---

  it('should render an Experience h1 heading', () => {
    const headings = fixture.debugElement.queryAll(By.css('h1'));
    const experienceHeading = headings.find(h =>
      (h.nativeElement as HTMLElement).textContent?.trim() === 'Experience'
    );
    expect(experienceHeading).toBeTruthy();
  });

  it('should render a Skills h1 heading', () => {
    const headings = fixture.debugElement.queryAll(By.css('h1'));
    const skillsHeading = headings.find(h =>
      (h.nativeElement as HTMLElement).textContent?.trim() === 'Skills'
    );
    expect(skillsHeading).toBeTruthy();
  });

  // --- Jobs ---

  it('should render the correct number of job cards', () => {
    expect(fixture.debugElement.queryAll(By.css('.job-card')).length).toBe(component.jobs.length);
  });

  it('should render each job role and company', () => {
    component.jobs.forEach(job => {
      const roles = fixture.debugElement.queryAll(By.css('.job-role'));
      const companies = fixture.debugElement.queryAll(By.css('.job-company'));
      const roleTexts = roles.map(r => (r.nativeElement as HTMLElement).textContent?.trim());
      const companyTexts = companies.map(c => (c.nativeElement as HTMLElement).textContent?.trim());
      expect(roleTexts).toContain(job.role);
      expect(companyTexts).toContain(job.company);
    });
  });

  it('should render each job date range', () => {
    component.jobs.forEach(job => {
      const dates = fixture.debugElement.queryAll(By.css('.job-date'));
      const dateTexts = dates.map(d => (d.nativeElement as HTMLElement).textContent?.trim());
      expect(dateTexts).toContain(job.dateRange);
    });
  });

  it('should render bullet points for every job', () => {
    const cards = fixture.debugElement.queryAll(By.css('.job-card'));
    cards.forEach(card => {
      const bullets = card.queryAll(By.css('li'));
      expect(bullets.length).toBeGreaterThan(0);
    });
  });

  it('should have the current Esker role as the first job', () => {
    expect(component.jobs[0].role).toBe('Development Consultant');
    expect(component.jobs[0].company).toBe('Esker');
  });

  it('should have the internship as the last job', () => {
    const last = component.jobs[component.jobs.length - 1];
    expect(last.company).toBe('Entegral Holdings');
  });

  // --- Skills ---

  it('should render the correct number of skill group sections', () => {
    expect(fixture.debugElement.queryAll(By.css('.skill-section')).length).toBe(component.skillGroups.length);
  });

  it('should render a chip for every skill item', () => {
    const totalItems = component.skillGroups.reduce((sum, g) => sum + g.items.length, 0);
    expect(fixture.debugElement.queryAll(By.css('mat-chip')).length).toBe(totalItems);
  });

  it('should render the correct number of chips-list containers', () => {
    expect(fixture.debugElement.queryAll(By.css('.chips-list')).length).toBe(component.skillGroups.length);
  });

  it('should have a Languages skill group', () => {
    const group = component.skillGroups.find(g => g.title === 'Languages');
    expect(group).toBeTruthy();
    expect(group!.items.length).toBeGreaterThan(0);
  });

  it('should have a Databases skill group with MySQL', () => {
    const group = component.skillGroups.find(g => g.title === 'Databases');
    expect(group).toBeTruthy();
    const labels = group!.items.map(i => i.label);
    expect(labels).toContain('MySQL');
  });

  it('should not have React Native in the Languages group', () => {
    const group = component.skillGroups.find(g => g.title === 'Languages');
    const labels = group!.items.map(i => i.label);
    expect(labels).not.toContain('React Native');
  });

  it('should render a mat-divider between sections', () => {
    expect(fixture.debugElement.query(By.css('mat-divider'))).toBeTruthy();
  });

  // --- Dark mode ---

  it('should not apply dark-mode class by default', () => {
    const div = fixture.debugElement.query(By.css('.experience-page-div'));
    expect((div.nativeElement as HTMLElement).classList.contains('dark-mode')).toBeFalse();
  });

  it('should apply dark-mode class when isDarkMode is true', () => {
    component.isDarkMode = true;
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('.experience-page-div'));
    expect((div.nativeElement as HTMLElement).classList.contains('dark-mode')).toBeTrue();
  });
});

import { MatChipsModule } from "@angular/material/chips";
import { ExperiencePageComponent } from "src/app/experience-page/experience-page.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from "@angular/material/divider";
import { By } from "@angular/platform-browser";
import { MatBadgeModule } from "@angular/material/badge";

describe('ExperiencePageComponent', () => {
  let component: ExperiencePageComponent;
  let fixture: ComponentFixture<ExperiencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperiencePageComponent],
      imports: [MatChipsModule, MatDividerModule, MatBadgeModule]
    }).compileComponents();
    fixture = TestBed.createComponent(ExperiencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Experience heading', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1).toBeTruthy();
    if (h1) {
      expect((h1.nativeElement as HTMLElement).textContent?.trim()).toBe('Experience');
    }
  });

  it('should render the expereince categories', () => {
    expect(fixture.debugElement.queryAll(By.css('.chips-list')).length).toBe(3);
  });

  it('should render the correct total number of chips', () => {
    expect(fixture.debugElement.queryAll(By.css('mat-chip')).length).toBe(16);
  });

  it('should render the main internship title', () => {
    const title = fixture.debugElement.query(By.css('.internship-title'));
    expect(title).toBeTruthy();
    if (title) {
      expect((title.nativeElement as HTMLElement).textContent?.trim()).toBe('Associate Development Consultant - Esker (Aug. 2024 - Oct. 2025)');
    }
  });

  it('should include the current Esker title text', () => {
    const headings = fixture.debugElement.queryAll(By.css('h2'));
    expect(headings.length).toBeGreaterThan(0);
    const eskerHeading = headings[0];
    if (eskerHeading) {
      expect((eskerHeading.nativeElement as HTMLElement).textContent?.trim()).toBe(component.eskerTitle.toString());
    }
  });

  it('should render badge values for year counts', () => {
    expect(fixture.debugElement.queryAll(By.css('.mat-badge-content')).length).toBe(16);
  });
});
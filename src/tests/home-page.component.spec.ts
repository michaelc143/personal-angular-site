import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { DarkModeService } from 'angular-dark-mode';
import { of } from 'rxjs';

const darkModeServiceMock = { darkMode$: of(false) };

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [MatCardModule],
      providers: [{ provide: DarkModeService, useValue: darkModeServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // --- Content ---

  it('should render the homepage title in h1', () => {
    const h1 = fixture.debugElement.query(By.css('mat-card-title h1'));
    expect(h1).toBeTruthy();
    expect((h1.nativeElement as HTMLElement).textContent?.trim()).toBe(component.homepageTitle);
  });

  it('should render the subtitle in h2', () => {
    const h2 = fixture.debugElement.query(By.css('mat-card-title h2'));
    expect(h2).toBeTruthy();
    expect((h2.nativeElement as HTMLElement).textContent?.trim()).toBe(component.toolbarTip);
  });

  it('should render the first paragraph with correct content', () => {
    const paragraphs = fixture.debugElement.queryAll(By.css('.bio-text p'));
    expect(paragraphs.length).toBeGreaterThan(0);
    expect((paragraphs[0].nativeElement as HTMLElement).textContent).toContain(component.para1.slice(0, 20));
  });

  it('should render the second paragraph with correct content', () => {
    const paragraphs = fixture.debugElement.queryAll(By.css('.bio-text p'));
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
    expect((paragraphs[1].nativeElement as HTMLElement).textContent).toContain(component.para2.slice(0, 20));
  });

  // --- Structure ---

  it('should render a mat-card', () => {
    expect(fixture.debugElement.query(By.css('mat-card'))).toBeTruthy();
  });

  it('should render the desktop profile image with correct alt text', () => {
    const image = fixture.debugElement.query(By.css('img.profile-pic--desktop'));
    expect(image).toBeTruthy();
    expect((image.nativeElement as HTMLImageElement).alt).toContain('Michael Corbishley');
  });

  it('should render the mobile profile image with correct alt text', () => {
    const image = fixture.debugElement.query(By.css('img.profile-pic--mobile'));
    expect(image).toBeTruthy();
    expect((image.nativeElement as HTMLImageElement).alt).toContain('Michael Corbishley');
  });

  it('should render the tech stack section', () => {
    expect(fixture.debugElement.query(By.css('.tech-stack'))).toBeTruthy();
  });

  it('should render four tech stack logos', () => {
    const logos = fixture.debugElement.queryAll(By.css('.tech-stack img'));
    expect(logos.length).toBe(4);
  });

  it('should render the CTA links section', () => {
    expect(fixture.debugElement.query(By.css('.cta-links'))).toBeTruthy();
  });

  it('should render GitHub and LinkedIn icon links', () => {
    const links = fixture.debugElement.queryAll(By.css('.cta-links a[target="_blank"]'));
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  // --- Dark mode ---

  it('should not apply dark-mode-card class by default', () => {
    const card = fixture.debugElement.query(By.css('mat-card'));
    expect((card.nativeElement as HTMLElement).classList.contains('dark-mode-card')).toBeFalse();
  });

  it('should apply dark-mode-card class when isDarkMode is true', () => {
    component.isDarkMode = true;
    fixture.detectChanges();
    const card = fixture.debugElement.query(By.css('mat-card'));
    expect((card.nativeElement as HTMLElement).classList.contains('dark-mode-card')).toBeTrue();
  });
});

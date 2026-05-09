import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [MatCardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the homepage title', () => {
    const h1 = fixture.debugElement.query(By.css('h1.desktop-title'));
    expect(h1).toBeTruthy();
    if (h1) {
      expect((h1.nativeElement as HTMLElement).textContent?.trim()).toBe(component.homepageTitle.toString());
    }
  });

  it('should render the toolbar tip in an h2', () => {
    const h2 = fixture.debugElement.query(By.css('mat-card-title h2'));
    expect(h2).toBeTruthy();
    if (h2) {
      expect((h2.nativeElement as HTMLElement).textContent?.trim()).toBe(component.toolbarTip.toString());
    }
  });

  it('should render the material card and profile image', () => {
    expect(fixture.debugElement.query(By.css('mat-card'))).toBeTruthy();
    const image = fixture.debugElement.query(By.css('img.profile-pic'));
    expect(image).toBeTruthy();
    expect((image.nativeElement as HTMLImageElement).alt).toContain('Photo of me');
  });

  it('should show the intro paragraph text', () => {
    const paragraph = fixture.debugElement.query(By.css('.nameAndPhoto p'));
    expect(paragraph).toBeTruthy();
    expect((paragraph.nativeElement as HTMLElement).textContent).toContain(component.para1.toString().slice(0, 20));
  });
});
